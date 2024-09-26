"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  href: string;
   label: string;
}

const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <div>
      <Button className="font-normal w-full" variant="link" size="sm" asChild>
        <Link href={href}>{label}</Link>
      </Button>
    </div>
  );
};

export default BackButton;
