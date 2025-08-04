import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: `${project.title} - Portfolio UX`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-primary">
              Inicio
            </Link>
          </li>
          <li className="mx-2">/</li>
          <li>
            <Link href="/projects" className="hover:text-primary">
              Proyectos
            </Link>
          </li>
          <li className="mx-2">/</li>
          <li className="text-gray-900 font-medium">{project.title}</li>
        </ol>
      </nav>

      <div className="max-w-4xl mx-auto">
        {/* Project Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
            {project.featured && (
              <span className="bg-primary text-white px-3 py-1 text-sm rounded-full">
                Destacado
              </span>
            )}
          </div>
          <p className="text-xl text-gray-600 mb-6">{project.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Ver proyecto en vivo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors"
              >
                Ver código
              </a>
            )}
          </div>

          <div className="text-sm text-gray-500">
            Completado en {new Date(project.completedAt).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long'
            })}
          </div>
        </header>

        {/* Project Image */}
        <div className="mb-8">
          <div className="w-full h-96 bg-gray-200 rounded-lg"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción del Proyecto</h2>
              <div className="prose max-w-none text-gray-600">
                <p>{project.longDescription}</p>
              </div>
            </section>

            {/* Additional sections could go here */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Proceso de Diseño</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  El proceso de desarrollo de este proyecto incluyó investigación de usuarios, 
                  prototipado, testing de usabilidad, y iteraciones basadas en feedback. 
                  Cada decisión de diseño fue guiada por datos y centrada en la experiencia del usuario.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tecnologías Utilizadas</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link
              href="/projects"
              className="text-primary hover:text-primary/80 font-medium"
            >
              ← Volver a proyectos
            </Link>
            <Link
              href="/contact"
              className="text-primary hover:text-primary/80 font-medium"
            >
              ¿Te interesa trabajar juntos? →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}