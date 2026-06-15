import { useState } from 'react'
import Reveal from './Reveal'
import { useTheme } from './ThemeContext'

const contactLinks = {
  email: 'agronildas@gmail.com',
  linkedin: 'https://www.linkedin.com/in/agronil-das',
  github: 'https://github.com/aggie-d',
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
    width: 'min(1024px, calc(100% - 64px))',
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
    position: 'relative',
    perspective: '650px',
    filter: 'drop-shadow(0 18px 32px rgba(0, 0, 0, 0.32))',
  },
  iconImage: {
    width: '150px',
    height: '150px',
    display: 'block',
    borderRadius: '12px',
    objectFit: 'cover',
  },
  emailFlap: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    width: '118px',
    height: '58px',
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(226, 232, 240, 0.98))',
    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
    transformOrigin: 'top center',
    transition: 'transform 420ms cubic-bezier(0.16, 1, 0.3, 1)',
    pointerEvents: 'none',
  },
  label: {
    margin: 0,
    color: '#ffffff',
    fontSize: '1.5rem',
    fontWeight: 900,
    textAlign: 'center',
    textShadow: '0 4px 16px rgba(0, 0, 0, 0.45)',
  },
  banner: {
    position: 'fixed',
    left: '50%',
    bottom: '28px',
    zIndex: 50,
    minWidth: 'min(420px, calc(100% - 48px))',
    padding: '16px 22px',
    borderRadius: '8px',
    textAlign: 'center',
    fontWeight: 850,
    boxShadow: '0 18px 48px rgba(0, 0, 0, 0.28)',
    transform: 'translateX(-50%)',
  },
}

const contacts = [
  {
    id: 'email',
    label: 'Email Me',
    href: `mailto:${contactLinks.email}`,
  },
  {
    id: 'linkedin',
    label: 'Connect',
    href: contactLinks.linkedin,
    lightImage: 'https://images.seeklogo.com/logo-png/48/2/linkedin-logo-png_seeklogo-480553.png',
    darkImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1280px-LinkedIn_icon.svg.png',
  },
  {
    id: 'github',
    label: 'See My Code',
    href: contactLinks.github,
    lightImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1280px-GitHub_Invertocat_Logo.svg.png',
    darkImage: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png',
  },
]

const Contact = () => {
  const { theme, isDark } = useTheme()
  const [hoveredContact, setHoveredContact] = useState(null)
  const [showBanner, setShowBanner] = useState(false)

  const handleContactClick = async (event, contact) => {
    if (contact.id !== 'email') {
      return
    }

    event.preventDefault()

    try {
      await navigator.clipboard.writeText(contactLinks.email)
      setShowBanner(true)
      window.setTimeout(() => setShowBanner(false), 2400)
    } catch {
      window.location.assign(contact.href)
    }
  }

  return (
    <section id="contact" style={{ ...styles.section, background: theme.contact }}>
      <div style={styles.stars}></div>
      <div style={styles.wrap}>
        {contacts.map((contact, index) => (
          <Reveal delay={index * 130} key={contact.id}>
            <a
              href={contact.href}
              style={{ ...styles.link, color: theme.text }}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
              onClick={(event) => handleContactClick(event, contact)}
              onMouseEnter={() => setHoveredContact(contact.id)}
              onMouseLeave={() => setHoveredContact(null)}
            >
              <span style={styles.iconBox}>
                  {contact.id === 'email' ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="120"
                      height="120"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={theme.text}
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transition: 'transform 300ms ease',
                        transform: hoveredContact === 'email' ? 'scale(1.1)' : 'scale(1)',
                      }}
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ) : (
                    <img
                      src={isDark ? contact.darkImage : contact.lightImage}
                      alt={`${contact.label} icon`}
                      style={styles.iconImage}
                    />
                  )}
              </span>
              <p style={{ ...styles.label, color: theme.text }}>{contact.label}</p>
            </a>
          </Reveal>
        ))}
      </div>
      {showBanner && (
        <div
          style={{
            ...styles.banner,
            color: theme.buttonText,
            background: theme.button,
            border: `1px solid ${theme.panelBorder}`,
          }}
        >
          Email copied to clipboard!
        </div>
      )}
    </section>
  )
}

export default Contact
