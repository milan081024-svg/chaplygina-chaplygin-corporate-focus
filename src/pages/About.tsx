import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Target, Users2 } from "lucide-react";
const About = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">
              О нас
            </h1>
            <p className="text-lg text-muted-foreground">
              Профессиональная команда юристов с глубокой экспертизой в корпоративном праве
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-8">
              История компании
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Chaplygina & Chaplygin была основана командой опытных юристов, специализирующихся на корпоративном праве и юридическом сопровождении бизнеса. За более 10 лет работы мы накопили обширный опыт в решении самых сложных правовых вопросов для компаний различного масштаба.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Наш подход основан на глубоком понимании бизнес-процессов клиента и предоставлении 
                не просто юридических услуг, а комплексных решений, которые помогают бизнесу развиваться 
                в правовом поле безопасно и эффективно.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-12 text-center">
              Наши ценности и принципы
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                  Профессионализм
                </h3>
                <p className="text-foreground/70">
                  Высочайший уровень экспертизы и постоянное развитие компетенции
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                  Результат
                </h3>
                <p className="text-foreground/70">
                  Ориентация на достижение конкретных бизнес-целей клиента
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                  <Users2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                  Доверие
                </h3>
                <p className="text-foreground/70">
                  Абсолютная конфиденциальность и индивидуальный подход к каждому партнеру  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-8">
              Экспертиза в корпоративном праве
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Наша команда специализируется на всех аспектах корпоративного права, включая:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li>Корпоративное структурирование, создание и реорганизация компаний</li>
                <li>M&A сделки и комплексное сопровождение корпоративных транзакций</li>
                <li>Разработка и согласование сложных коммерческих договоров</li>
                <li>Корпоративное управление и защита прав акционеров</li>
                <li>Разрешение корпоративных споров и конфликтов интересов</li>
                <li>Правовой аудит и комплаенс-консультирование</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-4">
                Мы работаем с компаниями различных отраслей, предоставляя индивидуальные решения, 
                учитывающие специфику каждого бизнеса и текущую рыночную ситуацию.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;