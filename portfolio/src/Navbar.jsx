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
    transition: 'border-color 300ms ease',
  },
  logo: {
    width: '52px',
    height: '52px',
    display: 'grid',
    placeItems: 'center',
    borderRadius: '14px',
    border: '1px solid rgba(224, 231, 255, 0.35)',
    boxShadow: '0 14px 40px rgba(0, 0, 0, 0.35)',
    fontWeight: 900,
    transition: 'color 300ms ease, background 300ms ease',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
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
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px',
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
    fontSize: '0.9rem',
    fontWeight: 900,
  },
}

const links = [
  ['Home', '/'],
  ['About Me', '/about'],
  ['Experience', '/experience'],
  ['Projects', '/projects'],
  ['Research', '/research'],
  ['Awards & Honors', '/awards'],
  ['Contact', '/contact'],
]

const Navbar = ({ currentPath, onNavigate }) => {
  const { theme, isDark, toggleTheme } = useTheme()

  return (
    <header style={{ ...styles.outer, background: theme.nav }}>
      <nav style={{ ...styles.nav, borderBottom: `1px solid ${theme.navBorder}` }}>
        <div style={{ ...styles.logo, color: theme.text, background: theme.logo }}>AD</div>
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
        <button
          type="button"
          style={styles.toggle}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          aria-pressed={!isDark}
          onClick={toggleTheme}
        >
          <span style={styles.toggleIcon}>C</span>
          <span style={styles.toggleIcon}>*</span>
          <span style={{ ...styles.thumb, transform: isDark ? 'translateX(0)' : 'translateX(36px)' }}>
            {isDark ? 'C' : '*'}
          </span>
        </button>
      </nav>
    </header>
  )
}

export default Navbar
