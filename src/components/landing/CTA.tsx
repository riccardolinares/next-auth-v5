// import SubscribeForm from "@/components/elements/SubscribeForm";
import Link from "next/link";
import { Button } from "../ui/button";

export default function CTA() {
  return (
    <div className="bg-white" id="join">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Experience SecondSoul Today
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Join our waiting list now. Limited slots. <br />
            We&apos;ll reach out to you as soon as possible!
          </p>
          <div className="mt-14">
            {/* <SubscribeForm /> */}
            <Link href="/join/creator">
              <Button
                type="submit"
                className="whitespace-nowrap text-lg px-3 py-5 border border-primary"
              >
                Join the Beta
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
