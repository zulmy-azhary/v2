import { Link, Logo } from "@/components/atoms";

const BrandLogo: React.FC = () => {
  return (
    <Link to={"top"} aria-label="Back to home page">
      <Logo className="relative z-50 cursor-pointer hover:stroke-accent" />
    </Link>
  );
};

export default BrandLogo;
