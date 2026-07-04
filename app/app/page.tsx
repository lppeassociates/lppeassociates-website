export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif' }}>
      <section
        style={{
          background: '#0f172a',
          color: 'white',
          padding: '100px 20px',
          textAlign: 'center',
        }}
      >
        <h1>LP & PE Associates</h1>

        <h2>
          Strategic Advisory, Professional Services and Cross‑Border Business Support
        </h2>

        <p>
          Helping businesses, entrepreneurs and investors navigate growth,
          administration, compliance and international operations.
        </p>

        <p>
          <a
            href="mailto:info@lppeassociates.com"
            style={{
              background: 'white',
              color: '#0f172a',
              padding: '12px 20px',
              textDecoration: 'none',
              borderRadius: '6px',
            }}
          >
            Contact Us
          </a>
        </p>
      </section>

      <section style={{ padding: '60px 20px' }}>
        <h2>Our Services</h2>

        <ul>
          <li>Business Advisory</li>
          <li>Corporate Support Services</li>
          <li>Documentation & Administration</li>
          <li>Cross-Border Business Support</li>
        </ul>
      </section>

      <section
        style={{
          padding: '60px 20px',
          background: '#f8fafc',
        }}
      >
        <h2>Why Choose Us</h2>

        <ul>
          <li>Commercially focused</li>
          <li>Responsive service</li>
          <li>International perspective</li>
          <li>Trusted professional network</li>
        </ul>
      </section>

      <section style={{ padding: '60px 20px' }}>
        <h2>Contact</h2>

        <p>Email: info@lppeassociates.com</p>
      </section>
    </main>
  )
}
