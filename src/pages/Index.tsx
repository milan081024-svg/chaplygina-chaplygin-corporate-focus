import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, LayoutTemplate, Globe2, ShoppingCart, AppWindow, Palette, LifeBuoy } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import SEO from "@/components/SEO";
import logoAsset from "@/assets/logo.jpg.asset.json";
import { useLanguage } from "@/lib/i18n";

const Index = () => {
  const { t, language } = useLanguage();

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Chaplygina & Chaplygin",
    description: language === "ru"
      ? "Веб-студия: разработка сайтов, e-commerce и веб-приложений"
      : "Web studio: website, e-commerce and web app development",
    url: "https://chplgn.lovable.app",
    telephone: "+7-701-458-01-80",
    email: "info@chplgn.kz",
    logo: "https://chplgn.lovable.app/favicon.ico",
    address: {
      "@type": "PostalAddress",
      streetAddress: language === "ru" ? "ул. Маресьева 89" : "Maresyeva st. 89",
      addressLocality: language === "ru" ? "Актобе" : "Aktobe",
      addressCountry: "KZ",
    },
    areaServed: "KZ",
  };

  const services = [
    { icon: LayoutTemplate, title: t("home.service.landing.title"), description: t("home.service.landing.desc") },
    { icon: Globe2, title: t("home.service.corporate.title"), description: t("home.service.corporate.desc") },
    { icon: ShoppingCart, title: t("home.service.ecommerce.title"), description: t("home.service.ecommerce.desc") },
    { icon: AppWindow, title: t("home.service.webapp.title"), description: t("home.service.webapp.desc") },
    { icon: Palette, title: t("home.service.design.title"), description: t("home.service.design.desc") },
    { icon: LifeBuoy, title: t("home.service.support.title"), description: t("home.service.support.desc") },
  ];

  const advantages = [t("home.adv.1"), t("home.adv.2"), t("home.adv.3"), t("home.adv.4")];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={t("seo.home.title")}
        description={t("seo.home.desc")}
        path="/"
        jsonLd={organizationJsonLd}
      />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <img
                src={logoAsset.url}
                alt={t("brand.name")}
                className="w-48 sm:w-56 lg:w-64 mx-auto mb-8 opacity-100"
              />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 text-balance">
                {t("home.hero.title")}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-balance">
                {t("home.hero.subtitle")}
              </p>
              <Link to="/contacts">
                <Button size="lg" className="group bg-accent hover:bg-accent/90 text-accent-foreground">
                  {t("home.hero.cta")}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6">
                {t("home.mission.title")}
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">{t("home.mission.text")}</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
                {t("home.services.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("home.services.subtitle")}
              </p>
            </div>
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
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-12 text-center">
                {t("home.why.title")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-foreground">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
                {t("home.cta.title")}
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/80">{t("home.cta.subtitle")}</p>
              <Link to="/contacts">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  {t("home.cta.button")}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
