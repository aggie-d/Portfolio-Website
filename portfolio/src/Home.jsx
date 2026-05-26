import Reveal from './Reveal'
import { useTheme } from './ThemeContext'

const styles = {
  section: {
    minHeight: 'calc(100vh - 85px)',
    padding: '90px 0 96px',
    background:
      'radial-gradient(circle at 82% 35%, rgba(205, 174, 255, 0.26), transparent 18rem), radial-gradient(circle at 78% 20%, rgba(154, 211, 210, 0.18), transparent 16rem), linear-gradient(135deg, #071022 0%, #101a33 48%, #071022 100%)',
  },
  wrap: {
    width: 'min(1180px, calc(100% - 48px))',
    margin: '0 auto',
  },
  hero: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
    gap: '72px',
    alignItems: 'center',
    minHeight: '470px',
  },
  title: {
    margin: 0,
    color: '#ffffff',
    fontSize: 'clamp(4rem, 11vw, 7.8rem)',
    fontWeight: 950,
    lineHeight: 0.93,
    letterSpacing: 0,
    textShadow: '0 6px 0 rgba(0, 0, 0, 0.28)',
  },
  subtitle: {
    margin: '28px 0 0',
    color: 'rgba(241, 245, 249, 0.78)',
    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
    fontWeight: 700,
    textShadow: '0 4px 12px rgba(0, 0, 0, 0.42)',
  },
  mockWindow: {
    minHeight: '320px',
    borderRadius: '9px',
    border: '1px solid rgba(226, 232, 240, 0.58)',
    background: 'linear-gradient(145deg, rgba(6, 12, 28, 0.96), rgba(18, 27, 52, 0.9))',
    boxShadow: '0 30px 85px rgba(0, 0, 0, 0.45), 28px 24px 80px rgba(213, 171, 255, 0.24)',
    overflow: 'hidden',
  },
  windowBar: {
    height: '38px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '0 18px',
    background: 'linear-gradient(90deg, #ffffff, #dce6ff 48%, #f5d6ff)',
  },
  dot: {
    width: '11px',
    height: '11px',
    borderRadius: '50%',
    background: '#ef4444',
  },
  codeArea: {
    padding: '34px',
    color: 'rgba(226, 232, 240, 0.58)',
    fontFamily: 'ui-monospace, SFMono-Regular, Consolas, monospace',
    fontSize: '1rem',
    lineHeight: 1.8,
  },
  diagram: {
    margin: '16px 0 0 auto',
    width: '58%',
    minHeight: '130px',
    border: '2px solid rgba(226, 232, 240, 0.36)',
    borderRadius: '4px',
    display: 'grid',
    placeItems: 'center',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  divider: {
    height: '1px',
    margin: '78px 0',
    background: 'rgba(190, 204, 235, 0.18)',
  },
  aboutPreview: {
    display: 'flex',
    flexDirection: 'column',
    gap: '26px',
  },
  sectionIntro: {
    margin: '0 0 28px',
    color: '#ffffff',
    fontSize: 'clamp(2rem, 4vw, 3.2rem)',
    fontWeight: 950,
  },
  tile: {
    width: '100%',
    minHeight: '230px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '32px',
    padding: '34px clamp(24px, 5vw, 48px)',
    border: '1px solid rgba(226, 232, 240, 0.34)',
    borderRadius: '8px',
    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.05))',
    boxShadow: '0 26px 70px rgba(0, 0, 0, 0.28)',
  },
  tileBody: {
    maxWidth: '760px',
  },
  tileKicker: {
    margin: '0 0 12px',
    color: 'rgba(241, 245, 249, 0.62)',
    fontSize: '0.9rem',
    fontWeight: 850,
    textTransform: 'uppercase',
  },
  previewTitle: {
    margin: 0,
    color: '#ffffff',
    fontSize: 'clamp(1.7rem, 3vw, 2.25rem)',
    fontWeight: 950,
  },
  previewText: {
    maxWidth: '680px',
    margin: '16px 0 24px',
    color: 'rgba(241, 245, 249, 0.86)',
    fontSize: '1.02rem',
    lineHeight: 1.45,
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '58px',
    marginTop: '18px',
    padding: '0 34px',
    border: '1px solid rgba(255, 255, 255, 0.55)',
    borderRadius: '8px',
    color: '#111827',
    background: 'linear-gradient(110deg, #ffffff, #f4f7ff 58%, #d8d8ff)',
    fontWeight: 900,
    fontSize: '1.12rem',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.35)',
    cursor: 'pointer',
  },
  portrait: {
    width: '100%',
    aspectRatio: '1 / 1.05',
    borderRadius: '8px',
    border: '2px solid rgba(226, 232, 240, 0.65)',
    background:
      'radial-gradient(circle at 50% 32%, #e8eefb 0 12%, transparent 13%), radial-gradient(circle at 50% 54%, #d6b3ba 0 15%, transparent 16%), linear-gradient(145deg, #f8fbff, #dedcff 58%, #f8e9ff)',
    boxShadow: '0 24px 70px rgba(0, 0, 0, 0.38), 20px 18px 70px rgba(216, 180, 254, 0.22)',
  },
}

const previewTiles = [
  ['About Me', 'Bio', 'A short snapshot of your background, academic focus, and personal story.', '/about', 'READ BIO'],
  ['Experience', 'Work', 'A timeline of internships, research roles, leadership, and professional growth.', '/experience', 'VIEW EXPERIENCE'],
  ['Projects', 'Builds', 'Selected applications, tools, and technical work with placeholder project summaries.', '/projects', 'VIEW PROJECTS'],
  ['Research', 'Labs', 'A preview of research interests, methods, and academic exploration.', '/research', 'VIEW RESEARCH'],
  ['Awards & Honors', 'Recognition', 'Scholarships, competitions, leadership milestones, and achievements.', '/awards', 'VIEW AWARDS'],
  ['Contact', 'Connect', 'Quick links for email, LinkedIn, and code so viewers can reach you.', '/contact', 'GET IN TOUCH'],
]

const Home = ({ onNavigate }) => {
  const { theme } = useTheme()

  const handleTileClick = (event, path) => {
    event.preventDefault()
    onNavigate(path)
  }

  return (
    <section id="home" style={{ ...styles.section, background: theme.page }}>
      <div style={styles.wrap}>
        <div style={styles.hero}>
          <Reveal>
            <h1 style={{ ...styles.title, color: theme.text }}>Agronil<br />Das</h1>
            <p style={{ ...styles.subtitle, color: theme.softText }}>UConn Student</p>
          </Reveal>

          <Reveal delay={140} style={{ ...styles.mockWindow, borderColor: theme.panelBorder, background: theme.panel }} aria-label="Placeholder interface artwork">
            <div style={styles.windowBar}>
              <span style={styles.dot}></span>
              <span style={{ ...styles.dot, background: '#f59e0b' }}></span>
              <span style={{ ...styles.dot, background: '#22c55e' }}></span>
            </div>
            <div style={styles.codeArea}>
              <div>const portfolio = &#123;</div>
              <div>&nbsp;&nbsp;student: "Placeholder",</div>
              <div>&nbsp;&nbsp;focus: ["AI", "Systems"],</div>
              <div>&nbsp;&nbsp;status: "building"</div>
              <div>&#125;</div>
              <div style={styles.diagram}>SYSTEM DIAGRAM</div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80} style={{ ...styles.divider, background: theme.navBorder }}></Reveal>

        <Reveal>
          <h2 style={{ ...styles.sectionIntro, color: theme.text }}>Explore the Portfolio</h2>
        </Reveal>

        <div style={styles.aboutPreview}>
          {previewTiles.map(([title, kicker, text, path, buttonLabel], index) => (
            <Reveal
              key={path}
              delay={index * 90}
              style={{ ...styles.tile, borderColor: theme.panelBorder, background: theme.panel }}
            >
              <div style={styles.tileBody}>
                <p style={{ ...styles.tileKicker, color: theme.softText }}>{kicker}</p>
                <h3 style={{ ...styles.previewTitle, color: theme.text }}>{title}</h3>
                <p style={{ ...styles.previewText, color: theme.muted }}>{text}</p>
              </div>
              <a
                href={path}
                style={{ ...styles.button, color: theme.buttonText, background: theme.button, textDecoration: 'none' }}
                onClick={(event) => handleTileClick(event, path)}
              >
                {buttonLabel}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
