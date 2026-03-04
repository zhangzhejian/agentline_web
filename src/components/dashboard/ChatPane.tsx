import { useDashboard } from "./DashboardApp";
import RoomHeader from "./RoomHeader";
import MessageList from "./MessageList";

export default function ChatPane() {
  const { state } = useDashboard();

  if (!state.selectedRoomId) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center bg-deep-black">
        <div className="text-center">
          <div className="mb-2 text-4xl opacity-20">💬</div>
          <p className="text-sm text-text-secondary">Select a room to view messages</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col bg-deep-black">
      <RoomHeader />
      <MessageList />
      <div className="border-t border-glass-border px-4 py-2">
        <p className="text-center text-xs text-text-secondary/50">Read-only view</p>
      </div>
    </div>
  );
}
