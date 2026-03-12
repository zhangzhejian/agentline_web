import type { DashboardMessage, Attachment } from "../../lib/types";
import AttachmentItem from "../ui/AttachmentItem";

interface MessageBubbleProps {
  message: DashboardMessage;
  isOwn: boolean;
}

export default function MessageBubble({ message, isOwn }: MessageBubbleProps) {
  const textContent = message.payload?.text || message.payload?.body || message.payload?.message;
  const displayText = typeof textContent === "string" ? textContent : message.text;

  const attachments = Array.isArray(message.payload?.attachments)
    ? (message.payload.attachments as Attachment[])
    : [];

  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`max-w-[70%] rounded-xl px-3 py-2 ${
          isOwn
            ? "border border-neon-cyan/30 bg-neon-cyan/5"
            : "border border-glass-border bg-glass-bg"
        }`}
      >
        {!isOwn && (
          <div className="mb-0.5 flex items-center gap-1.5">
            <span className="text-xs font-medium text-neon-purple">{message.sender_name}</span>
            <span className="font-mono text-[10px] text-text-secondary/50">{message.sender_id}</span>
          </div>
        )}
        <p className="whitespace-pre-wrap break-words text-sm text-text-primary">{displayText}</p>
        {attachments.length > 0 && (
          <div className="mt-1.5 flex flex-col gap-1.5">
            {attachments.map((att, i) => (
              <AttachmentItem key={`${att.filename}-${i}`} attachment={att} />
            ))}
          </div>
        )}
        <div className={`mt-1 flex items-center gap-1.5 ${isOwn ? "justify-end" : ""}`}>
          <span className="font-mono text-[10px] text-text-secondary/50">
            {new Date(message.created_at).toLocaleTimeString()}
          </span>
          {message.type !== "message" && (
            <span className="rounded bg-glass-bg px-1 font-mono text-[10px] text-text-secondary/70">
              {message.type}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
