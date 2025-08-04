import Link from "next/link";
import { getAllProjects } from "@/data/projects";

export const metadata = {
  title: "Proyectos - Portfolio UX",
  description: "Explora todos mis proyectos de diseño UX/UI y desarrollo web",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Todos los Proyectos</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Una colección completa de mis trabajos en diseño UX/UI y desarrollo web, 
          desde conceptos iniciales hasta implementaciones finales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gray-200"></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-semibold text-gray-900">{project.title}</h2>
                {project.featured && (
                  <span className="bg-primary text-white px-2 py-1 text-xs rounded-full">
                    Destacado
                  </span>
                )}
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {new Date(project.completedAt).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long'
                  })}
                </span>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Ver proyecto →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}