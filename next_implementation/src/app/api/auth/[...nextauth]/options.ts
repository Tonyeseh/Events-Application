import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { userAgent } from "next/server";

export const options = {
  providers: [
    GoogleProvider({
      profile(profile) {
        console.log("Profile Google: ", profile);
        return {
          ...profile,
          id: profile.sub,
        };
      },
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    // CredentialsProvider({
    //     name: "Credentials",
    //     credentials: {
    //         email: {
    //             label: 'email',
    //             type: 'text',
    //             placeholder: 'enter email'
    //         }
    //     },
    //     async authorize(credentials, req) {
    //         if (credentials?.email)
    //             return true
    //     },
    // })
  ],
  callbacks: {
    async jwt({ token, user }) {
      return token;
    },
    async session({ session, token }) {
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/",
    newUser: "/register",
  },
} satisfies NextAuthConfig;
