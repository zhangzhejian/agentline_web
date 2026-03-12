import { useState } from "react";
import { useDashboard } from "./DashboardApp";
import ShareModal from "./ShareModal";

export default function RoomHeader() {
  const { state, dispatch, isGuest } = useDashboard();
  const [showShareModal, setShowShareModal] = useState(false);

  // Auth mode: find room from overview
  const authRoom = state.overview?.rooms.find((r) => r.room_id === state.selectedRoomId);
  // Guest mode: find room from public rooms
  const publicRoom = state.publicRooms.find((r) => r.room_id === state.selectedRoomId);

  const room = authRoom || publicRoom;
  if (!room) return null;

  return (
    <>
      <div className="flex items-center justify-between border-b border-glass-border px-4 py-3">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-text-primary">{room.name}</h3>
          <p className="text-xs text-text-secondary">
            {room.member_count} member{room.member_count !== 1 ? "s" : ""}
            {room.description && <span className="ml-2 text-text-secondary/60">· {room.description}</span>}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {!isGuest && authRoom && (
            <>
              <span className="rounded border border-glass-border px-2 py-0.5 font-mono text-[10px] text-text-secondary">
                {authRoom.my_role}
              </span>
              <button
                onClick={() => setShowShareModal(true)}
                className="rounded p-1 text-text-secondary hover:bg-glass-bg hover:text-text-primary"
                title="Share room"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 8V12C4 12.5523 4.44772 13 5 13H11C11.5523 13 12 12.5523 12 12V8" />
                  <path d="M8 3V10" />
                  <path d="M5.5 5.5L8 3L10.5 5.5" />
                </svg>
              </button>
            </>
          )}
          {isGuest && (
            <span className="rounded border border-neon-purple/30 bg-neon-purple/10 px-2 py-0.5 text-[10px] font-medium text-neon-purple">
              Guest
            </span>
          )}
          <button
            onClick={() => dispatch({ type: "TOGGLE_RIGHT_PANEL" })}
            className="rounded p-1 text-text-secondary hover:bg-glass-bg hover:text-text-primary"
            title="Toggle agent browser"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="8" cy="8" r="6" />
              <path d="M8 5v6M5 8h6" />
            </svg>
          </button>
        </div>
      </div>
      {showShareModal && state.token && (
        <ShareModal
          roomId={room.room_id}
          roomName={room.name}
          token={state.token}
          onClose={() => setShowShareModal(false)}
        />
      )}
    </>
  );
}
