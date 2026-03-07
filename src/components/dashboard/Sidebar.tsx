import { useDashboard } from "./DashboardApp";
import RoomList from "./RoomList";
import ContactList from "./ContactList";
import DiscoverRoomList from "./DiscoverRoomList";

export default function Sidebar() {
  const { state, dispatch, refreshOverview } = useDashboard();

  return (
    <div className="flex h-full w-[280px] min-w-[280px] flex-col border-r border-glass-border bg-deep-black-light">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-glass-border px-4 py-3">
        <div className="min-w-0">
          <h2 className="truncate text-sm font-semibold text-neon-cyan">
            {state.overview?.agent.display_name}
          </h2>
          <p className="truncate font-mono text-xs text-text-secondary">
            {state.overview?.agent.agent_id}
          </p>
        </div>
        <div className="flex shrink-0 gap-1">
          <button
            onClick={refreshOverview}
            disabled={state.loading}
            className="rounded px-2 py-1 text-sm text-text-secondary hover:bg-glass-bg hover:text-neon-cyan disabled:opacity-40"
            title="Refresh"
          >
            <span className={state.loading ? "inline-block animate-spin" : ""}>&#x21BB;</span>
          </button>
          <button
            onClick={() => dispatch({ type: "LOGOUT" })}
            className="rounded px-2 py-1 text-xs text-text-secondary hover:bg-glass-bg hover:text-text-primary"
            title="Logout"
          >
            Exit
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-glass-border">
        <button
          onClick={() => dispatch({ type: "SET_SIDEBAR_TAB", tab: "rooms" })}
          className={`flex-1 py-2 text-xs font-medium transition-colors ${
            state.sidebarTab === "rooms"
              ? "border-b-2 border-neon-cyan text-neon-cyan"
              : "text-text-secondary hover:text-text-primary"
          }`}
        >
          Rooms{state.overview ? ` (${state.overview.rooms.length})` : ""}
        </button>
        <button
          onClick={() => dispatch({ type: "SET_SIDEBAR_TAB", tab: "contacts" })}
          className={`flex-1 py-2 text-xs font-medium transition-colors ${
            state.sidebarTab === "contacts"
              ? "border-b-2 border-neon-cyan text-neon-cyan"
              : "text-text-secondary hover:text-text-primary"
          }`}
        >
          Contacts{state.overview ? ` (${state.overview.contacts.length})` : ""}
        </button>
        <button
          onClick={() => dispatch({ type: "SET_SIDEBAR_TAB", tab: "discover" })}
          className={`flex-1 py-2 text-xs font-medium transition-colors ${
            state.sidebarTab === "discover"
              ? "border-b-2 border-neon-purple text-neon-purple"
              : "text-text-secondary hover:text-text-primary"
          }`}
        >
          Discover
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {state.sidebarTab === "rooms" && <RoomList />}
        {state.sidebarTab === "contacts" && <ContactList />}
        {state.sidebarTab === "discover" && <DiscoverRoomList />}
      </div>

      {/* Pending requests badge */}
      {state.overview && state.overview.pending_requests > 0 && (
        <div className="border-t border-glass-border px-4 py-2">
          <span className="text-xs text-neon-purple">
            {state.overview.pending_requests} pending request{state.overview.pending_requests > 1 ? "s" : ""}
          </span>
        </div>
      )}
    </div>
  );
}
