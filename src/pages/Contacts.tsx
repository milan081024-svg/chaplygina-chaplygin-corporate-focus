import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/lib/i18n";

const Contacts = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t("contacts.toast.err.title"),
        description: t("contacts.toast.err.fields"),
        variant: "destructive",
      });
      return;
    }
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });
      if (error) throw error;
      toast({
        title: t("contacts.toast.ok.title"),
        description: t("contacts.toast.ok.desc"),
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: t("contacts.toast.err.title"),
        description: t("contacts.toast.fail"),
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title={t("seo.contacts.title")} description={t("seo.contacts.desc")} path="/contacts" />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">
                {t("contacts.hero.title")}
              </h1>
              <p className="text-lg text-muted-foreground">{t("contacts.hero.subtitle")}</p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                    {t("contacts.info.title")}
                  </h2>
                  <p className="text-foreground/70 leading-relaxed mb-8">{t("contacts.info.text")}</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t("contacts.info.email")}</h3>
                      <button
                        className="text-foreground/70 hover:text-accent transition-colors cursor-pointer"
                        onClick={() => {
                          navigator.clipboard.writeText("info@chplgn.kz");
                          toast({
                            title: t("contacts.toast.copied.title"),
                            description: t("contacts.toast.copied.desc"),
                          });
                        }}
                      >
                        info@chplgn.kz
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t("contacts.info.phone")}</h3>
                      <a className="text-foreground/70 hover:text-accent transition-colors" href="tel:+77014580180">
                        +7 (701) 458-01-80
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{t("contacts.info.address")}</h3>
                      <a
                        className="text-foreground/70 hover:text-accent transition-colors"
                        href="https://2gis.kz/aktobe/search/%D1%83%D0%BB.%20%D0%9C%D0%B0%D1%80%D0%B5%D1%81%D1%8C%D0%B5%D0%B2%D0%B0%2089"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("contacts.address.value")}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <h3 className="font-semibold text-primary mb-3">{t("contacts.info.hoursTitle")}</h3>
                  <p className="text-foreground/70 whitespace-pre-line">{t("contacts.info.hours")}</p>
                </div>
              </div>

              {/* Form */}
              <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                  {t("contacts.form.title")}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contacts.form.name")} *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t("contacts.form.namePh")}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contacts.form.email")} *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t("contacts.form.emailPh")}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("contacts.form.phone")}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t("contacts.form.phonePh")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contacts.form.message")} *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t("contacts.form.messagePh")}
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Send className="mr-2 h-4 w-4" />
                    {t("contacts.form.submit")}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
