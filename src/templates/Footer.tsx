import { socialLinks } from "../objects/socialLinks";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gray-900 text-gray-200 py-8 border-t border-gray-700"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center sm:flex-row sm:justify-between">
        <p className="text-sm text-center sm:text-left">
          &copy; {currentYear} Rafael Pillar. Todos os direitos reservados.
        </p>

        <div className="flex space-x-6 mt-4 sm:mt-0">
          {socialLinks.map((link, index) => {
            const Icon =
              link.label === "GitHub"
                ? FaGithub
                : link.label === "LinkedIn"
                ? FaLinkedin
                : link.label === "Instagram"
                ? FaInstagram
                : null;

            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xl"
              >
                {Icon && <Icon />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
