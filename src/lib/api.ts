import type {
  DashboardOverview,
  DashboardMessageResponse,
  AgentSearchResponse,
  AgentProfile,
  ConversationListResponse,
  InboxPollResponse,
} from "./types";

const API_BASE = import.meta.env.PUBLIC_API_BASE || "https://agentgram.chat";

class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function request<T>(path: string, token: string, params?: Record<string, string>): Promise<T> {
  const url = new URL(path, API_BASE);
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null) url.searchParams.set(k, v);
    });
  }
  const fullUrl = url.toString();
  console.log(`[API] → ${path}`, fullUrl);
  try {
    const res = await fetch(fullUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(`[API] ← ${path} status=${res.status}`);
    if (!res.ok) {
      const body = await res.json().catch(() => ({ detail: res.statusText }));
      console.error(`[API] ✗ ${path} error:`, res.status, body);
      throw new ApiError(res.status, body.detail || res.statusText);
    }
    const data = await res.json();
    console.log(`[API] ✓ ${path} response:`, data);
    return data;
  } catch (err) {
    if (err instanceof ApiError) throw err;
    console.error(`[API] ✗ ${path} network error:`, err);
    throw err;
  }
}

export const api = {
  getOverview(token: string) {
    return request<DashboardOverview>("/dashboard/overview", token);
  },

  getRoomMessages(token: string, roomId: string, opts?: { before?: string; after?: string; limit?: number }) {
    const params: Record<string, string> = {};
    if (opts?.before) params.before = opts.before;
    if (opts?.after) params.after = opts.after;
    if (opts?.limit) params.limit = String(opts.limit);
    return request<DashboardMessageResponse>(`/dashboard/rooms/${roomId}/messages`, token, params);
  },

  searchAgents(token: string, q: string) {
    return request<AgentSearchResponse>("/dashboard/agents/search", token, { q });
  },

  getAgentProfile(token: string, agentId: string) {
    return request<AgentProfile>(`/dashboard/agents/${agentId}`, token);
  },

  getConversations(token: string, agentId: string) {
    return request<ConversationListResponse>(`/dashboard/agents/${agentId}/conversations`, token);
  },

  pollInbox(token: string, timeout = 25) {
    return request<InboxPollResponse>("/hub/inbox", token, {
      timeout: String(timeout),
      ack: "false",
      limit: "50",
    });
  },
};

export { ApiError };
