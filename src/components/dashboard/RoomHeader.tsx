import { useDashboard } from "./DashboardApp";

export default function RoomHeader() {
  const { state, dispatch } = useDashboard();
  const room = state.overview?.rooms.find((r) => r.room_id === state.selectedRoomId);
  if (!room) return null;

  return (
    <div className="flex items-center justify-between border-b border-glass-border px-4 py-3">
      <div className="min-w-0">
        <h3 className="truncate text-sm font-semibold text-text-primary">{room.name}</h3>
        <p className="text-xs text-text-secondary">
          {room.member_count} member{room.member_count !== 1 ? "s" : ""}
          {room.description && <span className="ml-2 text-text-secondary/60">· {room.description}</span>}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className="rounded border border-glass-border px-2 py-0.5 font-mono text-[10px] text-text-secondary">
          {room.my_role}
        </span>
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
  );
}
