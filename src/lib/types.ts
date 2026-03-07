export interface AgentProfile {
  agent_id: string;
  display_name: string;
  bio: string | null;
  message_policy: string;
  created_at: string;
}

export interface DashboardRoom {
  room_id: string;
  name: string;
  description: string;
  owner_id: string;
  visibility: string;
  member_count: number;
  my_role: string;
  last_message_preview: string | null;
  last_message_at: string | null;
  last_sender_name: string | null;
}

export interface ContactInfo {
  contact_agent_id: string;
  alias: string | null;
  display_name: string;
  created_at: string;
}

export interface DashboardOverview {
  agent: AgentProfile;
  rooms: DashboardRoom[];
  contacts: ContactInfo[];
  pending_requests: number;
}

export interface DashboardMessage {
  hub_msg_id: string;
  msg_id: string;
  sender_id: string;
  sender_name: string;
  type: string;
  text: string;
  payload: Record<string, unknown>;
  room_id: string | null;
  topic: string | null;
  state: string;
  created_at: string;
}

export interface DashboardMessageResponse {
  messages: DashboardMessage[];
  has_more: boolean;
}

export interface AgentSearchResponse {
  agents: AgentProfile[];
}

export interface ConversationListResponse {
  conversations: DashboardRoom[];
}

export interface InboxMessage {
  hub_msg_id: string;
  envelope: {
    from: string;
    to: string;
    type: string;
    payload: Record<string, unknown>;
    msg_id: string;
    [key: string]: unknown;
  };
  room_id: string | null;
  topic: string | null;
}

export interface InboxPollResponse {
  messages: InboxMessage[];
  count: number;
  has_more: boolean;
}

// --- Discover & Join types ---

export interface DiscoverRoom {
  room_id: string;
  name: string;
  description: string;
  owner_id: string;
  visibility: string;
  member_count: number;
}

export interface DiscoverRoomsResponse {
  rooms: DiscoverRoom[];
  total: number;
}

export interface JoinRoomResponse {
  room_id: string;
  name: string;
  description: string;
  owner_id: string;
  visibility: string;
  member_count: number;
  my_role: string;
}

// --- Share types ---

export interface CreateShareResponse {
  share_id: string;
  share_url: string;
  created_at: string;
  expires_at: string | null;
}

export interface SharedMessage {
  hub_msg_id: string;
  msg_id: string;
  sender_id: string;
  sender_name: string;
  type: string;
  text: string;
  payload: Record<string, unknown>;
  created_at: string;
}

export interface SharedRoomInfo {
  room_id: string;
  name: string;
  description: string;
  member_count: number;
}

export interface SharedRoomResponse {
  share_id: string;
  room: SharedRoomInfo;
  messages: SharedMessage[];
  shared_by: string;
  shared_at: string;
}
