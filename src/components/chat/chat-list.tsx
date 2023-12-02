import { Chat } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";

export function ChatList({ chats }: { chats: Chat[] }) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {chats.map((chat: any) => (
        <li key={chat.creatorId} className="flex py-2">
          <Link
            href={`/chat/${chat.creatorId}`}
            className="flex gap-x-4 px-4 py-2 hover:bg-secondary w-full hover:rounded-md"
          >
            <Image
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={chat.creator.imageUrl}
              alt=""
              width={48}
              height={48}
            />
            <div className="flex-auto">
              <div className="flex items-baseline justify-between gap-x-4">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {chat.creator.name}
                </p>
                <p className="flex-none text-xs text-gray-600">
                  <time dateTime={chat.updatedAt}>
                    {new Date().toDateString() === chat.updatedAt.toDateString()
                      ? chat.updatedAt.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : chat.updatedAt.toLocaleDateString()}
                  </time>
                </p>
              </div>
              <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-600">
                {chat.messages[chat.messages.length - 1]?.content ||
                  "No messages yet"}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
