import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Language = "ru" | "en";

type Dict = Record<string, string | string[]>;

const ru: Dict = {
  "nav.home": "Главная",
  "nav.about": "О нас",
  "nav.services": "Услуги",
  "nav.contacts": "Контакты",
  "nav.openMenu": "Открыть меню",

  "brand.name": "Chaplygina & Chaplygin",
  "brand.tagline": "",

  "footer.description": "Создаём современные сайты и цифровые продукты, которые работают на ваш бизнес.",
  "footer.navigation": "Навигация",
  "footer.contacts": "Контакты",
  "footer.rights": "Все права защищены.",

  "home.hero.title": "Создаём сайты, которые работают на ваш бизнес",
  "home.hero.subtitle": "Дизайн, разработка и поддержка веб-продуктов под ключ",
  "home.hero.cta": "Обсудить проект",
  "home.mission.title": "Наша миссия",
  "home.mission.text": "Мы превращаем идеи в эффективные цифровые продукты. От стратегии и дизайна до разработки и сопровождения — создаём сайты, которые приносят клиентов и усиливают бренд.",
  "home.services.title": "Наши услуги",
  "home.services.subtitle": "Полный цикл создания сайтов и цифровых решений",
  "home.why.title": "Почему выбирают нас",
  "home.cta.title": "Готовы начать проект?",
  "home.cta.subtitle": "Свяжитесь с нами для бесплатной консультации и оценки вашего проекта",
  "home.cta.button": "Связаться с нами",

  "home.service.landing.title": "Лендинги",
  "home.service.landing.desc": "Продающие посадочные страницы с высокой конверсией для запуска продуктов и услуг",
  "home.service.corporate.title": "Корпоративные сайты",
  "home.service.corporate.desc": "Презентационные сайты, отражающие масштаб и ценности вашего бизнеса",
  "home.service.ecommerce.title": "Интернет-магазины",
  "home.service.ecommerce.desc": "E-commerce решения с удобной админ-панелью и интеграциями с платёжными системами",
  "home.service.webapp.title": "Веб-приложения",
  "home.service.webapp.desc": "Сложные SaaS-продукты, личные кабинеты и внутренние системы под ключ",
  "home.service.design.title": "UI/UX Дизайн",
  "home.service.design.desc": "Современный дизайн интерфейсов, ориентированный на пользователя и бизнес-цели",
  "home.service.support.title": "Поддержка и развитие",
  "home.service.support.desc": "Техническая поддержка, обновления, доработки и развитие существующих сайтов",

  "home.adv.1": "Индивидуальный подход к каждому проекту",
  "home.adv.2": "Современные технологии и чистый код",
  "home.adv.3": "Прозрачные сроки и бюджет",
  "home.adv.4": "Поддержка после запуска",

  "about.hero.title": "О нас",
  "about.hero.subtitle": "Команда дизайнеров и разработчиков, создающих сайты будущего",
  "about.history.title": "О студии",
  "about.history.p1": "Chaplygina & Chaplygin — это веб-студия, объединяющая дизайнеров, разработчиков и стратегов. Мы создаём сайты и цифровые продукты для бизнеса, который ценит качество и результат.",
  "about.history.p2": "Наш подход — глубокое погружение в задачи клиента и создание решений, которые не только красиво выглядят, но и эффективно работают: привлекают клиентов, повышают продажи и усиливают бренд.",
  "about.values.title": "Наши ценности",
  "about.values.craft.title": "Качество",
  "about.values.craft.text": "Внимание к деталям и высокий стандарт исполнения в каждом проекте",
  "about.values.result.title": "Результат",
  "about.values.result.text": "Мы создаём сайты, которые решают бизнес-задачи и приносят измеримый эффект",
  "about.values.partner.title": "Партнёрство",
  "about.values.partner.text": "Долгосрочные отношения с клиентами, прозрачность и открытое общение",
  "about.expertise.title": "Наша экспертиза",
  "about.expertise.intro": "Мы работаем со всеми этапами создания цифровых продуктов:",
  "about.expertise.li.1": "Аналитика, стратегия и проектирование пользовательского опыта",
  "about.expertise.li.2": "UI/UX дизайн интерфейсов любой сложности",
  "about.expertise.li.3": "Разработка лендингов, корпоративных сайтов и интернет-магазинов",
  "about.expertise.li.4": "Создание веб-приложений и SaaS-продуктов",
  "about.expertise.li.5": "Интеграции с CRM, платёжными и сторонними сервисами",
  "about.expertise.li.6": "Техническая поддержка и развитие проектов после запуска",
  "about.expertise.outro": "Мы работаем с компаниями разных отраслей — от стартапов до устоявшегося бизнеса, подбирая оптимальное технологическое решение под каждую задачу.",

  "services.hero.title": "Наши услуги",
  "services.hero.subtitle": "Полный цикл создания сайтов и цифровых продуктов",
  "services.grid.title": "Ключевые направления",
  "services.also.title": "А также:",
  "services.approach.title": "Наш подход",
  "services.approach.text": "Мы не просто делаем сайты — мы становимся частью вашей команды, глубоко погружаемся в продукт и предлагаем решения, которые работают на ваши бизнес-цели. Каждый проект уникален, и мы выстраиваем процесс индивидуально под задачи и амбиции клиента.",

  "services.s.landing.title": "Разработка лендингов",
  "services.s.landing.desc": "Продающие посадочные страницы с фокусом на конверсию: продуманный сторителлинг, A/B-тесты, аналитика и интеграция с CRM.",
  "services.s.corporate.title": "Корпоративные сайты",
  "services.s.corporate.desc": "Имиджевые и презентационные сайты для компаний: многостраничные структуры, мультиязычность, интеграции и удобная админ-панель.",
  "services.s.ecommerce.title": "Интернет-магазины",
  "services.s.ecommerce.desc": "Полноценные e-commerce решения: каталоги, корзина, платежи, доставка, личный кабинет, интеграции с 1С и маркетплейсами.",
  "services.s.webapp.title": "Веб-приложения и SaaS",
  "services.s.webapp.desc": "Сложные продукты с авторизацией, ролями, базой данных и бизнес-логикой. Личные кабинеты, CRM, дашборды и внутренние системы.",
  "services.s.design.title": "UI/UX дизайн",
  "services.s.design.desc": "Современный, осознанный дизайн интерфейсов: исследование, прототипы, дизайн-система, адаптив под все устройства.",
  "services.s.brand.title": "Брендинг и айдентика",
  "services.s.brand.desc": "Разработка логотипа, фирменного стиля и гайдлайнов. Создаём визуальный язык, который выделяет вас среди конкурентов.",
  "services.s.support.title": "Поддержка и развитие",
  "services.s.support.desc": "Обновления, доработки, контентная поддержка, хостинг и мониторинг. Развиваем сайт вместе с вашим бизнесом.",

  "services.also.li.1": "Адаптация сайтов под мобильные устройства",
  "services.also.li.2": "Многоязычные сайты и локализация",
  "services.also.li.3": "Создание и наполнение блога, новостных разделов",
  "services.also.li.4": "Консультации по выбору технологий и подрядчиков",
  "services.also.li.5": "Сопровождение запуска и пост-релизная поддержка",

  "contacts.hero.title": "Контакты",
  "contacts.hero.subtitle": "Свяжитесь с нами, чтобы обсудить ваш проект",
  "contacts.info.title": "Свяжитесь с нами",
  "contacts.info.text": "Наша команда готова ответить на ваши вопросы, оценить проект и предложить оптимальное решение для вашего бизнеса.",
  "contacts.info.email": "Email",
  "contacts.info.phone": "Телефон",
  "contacts.info.address": "Адрес",
  "contacts.info.hoursTitle": "Время работы",
  "contacts.info.hours": "Понедельник – Суббота: 9:00 – 18:00\nВоскресенье: выходной",
  "contacts.form.title": "Отправить сообщение",
  "contacts.form.name": "Имя",
  "contacts.form.namePh": "Ваше имя",
  "contacts.form.email": "Email",
  "contacts.form.emailPh": "your@email.com",
  "contacts.form.phone": "Телефон",
  "contacts.form.phonePh": "+7 (___) ___-__-__",
  "contacts.form.message": "Сообщение",
  "contacts.form.messagePh": "Расскажите о вашем проекте",
  "contacts.form.submit": "Отправить сообщение",
  "contacts.toast.copied.title": "Скопировано",
  "contacts.toast.copied.desc": "Email скопирован в буфер обмена",
  "contacts.toast.err.title": "Ошибка",
  "contacts.toast.err.fields": "Пожалуйста, заполните все обязательные поля",
  "contacts.toast.ok.title": "Спасибо за обращение!",
  "contacts.toast.ok.desc": "Мы свяжемся с вами в ближайшее время",
  "contacts.toast.fail": "Не удалось отправить сообщение. Попробуйте позже.",
  "contacts.address.value": "г. Актобе, ул. Маресьева 89",

  "seo.home.title": "Chaplygina & Chaplygin",
  "seo.home.desc": "Разработка сайтов, интернет-магазинов и веб-приложений. Дизайн, разработка и поддержка цифровых продуктов под ключ.",
  "seo.about.title": "О нас – Chaplygina & Chaplygin",
  "seo.about.desc": "Chaplygina & Chaplygin: команда дизайнеров и разработчиков, создающих современные сайты и цифровые продукты.",
  "seo.services.title": "Услуги – Chaplygina & Chaplygin",
  "seo.services.desc": "Разработка лендингов, корпоративных сайтов, интернет-магазинов и веб-приложений. UI/UX дизайн, поддержка и развитие.",
  "seo.contacts.title": "Контакты – Chaplygina & Chaplygin",
  "seo.contacts.desc": "Свяжитесь с нами: info@chplgn.kz, +7 (701) 458-01-80, г. Актобе, ул. Маресьева 89.",

  "notfound.title": "404",
  "notfound.text": "Страница не найдена",
  "notfound.link": "Вернуться на главную",
};

const en: Dict = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.services": "Services",
  "nav.contacts": "Contact",
  "nav.openMenu": "Open menu",

  "brand.name": "Chaplygina & Chaplygin",
  "brand.tagline": "",

  "footer.description": "We build modern websites and digital products that work for your business.",
  "footer.navigation": "Navigation",
  "footer.contacts": "Contact",
  "footer.rights": "All rights reserved.",

  "home.hero.title": "We build websites that work for your business",
  "home.hero.subtitle": "End-to-end design, development and support of web products",
  "home.hero.cta": "Discuss a project",
  "home.mission.title": "Our mission",
  "home.mission.text": "We turn ideas into effective digital products. From strategy and design to development and support — we craft websites that bring customers and strengthen brands.",
  "home.services.title": "Our services",
  "home.services.subtitle": "Full-cycle website and digital product development",
  "home.why.title": "Why choose us",
  "home.cta.title": "Ready to start your project?",
  "home.cta.subtitle": "Contact us for a free consultation and a project estimate",
  "home.cta.button": "Get in touch",

  "home.service.landing.title": "Landing pages",
  "home.service.landing.desc": "High-converting landing pages to launch products and services",
  "home.service.corporate.title": "Corporate websites",
  "home.service.corporate.desc": "Presentation sites that reflect the scale and values of your business",
  "home.service.ecommerce.title": "Online stores",
  "home.service.ecommerce.desc": "E-commerce solutions with a friendly admin panel and payment integrations",
  "home.service.webapp.title": "Web applications",
  "home.service.webapp.desc": "Complex SaaS products, dashboards and internal systems built end-to-end",
  "home.service.design.title": "UI/UX Design",
  "home.service.design.desc": "Modern interface design focused on the user and your business goals",
  "home.service.support.title": "Support & growth",
  "home.service.support.desc": "Technical support, updates and continuous improvement of existing sites",

  "home.adv.1": "Tailored approach to every project",
  "home.adv.2": "Modern technologies and clean code",
  "home.adv.3": "Transparent timelines and budgets",
  "home.adv.4": "Post-launch support and growth",

  "about.hero.title": "About us",
  "about.hero.subtitle": "A team of designers and developers building the websites of tomorrow",
  "about.history.title": "About the studio",
  "about.history.p1": "Chaplygina & Chaplygin is a web studio that brings together designers, developers and strategists. We build websites and digital products for businesses that value quality and results.",
  "about.history.p2": "Our approach is to deeply understand the client's goals and craft solutions that are not only beautiful but also effective: they attract customers, increase sales and strengthen the brand.",
  "about.values.title": "Our values",
  "about.values.craft.title": "Craft",
  "about.values.craft.text": "Attention to detail and a high standard of execution in every project",
  "about.values.result.title": "Results",
  "about.values.result.text": "We build websites that solve business problems and deliver measurable impact",
  "about.values.partner.title": "Partnership",
  "about.values.partner.text": "Long-term relationships, transparency and open communication with our clients",
  "about.expertise.title": "Our expertise",
  "about.expertise.intro": "We cover every stage of digital product creation:",
  "about.expertise.li.1": "Discovery, strategy and user experience design",
  "about.expertise.li.2": "UI/UX design for interfaces of any complexity",
  "about.expertise.li.3": "Development of landing pages, corporate sites and online stores",
  "about.expertise.li.4": "Building web applications and SaaS products",
  "about.expertise.li.5": "Integrations with CRM, payment systems and third-party services",
  "about.expertise.li.6": "Technical support and continued growth after launch",
  "about.expertise.outro": "We work with companies across industries — from startups to established businesses — choosing the right technology for every challenge.",

  "services.hero.title": "Our services",
  "services.hero.subtitle": "Full-cycle development of websites and digital products",
  "services.grid.title": "Core directions",
  "services.also.title": "We also offer:",
  "services.approach.title": "Our approach",
  "services.approach.text": "We don't just build websites — we become part of your team, get deep into your product and propose solutions that work towards your business goals. Each project is unique, and we tailor the process to your ambitions.",

  "services.s.landing.title": "Landing page development",
  "services.s.landing.desc": "Conversion-focused landing pages with thoughtful storytelling, A/B tests, analytics and CRM integration.",
  "services.s.corporate.title": "Corporate websites",
  "services.s.corporate.desc": "Image and presentation sites: multi-page structures, multilingual support, integrations and a convenient admin panel.",
  "services.s.ecommerce.title": "E-commerce",
  "services.s.ecommerce.desc": "Full-featured online stores: catalogs, cart, payments, delivery, customer accounts, ERP and marketplace integrations.",
  "services.s.webapp.title": "Web apps & SaaS",
  "services.s.webapp.desc": "Complex products with authentication, roles, databases and business logic. Dashboards, CRMs and internal tools.",
  "services.s.design.title": "UI/UX design",
  "services.s.design.desc": "Modern, intentional interface design: research, prototypes, design systems and full responsive adaptation.",
  "services.s.brand.title": "Branding & identity",
  "services.s.brand.desc": "Logo design, visual identity and brand guidelines. We craft a visual language that sets you apart.",
  "services.s.support.title": "Support & growth",
  "services.s.support.desc": "Updates, improvements, content support, hosting and monitoring. We grow the website alongside your business.",

  "services.also.li.1": "Mobile adaptation of websites",
  "services.also.li.2": "Multilingual websites and localization",
  "services.also.li.3": "Blog and news section creation and content",
  "services.also.li.4": "Consulting on technology and vendor selection",
  "services.also.li.5": "Launch support and post-release maintenance",

  "contacts.hero.title": "Contact",
  "contacts.hero.subtitle": "Get in touch to discuss your project",
  "contacts.info.title": "Get in touch",
  "contacts.info.text": "Our team is ready to answer your questions, scope your project and propose the best solution for your business.",
  "contacts.info.email": "Email",
  "contacts.info.phone": "Phone",
  "contacts.info.address": "Address",
  "contacts.info.hoursTitle": "Working hours",
  "contacts.info.hours": "Monday – Saturday: 9:00 – 18:00\nSunday: closed",
  "contacts.form.title": "Send us a message",
  "contacts.form.name": "Name",
  "contacts.form.namePh": "Your name",
  "contacts.form.email": "Email",
  "contacts.form.emailPh": "your@email.com",
  "contacts.form.phone": "Phone",
  "contacts.form.phonePh": "+7 (___) ___-__-__",
  "contacts.form.message": "Message",
  "contacts.form.messagePh": "Tell us about your project",
  "contacts.form.submit": "Send message",
  "contacts.toast.copied.title": "Copied",
  "contacts.toast.copied.desc": "Email copied to clipboard",
  "contacts.toast.err.title": "Error",
  "contacts.toast.err.fields": "Please fill in all required fields",
  "contacts.toast.ok.title": "Thank you!",
  "contacts.toast.ok.desc": "We will get back to you shortly",
  "contacts.toast.fail": "Failed to send the message. Please try again later.",
  "contacts.address.value": "Aktobe, Maresyeva st. 89",

  "seo.home.title": "Chaplygina & Chaplygin",
  "seo.home.desc": "Website, e-commerce and web application development. End-to-end design, development and support of digital products.",
  "seo.about.title": "About – Chaplygina & Chaplygin",
  "seo.about.desc": "Chaplygina & Chaplygin: a team of designers and developers building modern websites and digital products.",
  "seo.services.title": "Services – Chaplygina & Chaplygin",
  "seo.services.desc": "Landing pages, corporate websites, online stores and web apps. UI/UX design, support and growth.",
  "seo.contacts.title": "Contact – Chaplygina & Chaplygin",
  "seo.contacts.desc": "Get in touch: info@chplgn.kz, +7 (701) 458-01-80, Aktobe, Maresyeva st. 89.",

  "notfound.title": "404",
  "notfound.text": "Page not found",
  "notfound.link": "Back to home",
};

const dicts: Record<Language, Dict> = { ru, en };

interface LanguageContextValue {
  language: Language;
  setLanguage: (l: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "ru";
    const saved = localStorage.getItem("lang");
    return saved === "en" || saved === "ru" ? saved : "ru";
  });

  useEffect(() => {
    localStorage.setItem("lang", language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (l: Language) => setLanguageState(l);

  const t = (key: string) => {
    const val = dicts[language][key] ?? dicts.ru[key] ?? key;
    return Array.isArray(val) ? val.join("") : val;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
