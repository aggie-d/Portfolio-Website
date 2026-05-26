import Reveal from './Reveal'
import { useTheme } from './ThemeContext'

const contactLinks = {
  email: 'mailto:placeholder@email.com',
  linkedin: 'https://www.linkedin.com/in/placeholder',
  github: 'https://github.com/placeholder',
}

const styles = {
  section: {
    scrollMarginTop: '86px',
    minHeight: 'calc(100vh - 85px)',
    padding: '120px 0',
    background:
      'radial-gradient(circle at 50% 48%, rgba(9, 34, 58, 0.78), transparent 31rem), radial-gradient(circle at 50% 100%, rgba(10, 31, 52, 0.88), transparent 32rem), linear-gradient(180deg, #080b18 0%, #0a1020 100%)',
    position: 'relative',
    overflow: 'hidden',
  },
  stars: {
    position: 'absolute',
    inset: 0,
    opacity: 0.28,
    backgroundImage:
      'radial-gradient(circle, rgba(255,255,255,0.28) 1px, transparent 1px), radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)',
    backgroundPosition: '0 0, 18px 24px',
    backgroundSize: '46px 46px, 68px 68px',
    pointerEvents: 'none',
  },
  wrap: {
    position: 'relative',
    zIndex: 1,
    width: 'min(920px, calc(100% - 48px))',
    minHeight: '430px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
    alignItems: 'center',
    justifyItems: 'center',
    gap: '72px',
  },
  link: {
    display: 'grid',
    justifyItems: 'center',
    gap: '28px',
    color: '#ffffff',
    textDecoration: 'none',
    transition: 'transform 220ms ease, filter 220ms ease',
  },
  iconBox: {
    width: '150px',
    height: '150px',
    display: 'grid',
    placeItems: 'center',
    color: '#070b18',
    filter: 'drop-shadow(0 18px 32px rgba(0, 0, 0, 0.32))',
  },
  label: {
    margin: 0,
    color: '#ffffff',
    fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif',
    fontSize: '2rem',
    fontWeight: 900,
    letterSpacing: '0.06em',
    textAlign: 'center',
    textShadow: '0 4px 16px rgba(0, 0, 0, 0.45)',
  },
}

const EnvelopeIcon = () => (
  <svg viewBox="0 0 120 92" width="100%" height="100%" aria-hidden="true">
    <rect x="6" y="10" width="108" height="72" rx="10" fill="#ffffff" />
    <path d="M16 23l44 32 44-32" fill="none" stroke="#070b18" strokeWidth="11" strokeLinejoin="round" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 120 120" width="100%" height="100%" aria-hidden="true">
    <rect x="8" y="8" width="104" height="104" rx="8" fill="#ffffff" />
    <circle cx="34" cy="36" r="10" fill="#070b18" />
    <rect x="25" y="52" width="18" height="42" fill="#070b18" />
    <path d="M55 52h17v7c4-6 10-9 18-9 14 0 22 9 22 28v16H94V80c0-10-4-15-11-15-8 0-11 6-11 16v13H55z" fill="#070b18" />
  </svg>
)

const GithubIcon = () => (
  <svg viewBox="0 0 120 120" width="100%" height="100%" aria-hidden="true">
    <circle cx="60" cy="60" r="54" fill="#ffffff" />
    <path
      d="M60 22c-22 0-40 18-40 40 0 18 12 33 28 38 2 0 3-1 3-2v-10c-12 3-15-5-15-5-2-5-5-7-5-7-4-3 0-3 0-3 5 0 8 5 8 5 4 8 12 6 15 4 0-3 2-6 3-7-10-1-20-5-20-20 0-5 2-9 5-12-1-1-2-6 1-12 0 0 4-1 13 5 4-1 8-2 12-2s8 1 12 2c9-6 13-5 13-5 3 6 2 11 1 12 3 3 5 7 5 12 0 15-10 19-20 20 2 2 4 5 4 10v13c0 1 1 2 3 2 16-5 28-20 28-38 0-22-18-40-40-40z"
      fill="#070b18"
    />
  </svg>
)

const contacts = [
  ['Email Me', contactLinks.email, <EnvelopeIcon />],
  ['Connect', contactLinks.linkedin, <LinkedInIcon />],
  ['See My Code', contactLinks.github, <GithubIcon />],
]

const Contact = () => {
  const { theme } = useTheme()

  return (
    <section id="contact" style={{ ...styles.section, background: theme.contact }}>
      <div style={styles.stars}></div>
      <div style={styles.wrap}>
        {contacts.map(([label, href, icon], index) => (
          <Reveal delay={index * 130} key={label}>
            <a
              href={href}
              style={{ ...styles.link, color: theme.text }}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span style={styles.iconBox}>{icon}</span>
              <p style={{ ...styles.label, color: theme.text }}>{label}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Contact
