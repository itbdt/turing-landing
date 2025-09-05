import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Turing | Business Intelligence & Security for Casinos</title>
        <meta name="description" content="Turing system for casino business intelligence and security." />
      </Head>
      <section className="hero">
        <div className="hero-inner">
          <h1>Turing</h1>
          <p>Business Intelligence & Security for Casinos</p>
        </div>
      </section>
      <section className="features">
        <h2>Powerful Insights & Protection</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>Real-time Analytics</h3>
            <p>Monitor gaming activity with live dashboards and actionable data.</p>
          </div>
          <div className="feature">
            <h3>Fraud Detection</h3>
            <p>AI-driven security to detect and prevent suspicious behaviour instantly.</p>
          </div>
          <div className="feature">
            <h3>Compliance Tools</h3>
            <p>Meet regulatory requirements with automated reporting and alerts.</p>
          </div>
        </div>
      </section>
      <section className="cta">
        <h2>Ready to enhance your casino?</h2>
        <p>Contact us to see how Turing can transform your operations.</p>
        <a href="mailto:info@bayesdatatechnology.com" className="btn">Get in Touch</a>
      </section>
    </>
  )
}
