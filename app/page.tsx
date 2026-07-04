export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#0B1F33',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px',
        fontFamily: 'Georgia, "Times New Roman", serif',
      }}
    >
      <div style={{ maxWidth: '640px' }}>
        <img
          src="/logo.png"
          alt="LP & PE Associates"
          style={{ width: '260px', marginBottom: '48px' }}
        />

        <h1
          style={{
            fontSize: '48px',
            letterSpacing: '-0.02em',
            marginBottom: '24px',
          }}
        >
          Our website is coming soon.
        </h1>

        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.6,
            color: '#CBD5E1',
            fontFamily: 'Arial, Helvetica, sans-serif',
            marginBottom: '40px',
          }}
        >
          LP & PE Associates provides professional administrative and
          business support services. For enquiries, please contact us
          directly.
        </p>

        <a
          href="mailto:info@lppeassociates.com"
          style={{
            display: 'inline-block',
            background: '#C8A96A',
            color: '#0B1F33',
            padding: '14px 28px',
            borderRadius: '999px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: 'bold',
