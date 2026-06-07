import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <span className="text-xl font-serif font-bold tracking-tight">{t("brand.name")}</span>
            <p className="text-sm text-primary-foreground/70">{t("footer.description")}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">{t("footer.navigation")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  {t("nav.contacts")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">{t("footer.contacts")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <a className="text-sm text-primary-foreground/70 hover:text-accent transition-colors" href="mailto:info@chplgn.kz">
                  info@chplgn.kz
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <a href="tel:+77014580180" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  +7 (701) 458-01-80
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <a
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  href="https://2gis.kz/aktobe/search/%D1%83%D0%BB.%20%D0%9C%D0%B0%D1%80%D0%B5%D1%81%D1%8C%D0%B5%D0%B2%D0%B0%2089"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("contacts.address.value")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-center text-primary-foreground/60">
            © {new Date().getFullYear()} {t("brand.name")}. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
