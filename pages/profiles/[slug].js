import Head from "next/head";
import Link from "next/link";
import { getAllProfileSlugs, getProfileBySlug } from "../../lib/profiles";

const ICON_CLASS_MAP = {
  instagram: "fa-brands fa-instagram",
  facebook: "fa-brands fa-facebook-f",
  tiktok: "fa-brands fa-tiktok",
  default: "fa-solid fa-link",
};

export default function ProfilePage({ profile }) {
  if (!profile) {
    return (
      <main className="page">
        <p>Profile not found.</p>
        <Link className="back-link" href="/">
          Back to MandarinCard
        </Link>
      </main>
    );
  }

  const {
    locale,
    metaTitle,
    metaDescription,
    name,
    eyebrow,
    tagline,
    unitTitle,
    rank,
    lastName,
    firstName,
    position,
    profileImage,
    contactActions,
    socialTitle,
    socialLinks,
    bioTitle,
    bio,
    education,
    languages,
    experience,
    hobbies,
    achievements,
  } = profile;
  const socialEntries = Array.isArray(socialLinks) ? socialLinks : [];
  const isK7m9x2 = profile.slug === "k7m9x2";
  
  const downloadLabel = contactActions?.download?.label || "Дугаарыг хадгалах";
  const downloadButton = contactActions?.download?.href ? (
    <a className="button secondary" href={contactActions.download.href} download>
      {downloadLabel}
    </a>
  ) : null;
  const phoneButton = contactActions?.phone?.href ? (
    <a className="button primary" href={contactActions.phone.href}>
      {contactActions.phone.label}
    </a>
  ) : null;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content={locale} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="stylesheet" href="/profile.css" />
      </Head>

      <div className="page" data-locale={locale} data-slug={profile.slug}>
        {isK7m9x2 ? (
          <>
            {/* Narrow top section with logo and unit title */}
            <div className="unit-header-section">
              <img 
                src={`/profile-assets/${profile.slug}/logo.png`} 
                alt="Unit Logo" 
                className="unit-logo"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span className="unit-title">{unitTitle || "Кибер Аюулгүй Байдлын Цэргийн Командлал"}</span>
            </div>

            {/* Profile card with photo and info */}
            <section className="section profile-section">
              <div className="profile-card-content">
                <figure className="profile-photo">
                  <img src={profileImage} alt={name || firstName} />
                </figure>
                <div className="profile-info">
                  <div className="profile-details">
                    <p><strong>Цол:</strong> {rank}</p>
                    <p><strong>Овог:</strong> {lastName}</p>
                    <p><strong>Нэр:</strong> {firstName}</p>
                    <p><strong>Албан тушаал:</strong> {position}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Education Section */}
            {education && (
              <section className="section">
                <h2>{education.title}</h2>
                <ol className="info-list">
                  {education.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </section>
            )}

            {/* Languages Section */}
            {languages && (
              <section className="section">
                <h2>{languages.title}</h2>
                <ul className="info-list">
                  {languages.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Experience Section */}
            {experience && (
              <section className="section">
                <h2>{experience.title}</h2>
                <ol className="info-list">
                  {experience.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </section>
            )}

            {/* Hobbies Section */}
            {hobbies && (
              <section className="section">
                <h2>{hobbies.title}</h2>
                <ol className="info-list">
                  {hobbies.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </section>
            )}

            {/* Achievements Section */}
            {achievements && (
              <section className="section">
                <h2>{achievements.title}</h2>
                <p>{achievements.text}</p>
              </section>
            )}

            {/* Social Links Section */}
            {socialTitle && socialEntries.length > 0 && (
              <section className="section social">
                <h2>{socialTitle}</h2>
                <div className="social-buttons">
                  {socialEntries.map((link) => {
                    const isGmail = link.key === "gmail";
                    const iconClass =
                      ICON_CLASS_MAP[link.key] || ICON_CLASS_MAP.default;
                    const iconClasses = ["social-icon"];
                    if (isGmail) {
                      iconClasses.push("gmail-icon");
                    }

                    return (
                      <a
                        key={link.key}
                        className={`social-link ${link.key}`}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                      >
                        <span className={iconClasses.join(" ")} aria-hidden="true">
                          {isGmail ? (
                            <svg
                              viewBox="0 0 64 64"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path
                                fill="#C5221F"
                                d="M6 16 32 35l26-19V14H6v2Z"
                              />
                              <path
                                fill="#EA4335"
                                d="M50 50.998 58 57c0 0 0-35.833 0-41 0-6-6-6-6-6h-4l-16 12 16 12v16.998Z"
                              />
                              <path
                                fill="#34A853"
                                d="M14 50.998 6 57V16l16 12v16.998l-8 6Z"
                              />
                              <path
                                fill="#FBBC04"
                                d="M50 50.998 32 38v-12l16-12h4c0 0 6 0 6 6 0 4 0 8 0 8l-8 6v16.998Z"
                              />
                              <path
                                fill="#4285F4"
                                d="M14 50.998 22 45V28L6 16v33.153c0 4.847 3.151 7.194 8 1.845Z"
                              />
                            </svg>
                          ) : (
                            <i className={iconClass} aria-hidden="true"></i>
                          )}
                        </span>
                        <span className="social-label">{link.label}</span>
                      </a>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Contact Actions */}
            <section className="section contact-actions-section">
              <div className="contact-actions">
                {downloadButton}
                {phoneButton}
              </div>
            </section>
          </>
        ) : (
          <>
            <header className="profile-card">
              {eyebrow && eyebrow.includes("Кибер аюулгүй байдлын") && (
                <div className="unit-header">
                  <img 
                    src={`/profile-assets/${profile.slug}/logo.png`} 
                    alt="Unit Logo" 
                    className="unit-logo"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div className="unit-text-container">
                    <span className="unit-text-line">Кибер аюулгүй байдлын</span>
                    <span className="unit-text-line">цэргийн командлал</span>
                  </div>
                </div>
              )}
              <div className="profile-card-content">
                <figure className="profile-photo">
                  <img src={profileImage} alt={name} />
                </figure>
                <div className="profile-info">
                  {!eyebrow.includes("Кибер аюулгүй байдлын") && (
                    <p className="eyebrow">{eyebrow}</p>
                  )}
                  <h1>{name}</h1>
                  <p className="tagline">{tagline}</p>
                  <div className="contact-actions">
                    {downloadButton}
                    {phoneButton}
                  </div>
                </div>
              </div>
            </header>

            <main>
              <section className="section bio">
                <h2>{bioTitle}</h2>
                <p>{bio}</p>
              </section>

              <section className="section social">
                <h2>{socialTitle}</h2>
                <div className="social-buttons">
                  {socialEntries.map((link) => {
                    const isGmail = link.key === "gmail";
                    const iconClass =
                      ICON_CLASS_MAP[link.key] || ICON_CLASS_MAP.default;
                    const iconClasses = ["social-icon"];
                    if (isGmail) {
                      iconClasses.push("gmail-icon");
                    }

                    return (
                      <a
                        key={link.key}
                        className={`social-link ${link.key}`}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                      >
                        <span className={iconClasses.join(" ")} aria-hidden="true">
                          {isGmail ? (
                            <svg
                              viewBox="0 0 64 64"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path
                                fill="#C5221F"
                                d="M6 16 32 35l26-19V14H6v2Z"
                              />
                              <path
                                fill="#EA4335"
                                d="M50 50.998 58 57c0 0 0-35.833 0-41 0-6-6-6-6-6h-4l-16 12 16 12v16.998Z"
                              />
                              <path
                                fill="#34A853"
                                d="M14 50.998 6 57V16l16 12v16.998l-8 6Z"
                              />
                              <path
                                fill="#FBBC04"
                                d="M50 50.998 32 38v-12l16-12h4c0 0 6 0 6 6 0 4 0 8 0 8l-8 6v16.998Z"
                              />
                              <path
                                fill="#4285F4"
                                d="M14 50.998 22 45V28L6 16v33.153c0 4.847 3.151 7.194 8 1.845Z"
                              />
                            </svg>
                          ) : (
                            <i className={iconClass} aria-hidden="true"></i>
                          )}
                        </span>
                        <span className="social-label">{link.label}</span>
                      </a>
                    );
                  })}
                </div>
              </section>
            </main>

            <footer className="footer"></footer>
          </>
        )}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getAllProfileSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const profile = getProfileBySlug(params.slug);

  if (!profile) {
    return { notFound: true };
  }

  return {
    props: {
      profile,
    },
  };
}


