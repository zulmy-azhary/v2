import Link from "next/link";
import React from "react";
import { Logo } from "@/components/atoms";

const BrandLogo: React.FC = () => {
  return (
    <Link href={"/"} aria-label="Back to home page">
      <Logo className="relative z-50 hover:stroke-accent" />
    </Link>
  );
};

export default BrandLogo;
