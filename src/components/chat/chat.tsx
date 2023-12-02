"use client";

import { useChat, type Message } from "ai/react";

import { cn } from "@/lib/utils";
import { ChatMessageList } from "@/components/chat/chat-message-list";
import { ChatPanel } from "@/components/chat/chat-panel";
import { EmptyScreen } from "@/components/chat/empty-screen";
import { ChatScrollAnchor } from "@/components/chat/chat-scroll-anchor";
import { useState } from "react";
import { Creator } from "@prisma/client";
import { ChatLimit } from "@/components/chat/chat-limit";

export interface ChatProps extends React.ComponentProps<"div"> {
  initialMessages?: Message[];
  id?: string;
  userId?: string;
  creator?: Creator;
}

export function Chat({
  creator,
  userId,
  initialMessages,
  className,
}: {
  creator: Creator;
  userId: string;
  initialMessages: Message[];
  className?: string;
}) {
  const [errors, setErrors] = useState<Error[]>([]);
  const [isLimited, setIsLimited] = useState(false);

  const { messages, append, reload, stop, isLoading, input, setInput } =
    useChat({
      api: "/api/chat",
      initialMessages,
      id: creator.id,
      body: {
        id: creator.id,
        userId: userId,
        systemPrompt: creator.systemPrompt,
      },
      onResponse(response) {
        if (response.status === 429) {
          setIsLimited(true);
          console.log("isLimited", isLimited);
          return;
        }
      },
      onError(error) {
        console.error(error);
        setErrors((prev) => [...prev, error]);
      },
      onFinish(message) {
        console.log("onFinish", message);
        if (message.content === "{}") {
          setErrors((prev) => [...prev, new Error("Empty response")]);
        }
      },
    });

  return (
    <>
      {/* TODO: check this error message */}
      <div className="flex flex-col gap-y-4">
        {errors.map((error, index) => (
          <div key={index} className="text-red-500">
            {error.message}
          </div>
        ))}
      </div>
      <div className={cn("pb-[200px] pt-4 md:pt-10", className)}>
        {messages.length ? (
          <>
            <ChatMessageList
              messages={messages}
              imageUrl={creator?.imageUrl as string}
            />
            <ChatScrollAnchor trackVisibility={isLoading} />
          </>
        ) : (
          <EmptyScreen setInput={setInput} creator={creator} />
        )}
        {isLoading && (
          <div>
            <div
              className="flex items-center text-sm justify-center mt-2"
              aria-label="Typing a message"
            >
              Typing&nbsp;
              <span
                className="animate-bounce text-3xl"
                style={{ animationDelay: "0.1s" }}
              >
                .
              </span>
              <span
                className="animate-bounce text-3xl"
                style={{ animationDelay: "0.2s" }}
              >
                .
              </span>
              <span
                className="animate-bounce text-3xl"
                style={{ animationDelay: "0.3s" }}
              >
                .
              </span>
            </div>
          </div>
        )}
      </div>
      <ChatPanel
        id={creator.id}
        isLoading={isLoading}
        stop={stop}
        append={append}
        reload={reload}
        messages={messages}
        input={input}
        setInput={setInput}
      />
      <ChatLimit open={isLimited} setOpen={setIsLimited} />
    </>
  );
}
