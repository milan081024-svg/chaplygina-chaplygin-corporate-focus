import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Building2, FileText, Shield, Scale, Users, Briefcase, ClipboardCheck, TrendingUp } from "lucide-react";
const Services = () => {
  const services = [{
    icon: Building2,
    title: "Регистрация/Перерегистрация бизнеса",
    description: "Полный цикл юридического сопровождения при регистрации компании: от выбора организационно-правовой формы до получения всех необходимых разрешений. Сопровождение процедур реорганизации, ликвидации и смены учредителей."
  }, {
    icon: FileText,
    title: "Договорная работа",
    description: "Разработка, согласование и экспертиза договоров любой сложности. Подготовка типовых форм договоров, анализ договорных отношений, защита интересов при переговорах. Сопровождение крупных контрактных проектов."
  }, {
    icon: Shield,
    title: "Комплексная правовая поддержка",
    description: "Постоянное юридическое обслуживание компании: правовое сопровождение текущей деятельности, консультирование по всем возникающим вопросам, подготовка правовых заключений и рекомендаций."
  }, {
    icon: Scale,
    title: "Корпоративные споры",
    description: "Представительство интересов в корпоративных конфликтах: споры между участниками общества, защита прав акционеров, оспаривание решений органов управления, разрешение конфликтов интересов."
  }, {
    icon: ClipboardCheck,
    title: "Правовой аудит",
    description: "Комплексная проверка юридической чистоты компании: анализ учредительных документов, договоров, корпоративных процедур. Выявление правовых рисков и разработка рекомендаций по их устранению."
  }, {
    icon: Briefcase,
    title: "Контрактное сопровождение",
    description: "Юридическая поддержка при ведении переговоров и заключении сделок. Структурирование сложных договорных конструкций, минимизация рисков, обеспечение соответствия законодательству."
  }, {
    icon: TrendingUp,
    title: "M&A сопровождение",
    description: "Юридическое сопровождение сделок по слияниям и поглощениям: due diligence, структурирование сделки, подготовка документации, согласование условий, закрытие транзакции."
  }, {
    icon: Users,
    title: "Корпоративное управление",
    description: "Разработка и внедрение систем корпоративного управления, подготовка внутренних регламентов и политик, организация работы органов управления, консультации по корпоративным процедурам."
  }];
  return <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">
              Наши услуги
            </h1>
            <p className="text-lg text-muted-foreground">
              Комплексные юридические решения для бизнеса
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />)}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-8 text-center">
              Наш подход
            </h2>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-foreground/80 leading-relaxed">
                Мы не просто оказываем юридические услуги – мы становимся частью вашей команды, 
                глубоко погружаемся в специфику бизнеса и предлагаем решения, которые работают 
                на достижение ваших бизнес-целей. Каждый проект для нас уникален, и мы разрабатываем 
                индивидуальную стратегию с учетом особенностей вашей компании и отрасли.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Services;