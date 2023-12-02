import prisma from "@/lib/prisma";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect("/auth/signin?next=/creators/");
  }

  const creators = await prisma.creator.findMany({
    where: {
      published: true,
    },
  });

  return (
    <h1>Private page</h1>
  );
}
