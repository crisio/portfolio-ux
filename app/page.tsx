import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Hola, soy <span className="text-primary">Diseñador UX</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Creo experiencias digitales centradas en el usuario que combinan diseño intuitivo 
          con desarrollo web moderno para resolver problemas reales.
        </p>
        <div className="flex gap-4 justify-center flex-col sm:flex-row max-w-sm mx-auto sm:max-w-none">
          <Link
            href="/projects"
            className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
          >
            Ver Proyectos
          </Link>
          <Link
            href="/contact"
            className="border border-primary text-primary px-8 py-3 rounded-md hover:bg-primary hover:text-white transition-colors font-medium"
          >
            Contacto
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proyectos Destacados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes en diseño UX/UI y desarrollo web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Ver detalles →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/projects"
            className="text-primary hover:text-primary/80 font-medium"
          >
            Ver todos los proyectos →
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 bg-gray-50 -mx-4 px-4 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre Mí</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Soy un diseñador UX/UI y desarrollador frontend con pasión por crear experiencias 
            digitales que realmente importan. Me especializo en investigación de usuarios, 
            prototipado, y desarrollo con tecnologías modernas como React y Next.js.
          </p>
          <Link
            href="/about"
            className="inline-block mt-6 text-primary hover:text-primary/80 font-medium"
          >
            Conoce más sobre mí →
          </Link>
        </div>
      </section>
    </div>
  );
}
