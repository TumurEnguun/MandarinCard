import fs from "fs";
import path from "path";
import Head from "next/head";
import { useCallback, useState } from "react";

const TEL_URI = "+97680094430";
const DISPLAY_PHONE = "+976 8009 4430";
const CALL_LABEL = "\u0443\u0442\u0430\u0441\u0430\u0430\u0440 \u0437\u0430\u043b\u0433\u0430\u0445";
const SAVE_LABEL = "\u0434\u0443\u0433\u0430\u0430\u0440\u044B\u0433 \u0445\u0443\u0443\u043b\u0431\u0430\u0440\u043b\u0430\u0445";
const TOAST_MESSAGE = "\u0434\u0443\u0433\u0430\u0430\u0440\u044B\u0433 \u0445\u0443\u0443\u043b\u043b\u0430\u0430";

const styles = {
  page: {
    margin: 0,
    padding: 0,
    minHeight: "100vh",
    backgroundColor: "#03060d",
    display: "flex",
    flexDirection: "column",
  },
  slideStack: {
    flex: 1,
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
  footer: {
    backgroundColor: "#02040a",
    padding: "2.75rem 1.5rem 3.5rem",
    display: "flex",
    justifyContent: "center",
    borderTop: "1px solid rgba(255, 122, 24, 0.08)",
  },
  buttonGroup: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    maxWidth: "420px",
    width: "100%",
  },
  button: {
    flex: "1 1 200px",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "9999px",
    padding: "1rem 1.75rem",
    fontSize: "0.95rem",
    fontWeight: 800,
    cursor: "pointer",
    letterSpacing: "0.08em",
    textTransform: "none",
    transition:
      "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease, background-position 0.6s ease",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "200% 200%",
    backgroundPosition: "0% 50%",
    position: "relative",
    overflow: "hidden",
  },
  callButton: {
    color: "#060606",
    backgroundImage:
      "linear-gradient(135deg, rgba(255, 145, 0, 0.92) 0%, rgba(255, 187, 92, 0.95) 40%, rgba(255, 231, 195, 0.98) 100%)",
    boxShadow: "0 10px 30px rgba(255, 152, 58, 0.32)",
    border: "1px solid rgba(255, 174, 63, 0.55)",
  },
  saveButton: {
    color: "#f8fafc",
    backgroundImage:
      "linear-gradient(135deg, rgba(17, 24, 39, 0.35) 0%, rgba(7, 11, 21, 0.9) 100%)",
    border: "1px solid rgba(255, 140, 55, 0.5)",
    boxShadow: "0 10px 30px rgba(255, 140, 55, 0.28)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
  },
  buttonLabel: {
    display: "inline-block",
    lineHeight: 1.2,
    fontFamily: "inherit",
  },
  toastContainer: {
    position: "fixed",
    bottom: "1.5rem",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1000,
    pointerEvents: "none",
  },
  toast: {
    background: "rgba(3, 7, 18, 0.92)",
    color: "#f8fafc",
    padding: "0.85rem 1.25rem",
    borderRadius: "9999px",
    fontSize: "0.95rem",
    fontWeight: 600,
    letterSpacing: "0.03em",
    boxShadow: "0 18px 40px rgba(8, 47, 73, 0.45)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.6rem",
    opacity: 0,
    transition: "opacity 0.25s ease",
  },
  toastVisible: {
    opacity: 1,
  },
  toastAccent: {
    display: "inline-block",
    width: "0.55rem",
    height: "0.55rem",
    borderRadius: "9999px",
    background: "linear-gradient(135deg, #ff851b, #ffd29d)",
    boxShadow: "0 0 12px rgba(255, 221, 157, 0.6)",
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
  const [isToastVisible, setToastVisible] = useState(false);

  const handleCallClick = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.location.href = `tel:${TEL_URI}`;
  }, []);

  const handleSaveContactClick = useCallback(async () => {
    if (typeof navigator === "undefined" || typeof window === "undefined") {
      return;
    }

    try {
      await navigator.clipboard.writeText(TEL_URI);
      setToastVisible(true);
      window.setTimeout(() => setToastVisible(false), 2200);
    } catch {
      window.location.href = `tel:${TEL_URI}`;
    }
  }, []);

  return (
    <>
      <Head>
        <title>Adify Client Deck</title>
        <meta name="description" content="Adify client presentation slides" />
      </Head>
      <main style={styles.page}>
        <div style={styles.slideStack}>
          {slides.map((src) => (
            <section key={src} style={styles.slide}>
              <img src={src} alt="" style={styles.image} loading="lazy" />
            </section>
          ))}
        </div>
        <footer style={styles.footer}>
          <div style={styles.buttonGroup}>
            <button
              type="button"
              style={{ ...styles.button, ...styles.callButton }}
              onClick={handleCallClick}
              onMouseEnter={(event) => {
                event.currentTarget.style.transform = "translateY(-2px)";
                event.currentTarget.style.opacity = "0.95";
                event.currentTarget.style.backgroundPosition = "100% 50%";
                event.currentTarget.style.boxShadow = "0 24px 68px rgba(255, 152, 58, 0.5)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform = "translateY(0)";
                event.currentTarget.style.opacity = "1";
                event.currentTarget.style.backgroundPosition = "0% 50%";
                event.currentTarget.style.boxShadow = styles.callButton.boxShadow;
              }}
            >
              <span style={styles.buttonLabel}>{CALL_LABEL}</span>
            </button>
            <button
              type="button"
              style={{ ...styles.button, ...styles.saveButton }}
              onClick={handleSaveContactClick}
              onMouseEnter={(event) => {
                event.currentTarget.style.transform = "translateY(-2px)";
                event.currentTarget.style.opacity = "0.95";
                event.currentTarget.style.backgroundPosition = "100% 50%";
                event.currentTarget.style.boxShadow = "0 24px 64px rgba(255, 140, 55, 0.45)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform = "translateY(0)";
                event.currentTarget.style.opacity = "1";
                event.currentTarget.style.backgroundPosition = "0% 50%";
                event.currentTarget.style.boxShadow = styles.saveButton.boxShadow;
              }}
            >
              <span style={styles.buttonLabel}>{SAVE_LABEL}</span>
            </button>
          </div>
        </footer>
      </main>
      <div style={styles.toastContainer}>
        <div
          style={{
            ...styles.toast,
            ...(isToastVisible ? styles.toastVisible : undefined),
          }}
        >
          <span style={styles.toastAccent} />
          {TOAST_MESSAGE}
        </div>
      </div>
    </>
  );
}
