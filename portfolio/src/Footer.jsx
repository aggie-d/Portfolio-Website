import React from 'react'
import { useTheme } from './ThemeContext'

const Footer = ({ onNavigate }) => {
  const { theme } = useTheme()
  const currentYear = new Date().getFullYear()

  const links = [
    ['Home', '/'],
    ['About Me', '/about'],
    ['Experience', '/experience'],
    ['Research', '/research'],
    ['Projects', '/projects'],
    ['Awards & Honors', '/awards'],
    ['Contact', '/contact'],
  ]

  const styles = {
    footer: {
      padding: '40px 24px',
      background: theme.nav, // matching navbar
      borderTop: `1px solid ${theme.navBorder}`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
    },
    nav: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '16px 24px',
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    link: {
      color: theme.softText,
      textDecoration: 'none',
      fontSize: '0.95rem',
      fontWeight: 500,
      transition: 'color 0.2s',
    },
    copy: {
      color: theme.muted,
      fontSize: '0.85rem',
      margin: 0,
      textAlign: 'center',
    }
  }

  return (
    <footer style={styles.footer}>
      <ul style={styles.nav}>
        {links.map(([label, href]) => (
          <li key={href}>
            <a 
              href={href} 
              style={styles.link}
              onClick={(e) => {
                e.preventDefault()
                onNavigate(href)
              }}
              onMouseEnter={(e) => e.target.style.color = theme.text}
              onMouseLeave={(e) => e.target.style.color = theme.softText}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <p style={styles.copy}>
        &copy; {currentYear} Agronil Das. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
