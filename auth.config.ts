import Google from "next-auth/providers/google";
// import Stripe from "stripe";
import prisma from "@/lib/prisma";
// import Email from "next-auth/providers/email";
// import { CustomsendVerificationRequest } from "@/lib/signinemail";

import type { NextAuthConfig, DefaultSession } from "next-auth";

declare module "next-auth" {
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: {
      /** The user's id. */
      id: string;
      isSubscribed: boolean;
      stripeCustomerId: string;
    } & DefaultSession["user"];
  }
}

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    // Email({
    //   server: process.env.EMAIL_SERVER || "",
    //   from: process.env.EMAIL_FROM || "",
    //   sendVerificationRequest({ identifier, url, provider }) {
    //     CustomsendVerificationRequest({ identifier, url, provider });
    //   },
    // }),
  ],
  callbacks: {
    async session({ session, user }: { session: any; user: any }) {
      session.user.id = user.id;

      const dbUser = await prisma.user.findUnique({
        where: {
          id: user.id,
        },
      });

      session.user.isSubscribed = dbUser?.isSubscribed;
      session.user.stripeCustomerId = dbUser?.stripeCustomerId;

      return session;
    },
    // authorized({ auth }) {
    //   return !!auth?.user; // this ensures there is a logged in user for -every- request
    // },
    // signIn({ profile }) {
    //   if (process.env.AUTH_SSO_ENABLED === "false" && profile?.email) {
    //     return true;
    //   }
    //   if (!profile?.email) {
    //     return false;
    //   } else {
    //     const emailMatchPattern = process.env.AUTH_EMAIL_PATTERN || "";
    //     if (!emailMatchPattern || profile?.email?.endsWith(emailMatchPattern)) {
    //       return true;
    //     }
    //     return false;
    //   }
    // },
    async redirect({
      url,
      baseUrl,
    }: {
      url: any | undefined;
      baseUrl: any | undefined;
    }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  events: {
    createUser: async ({ user }: { user: any | undefined }) => {
      // Create stripe API client using the secret key env variable
      // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

      // Create a stripe customer for the user with their email address
      // await stripe.customers
      //   .create({
      //     email: user.email!,
      //   })
      //   .then(async (customer) => {
      //     // Use the Prisma Client to update the user in the database with their new Stripe customer ID
      //     return prisma.user.update({
      //       where: { id: user.id },
      //       data: {
      //         stripeCustomerId: customer.id,
      //       },
      //     });
      //   });
    },
  },
  pages: {
    signIn: "/auth/signin", // overrides the next-auth default signin page https://authjs.dev/guides/basics/pages
    verifyRequest: "/auth/verify",
    // error: "/auth/error",
  },
} satisfies NextAuthConfig;
