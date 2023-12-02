/* eslint-disable @next/next/no-img-element */
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/elements/Logo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (session) {
    redirect("/creators");
  }

  return (
    <>
      <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">


        <div className="lg:p-8">
          <div className="mx-auto flex flex-col justify-center space-y-6 w-[350px]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
