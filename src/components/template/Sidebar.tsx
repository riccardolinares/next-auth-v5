/* eslint-disable @next/next/no-img-element */
"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChatBubbleLeftRightIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import { ExitIcon } from "@radix-ui/react-icons";
import { Heart } from "lucide-react";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "../elements/Logo";

import { signOut } from "next-auth/react";
import { loadPortal } from "@/lib/payment";

const navigation = [
  { name: "Creators", href: "/creators", icon: Heart },
  { name: "Chats", href: "/chat", icon: ChatBubbleLeftRightIcon },
  // { name: "Settings", href: "/settings", icon: GearIcon },
  {
    name: "Billing",
    href: "#billing",
    onClick: () => loadPortal(),
    icon: WalletIcon,
  },
  {
    name: "Logout",
    href: "#logout",
    onClick: () => signOut({ callbackUrl: "/" }),
    icon: ExitIcon,
  },
];

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pathname = usePathname();
  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary px-6 pb-2">
                    <div className="flex h-16 shrink-0 items-center">
                      <Logo variation="white" />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => {
                              if (item.onClick) {
                                return (
                                  <li key={item.name}>
                                    <button onClick={item.onClick}>
                                      {item.name}
                                    </button>
                                  </li>
                                );
                              } else {
                                return (
                                  <li key={item.name}>
                                    <a
                                      href={item.href}
                                      className={cn(
                                        pathname.startsWith(item.href)
                                          ? "bg-primary text-white"
                                          : "text-secondary hover:text-white hover:bg-primary",
                                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                      )}
                                    >
                                      <item.icon
                                        className={cn(
                                          pathname.startsWith(item.href)
                                            ? "text-white"
                                            : "text-secondary group-hover:text-white",
                                          "h-6 w-6 shrink-0"
                                        )}
                                        aria-hidden="true"
                                      />
                                      {item.name}
                                    </a>
                                  </li>
                                );
                              }
                            })}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 border border-border">
            <div className="flex h-16 items-center justify-start">
              <Logo />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={cn(
                            pathname.startsWith(item.href)
                              ? "bg-secondary "
                              : "hover:text-white hover:bg-primary",
                            "text-secondary-foreground group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                        >
                          <item.icon
                            className={cn(
                              pathname.startsWith(item.href)
                                ? "text-secondary-foreground"
                                : "text-secondary-foreground group-hover:text-white",
                              "h-6 w-6 shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* <li className="-mx-6 mt-auto">Something</li> */}
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-primary px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-secondary lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-white">
            Dashboard
          </div>
          {/* <a href="#">
            <span className="sr-only">Your profile</span>
            Something
          </a> */}
        </div>

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mx-auto py-10">{children}</div>
          </div>
        </main>
      </div>
    </>
  );
}
