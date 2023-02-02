import Link from "next/link";
import { Logo } from "@/components/atoms";
import React from "react";

const BrandLogo: React.FC = () => {
  return (
    <Link href={"/"} aria-label="Back to home page">
      <Logo className="relative z-50 hover:stroke-accent" />
    </Link>
  );
};

export default BrandLogo;
