import Head from 'next/head';
import Link from 'next/link';

/**
 * Página principal de la landing de Turing. Presenta el producto,
 * destaca sus características clave y ofrece un llamado a la acción.
 * Su estilo general se define en src/styles/globals.css.
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Turing | Inteligencia de Negocios y Seguridad para Casinos</title>
        <meta
          name="description"
          content="Turing ofrece inteligencia de negocios en tiempo real y seguridad avanzada para casinos modernos."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Barra de navegación fija */}
      <header className="navbar">
        {/* Contenedor del menú para darle bordes redondeados como en AiNest */}
        <div className="nav-container">
          <div className="logo">Turing</div>
          <nav>
            <Link href="#" className="nav-link">
              Inicio
            </Link>
            <Link href="#features" className="nav-link">
              Características
            </Link>
            <Link href="#about" className="nav-link">
              Nosotros
            </Link>
            <Link href="#contact" className="nav-link">
              Contacto
            </Link>
          </nav>
          <Link href="#contact" className="nav-cta">
            Empezar
          </Link>
        </div>
      </header>

      <main>
        {/* Sección Hero con llamada a la acción */}
        <section className="hero">
          <span className="badge">Inteligencia y seguridad impulsadas por IA</span>
          <h1>
            Operaciones de casino más inteligentes,{' '}
            <span className="gradient-text">seguridad sin fricciones</span>
          </h1>
          <p className="subtitle">
            Optimiza tu sala de juego con análisis en tiempo real y protege cada movimiento con seguridad avanzada.
          </p>
          <div className="buttons">
            <Link href="#contact" className="btn btn-primary">
              Empezar
            </Link>
            <Link href="#features" className="btn btn-secondary">
              Saber más
            </Link>
          </div>
        </section>

        {/* Sección de Características */}
        <section id="features" className="features">
          <h2>Características</h2>
          <div className="feature-list">
            <div className="feature">
              <h3>Analítica en tiempo real</h3>
              <p>
                Supervisa todos los aspectos de tu casino con paneles interactivos
                e información basada en datos en tiempo real.
              </p>
            </div>
            <div className="feature">
              <h3>Seguridad avanzada</h3>
              <p>
                Protege tus activos con detección de fraudes impulsada por IA,
                integración con vigilancia y supervisión continua del riesgo.
              </p>
            </div>
            <div className="feature">
              <h3>Integración sin problemas</h3>
              <p>
                Conecta Turing fácilmente con sistemas de gestión existentes mediante
                APIs modernas y conectores listos para usar.
              </p>
            </div>
          </div>
        </section>

        {/* Sección Nosotros / Acerca de */}
        <section id="about" className="about">
          <h2>Nosotros</h2>
          <p>
            Turing es un sistema en línea que combina una potente inteligencia de
            negocios con seguridad de nivel empresarial diseñada para casinos.
            Nuestra plataforma permite a los responsables tomar decisiones basadas
            en información útil mientras protege las operaciones de amenazas,
            asegurando una experiencia de juego fluida y segura.
          </p>
        </section>

        {/* Sección de Contacto */}
        <section id="contact" className="contact">
          <h2>Contáctanos</h2>
          <p>
            ¿Listo para transformar las operaciones de tu casino? Comunícate con
            nuestro equipo para descubrir cómo Turing puede ayudar a que tu
            negocio prospere.
          </p>
          <a href="mailto:info@bayesdatatechnology.com" className="btn btn-primary">
            Contactar ventas
          </a>
        </section>
      </main>

      <footer>
        <p>
          &copy; {new Date().getFullYear()} Bayes Data Technology. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}
