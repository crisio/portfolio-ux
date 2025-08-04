import Link from "next/link";

export const metadata = {
  title: "Acerca de - Portfolio UX",
  description: "Conoce más sobre mi experiencia en diseño UX/UI y desarrollo web",
};

export default function AboutPage() {
  const skills = [
    { category: "Diseño UX/UI", items: ["Investigación de usuarios", "Prototipado", "Testing de usabilidad", "Design Systems", "Figma", "Adobe XD"] },
    { category: "Desarrollo Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"] },
    { category: "Herramientas", items: ["Git", "VS Code", "Figma", "Photoshop", "Illustrator", "Notion"] },
  ];

  const experience = [
    {
      title: "Diseñador UX/UI Senior",
      company: "Empresa Tech",
      period: "2022 - Presente",
      description: "Liderazgo en proyectos de diseño de experiencia de usuario para aplicaciones web y móviles. Investigación de usuarios, prototipado y testing."
    },
    {
      title: "Desarrollador Frontend",
      company: "Startup Innovadora",
      period: "2020 - 2022",
      description: "Desarrollo de interfaces de usuario responsivas y accesibles utilizando React y TypeScript. Colaboración estrecha con equipos de diseño."
    },
    {
      title: "Diseñador Web",
      company: "Agencia Digital",
      period: "2018 - 2020",
      description: "Diseño y desarrollo de sitios web corporativos y e-commerce. Enfoque en usabilidad y conversión."
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Acerca de Mí</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soy un diseñador UX/UI y desarrollador frontend apasionado por crear experiencias 
            digitales que conectan con las personas y resuelven problemas reales.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Mi Historia</h2>
              <div className="prose max-w-none text-gray-600 space-y-4">
                <p>
                  Mi pasión por el diseño y la tecnología comenzó hace más de 6 años, cuando descubrí 
                  que podía combinar mi amor por la creatividad con la lógica de la programación. 
                  Desde entonces, me he especializado en crear experiencias digitales que no solo 
                  se ven bien, sino que realmente funcionan para los usuarios.
                </p>
                <p>
                  Creo firmemente en el diseño centrado en el usuario. Cada proyecto comienza con 
                  investigación profunda para entender las necesidades reales de las personas. 
                  Esta metodología me ha permitido crear soluciones que no solo cumplen objetivos 
                  de negocio, sino que genuinamente mejoran la vida de los usuarios.
                </p>
                <p>
                  Cuando no estoy diseñando o programando, me gusta mantenerme al día con las 
                  últimas tendencias en UX/UI, contribuir a proyectos open source, y compartir 
                  conocimientos con la comunidad de diseñadores y desarrolladores.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Experiencia</h2>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="border-l-4 border-primary pl-6">
                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    <div className="text-gray-600 mb-2">
                      <span className="font-medium">{job.company}</span> • {job.period}
                    </div>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Datos Rápidos</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Ubicación:</strong> Ciudad, País</li>
                <li><strong>Experiencia:</strong> 6+ años</li>
                <li><strong>Idiomas:</strong> Español, Inglés</li>
                <li><strong>Especialización:</strong> UX/UI Design</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Descargas</h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block w-full text-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Descargar CV
                </a>
                <a
                  href="#"
                  className="block w-full text-center border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Portfolio PDF
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillCategory, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{skillCategory.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Trabajamos Juntos?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Estoy siempre abierto a nuevos proyectos y oportunidades de colaboración. 
            Si tienes una idea o necesitas ayuda con tu próximo proyecto, ¡me encantaría escucharte!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
          >
            Ponte en Contacto
          </Link>
        </section>
      </div>
    </div>
  );
}