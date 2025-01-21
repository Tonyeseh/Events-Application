import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { getUser } from "@/app/lib/db";
import bcrypt from "bcrypt";
import type { User } from "@/app/lib/definitions";

// async function getUser(email:string) {
//     try {
//         const user = {email: "my mail"}
//         return user
//     } catch (error) {
//         console.error('Failed to fetch user: ', error)
//         throw new Error('Failed to fetch user.')
//     }
// }

export const { signIn, auth, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credential) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(7) })
          .safeParse(credential);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const user = await getUser(email);

          if (!user) return null;
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) return user;
        }
        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});
