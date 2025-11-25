import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Building2, FileText, Shield, Scale, Users, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import logo from "@/assets/logo.jpg";

const Index = () => {
  const services = [
    {
      icon: Building2,
      title: "Регистрация бизнеса",
      description: "Комплексное сопровождение процесса регистрации и реорганизации юридических лиц",
    },
    {
      icon: FileText,
      title: "Договорная работа",
      description: "Подготовка, анализ и сопровождение корпоративных договоров любой сложности",
    },
    {
      icon: Shield,
      title: "Правовая защита",
      description: "Полное правовое сопровождение деятельности компании и защита интересов в суде",
    },
    {
      icon: Scale,
      title: "Корпоративные споры",
      description: "Профессиональное представительство в корпоративных конфликтах",
    },
    {
      icon: Users,
      title: "Правовой аудит",
      description: "Комплексная проверка юридических рисков и соответствия законодательству",
    },
    {
      icon: Briefcase,
      title: "Контрактное сопровождение",
      description: "Постоянная юридическая поддержка при ведении бизнеса",
    },
  ];

  const advantages = [
    "Наш приоритет качество, а не количество",
    "Индивидуальный подход к каждому клиенту",
    "Опыт работы с крупными компаниями",
    "Конфиденциальность и надёжность",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <img 
              src={logo} 
              alt="Chaplygina & Chaplygin Corporate Consulting" 
              className="w-48 sm:w-56 lg:w-64 mx-auto mb-8 opacity-100"
            />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 text-balance">
              Корпоративный юридический консалтинг для бизнеса
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-balance">
              Защищаем интересы вашей компании на всех этапах развития бизнеса
            </p>
            <Link to="/contacts">
              <Button size="lg" className="group bg-accent hover:bg-accent/90 text-accent-foreground">
                Получить консультацию
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
              Наша миссия
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Мы предоставляем комплексные юридические решения для корпоративных клиентов, обеспечивая правовую 
              безопасность и стабильность вашего бизнеса. Наша команда экспертов работает на опережение, 
              предотвращая юридические риски и защищая интересы компании на каждом этапе развития.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр юридических услуг для корпоративных клиентов
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
              Почему выбирают нас
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
              Готовы начать сотрудничество?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/80">
              Свяжитесь с нами для получения профессиональной юридической консультации
            </p>
            <Link to="/contacts">
              <Button
                size="lg"
                variant="secondary"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
