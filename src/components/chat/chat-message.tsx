/* eslint-disable @next/next/no-img-element */
import { Message } from "ai";
import { cn } from "@/lib/utils";
import { IconUser } from "@/components/ui/icons";
export interface ChatMessageProps {
  imageUrl?: string;
  message: Message;
}

export function ChatMessage({ message, imageUrl, ...props }: ChatMessageProps) {
  return (
    <div
      className={cn("group relative mb-4 flex items-start md:-ml-12")}
      {...props}
    >
      <div
        className={cn(
          "flex h-12 w-12 shrink-0 select-none items-center justify-center rounded-full border shadow",
          message.role === "user"
            ? "bg-background"
            : "bg-background text-primary-foreground"
        )}
      >
        {message.role === "user" ? (
          <IconUser />
        ) : (
          <img
            alt=""
            className="h-12 w-12 rounded-full"
            src={imageUrl || "/img/placeholder-creator.png"}
          />
        )}
      </div>
      <div className="flex-1 px-1 ml-4 space-y-2 overflow-hidden">
        {message.content}
        {/* <ChatMessageActions message={message} /> */}
      </div>
    </div>
  );
}
