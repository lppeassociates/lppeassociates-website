export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          /logo.png
          <nav>
            #servicesServices</a>
            #aboutAbout</a>
            #contactContact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">LP & PE Associates</p>
            <h1>Reliable administrative support for growing businesses.</h1>
            <p className="hero-text">
              Professional clerical, executive and operational support for
              businesses, entrepreneurs and investors across Australia and the
              Asia-Pacific region.
            </p>
            <a href="mailto:info@lppeassociates.com" className="button">
              Enquire Now
            </a>
          </div>

          <div className="hero-card">
            /logo.png
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <p className="section-label">Our Services</p>
          <h2>Practical support, delivered professionally.</h2>

          <div className="services-grid">
            <div className="service-card">
              <span>01</span>
              <h3>Administrative Support</h3>
              <p>
                Day-to-day business administration, clerical assistance and
                general operational support.
              </p>
            </div>

            <div className="service-card">
              <span>02</span>
              <h3>Executive Assistance</h3>
              <p>
                Calendar coordination, correspondence support, scheduling and
                business communications.
              </p>
            </div>

            <div className="service-card">
              <span>03</span>
              <h3>Project Coordination</h3>
              <p>
                Practical follow-up, task coordination and stakeholder support
                to keep work moving.
              </p>
            </div>

            <div className="service-card">
              <span>04</span>
              <h3>Business Support Services</h3>
              <p>
                Flexible back-office support tailored to the needs of growing
                and cross-border businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section dark-section">
        <div className="container split">
          <div>
            <p className="section-label gold">Why LP & PE</p>
            <h2>Organised, responsive and commercially minded.</h2>
          </div>

          <div className="why-list">
            <div>
              <h3>Reliable</h3>
              <p>Dependable administrative support with attention to detail.</p>
            </div>
            <div>
              <h3>Responsive</h3>
              <p>Clear communication and timely assistance when it matters.</p>
            </div>
            <div>
              <h3>Flexible</h3>
              <p>Support that adapts to the needs of your business.</p>
            </div>
            <div>
              <h3>International</h3>
              <p>Assisting clients operating across multiple jurisdictions.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container center">
          /logo.png
          <h2>Ready to discuss your business support needs?</h2>
          <p>
            Contact LP & PE Associates for professional administrative and
            operational support.
          </p>
          <a href="mailto:info@lppeassociates.com" className="button">
            info@lppeassociates.com
          </a>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <p>© LP & PE Associates</p>
          <p>Administrative and business support services</p>
        </div>
      </footer>
    </main>
  )
}
