import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Award, Target, Users2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const About = () => {
  const { t } = useLanguage();
  const expertise = [1, 2, 3, 4, 5, 6].map((i) => t(`about.expertise.li.${i}`));

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title={t("seo.about.title")} description={t("seo.about.desc")} path="/about" />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">
                {t("about.hero.title")}
              </h1>
              <p className="text-lg text-muted-foreground">{t("about.hero.subtitle")}</p>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-8">
                {t("about.history.title")}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/80 leading-relaxed mb-4">{t("about.history.p1")}</p>
                <p className="text-foreground/80 leading-relaxed">{t("about.history.p2")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 sm:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-12 text-center">
                {t("about.values.title")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                    {t("about.values.craft.title")}
                  </h3>
                  <p className="text-foreground/70">{t("about.values.craft.text")}</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                    {t("about.values.result.title")}
                  </h3>
                  <p className="text-foreground/70">{t("about.values.result.text")}</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                    <Users2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                    {t("about.values.partner.title")}
                  </h3>
                  <p className="text-foreground/70">{t("about.values.partner.text")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-8">
                {t("about.expertise.title")}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/80 leading-relaxed mb-4">{t("about.expertise.intro")}</p>
                <ul className="space-y-2 text-foreground/80">
                  {expertise.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">{t("about.expertise.outro")}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
