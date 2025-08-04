export const metadata = {
  title: "Contacto - Portfolio UX",
  description: "Ponte en contacto conmigo para discutir tu próximo proyecto",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría saber más sobre tu idea 
            y cómo puedo ayudarte a hacerla realidad.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíame un Mensaje</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa/Organización
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Nombre de tu empresa (opcional)"
                />
              </div>

              <div>
                <label htmlFor="project-type" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Proyecto
                </label>
                <select
                  id="project-type"
                  name="project-type"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="web-design">Diseño Web</option>
                  <option value="ux-ui">Diseño UX/UI</option>
                  <option value="frontend-dev">Desarrollo Frontend</option>
                  <option value="full-project">Proyecto Completo</option>
                  <option value="consultation">Consultoría</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Presupuesto Estimado
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                >
                  <option value="">Selecciona un rango</option>
                  <option value="under-5k">Menos de $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="over-50k">Más de $50,000</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Cuéntame sobre tu proyecto, objetivos, timeline, y cualquier detalle que consideres importante..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">¿Prefieres el email directo?</h3>
                <p className="text-gray-600 mb-4">
                  También puedes escribirme directamente a mi email personal:
                </p>
                <a
                  href="mailto:hola@portfolio.com"
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  hola@portfolio.com
                </a>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Sígueme en redes</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Dribbble
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tiempo de Respuesta</h3>
                <p className="text-gray-600">
                  Generalmente respondo en menos de 24 horas durante días laborables. 
                  Para proyectos urgentes, no dudes en mencionarlo en tu mensaje.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                📋 ¿Listo para empezar?
              </h3>
              <p className="text-gray-600 text-sm">
                Para acelerar el proceso, incluye en tu mensaje: objetivos del proyecto, 
                timeline deseado, referencias visuales si las tienes, y cualquier 
                restricción técnica o presupuestaria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}