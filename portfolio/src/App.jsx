import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Research from './Research'
import Awards from './Awards'
import Contact from './Contact'
import { ThemeProvider, themes } from './ThemeContext'

const routes = {
  '/': Home,
  '/about': About,
  '/experience': Experience,
  '/projects': Projects,
  '/research': Research,
  '/awards': Awards,
  '/contact': Contact,
}

const normalizePath = (path) => {
  const cleanPath = path.toLowerCase().replace(/\/+$/, '')
  return cleanPath || '/'
}

function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname))
  const [themeName, setThemeName] = useState(() => localStorage.getItem('theme') || 'dark')
  const Page = routes[path] || Home
  const theme = themes[themeName] || themes.dark
  const isDark = themeName === 'dark'

  useEffect(() => {
    const handlePopState = () => setPath(normalizePath(window.location.pathname))

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const handleNavigate = (nextPath) => {
    const normalizedNextPath = normalizePath(nextPath)

    if (normalizedNextPath === path) {
      return
    }

    window.history.pushState(null, '', normalizedNextPath)
    setPath(normalizedNextPath)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleTheme = () => {
    setThemeName((currentTheme) => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', nextTheme)
      return nextTheme
    })
  }

  return (
    <ThemeProvider value={{ theme, isDark, toggleTheme }}>
      <div style={{ minHeight: '100vh', background: theme.page, transition: 'background 300ms ease' }}>
        <Navbar currentPath={path} onNavigate={handleNavigate} />
        <main>
          <Page onNavigate={handleNavigate} />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
