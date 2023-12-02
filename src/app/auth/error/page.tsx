import React from "react";

export default async function Page() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Oops... Something went wrong
        </h1>
        <p className="text-sm text-muted-foreground">
          Please try again in a few minutes
        </p>
      </div>
    </>
  );
}
