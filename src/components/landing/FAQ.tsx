"use client";

import Link from "next/link";

const faqs = [
  {
    question: "Is it really like interacting with the real creator?",
    answer:
      "SecondSoul utilizes cutting-edge technology to provide an immersive experience with AI versions of popular creators/models.",
  },
  {
    question: "Can AI truly provide companionship?",
    answer:
      "SecondSoul's advanced conversational AI ensures a realistic and engaging companionship experience.",
  },
  {
    question: "What's the advantage for the creator? ",
    answer:
      "The creator can build a better experience, and offer exciting conversations to users, and get money based on our commission fees program. Above all, the creator can differentiate her/his profile by offering this kind of new service.",
  },
  {
    question: "Is it free for the creator to join?",
    answer:
      "Yes, you can join the platform for free. We'll take care of the AI generation, and all the service.",
  },
  {
    question: "How does the OF Creator earn money?",
    answer:
      "You will get % based on the users will subscribe to her/him profile using our platform.",
  },
  {
    question: "Is secondsoul for OF creators only?",
    answer:
      "Today yes, It Is. But we are not only focusing the attention on OF creators in the coming weeks. So if you're an influencer or a model, you can join the waiting list anyway. We'll review your profile.",
  },
  {
    question: "Is SecondSoul an open platform?",
    answer:
      "The answer is no. We select OF creators based on their profile and their communities.",
  },

  // More questions...
];

export default function Example() {
  return (
    <div className="bg-white" id="faq">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Have a different question and can’t find the answer you’re looking
            for? Reach out to our support team by{" "}
            <Link
              href="mailto:hello@secondsoul.io"
              className="font-semibold text-primary hover:underline-none"
            >
              sending us an email at{" "}
              <span className="underline">hello@secondsoul.io</span>
            </Link>{" "}
            and we’ll get back to you as soon as we can.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            {faqs.map(
              (faq: { question: string; answer: string }, index: number) => (
                <div key={index}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {faq.answer}
                  </dd>
                </div>
              )
            )}
          </dl>
        </div>
      </div>
    </div>
  );
}
