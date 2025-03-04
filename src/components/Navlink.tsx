import { twMerge } from "tailwind-merge";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}
const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className,
  ...props
}) => {
  return (
    <a
      href={href}
      className={twMerge(
        "text-gray-400 hover:text-cyan-400 transition",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default NavLink;
