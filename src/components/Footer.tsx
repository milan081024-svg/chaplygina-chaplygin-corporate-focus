import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold tracking-tight">
                Chaplygina & Chaplygin
              </span>
              <span className="text-sm text-primary-foreground/80 tracking-wider uppercase">
                Corporate Consulting
              </span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Профессиональный корпоративный юридический консалтинг для вашего бизнеса
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <a className="text-sm text-primary-foreground/70 hover:text-accent transition-colors" href="">
                  msitrade@mail.ru
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
                <span className="text-sm text-primary-foreground/70">
                  Москва, Россия
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-center text-primary-foreground/60">
            © {new Date().getFullYear()} Chaplygina & Chaplygin. Все права защищены.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;