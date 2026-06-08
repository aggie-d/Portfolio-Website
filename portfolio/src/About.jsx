import Reveal from './Reveal'
import { useTheme } from './ThemeContext'
import profile_pic from './assets/Agronil_Headshot.jpeg'

const card = {
  border: '1px solid rgba(226, 232, 240, 0.34)',
  borderRadius: '8px',
  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.05))',
  boxShadow: '0 26px 70px rgba(0, 0, 0, 0.28)',
}

const styles = {
  section: {
    scrollMarginTop: '86px',
    padding: '96px 0',
    background:
      'radial-gradient(circle at 85% 34%, rgba(212, 181, 255, 0.25), transparent 18rem), radial-gradient(circle at 82% 24%, rgba(168, 220, 216, 0.16), transparent 16rem), linear-gradient(135deg, #071022 0%, #111b34 54%, #080e1f 100%)',
  },
  wrap: {
    width: 'min(1180px, calc(100% - 48px))',
    margin: '0 auto',
  },
  top: {
    display: 'grid',
    gridTemplateColumns: 'minmax(min(520px, 100%), 1fr) minmax(220px, 320px)',
    gap: '72px',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    color: '#ffffff',
    fontSize: 'clamp(3.5rem, 7vw, 5.4rem)',
    fontWeight: 950,
    lineHeight: 1,
    letterSpacing: 0,
  },
  subtitle: {
    margin: '16px 0 62px',
    color: 'rgba(241, 245, 249, 0.6)',
    fontSize: 'clamp(1.45rem, 3vw, 2rem)',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  heading: {
    margin: '0 0 18px',
    color: '#ffffff',
    fontSize: '2.45rem',
    fontWeight: 900,
  },
  text: {
    maxWidth: '760px',
    margin: 0,
    color: 'rgba(248, 250, 252, 0.86)',
    fontSize: '1.42rem',
    lineHeight: 1.38,
  },
  portraitCard: {
    ...card,
    width: 'min(100%, 300px)',
    margin: '0 auto',
    padding: '14px',
  },
  portrait: {
    width: '100%',
    aspectRatio: '1 / 1.16',
    borderRadius: '8px',
    border: '2px solid rgba(226, 232, 240, 0.48)',
    backgroundImage: `url(${profile_pic})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  profile: {
    width: 'min(100%, 300px)',
    margin: '24px auto 0',
    color: 'rgba(255, 255, 255, 0.86)',
    fontSize: '1.08rem',
    lineHeight: 1.45,
  },
  skillsTitle: {
    margin: '86px 0 32px',
    color: '#ffffff',
    fontSize: '2.35rem',
    fontWeight: 900,
  },
  skills: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '44px',
  },
  skill: {
    color: 'rgba(248, 250, 252, 0.88)',
  },
  iconBox: {
    width: '58px',
    height: '58px',
    marginBottom: '16px',
    display: 'grid',
    placeItems: 'center',
    border: '2px solid rgba(199, 210, 254, 0.65)',
    borderRadius: '8px',
    color: 'rgba(226, 232, 240, 0.9)',
    fontWeight: 900,
  },
  skillHeading: {
    margin: '0 0 14px',
    color: '#ffffff',
    fontSize: '1.55rem',
    fontWeight: 900,
  },
  list: {
    margin: 0,
    paddingLeft: '24px',
    fontSize: '1.18rem',
    lineHeight: 1.36,
  },
  button: {
    minHeight: '42px',
    marginTop: '14px',
    padding: '0 18px',
    border: 0,
    borderRadius: '7px',
    color: '#0f172a',
    background: 'linear-gradient(110deg, #ffffff, #eef2ff 70%, #d8d8ff)',
    fontWeight: 850,
    cursor: 'pointer',
  },
  ahead: {
    marginTop: '72px',
  },
}

const About = () => {
  const { theme } = useTheme()

  return (
    <section id="about" style={{ ...styles.section, background: theme.page }}>
      <div style={styles.wrap}>
        <div style={styles.top}>
          <Reveal>
            <h2 style={{ ...styles.title, color: theme.text }}>About Me</h2>
            <h3 style={styles.heading}> </h3>
            <p style={{ ...styles.text, color: theme.muted }}>
              I am a passionate Computer Science student with interests in machine learning, data science,
              and low-level computer architecture. This placeholder paragraph can become your personal story,
              academic focus, and professional direction.
            </p>
          </Reveal>

          <Reveal as="aside" delay={140}>
            <div style={{ ...styles.portraitCard, borderColor: theme.panelBorder, background: theme.panel }}>
              <div style={styles.portrait} aria-label="Portrait of me"></div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <h3 style={{ ...styles.skillsTitle, color: theme.text }}>CORE RESEARCH & TECHNICAL SKILLS</h3>
        </Reveal>
        <div style={styles.skills}>
          <Reveal style={{ ...styles.skill, color: theme.muted }}>
            <div style={styles.iconBox}>R</div>
            <h4 style={{ ...styles.skillHeading, color: theme.text }}>RESEARCH APPRENTICE</h4>
            <ul style={styles.list}>
              <li>Placeholder laboratory and research group.</li>
              <li>Research focus area and project context.</li>
            </ul>
            <button style={{ ...styles.button, color: theme.buttonText, background: theme.button }}>Engineering Lab page</button>
          </Reveal>
          <Reveal delay={120} style={{ ...styles.skill, color: theme.muted }}>
            <div style={styles.iconBox}>T</div>
            <h4 style={{ ...styles.skillHeading, color: theme.text }}>TECHNICAL PROFICIENCY</h4>
            <ul style={styles.list}>
              <li>Languages and tools: Python, C, SQL, Docker.</li>
              <li>Frameworks and systems placeholders.</li>
            </ul>
          </Reveal>
          <Reveal delay={240} style={{ ...styles.skill, color: theme.muted }}>
            <div style={styles.iconBox}>L</div>
            <h4 style={{ ...styles.skillHeading, color: theme.text }}>PROJECT LEADERSHIP & MENTORSHIP</h4>
            <ul style={styles.list}>
              <li>Peer mentorship and team leadership.</li>
              <li>Club involvement and collaborative projects.</li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={100} style={styles.ahead}>
          <h3 style={{ ...styles.heading, color: theme.text }}>LOOKING AHEAD: INTERNSHIP</h3>
          <p style={{ ...styles.text, color: theme.muted }}>
            I am excited to apply my skills in a real-world technical setting. Replace this with upcoming
            internship, research, or career plans.
          </p>
          <button style={{ ...styles.button, color: theme.buttonText, background: theme.button }}>VIEW ACADEMIC CV</button>
        </Reveal>
      </div>
    </section>
  )
}

export default About
