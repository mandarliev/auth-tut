// Ref. to this guide: https://authjs.dev/getting-started/migrating-to-v5#migration

import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { db } from "./lib/db";

const prisma = new PrismaClient();

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
