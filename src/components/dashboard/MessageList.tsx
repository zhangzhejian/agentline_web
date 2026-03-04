import { useEffect, useRef, useCallback } from "react";
import { useDashboard } from "./DashboardApp";
import MessageBubble from "./MessageBubble";

export default function MessageList() {
  const { state, loadMoreMessages } = useDashboard();
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const prevLengthRef = useRef(0);
  const isLoadingMore = useRef(false);

  const roomId = state.selectedRoomId;
  const messages = roomId ? state.messages[roomId] || [] : [];
  const hasMore = roomId ? state.messagesHasMore[roomId] ?? false : false;
  const currentAgentId = state.overview?.agent.agent_id;

  // Scroll to bottom on initial load or new messages appended
  useEffect(() => {
    if (messages.length > prevLengthRef.current && !isLoadingMore.current) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    prevLengthRef.current = messages.length;
    isLoadingMore.current = false;
  }, [messages.length]);

  // Infinite scroll up
  const handleScroll = useCallback(() => {
    if (!containerRef.current || !roomId || !hasMore || isLoadingMore.current) return;
    if (containerRef.current.scrollTop < 100) {
      isLoadingMore.current = true;
      loadMoreMessages(roomId);
    }
  }, [roomId, hasMore, loadMoreMessages]);

  if (!roomId) return null;

  if (messages.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center text-sm text-text-secondary">
        No messages yet
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="flex-1 overflow-y-auto px-4 py-3"
    >
      {hasMore && (
        <div className="mb-3 text-center text-xs text-text-secondary animate-pulse">
          Scroll up for older messages...
        </div>
      )}
      {messages.map((msg) => (
        <MessageBubble
          key={msg.hub_msg_id}
          message={msg}
          isOwn={msg.sender_id === currentAgentId}
        />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
