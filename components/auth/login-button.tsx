"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginButton = ({ children, mode, asChild }: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    // That's going to be our login route in the future
    // For now you'll be redirected to a 404 page
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO: Implement modal</span>;
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
