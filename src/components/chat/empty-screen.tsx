import { UseChatHelpers } from "ai/react";

import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icons";
import { Creator } from "@prisma/client";
import { AlertTriangle } from "lucide-react";

const exampleMessages = [
  {
    heading: "Introduce yourself",
    messages: [`Hey, would you tell me something about yourself?`],
  },
  {
    heading: "Conversation starter",
    messages: [
      "Tell me a joke",
      "What do you think about love?",
      "What skill would you love to learn instantly?",
      "Got a favorite place you often visit?",
      "What music do you recommend?",
    ],
  },
];

interface EmptyScreenProps {
  setInput: UseChatHelpers["setInput"];
  creator?: Creator;
}

export function EmptyScreen({ setInput, creator }: EmptyScreenProps) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-4 text-lg font-semibold">
          Type a message to start a conversation{" "}
          {creator && "with " + creator.name}
        </h1>
        <p className="leading-normal text-muted-foreground  items-center mb-4">
          <AlertTriangle className="inline-block w-5 h-5 mr-2" />
          Remember, you&apos;ll be chatting with an AI, a digital version of a
          real person!
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => {
                setInput(
                  message.messages[
                    Math.floor(Math.random() * message.messages.length)
                  ]
                );
              }}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
