export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completedAt: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "ecommerce-platform",
    title: "Plataforma E-commerce",
    description: "Una plataforma completa de comercio electrónico con diseño responsive y experiencia de usuario optimizada.",
    longDescription: "Desarrollé una plataforma de e-commerce completa utilizando Next.js y Tailwind CSS. La aplicación incluye un sistema de gestión de productos, carrito de compras, procesamiento de pagos con Stripe, y un panel de administración. El diseño se enfoca en la experiencia del usuario con navegación intuitiva y proceso de checkout simplificado.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "Prisma", "PostgreSQL"],
    imageUrl: "/images/projects/ecommerce.jpg",
    projectUrl: "https://ecommerce-demo.example.com",
    githubUrl: "https://github.com/usuario/ecommerce-platform",
    featured: true,
    completedAt: "2024-03-15"
  },
  {
    id: "2",
    slug: "task-management-app",
    title: "App de Gestión de Tareas",
    description: "Aplicación colaborativa para la gestión de proyectos y tareas con interfaz drag-and-drop.",
    longDescription: "Una aplicación web moderna para la gestión de tareas y proyectos con funcionalidades colaborativas. Incluye boards estilo Kanban con drag-and-drop, asignación de tareas, comentarios en tiempo real, y notificaciones. La interfaz está diseñada para ser intuitiva y eficiente, permitiendo a los equipos organizar su trabajo de manera efectiva.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Material-UI"],
    imageUrl: "/images/projects/task-manager.jpg",
    projectUrl: "https://taskmanager-demo.example.com",
    githubUrl: "https://github.com/usuario/task-management",
    featured: true,
    completedAt: "2024-01-20"
  },
  {
    id: "3",
    slug: "weather-dashboard",
    title: "Dashboard del Clima",
    description: "Dashboard interactivo que muestra información meteorológica con visualizaciones de datos en tiempo real.",
    longDescription: "Un dashboard completo del clima que integra múltiples APIs meteorológicas para mostrar condiciones actuales, pronósticos extendidos, y datos históricos. Incluye mapas interactivos, gráficos de tendencias, y alertas meteorológicas. El diseño responsive se adapta perfectamente a diferentes dispositivos y tamaños de pantalla.",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Mapbox", "Vuetify", "PWA"],
    imageUrl: "/images/projects/weather-dashboard.jpg",
    projectUrl: "https://weather-app-demo.example.com",
    githubUrl: "https://github.com/usuario/weather-dashboard",
    featured: false,
    completedAt: "2023-11-10"
  },
  {
    id: "4",
    slug: "portfolio-website",
    title: "Portfolio Personal",
    description: "Sitio web portfolio personal con animaciones suaves y diseño minimalista.",
    longDescription: "Mi portfolio personal desarrollado con un enfoque en el rendimiento y la accesibilidad. Incluye animaciones CSS personalizadas, transiciones suaves, y un sistema de tema claro/oscuro. El sitio está optimizado para SEO y tiene una puntuación perfecta en Lighthouse. Todas las imágenes están optimizadas y el código es completamente accesible.",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "MDX"],
    imageUrl: "/images/projects/portfolio.jpg",
    projectUrl: "https://portfolio.example.com",
    githubUrl: "https://github.com/usuario/portfolio",
    featured: true,
    completedAt: "2024-02-28"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

export function getAllProjects(): Project[] {
  return projects.sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime());
}