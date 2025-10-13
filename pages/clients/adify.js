
import fs from "fs";
import path from "path";
import Head from "next/head";

const styles = {
  page: {
    margin: 0,
    padding: 0,
    backgroundColor: "#000",
    lineHeight: 0,
  },
  slide: {
    margin: 0,
    padding: 0,
  },
  image: {
    display: "block",
    width: "100%",
    height: "auto",
  },
};

export async function getStaticProps() {
  const slidesDir = path.join(process.cwd(), "public", "clients");
  const files = await fs.promises.readdir(slidesDir);
  const slides = files
    .filter((file) => /^adify-\d+\.png$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
    .map((file) => `/clients/${file}`);

  return {
    props: {
      slides,
    },
  };
}

export default function AdifyClientPage({ slides = [] }) {
  return (
    <>
      <Head>
        <title>Adify Client Deck</title>
        <meta name="description" content="Adify client presentation slides" />
      </Head>
      <main style={styles.page}>
        {slides.map((src) => (
          <section key={src} style={styles.slide}>
            <img src={src} alt="" style={styles.image} loading="lazy" />
          </section>
        ))}
      </main>
    </>
  );
}
