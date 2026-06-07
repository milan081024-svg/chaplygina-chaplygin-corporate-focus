import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import SEO from "@/components/SEO";
import {
  LayoutTemplate,
  Globe2,
  ShoppingCart,
  AppWindow,
  Palette,
  Sparkles,
  Search,
  LifeBuoy,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: LayoutTemplate, title: t("services.s.landing.title"), description: t("services.s.landing.desc") },
    { icon: Globe2, title: t("services.s.corporate.title"), description: t("services.s.corporate.desc") },
    { icon: ShoppingCart, title: t("services.s.ecommerce.title"), description: t("services.s.ecommerce.desc") },
    { icon: AppWindow, title: t("services.s.webapp.title"), description: t("services.s.webapp.desc") },
    { icon: Palette, title: t("services.s.design.title"), description: t("services.s.design.desc") },
    { icon: Sparkles, title: t("services.s.brand.title"), description: t("services.s.brand.desc") },
    { icon: Search, title: t("services.s.seo.title"), description: t("services.s.seo.desc") },
    { icon: LifeBuoy, title: t("services.s.support.title"), description: t("services.s.support.desc") },
  ];

  const also = Array.from({ length: 12 }, (_, i) => t(`services.also.li.${i + 1}`));

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title={t("seo.services.title")} description={t("seo.services.desc")} path="/services" />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">
                {t("services.hero.title")}
              </h1>
              <p className="text-lg text-muted-foreground">{t("services.hero.subtitle")}</p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-12 text-center">
              {t("services.grid.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>

            {/* Additional Services */}
            <div className="mt-16 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-6">
                {t("services.also.title")}
              </h2>
              <ul className="space-y-3 text-foreground/80">
                {also.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-3 text-accent">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-16 sm:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-8 text-center">
                {t("services.approach.title")}
              </h2>
              <div className="prose prose-lg max-w-none text-center">
                <p className="text-foreground/80 leading-relaxed">{t("services.approach.text")}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
