import { createContext, useContext } from 'react'

export const themes = {
  dark: {
    mode: 'dark',
    page:
      'radial-gradient(circle at 84% 32%, rgba(210, 184, 255, 0.24), transparent 17rem), radial-gradient(circle at 80% 24%, rgba(172, 219, 214, 0.15), transparent 14rem), linear-gradient(135deg, #071022 0%, #111a32 55%, #080e1f 100%)',
    contact:
      'radial-gradient(circle at 50% 48%, rgba(9, 34, 58, 0.78), transparent 31rem), radial-gradient(circle at 50% 100%, rgba(10, 31, 52, 0.88), transparent 32rem), linear-gradient(180deg, #080b18 0%, #0a1020 100%)',
    nav: 'rgba(7, 13, 29, 0.82)',
    navBorder: 'rgba(190, 204, 235, 0.14)',
    text: '#ffffff',
    muted: 'rgba(248, 250, 252, 0.82)',
    softText: 'rgba(241, 245, 249, 0.72)',
    panel: 'linear-gradient(145deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.05))',
    panelBorder: 'rgba(226, 232, 240, 0.34)',
    button: 'linear-gradient(110deg, #ffffff, #eef2ff 65%, #d8d8ff)',
    buttonText: '#0f172a',
    logo: 'linear-gradient(145deg, rgba(30, 41, 73, 0.9), rgba(11, 18, 40, 0.95))',
  },
  light: {
    mode: 'light',
    page:
      'radial-gradient(circle at 84% 30%, rgba(181, 202, 255, 0.55), transparent 18rem), radial-gradient(circle at 12% 10%, rgba(203, 245, 235, 0.6), transparent 17rem), linear-gradient(135deg, #f8fbff 0%, #eaf0ff 55%, #f9fbff 100%)',
    contact:
      'radial-gradient(circle at 50% 45%, rgba(205, 222, 255, 0.82), transparent 30rem), radial-gradient(circle at 50% 100%, rgba(216, 244, 239, 0.72), transparent 32rem), linear-gradient(180deg, #f8fbff 0%, #eaf0ff 100%)',
    nav: 'rgba(248, 251, 255, 0.86)',
    navBorder: 'rgba(15, 23, 42, 0.12)',
    text: '#0f172a',
    muted: '#475569',
    softText: '#526078',
    panel: 'linear-gradient(145deg, rgba(255, 255, 255, 0.86), rgba(236, 242, 255, 0.72))',
    panelBorder: 'rgba(15, 23, 42, 0.14)',
    button: 'linear-gradient(110deg, #111827, #26344f)',
    buttonText: '#ffffff',
    logo: 'linear-gradient(145deg, #ffffff, #dfe8ff)',
  },
}

const ThemeContext = createContext({
  theme: themes.dark,
  isDark: true,
  toggleTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export const useTheme = () => useContext(ThemeContext)
