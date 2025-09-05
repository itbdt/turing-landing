import Head from 'next/head';
import Link from 'next/link';

/**
 * Home page for the Turing landing site. This page introduces the
 * product, highlights key features, and provides a call to action
 * for prospective customers. The styling for this page can be found
 * in src/styles/globals.css.
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Turing | Business Intelligence & Security for Casinos</title>
        <meta
          name="description"
          content="Turing delivers real‑time business intelligence and advanced security for modern casinos."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Site navigation fixed at the top */}
      <header className="navbar">
        <div className="logo">Turing</div>
        <nav>
          <Link href="#" passHref className="nav-link">
            Home
          </Link>
          <Link href="#features" passHref className="nav-link">
            Features
          </Link>
          <Link href="#about" passHref className="nav-link">
            About
          </Link>
          <Link href="#contact" passHref className="nav-link">
            Contact
          </Link>
        </nav>
        <Link href="#contact" className="nav-cta">
          Get Started
        </Link>
      </header>

      <main>
        {/* Hero section with headline and call‑to‑action */}
        <section className="hero">
          <span className="badge">AI‑powered intelligence & security</span>
          <h1>
            Smarter Casino Operations,{' '}
            <span className="gradient-text">Seamless Security</span>
          </h1>
          <p className="subtitle">
            Streamline your gaming floor with real‑time analytics and safeguard
            every move with advanced security.
          </p>
          <div className="buttons">
            <Link href="#contact" className="btn btn-primary">
              Get Started
            </Link>
            <Link href="#features" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </section>

        {/* Features section */}
        <section id="features" className="features">
          <h2>Features</h2>
          <div className="feature-list">
            <div className="feature">
              <h3>Real‑Time Analytics</h3>
              <p>
                Monitor every aspect of your casino’s operations with interactive
                dashboards and data‑driven insights delivered in real time.
              </p>
            </div>
            <div className="feature">
              <h3>Advanced Security</h3>
              <p>
                Protect your assets with AI‑powered fraud detection, surveillance
                integration and continuous risk monitoring.
              </p>
            </div>
            <div className="feature">
              <h3>Seamless Integration</h3>
              <p>
                Connect Turing effortlessly with existing management systems via
                modern APIs and ready‑to‑use connectors.
              </p>
            </div>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="about">
          <h2>About Turing</h2>
          <p>
            Turing is an online system that combines powerful business
            intelligence with enterprise‑grade security tailored for casinos. Our
            platform empowers decision‑makers with actionable insights while
            safeguarding operations against threats, ensuring a seamless and
            secure gaming experience.
          </p>
        </section>

        {/* Contact section */}
        <section id="contact" className="contact">
          <h2>Contact Us</h2>
          <p>
            Ready to transform your casino operations? Reach out to our team to
            learn how Turing can help your business thrive.
          </p>
          <a href="mailto:info@bayesdatatechnology.com" className="btn btn-primary">
            Contact Sales
          </a>
        </section>
      </main>

      <footer>
        <p>
          &copy; {new Date().getFullYear()} Bayes Data Technology. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}
