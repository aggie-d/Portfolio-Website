import Reveal from './Reveal'
import { useTheme } from './ThemeContext'

const glass = {
  border: '1px solid rgba(226, 232, 240, 0.34)',
  borderRadius: '8px',
  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.05))',
  boxShadow: '0 26px 70px rgba(0, 0, 0, 0.28)',
}

const styles = {
  section: {
    scrollMarginTop: '86px',
    padding: '88px 0',
    background:
      'radial-gradient(circle at 86% 31%, rgba(210, 184, 255, 0.24), transparent 15rem), radial-gradient(circle at 86% 22%, rgba(172, 219, 214, 0.15), transparent 13rem), linear-gradient(135deg, #071022 0%, #111a32 55%, #080e1f 100%)',
  },
  wrap: {
    width: 'min(1280px, calc(100% - 64px))',
    margin: '0 auto',
  },
  title: {
    maxWidth: '900px',
    margin: '0 0 34px',
    color: '#ffffff',
    fontSize: 'clamp(2rem, 4vw, 3.2rem)',
    fontWeight: 950,
    lineHeight: 1.08,
  },
  introRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
    gap: '24px',
    alignItems: 'center',
  },
  intro: {
    ...glass,
    padding: '22px 26px',
    color: '#ffffff',
    fontSize: '1.2rem',
    fontWeight: 900,
    lineHeight: 1.22,
  },
  portrait: {
    ...glass,
    height: '180px',
    background:
      'radial-gradient(circle at 50% 31%, #e8eefb 0 13%, transparent 14%), radial-gradient(circle at 50% 56%, #d2a1aa 0 17%, transparent 18%), linear-gradient(145deg, #f8fbff, #ddd8ff 58%, #f8e6ff)',
  },
  body: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
    gap: '36px',
    marginTop: '34px',
  },
  items: {
    display: 'grid',
    gap: '34px',
  },
  item: {
    display: 'grid',
    gridTemplateColumns: '72px minmax(0, 1fr)',
    gap: '22px',
    alignItems: 'start',
  },
  icon: {
    width: '54px',
    height: '54px',
    display: 'grid',
    placeItems: 'center',
    color: 'rgba(199, 210, 254, 0.9)',
    border: '2px solid rgba(199, 210, 254, 0.55)',
    borderRadius: '8px',
    fontWeight: 900,
  },
  heading: {
    margin: '0 0 10px',
    color: '#ffffff',
    fontSize: '1.25rem',
    fontWeight: 900,
  },
  text: {
    margin: 0,
    color: 'rgba(248, 250, 252, 0.82)',
    fontSize: '1rem',
    lineHeight: 1.34,
  },
  side: {
    display: 'grid',
    gap: '34px',
    alignContent: 'center',
  },
  image: {
    ...glass,
    minHeight: '120px',
    display: 'grid',
    placeItems: 'center',
    color: 'rgba(248, 250, 252, 0.78)',
    fontWeight: 900,
  },
}

const Research = () => {
  const { theme } = useTheme()

  return (
    <section id="research" style={{ ...styles.section, background: theme.page }}>
      <div style={styles.wrap}>
        <Reveal>
          <h2 style={{ ...styles.title, color: theme.text }}>RESEARCH: APPLIED SYMBOLIC REGRESSION & COMPUTER ARCHITECTURE</h2>
        </Reveal>
        <div style={styles.introRow}>
          <Reveal style={{ ...styles.intro, color: theme.text, borderColor: theme.panelBorder, background: theme.panel }}>Research Apprentice, Placeholder Modeling & Systems Engineering Lab, University Name</Reveal>
          <Reveal delay={120} style={styles.portrait} aria-label="Profile placeholder"></Reveal>
        </div>

        <div style={styles.body}>
          <div style={styles.items}>
            <Reveal as="article" style={styles.item}>
              <div style={styles.icon}>SR</div>
              <div>
                <h3 style={{ ...styles.heading, color: theme.text }}>Symbolic Regression</h3>
                <p style={{ ...styles.text, color: theme.muted }}>
                  Working on optimization and interpretable models using placeholder libraries and experimental datasets.
                  Replace this with the research problem, methods, and outcomes.
                </p>
              </div>
            </Reveal>
            <Reveal as="article" style={styles.item} delay={120}>
              <div style={styles.icon}>CA</div>
              <div>
                <h3 style={{ ...styles.heading, color: theme.text }}>Computer Architecture</h3>
                <p style={{ ...styles.text, color: theme.muted }}>
                  Investigating low-level hardware design, logic gate configuration, and assembly concepts.
                  Replace this with architecture tools, coursework, or research details.
                </p>
              </div>
            </Reveal>
          </div>
          <aside style={styles.side}>
            <Reveal style={{ ...styles.image, color: theme.muted, borderColor: theme.panelBorder, background: theme.panel }}>LAB IMAGE</Reveal>
            <Reveal delay={120} style={{ ...styles.image, color: theme.muted, borderColor: theme.panelBorder, background: theme.panel }}>POSTER</Reveal>
            <Reveal delay={240} style={{ ...styles.image, color: theme.muted, borderColor: theme.panelBorder, background: theme.panel }}>CHIP</Reveal>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Research
