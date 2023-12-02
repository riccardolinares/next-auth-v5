import { cn } from "@/lib/utils";
export default function Logo({
  variation = "black",
  className,
}: {
  variation?: "black" | "white";
  className?: string;
}) {
  return (
    <>
      {/* {variation === "black" ? (
        <Image
          src="/logo.svg"
          alt="SecondSoul"
          width={112}
          height={24}
          className={cn(className)}
        />
      ) : (
        <Image
          src="/logo-white.svg"
          alt="SecondSoul"
          width={112}
          height={24}
          className={cn(className)}
        />
      )} */}
      <h1
        className={cn(
          variation === "black" ? "text-black" : "text-white",
          "font-bold text-2xl",
          className
        )}
      >
        SecondSoul
      </h1>
    </>
  );
}
