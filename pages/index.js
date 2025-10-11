import Head from "next/head";
import Link from "next/link";
import { getSampleProfileSlug } from "../lib/profiles";

export default function Home({ sampleProfileSlug }) {
  const year = new Date().getFullYear();
  const sampleProfilePath = sampleProfileSlug ? `/profiles/${sampleProfileSlug}` : "#";

  return (
    <>
      <Head>
        <title>MandarinCard | Modern NFC Business Cards</title>
        <meta
          name="description"
          content="MandarinCard delivers memorable contact experiences with NFC-enabled business cards."
        />
      </Head>

      <header className="hero">
        <nav className="nav">
          <span className="logo">MandarinCard</span>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#cta">Get Yours</a>
          </div>
        </nav>

        <div className="hero-content">
          <span className="hero-eyebrow">Digital business cards</span>
          <h1>Make Every Introduction Count</h1>
          <p>
            MandarinCard delivers memorable contact experiences with NFC-enabled cards that share your brand instantly.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#cta">
              Order a MandarinCard
            </a>
            {sampleProfileSlug ? (
              <Link className="button secondary" href={sampleProfilePath}>
                View a Live Profile
              </Link>
            ) : null}
          </div>
        </div>

        <div className="hero-card">
          <p className="card-title">Tap. Share. Connect.</p>
          <p className="card-body">
            One tap is all it takes to share your full digital profile, social links, and contact info.
          </p>
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <div className="section-heading">
            <span className="eyebrow">Why MandarinCard?</span>
            <h2>Elevate networking with a smarter business card</h2>
          </div>
          <div className="grid three">
            <article className="feature">
              <h3>NFC-powered</h3>
              <p>Instantly transfer your profile to any modern smartphone via a simple tap or QR scan.</p>
            </article>
            <article className="feature">
              <h3>On-brand design</h3>
              <p>Tailor your MandarinCard to match your brand colors, photos, and messaging.</p>
            </article>
            <article className="feature">
              <h3>Always up to date</h3>
              <p>Edit your digital profile anytime so new connections always get the latest details.</p>
            </article>
          </div>
        </section>

        <section id="features" className="section alt">
          <div className="section-heading">
            <span className="eyebrow">How it works</span>
            <h2>From first tap to lasting relationships</h2>
          </div>
          <div className="grid two">
            <article className="card">
              <h3>1. Tap to share</h3>
              <p>NFC and QR options ensure your profile opens instantly on any device.</p>
            </article>
            <article className="card">
              <h3>2. Showcase your brand</h3>
              <p>Highlight services, testimonials, and social proof to win trust right away.</p>
            </article>
            <article className="card">
              <h3>3. Capture leads</h3>
              <p>Include contact capture forms or direct call buttons to close the loop.</p>
            </article>
            <article className="card">
              <h3>4. Track engagement</h3>
              <p>Analytics-ready links let you understand which info resonates most.</p>
            </article>
          </div>
        </section>

        <section className="section testimonials">
          <div className="section-heading">
            <span className="eyebrow">Trusted by professionals</span>
            <h2>What our customers say</h2>
          </div>
          <div className="grid three">
            <blockquote>
              <p>"Every meeting ends with a wow moment. MandarinCard makes it effortless to stay in touch."</p>
              <cite>- Bold Vision Media</cite>
            </blockquote>
            <blockquote>
              <p>"I love how I can update my offerings anytime. It keeps my pitch fresh and relevant."</p>
              <cite>- Sofia Tran, Consultant</cite>
            </blockquote>
            <blockquote>
              <p>"The analytics helped us refine our sales story. A must-have tool for modern teams."</p>
              <cite>- Northbound Creative</cite>
            </blockquote>
          </div>
        </section>

        <section id="cta" className="section cta">
          <div className="cta-content">
            <h2>Ready to make your next introduction unforgettable?</h2>
            <p>Contact us to design your custom MandarinCard set and launch your digital-first brand experience.</p>
            <a className="button primary" href="mailto:hello@mandarincard.com">
              Start Your Order
            </a>
          </div>
          <div className="cta-aside">
            <p className="cta-note">Prefer a hands-on demo?</p>
            {sampleProfileSlug ? (
              <Link className="button secondary" href={sampleProfilePath}>
                Explore a sample profile
              </Link>
            ) : null}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {year} MandarinCard. All rights reserved.</p>
      </footer>
    </>
  );
}

export async function getStaticProps() {
  const sampleProfileSlug = getSampleProfileSlug();
  return {
    props: {
      sampleProfileSlug,
    },
  };
}
