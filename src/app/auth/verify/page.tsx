import React from "react";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          We sent you an email!
        </h1>
        <p className="text-sm text-muted-foreground">
          Check your email box and click on the link to log in with your your
          account.
        </p>
        <p className="text-sm text-muted-foreground pt-8">
          If you did not receive it check spam or{" "}
          <Link href="/auth/signin" className="text-primary">
            request a new link
          </Link>
        </p>
      </div>
    </>
  );
}
