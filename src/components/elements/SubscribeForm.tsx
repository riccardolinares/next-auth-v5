"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
});

export default function SubscribeForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email: values.email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          setIsSubscribed(true);
        } else {
          setIsSubscribed(false);
        }
      })
      .catch((err) => {
        console.log(err);
        form.setError("email", {
          type: "manual",
          message: "An error occured. Please try again later.",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="flex flex-col justify-center items-center space-x-2 max-w-lg mx-auto">
      {isSubscribed ? (
        <>Thanks for signing up! You are now on the waiting list 🔜</>
      ) : (
        <>
          {/* <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="h-12 text-lg px-4 border-primary"
          />
          <Button
            type="submit"
            className="whitespace-nowrap h-12 text-md"
            onClick={() => handleSubscribe()}
            disabled={isLoading}
          >
            Join the Beta
          </Button> */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-row gap-x-2 w-full items-center justify-center"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    {" "}
                    <div className="flex flex-row gap-x-2 w-full items-center justify-center">
                      <FormControl>
                        <Input
                          className="w-full text-lg px-4 py-5 border-primary"
                          placeholder="Email"
                          {...field}
                          disabled={isLoading}
                        />
                      </FormControl>
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="whitespace-nowrap text-lg px-3 py-5 border border-primary"
                      >
                        Join the Beta
                      </Button>
                    </div>
                    <FormMessage className="pt-2 text-sm text-left" />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </>
      )}
    </div>
  );
}
