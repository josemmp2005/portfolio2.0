export interface Project {
  title: string;
  description: string;
  descKey: string;
  image: string;
  alt: string;
  tech: string[];
  github: string | null;
  web: string | null;
  /** Grid footprint inside the bento layout: 'lg' = 2x2, 'tall' = 1x2, unset = 1x1. */
  size?: 'lg' | 'tall';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Nonnapp',
    description:
      'Aplicación web que genera recetas con inteligencia artificial inspiradas en la cocina de la abuela: el usuario indica ingredientes o antojos y la IA propone recetas caseras paso a paso. Frontend en React con TypeScript, base de datos PostgreSQL en Neon, backend en Render y frontend en Netlify.',
    descKey: 'projNonnappDesc',
    image: '/images/nonnapp-proyecto.webp',
    alt: 'Nonnapp',
    tech: ['React', 'TypeScript', 'PostgreSQL', 'Neon', 'Render', 'Netlify'],
    github: 'https://github.com/josemmp2005/nonnapp',
    web: 'https://nonnapp.netlify.app/',
    size: 'lg',
    featured: true,
  },
  {
    title: 'FitoPrice',
    description:
      'Aplicación web para la gestión de precios de productos agrícolas. Permite consultar y comparar precios de proveedores y recibir alertas de cambios. Frontend en React, backend en Express y PostgreSQL en Supabase, con N8N para automatizaciones.',
    descKey: 'projFitopriceDesc',
    image: '/images/fitoprice-proyect.webp',
    alt: 'FitoPrice',
    tech: ['React', 'Express', 'PostgreSQL', 'Supabase', 'N8N'],
    github: 'https://github.com/josemmp2005/fitoprice',
    web: 'https://fitoprice.netlify.app/',
    size: 'tall',
  },
  {
    title: 'MyHandStats',
    description:
      'Aplicación para el análisis de estadísticas de balonmano, desarrollada como Trabajo de Fin de Grado. Permite registrar y visualizar datos de partidos y jugadores. Backend en Python, interfaz en React y base de datos PostgreSQL en Supabase.',
    descKey: 'projMyhandstatsDesc',
    image: '/images/myhandstats-proyect.webp',
    alt: 'MyHandStats',
    tech: ['React', 'Python', 'PostgreSQL'],
    github: 'https://github.com/pmerida08/myHandStats',
    web: 'https://myhandstats.netlify.app/',
    size: 'tall',
  },
  {
    title: 'ChurnPredict 360',
    description:
      'Proyecto de machine learning end-to-end para predecir la fuga de clientes de una empresa de telecomunicaciones. Incluye limpieza de datos, pipeline de preprocesamiento con scikit-learn, entrenamiento de un modelo de regresión logística y una app interactiva con Streamlit.',
    descKey: 'projChurnpredictDesc',
    image: '/images/churn360.webp',
    alt: 'ChurnPredict 360',
    tech: ['Python', 'pandas', 'scikit-learn', 'Streamlit'],
    github: 'https://github.com/josemmp2005/churnpredict-360',
    web: null,
  },
  {
    title: 'Gestión de Portfolios',
    description:
      'Aplicación web para la creación y edición de portfolios: proyectos, habilidades y experiencias. Construida con HTML, CSS, PHP y MySQL.',
    descKey: 'projPortfoliosDesc',
    image: '/images/proyectoPortfolio2.webp',
    alt: 'Gestión de Portfolios',
    tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
    github: 'https://github.com/josemmp2005/proyecto_portfolios',
    web: null,
  },
  {
    title: 'Pozos Francisco Matilla',
    description:
      'Sitio informativo sobre localización y servicios de pozos, con diseño responsive y contenido optimizado para móviles.',
    descKey: 'projPozosDesc',
    image: '/images/pozosmatilla.webp',
    alt: 'pozosfranciscomatilla',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: null,
    web: 'https://pozosfranciscomatilla.com/',
  },
  {
    title: 'Agroquímicos Mayén',
    description:
      'Página web corporativa con diseño responsive y panel de administración de productos, construida con Astro.',
    descKey: 'projAgroDesc',
    image: '/images/proyecto-agro.webp',
    alt: 'Agroquímicos Mayén',
    tech: ['Astro'],
    github: 'https://github.com/josemmp2005/AgroMayenWeb',
    web: 'https://agromayen.netlify.app/',
  },
];
