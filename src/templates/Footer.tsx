import { socialLinks } from "../objects/socialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 py-6 border-t border-gray-400" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p className="text-sm">
              &copy; {currentYear} Rafael Pillar. Todos os direitos reservados.
            </p>
          </div>

          <div className="mt-4 sm:mt-0 flex flex-wrap justify-center sm:justify-start gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="hover:text-cyan-400 transition-colors duration-300 text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
