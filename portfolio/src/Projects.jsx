import Reveal from './Reveal'
import { useTheme } from './ThemeContext'

const styles = {
  section: {
    scrollMarginTop: '86px',
    padding: '88px 0',
    background:
      'radial-gradient(circle at 86% 24%, rgba(210, 184, 255, 0.24), transparent 15rem), radial-gradient(circle at 84% 18%, rgba(172, 219, 214, 0.15), transparent 13rem), linear-gradient(135deg, #071022 0%, #111a32 55%, #080e1f 100%)',
  },
  wrap: {
    width: 'min(1180px, calc(100% - 48px))',
    margin: '0 auto',
  },
  top: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-between',
    gap: '32px',
    marginBottom: '34px',
  },
  title: {
    maxWidth: '820px',
    margin: 0,
    color: '#ffffff',
    fontSize: 'clamp(2.6rem, 5vw, 4.35rem)',
    fontWeight: 950,
    lineHeight: 1.05,
  },
  portrait: {
    width: '132px',
    aspectRatio: '1',
    borderRadius: '8px',
    border: '1px solid rgba(226, 232, 240, 0.62)',
    background:
      'radial-gradient(circle at 50% 31%, #e8eefb 0 13%, transparent 14%), radial-gradient(circle at 50% 56%, #d2a1aa 0 17%, transparent 18%), linear-gradient(145deg, #f8fbff, #ddd8ff 58%, #f8e6ff)',
    boxShadow: '22px 20px 70px rgba(216, 180, 254, 0.2)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '28px',
  },
  card: {
    minHeight: '320px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    padding: '24px',
    border: '1px solid rgba(226, 232, 240, 0.34)',
    borderRadius: '8px',
    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.05))',
    boxShadow: '0 26px 70px rgba(0, 0, 0, 0.28)',
  },
  logo: {
    height: '92px',
    display: 'grid',
    placeItems: 'center',
    borderRadius: '7px',
    color: '#0f172a',
    background: 'linear-gradient(110deg, #ffffff, #edf4ff)',
    fontSize: '2.1rem',
    fontWeight: 950,
  },
  titleSmall: {
    margin: 0,
    color: '#ffffff',
    fontSize: '1.42rem',
    lineHeight: 1.12,
  },
  meta: {
    margin: 0,
    color: 'rgba(226, 232, 240, 0.76)',
    fontSize: '1.05rem',
  },
  desc: {
    margin: 0,
    color: 'rgba(248, 250, 252, 0.82)',
    fontSize: '1.06rem',
    lineHeight: 1.33,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    marginTop: 'auto',
  },
  tech: {
    display: 'flex',
    gap: '10px',
    color: 'rgba(226, 232, 240, 0.68)',
    fontWeight: 800,
  },
  button: {
    minHeight: '42px',
    padding: '0 22px',
    border: 0,
    borderRadius: '7px',
    color: '#0f172a',
    background: 'linear-gradient(110deg, #ffffff, #eef2ff 65%, #d8d8ff)',
    fontWeight: 850,
    cursor: 'pointer',
  },
}

const projects = [
  ['Project Alpha', 'Multimodal Research Tool', 'First place, placeholder pitch event', 'A precision-diagnostic tool using advanced NLP and machine learning. Replace this with your real project summary.'],
  ['Project Beta', 'AI Meeting Transcription', 'Django, Tailwind CSS, automation', 'An AI-driven application for meeting transcription, summaries, and task extraction. Replace with your case study.'],
  ['Project Gamma', 'Dashboard Platform', 'Analytics and data visualization', 'A web platform for tracking key metrics, visualizing patterns, and presenting usable insights.'],
  ['Project Delta', 'Systems Utility', 'Architecture and tooling', 'A low-level or developer productivity project with placeholder results, stack details, and links.'],
]

const Projects = () => {
  const { theme } = useTheme()

  return (
    <section id="projects" style={{ ...styles.section, background: theme.page }}>
      <div style={styles.wrap}>
        <Reveal style={styles.top}>
          <h2 style={{ ...styles.title, color: theme.text }}>PROJECTS: BUILDING INNOVATIVE SOLUTIONS</h2>
          <div style={styles.portrait} aria-label="Small portrait placeholder"></div>
        </Reveal>

        <div style={styles.grid}>
          {projects.map(([name, title, meta, desc], index) => (
            <Reveal as="article" style={{ ...styles.card, borderColor: theme.panelBorder, background: theme.panel }} delay={index * 110} key={name}>
              <div style={styles.logo}>{name}</div>
              <h3 style={{ ...styles.titleSmall, color: theme.text }}>{title}</h3>
              <p style={{ ...styles.meta, color: theme.softText }}>{meta}</p>
              <p style={{ ...styles.desc, color: theme.muted }}>{desc}</p>
              <div style={styles.footer}>
                <div style={styles.tech}><span>PY</span><span>GH</span><span>UI</span></div>
                <button style={{ ...styles.button, color: theme.buttonText, background: theme.button }}>Link to Demo</button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
