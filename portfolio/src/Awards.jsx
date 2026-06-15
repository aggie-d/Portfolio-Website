import Reveal from './Reveal'
import { useTheme } from './ThemeContext'

const styles = {
  section: {
    scrollMarginTop: '86px',
    padding: '88px 0',
    background:
      'radial-gradient(circle at 86% 24%, rgba(210, 184, 255, 0.22), transparent 15rem), radial-gradient(circle at 84% 17%, rgba(172, 219, 214, 0.14), transparent 13rem), linear-gradient(135deg, #071022 0%, #111a32 55%, #080e1f 100%)',
  },
  wrap: {
    width: 'min(1280px, calc(100% - 64px))',
    margin: '0 auto',
  },
  top: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-between',
    gap: '32px',
    marginBottom: '30px',
  },
  title: {
    margin: 0,
    color: '#ffffff',
    fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
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
  },
  list: {
    display: 'grid',
    gap: '20px',
  },
  award: {
    display: 'grid',
    gridTemplateColumns: '72px minmax(0, 1fr) minmax(120px, 150px)',
    gap: '22px',
    alignItems: 'center',
    padding: '22px',
    border: '1px solid rgba(226, 232, 240, 0.34)',
    borderRadius: '8px',
    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.05))',
    boxShadow: '0 26px 70px rgba(0, 0, 0, 0.28)',
  },
  badge: {
    width: '58px',
    height: '58px',
    display: 'grid',
    placeItems: 'center',
    borderRadius: '8px',
    color: '#0f172a',
    background: 'linear-gradient(145deg, #fff7c2, #f4b942)',
    fontWeight: 950,
  },
  heading: {
    margin: '0 0 8px',
    color: '#ffffff',
    fontSize: '1.2rem',
    fontWeight: 900,
  },
  text: {
    margin: 0,
    color: 'rgba(248, 250, 252, 0.82)',
    fontSize: '1rem',
    lineHeight: 1.34,
  },
  image: {
    height: '92px',
    display: 'grid',
    placeItems: 'center',
    borderRadius: '7px',
    color: 'rgba(15, 23, 42, 0.75)',
    background: 'linear-gradient(145deg, #ffffff, #e9efff)',
    fontWeight: 900,
  },
}

const awards = [
  ['1', 'First Place, Placeholder Pitch Event', 'Developed a placeholder tool using NLP and machine learning. Replace this with the award context and result.', 'CERT'],
  ['2', 'University Scholar Recognition', 'A placeholder scholarship or academic recognition description can live here.', 'DOC'],
  ['3', 'Selected Peer Mentor', 'Mentorship, leadership, and community contribution placeholder text.', 'PHOTO'],
  ['4', 'First in a Hackathon', 'A short hackathon summary with team, project, and impact placeholders.', 'BADGE'],
]

const Awards = () => {
  const { theme } = useTheme()

  return (
    <section id="awards" style={{ ...styles.section, background: theme.page }}>
      <div style={styles.wrap}>
        <Reveal style={styles.top}>
          <h2 style={{ ...styles.title, color: theme.text }}>AWARDS & RECOGNITIONS</h2>
          <div style={styles.portrait} aria-label="Small portrait placeholder"></div>
        </Reveal>
        <div style={styles.list}>
          {awards.map(([badge, heading, text, image], index) => (
            <Reveal as="article" style={{ ...styles.award, borderColor: theme.panelBorder, background: theme.panel }} delay={index * 110} key={heading}>
              <div style={styles.badge}>{badge}</div>
              <div>
                <h3 style={{ ...styles.heading, color: theme.text }}>{heading}</h3>
                <p style={{ ...styles.text, color: theme.muted }}>{text}</p>
              </div>
              <div style={styles.image}>{image}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards
