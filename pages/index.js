import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { getSampleProfileSlug } from "../lib/profiles";

export default function Home({ sampleProfileSlug }) {
  const year = new Date().getFullYear();
  const sampleProfilePath = sampleProfileSlug ? `/profiles/${sampleProfileSlug}` : "#";

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  return (
    <>
      <Head>
        <title>MandarinCard | Орчин үеийн NFC нэрийн хуудас</title>
        <meta
          name="description"
          content="MandarinCard нь NFC технологитой нэрийн хуудсаар танилцуулалтыг нэг даралтаар хүргэдэг."
        />
      </Head>

      <header className="hero">
        <nav className="nav">
          <div className="logo">
            <img src="/brand/logo.png" alt="MandarinCard лого" />
            <span>MandarinCard</span>
          </div>
          <div className="nav-links">
            <a href="#about">Бидний тухай</a>
            <a href="#features">Шийдлүүд</a>
            <a href="#cta">Захиалга</a>
          </div>
        </nav>

        <div className="hero-visual hero-visual--solo">
          <div className="floating-card">
            <span className="floating-card__wordmark" data-wordmark="MandarinCard">
              MandarinCard
            </span>
            <div className="floating-card__crest" aria-hidden="true" />
          </div>
          <div className="card-shadow" />
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <div className="hero-content hero-copy">
            <span className="hero-eyebrow">Дижитал нэрийн хуудас</span>
            <h1>Танилцуулалт бүрийг үнэ цэнтэй болгоё</h1>
            <p>MandarinCard нь NFC технологитой нэрийн хуудасаар танай брэндийг нэг хүрэлтээр санамжтай хүргэнэ.</p>
            <div className="hero-actions">
              <a className="button primary" href="#cta">
                MandarinCard захиалах
              </a>
              {sampleProfileSlug ? (
                <Link className="button secondary" href={sampleProfilePath}>
                  Амьд профайлыг үзэх
                </Link>
              ) : null}
            </div>
          </div>
        </section>

        <section id="features" className="section alt">
          <div className="section-heading">
            <span className="eyebrow">Хэрхэн ажилладаг вэ</span>
            <h2>Эхний хүрэлтээс урт хугацааны харилцаа руу</h2>
          </div>
          <div className="grid two">
            <article className="card">
              <h3>1. Нэг хүрэлтээр хуваалц</h3>
              <p>NFC болон QR сонголт таны профайлыг ямар ч төхөөрөмж дээр тэр даруй нээнэ.</p>
            </article>
            <article className="card">
              <h3>2. Брэндээ тодруул</h3>
              <p>Үйлчилгээ, үйлчлүүлэгчийн сэтгэгдэл, нотолгоог ил гаргаж шууд итгэл төрүүл.</p>
            </article>
            <article className="card">
              <h3>3. Харилцагч бүрийг бүртгэ</h3>
              <p>Холбоо барих форм, шууд залгах товчоор харилцааг тасралтгүй үргэлжлүүл.</p>
            </article>
            <article className="card">
              <h3>4. Оролцоог хэмж</h3>
              <p>Аналитикт бэлэн холбоосууд аль мэдээлэл хамгийн их сэтгэгдэл төрүүлж байгааг харуулна.</p>
            </article>
          </div>
        </section>

        <section className="section testimonials">
          <div className="section-heading">
            <span className="eyebrow">Мэргэжилтнүүдийн итгэл</span>
            <h2>Хэрэглэгчдийн сэтгэгдэл</h2>
          </div>
          <div className="grid three">
            <blockquote>
              <p>"Уулзалт бүр гайхалтай өндөрлөдөг. MandarinCard-тай бол харилцааг хадгалах үнэхээр амар."</p>
              <cite>- Bold Vision Media</cite>
            </blockquote>
            <blockquote>
              <p>"Үйлчилгээний мэдээллээ хүссэн үедээ шинэчилж болдог нь надад их таалагддаг. Үргэлж шинэ саналаар очих боломжтой."</p>
              <cite>- Софиа Тран, зөвлөх</cite>
            </blockquote>
            <blockquote>
              <p>"Аналитик нь бидний борлуулалтын өгүүлэмжийг илүү оновчтой болгов. Орчин үеийн баг бүрийн зайлшгүй хэрэгсэл."</p>
              <cite>- Northbound Creative</cite>
            </blockquote>
          </div>
        </section>

        <section id="cta" className="section cta">
          <div className="cta-content">
            <h2>Дараагийн танилцуулалтаа мартагдашгүй болгох уу?</h2>
            <p>Өөрийн брэндэд тохирсон MandarinCard-аа бүтээж, дижитал танилцуулгаа эхлүүлэхийн тулд бидэнтэй холбогдоорой.</p>
            <a className="button primary" href="mailto:hello@mandarincard.com">
              Захиалга өгөх
            </a>
          </div>
          <div className="cta-aside">
            <p className="cta-note">Гараараа туршиж үзэхийг хүсэж байна уу?</p>
            {sampleProfileSlug ? (
              <Link className="button secondary" href={sampleProfilePath}>
                Жишээ профайлыг үзэх
              </Link>
            ) : null}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {year} MandarinCard. Бүх эрх хуулиар хамгаалагдсан.</p>
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
