import { useTheme } from './ThemeContext'

const styles = {
  outer: {
    position: 'sticky',
    top: 0,
    zIndex: 20,
    backdropFilter: 'blur(18px)',
    transition: 'background 300ms ease',
  },
  nav: {
    width: 'min(1180px, calc(100% - 48px))',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '24px',
    padding: '18px 0 14px',
    flexWrap: 'nowrap',
    transition: 'border-color 300ms ease',
  },
  logo: {
    width: '52px',
    height: '52px',
    flexShrink: 0,
    display: 'grid',
    placeItems: 'center',
    borderRadius: '14px',
    border: '1px solid rgba(224, 231, 255, 0.35)',
    boxShadow: '0 14px 40px rgba(0, 0, 0, 0.35)',
    fontWeight: 900,
    transition: 'color 300ms ease, background 300ms ease',
    overflow: 'hidden',
  },
  logoImage: {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    gap: 'clamp(12px, 2.4vw, 30px)',
    listStyle: 'none',
    margin: 0,
    padding: '0 8px',
    maxWidth: '100%',
    minWidth: 0,
    scrollbarWidth: 'none', /* Firefox */
    msOverflowStyle: 'none', /* IE/Edge */
  },
  link: {
    position: 'relative',
    display: 'inline-flex',
    padding: '8px 0 12px',
    color: 'rgba(241, 245, 249, 0.72)',
    fontSize: '1rem',
    fontWeight: 500,
    textDecoration: 'none',
  },
  active: {
    borderBottom: '3px solid #f8fafc',
  },
  toggle: {
    width: '74px',
    height: '38px',
    flexShrink: 0,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 6px',
    border: 0,
    borderRadius: '999px',
    color: 'rgba(248, 250, 252, 0.82)',
    background: 'rgba(121, 111, 167, 0.38)',
    boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
    cursor: 'pointer',
  },
  thumb: {
    position: 'absolute',
    top: '5px',
    left: '5px',
    width: '28px',
    height: '28px',
    display: 'grid',
    placeItems: 'center',
    borderRadius: '50%',
    color: '#0f172a',
    background: '#ffffff',
    fontSize: '0.85rem',
    fontWeight: 900,
    transition: 'transform 240ms ease',
    boxShadow: '0 8px 18px rgba(0, 0, 0, 0.28)',
  },
  toggleIcon: {
    position: 'relative',
    zIndex: 1,
    width: '24px',
    height: '24px',
    display: 'grid',
    placeItems: 'center',
    fontSize: '0.9rem',
    lineHeight: 1,
    fontWeight: 900,
  },
}

const links = [
  ['Home', '/'],
  ['About Me', '/about'],
  ['Experience', '/experience'],
  ['Research', '/research'],
  ['Projects', '/projects'],
  ['Awards & Honors', '/awards'],
  ['Contact', '/contact'],
]

const Navbar = ({ currentPath, onNavigate }) => {
  const { theme, isDark, toggleTheme } = useTheme()

  return (
    <header style={{ ...styles.outer, background: theme.nav }}>
      <nav style={{ ...styles.nav, borderBottom: `1px solid ${theme.navBorder}` }}>
        <a
          href="/"
          style={{ ...styles.logo, color: theme.text, background: theme.logo, textDecoration: 'none' }}
          aria-label="Home"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('/')
          }}
        >
          <img
            src="https://1000logos.net/wp-content/uploads/2017/08/uconn-huskies-logo.png"
            alt="Logo placeholder"
            style={styles.logoImage}
          />
        </a>
        <ul style={styles.links}>
          {links.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                style={{
                  ...styles.link,
                  ...(currentPath === href ? { ...styles.active, borderBottomColor: theme.text } : {}),
                  color: currentPath === href ? theme.text : theme.softText,
                }}
                onClick={(event) => {
                  event.preventDefault()
                  onNavigate(href)
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-scroll-indicator">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={theme.text} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.4 }}>
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
        <button
          type="button"
          style={styles.toggle}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          aria-pressed={!isDark}
          onClick={toggleTheme}
        >
          <span style={styles.toggleIcon}>🌙</span>
          <span style={styles.toggleIcon}>☀️</span>
          <span style={{ ...styles.thumb, transform: isDark ? 'translateX(0)' : 'translateX(36px)' }}>
            {isDark ? '' : ''}
          </span>
        </button>
      </nav>
    </header>
  )
}

export default Navbar
