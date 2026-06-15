import Reveal from './Reveal'
import { useTheme } from './ThemeContext'

const styles = {
  section: {
    scrollMarginTop: '86px',
    minHeight: 'calc(100vh - 85px)',
    padding: '88px 0 108px',
    background:
      'radial-gradient(circle at 86% 24%, rgba(210, 184, 255, 0.24), transparent 15rem), radial-gradient(circle at 84% 18%, rgba(172, 219, 214, 0.15), transparent 13rem), linear-gradient(135deg, #071022 0%, #111a32 55%, #080e1f 100%)',
  },
  wrap: {
    width: 'min(1280px, calc(100% - 64px))',
    margin: '0 auto',
  },
  title: {
    maxWidth: '860px',
    margin: '0 0 18px',
    color: '#ffffff',
    fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
    fontWeight: 950,
    lineHeight: 1.04,
  },
  intro: {
    maxWidth: '760px',
    margin: '0 0 46px',
    color: 'rgba(248, 250, 252, 0.82)',
    fontSize: '1.05rem',
    lineHeight: 1.45,
  },
  timeline: {
    display: 'grid',
    gap: '22px',
  },
  item: {
    display: 'grid',
    gridTemplateColumns: '170px minmax(0, 1fr)',
    gap: '28px',
    alignItems: 'start',
    padding: '28px',
    border: '1px solid rgba(226, 232, 240, 0.34)',
    borderRadius: '8px',
    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.05))',
    boxShadow: '0 26px 70px rgba(0, 0, 0, 0.28)',
  },
  date: {
    margin: 0,
    color: 'rgba(241, 245, 249, 0.62)',
    fontSize: '0.85rem',
    fontWeight: 850,
    textTransform: 'uppercase',
  },
  role: {
    margin: '0 0 8px',
    color: '#ffffff',
    fontSize: '1.3rem',
    fontWeight: 900,
  },
  org: {
    margin: '0 0 14px',
    color: 'rgba(241, 245, 249, 0.72)',
    fontSize: '0.95rem',
    fontWeight: 750,
  },
  text: {
    margin: 0,
    color: 'rgba(248, 250, 252, 0.82)',
    fontSize: '0.95rem',
    lineHeight: 1.42,
  },
}

const experiences = [
  ['Summer 2026', 'Software Engineering Intern', 'Company / Organization Placeholder', 'Describe the internship, team, tools, and impact here. Keep this as a concise professional summary.'],
  ['2025 - Present', 'Research Apprentice', 'Laboratory / University Placeholder', 'Summarize research responsibilities, technical methods, experiments, and collaboration with mentors.'],
  ['2024 - Present', 'Peer Mentor / Student Leader', 'Program / Club Placeholder', 'Highlight mentoring, leadership, event support, and community involvement.'],
]

const Experience = () => {
  const { theme } = useTheme()

  return (
    <section id="experience" style={{ ...styles.section, background: theme.page }}>
      <div style={styles.wrap}>
        <Reveal>
          <h2 style={{ ...styles.title, color: theme.text }}>EXPERIENCE</h2>
          <p style={{ ...styles.intro, color: theme.muted }}>
            A placeholder timeline for internships, research appointments, leadership roles, and professional growth.
            Replace these entries with your real experience as your portfolio develops.
          </p>
        </Reveal>

        <div style={styles.timeline}>
          {experiences.map(([date, role, org, text], index) => (
            <Reveal
              as="article"
              key={`${date}-${role}`}
              delay={index * 110}
              style={{ ...styles.item, borderColor: theme.panelBorder, background: theme.panel }}
            >
              <p style={{ ...styles.date, color: theme.softText }}>{date}</p>
              <div>
                <h3 style={{ ...styles.role, color: theme.text }}>{role}</h3>
                <p style={{ ...styles.org, color: theme.softText }}>{org}</p>
                <p style={{ ...styles.text, color: theme.muted }}>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
