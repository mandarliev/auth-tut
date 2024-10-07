"use server";

import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";

export const admin = async () => {
  const role = await currentRole();

  if (role === UserRole.ADMIN) {
    return { success: "YOU SHALL PASS THIS SERVER ACTION!" };
  }

  return { error: "YOU SHALL NOT PASS THIS SERVER ACTION!" };
};
