export type Locale = "en" | "ru";

export const translations = {
  en: {
    nav: { work: "Work", store: "Store", about: "About", contact: "Contact" },
    menu: "Menu",
    close: "Close",
    mobileNavigation: "Mobile navigation",
    languageLabel: "Language selector",
    hero: {
      kicker: "Independent web designer",
      kickerDetail: "Clear digital experiences",
      role: "RUSTAM / WEB DESIGNER",
      title: "I DESIGN DIGITAL EXPERIENCES FOR BRANDS & BUSINESSES.",
      body: "Independent web designer focused on clear, thoughtful and functional digital experiences.",
      cta: "View selected work",
    },
    work: {
      label: "Selected work",
      title: "Selected work",
      body: "Self-initiated studies exploring clear digital identities for thoughtful brands and businesses.",
      concept: "Concept project",
      view: "View concept project",
      moreWork: "More selected work ↓",
      lessProjects: "Less projects ↑",
      raya: {
        subtitle: "Unofficial concept website",
        category: "Web design / brand experience",
        discipline: "Frontend development",
        year: "2026",
        description:
          "Self-initiated digital concept for RAYA — a sparkling drink brand from Andijan, Uzbekistan. The project focuses on flavour, product presentation, responsive design and interactive brand experience.",
      },
    },
    projects: [
      {
        title: "Solis House",
        category: "Architecture / real estate",
        discipline: "Web design",
      },
      {
        title: "Vela Capital",
        category: "Fintech / investment",
        discipline: "Digital product / web design",
      },
      {
        title: "Noma Studio",
        category: "Fashion / lifestyle",
        discipline: "Web design / art direction",
      },
    ],
    about: {
      label: "About",
      title: "Digital spaces with clarity and character",
      body: "Independent web designer creating clear, thoughtful and visually distinctive digital experiences for brands, businesses and people with something to say.",
      approach: "Strategy / design / interaction / development",
    },
    services: {
      label: "Services",
      title: "Ways to work together",
      items: [
        "Web design",
        "Landing pages",
        "Digital design",
        "Creative development",
      ],
    },
    products: {
      label: "Digital products",
      count: "Coming soon",
      title: "Resources for digital makers",
      body: "Templates and resources for designers and businesses. Built carefully, released with intention.",
      items: ["Website template", "Figma UI resource", "Landing page system"],
      link: "Explore store",
      soon: "Coming soon",
    },
    contact: {
      label: "Have a project in mind?",
      title: "Let's work together",
    },
    footer: {
      role: "Web Designer",
      socials: ["Instagram", "LinkedIn", "Telegram"],
      copyright: "© 2026 RUSTAM",
    },
  },
  ru: {
    nav: {
      work: "Работы",
      store: "Магазин",
      about: "Обо мне",
      contact: "Контакты",
    },
    menu: "Меню",
    close: "Закрыть",
    mobileNavigation: "Мобильная навигация",
    languageLabel: "Выбор языка",
    hero: {
      kicker: "Независимый веб-дизайнер",
      kickerDetail: "Понятные цифровые решения",
      role: "RUSTAM / ВЕБ-ДИЗАЙНЕР",
      title: "СОЗДАЮ САЙТЫ И ЦИФРОВЫЕ ПРОДУКТЫ ДЛЯ БРЕНДОВ И БИЗНЕСА.",
      body: "Независимый веб-дизайнер, который создаёт ясные, продуманные и функциональные цифровые решения.",
      cta: "Смотреть работы",
    },
    work: {
      label: "Избранные работы",
      title: "Избранные работы",
      body: "Концептуальные проекты о ясной цифровой идентичности для внимательных брендов и бизнеса.",
      concept: "Концептуальный проект",
      view: "Открыть концептуальный проект",
      moreWork: "Ещё проекты ↓",
      lessProjects: "Свернуть ↑",
      raya: {
        subtitle: "Неофициальный концепт сайта",
        category: "Веб-дизайн / бренд-опыт",
        discipline: "Фронтенд-разработка",
        year: "2026",
        description:
          "Самостоятельно разработанный цифровой концепт для RAYA — бренда газированного напитка из Андижана, Узбекистан. Проект сфокусирован на вкусах, презентации продукта, адаптивном дизайне и интерактивном взаимодействии с брендом.",
      },
    },
    projects: [
      {
        title: "Solis House",
        category: "Архитектура / недвижимость",
        discipline: "Веб-дизайн",
      },
      {
        title: "Vela Capital",
        category: "Финтех / инвестиции",
        discipline: "Цифровой продукт / веб-дизайн",
      },
      {
        title: "Noma Studio",
        category: "Мода / образ жизни",
        discipline: "Веб-дизайн / арт-дирекшн",
      },
    ],
    about: {
      label: "Обо мне",
      title: "Цифровые пространства с ясностью и характером",
      body: "Независимый веб-дизайнер, создающий ясные, продуманные и выразительные цифровые решения для брендов, бизнеса и людей, которым есть что сказать.",
      approach: "Стратегия / дизайн / взаимодействие / разработка",
    },
    services: {
      label: "Услуги",
      title: "Форматы сотрудничества",
      items: [
        "Веб-дизайн",
        "Лендинги",
        "Цифровой дизайн",
        "Креативная разработка",
      ],
    },
    products: {
      label: "Цифровые продукты",
      count: "Скоро",
      title: "Ресурсы для digital-мейкеров",
      body: "Шаблоны и ресурсы для дизайнеров и бизнеса. Создаются внимательно и выходят в своё время.",
      items: ["Шаблон сайта", "UI-ресурс для Figma", "Система лендингов"],
      link: "Открыть магазин",
      soon: "Скоро",
    },
    contact: { label: "Есть проект?", title: "Давайте работать вместе" },
    footer: {
      role: "Веб-дизайнер",
      socials: ["Instagram", "LinkedIn", "Telegram"],
      copyright: "© 2026 RUSTAM",
    },
  },
} as const;

export type Copy = (typeof translations)[Locale];
