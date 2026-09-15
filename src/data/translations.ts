export type Lang = 'es' | 'en';

export const translations: Record<Lang, Record<string, string>> = {
  es: {
    navSkills: 'Skills',
    navProyectos: 'Proyectos',
    navSobreMi: 'Sobre mí',
    navContacto: 'Contacto',
    navFormacion: 'Formación',
    heroGreeting: 'Hola, soy',
    heroDescription:
      'Desarrollador en formación con experiencia en entornos de desarrollo web e IA. Actualmente he finalizado mi curso de Desarrollo de Aplicaciones Web y el curso de especialización en IA y Big Data. Con interés en el desarrollo de automatizaciones y el uso de la IA.',
    skillsTitle: 'Skills',
    skillsSubtitle: 'Tecnologías con las que trabajo día a día',
    catFrontend: 'Frontend',
    catBackend: 'Backend & Datos',
    catHerramientas: 'Herramientas & CMS',
    skillApiRest: 'API REST',
    skillResponsive: 'Diseño Responsive',
    skillComponents: 'Componentes UI',
    proyectosTitle: 'Proyectos',
    proyectosSubtitle: 'Algunos de los proyectos en los que he trabajado',
    proyectosFeaturedLabel: 'Proyecto destacado',
    projLinkCode: 'Código',
    projLinkWeb: 'Web',
    projNonnappDesc:
      'Aplicación web que genera recetas con inteligencia artificial inspiradas en la cocina de la abuela: el usuario indica ingredientes o antojos y la IA propone recetas caseras paso a paso. Frontend en React con TypeScript, base de datos PostgreSQL en Neon, backend en Render y frontend en Netlify.',
    projFitopriceDesc:
      'Aplicación web para la gestión de precios de productos agrícolas. Permite consultar y comparar precios de proveedores y recibir alertas de cambios. Frontend en React, backend en Express y PostgreSQL en Supabase, con N8N para automatizaciones.',
    projMyhandstatsDesc:
      'Aplicación para el análisis de estadísticas de balonmano, desarrollada como Trabajo de Fin de Grado. Permite registrar y visualizar datos de partidos y jugadores. Backend en Python, interfaz en React y base de datos PostgreSQL en Supabase.',
    projChurnpredictDesc:
      'Proyecto de machine learning end-to-end para predecir la fuga de clientes de una empresa de telecomunicaciones. Incluye limpieza de datos, pipeline de preprocesamiento con scikit-learn, entrenamiento de un modelo de regresión logística y una app interactiva con Streamlit.',
    projPortfoliosDesc:
      'Aplicación web para la creación y edición de portfolios: proyectos, habilidades y experiencias. Construida con HTML, CSS, PHP y MySQL.',
    projPozosDesc:
      'Sitio informativo sobre localización y servicios de pozos, con diseño responsive y contenido optimizado para móviles.',
    projAgroDesc:
      'Página web corporativa con diseño responsive y panel de administración de productos, construida con Astro.',
    sobreMiTitle: 'Sobre mí',
    story1Title: '¿Quién Soy?',
    story1Text:
      'Desde pequeño me fascinaban los ordenadores. Me gustaba desmontarlos, instalar programas y descubrir cómo funcionaban por dentro. Esa curiosidad fue el primer paso hacia el mundo de la programación y la tecnología, donde encontré mi verdadera pasión.',
    story2Title: 'Tecnología y deporte',
    story2Text:
      'El deporte siempre ha sido una parte importante de mi vida. Me ha enseñado disciplina, constancia y cómo trabajar en equipo. Gracias a él, mantengo el equilibrio físico y mental que necesito para rendir mejor en mis proyectos.',
    story3Title: 'Mirando al futuro',
    story3Text:
      'Actualmente sigo formándome como desarrollador, con un fuerte interés en la inteligencia artificial. Mi objetivo es especializarme en este campo y aplicar el conocimiento en soluciones reales que tengan un impacto positivo en el mundo.',
    formacionTitle: 'Formación',
    edu1Text: 'Sistemas Microinformáticos y Redes',
    edu2Text: 'Desarrollo de Aplicaciones Web',
    edu3Title: 'Especialización IA y Big Data',
    edu3Text: 'Especialización en Inteligencia Artificial y Big Data.',
    contactoTitle: 'Hablemos',
    contactoText: '¿Tienes un proyecto en mente o quieres charlar? Escríbeme, estaré encantado de leerte.',
  },
  en: {
    navSkills: 'Skills',
    navProyectos: 'Projects',
    navSobreMi: 'About',
    navContacto: 'Contact',
    navFormacion: 'Education',
    heroGreeting: "Hi, I'm",
    heroDescription:
      'Developer in training with experience in web development and AI environments. I have recently completed my Web Application Development course and a specialization course in AI and Big Data. Interested in building automations and working with AI.',
    skillsTitle: 'Skills',
    skillsSubtitle: 'Technologies I work with every day',
    catFrontend: 'Frontend',
    catBackend: 'Backend & Data',
    catHerramientas: 'Tools & CMS',
    skillApiRest: 'REST API',
    skillResponsive: 'Responsive Design',
    skillComponents: 'UI Components',
    proyectosTitle: 'Projects',
    proyectosSubtitle: "Some of the projects I've worked on",
    proyectosFeaturedLabel: 'Featured project',
    projLinkCode: 'Code',
    projLinkWeb: 'Web',
    projNonnappDesc:
      'Web app that generates AI recipes inspired by grandma\'s cooking: the user lists ingredients or cravings and the AI suggests step-by-step homemade recipes. React frontend with TypeScript, PostgreSQL database on Neon, backend deployed on Render and frontend on Netlify.',
    projFitopriceDesc:
      'Web app for managing agricultural product pricing. Lets users check and compare supplier prices and receive change alerts. React frontend, Express backend and PostgreSQL on Supabase, with N8N for automations.',
    projMyhandstatsDesc:
      'App for analyzing handball statistics, built as a Bachelor\'s Thesis project. Lets users record and visualize match and player data. Python backend, React interface and PostgreSQL database on Supabase.',
    projChurnpredictDesc:
      'End-to-end machine learning project to predict customer churn for a telecom company. Includes data cleaning, a preprocessing pipeline with scikit-learn, training a logistic regression model, and an interactive Streamlit app.',
    projPortfoliosDesc:
      'Web app for creating and editing portfolios: projects, skills and experience. Built with HTML, CSS, PHP and MySQL.',
    projPozosDesc:
      'Informational site about well locations and services, with responsive design and mobile-optimized content.',
    projAgroDesc:
      'Corporate website with responsive design and a product admin panel, built with Astro.',
    sobreMiTitle: 'About Me',
    story1Title: 'Who Am I?',
    story1Text:
      'As a kid I was fascinated by computers. I loved taking them apart, installing programs and discovering how they worked inside. That curiosity was the first step toward programming and technology, where I found my true passion.',
    story2Title: 'Technology and sport',
    story2Text:
      'Sport has always been an important part of my life. It has taught me discipline, consistency and how to work as a team. Thanks to it, I keep the physical and mental balance I need to perform better in my projects.',
    story3Title: 'Looking to the future',
    story3Text:
      'I am currently continuing my training as a developer, with a strong interest in artificial intelligence. My goal is to specialize in this field and apply that knowledge to real solutions with a positive impact on the world.',
    formacionTitle: 'Education',
    edu1Text: 'IT Systems and Networks',
    edu2Text: 'Web Application Development',
    edu3Title: 'AI & Big Data Specialization',
    edu3Text: 'Specialization in Artificial Intelligence and Big Data.',
    contactoTitle: "Let's talk",
    contactoText: 'Have a project in mind or just want to chat? Drop me a line, I would love to hear from you.',
  },
};
