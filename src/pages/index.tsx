import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bayes Data Technology | Inteligencia y Seguridad para Casinos</title>
        <meta
          name="description"
          content="Bayes Data Technology ofrece soluciones de inteligencia de negocios y seguridad avanzadas para casinos."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Barra de navegación fija */}
      <header className="navbar">
        <div className="nav-container">
          <div className="logo">Bayes Data Technology</div>
          <nav>
            <Link href="#" className="nav-link">
              Inicio
            </Link>
            <Link href="#services" className="nav-link">
              Servicios
            </Link>
            <Link href="#product" className="nav-link">
              Producto
            </Link>
            <Link href="#about" className="nav-link">
              Nosotros
            </Link>
            <Link href="#contact" className="nav-link">
              Contacto
            </Link>
          </nav>
          <Link href="#contact" className="nav-cta">
            Contáctanos
          </Link>
        </div>
      </header>

      <main>
        {/* Sección Hero enfocada en la empresa */}
        <section className="hero">
          <span className="badge">Soluciones de analítica y seguridad para casinos</span>
          <h1>
            Transformando el sector del juego{' '}
            <span className="gradient-text">con datos y confianza</span>
          </h1>
          <p className="subtitle">
            En Bayes Data Technology combinamos inteligencia de negocios con seguridad de vanguardia
            para que tu casino tome mejores decisiones y opere sin riesgos.
          </p>
          <div className="buttons">
            <Link href="#services" className="btn btn-primary">
              Conoce nuestros servicios
            </Link>
            <Link href="#product" className="btn btn-secondary">
              Ver nuestro producto
            </Link>
          </div>
        </section>

        {/* Sección de Servicios */}
        <section id="services" className="features">
          <h2>Servicios</h2>
          <div className="feature-list">
            <div className="feature">
              <h3>Analítica y Datos</h3>
              <p>
                Construimos paneles personalizados y reportes en tiempo real para que entiendas cada
                detalle de tu operación y aumentes la rentabilidad.
              </p>
            </div>
            <div className="feature">
              <h3>Seguridad y Cumplimiento</h3>
              <p>
                Implementamos sistemas de vigilancia y detección de fraudes basados en inteligencia
                artificial para proteger tus activos y cumplir con la normativa.
              </p>
            </div>
            <div className="feature">
              <h3>Consultoría e Integración</h3>
              <p>
                Nuestro equipo integra nuestras soluciones con tus sistemas existentes y asesora en
                la optimización de procesos para maximizar resultados.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de Producto */}
        <section id="product" className="features">
          <h2>Turing: Nuestra Plataforma</h2>
          <p>
            Turing es nuestra plataforma insignia que reúce analítica avanzada y seguridad integral
            en una única solución.
          </p>
          <div className="feature-list">
            <div className="feature">
              <h3>Monitorización Proactiva</h3>
              <p>
                Detecta patrones anómalos y riesgos potenciales antes de que se conviertan en
                problemas gracias a algoritmos de aprendizaje automático.
              </p>
            </div>
            <div className="feature">
              <h3>Seguridad Integral</h3>
              <p>
                Combina vigilancia en tiempo real con análisis de comportamiento para reducir el
                fraude y garantizar un entorno seguro.
              </p>
            </div>
            <div className="feature">
              <h3>Arquitectura Flexible</h3>
              <p>
                Diseñada para integrarse con tus sistemas actuales mediante API y adaptarse a
                diferentes operaciones de casinos.
              </p>
            </div>
          </div>
        </section>

        {/* Sección Nosotros */}
        <section id="about" className="about">
          <h2>Nosotros</h2>
          <p>
            En Bayes Data Technology somos un equipo de expertos en analítica de datos y seguridad
            para casinos. Nuestro objetivo es ayudar a las empresas del sector a adoptar una cultura
            basada en datos y a proteger sus operaciones frente a amenazas emergentes.
          </p>
        </section>

        {/* Sección de Contacto */}
        <section id="contact" className="contact">
          <h2>Contáctanos</h2>
          <p>
            ¿Quieres saber cómo podemos ayudar a tu casino? Escríbenos y nuestro equipo te mostrará
            cómo mejorar tu operación con nuestras soluciones y con Turing.
          </p>
          <a href="mailto:info@bayesdatatechnology.com" className="btn btn-primary">
            Enviar correo
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
