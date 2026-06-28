import Reveal from './Reveal'
import { useTheme } from './ThemeContext'
import profile_pic from './assets/Agronil_Headshot.jpeg'
import SpotifyNowPlaying from './SpotifyNowPlaying'

// Import timeline event graphics
import researchImg from './assets/research_event.png'
import softwareImg from './assets/software_event.png'
import internshipImg from './assets/internship_event.png'

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
    width: 'min(1280px, calc(100% - 64px))',
    margin: '0 auto',
  },
  top: {
    display: 'grid',
    gridTemplateColumns: 'minmax(min(520px, 100%), 1fr) minmax(220px, 320px)',
    gap: '72px',
    alignItems: 'start',
  },
  title: {
    margin: 0,
    color: '#ffffff',
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 950,
    lineHeight: 1,
    letterSpacing: 0,
  },
  heading: {
    margin: '0 0 18px',
    color: '#ffffff',
    fontSize: '1.8rem',
    fontWeight: 900,
  },
  text: {
    maxWidth: '760px',
    margin: 0,
    color: 'rgba(248, 250, 252, 0.86)',
    fontSize: '1.15rem',
    lineHeight: 1.38,
  },
  portraitCard: {
    ...card,
    width: '100%',
    margin: '0 auto',
    padding: '14px',
    boxSizing: 'border-box',
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
}

const timelineEvents = [
  {
    date: 'September 2024',
    title: 'Research Apprenticeship',
    subtitle: 'Undergraduate Research / Machine Learning Lab',
    description: 'Conducted machine learning research on data modeling, focusing on training efficiency and neural network optimization. Implemented models using PyTorch and tracked performance variations.',
    image: researchImg,
  },
  {
    date: 'January 2025',
    title: 'Technical Project Leadership',
    subtitle: 'Full-Stack Development / Node.js & Docker',
    description: 'Led a development team of peers to build a containerized data pipeline and dashboard application. Handled system architecture, Docker configurations, and relational database queries.',
    image: softwareImg,
  },
  {
    date: 'June 2025',
    title: 'Summer Internship Milestone',
    subtitle: 'Software Engineering Intern / Tech Integration Team',
    description: 'Excited to join a leading engineering team as a software engineer intern. Eager to solve real-world problems at scale and gain valuable industry experience.',
    image: internshipImg,
  },
]

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

          <Reveal as="aside" delay={140} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'min(100%, 300px)', margin: '0 auto' }}>
            <div style={{ ...styles.portraitCard, borderColor: theme.panelBorder, background: theme.panel }}>
              <div style={styles.portrait} aria-label="Portrait of me"></div>
            </div>
            <SpotifyNowPlaying />
          </Reveal>
        </div>

        <Reveal delay={80}>
          <h3 style={{ 
            color: theme.text, 
            fontSize: '2rem', 
            fontWeight: 900, 
            textAlign: 'center', 
            marginTop: '96px', 
            marginBottom: '48px',
            letterSpacing: '0.5px'
          }}>
            Milestones & Journey
          </h3>
        </Reveal>

        <div className="timeline-container">
          {/* Vertical Track Line */}
          <div 
            className="timeline-line" 
            style={{ 
              background: theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(15, 23, 42, 0.1)' 
            }} 
          />

          {timelineEvents.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div 
                key={event.title} 
                className={`timeline-item ${isLeft ? 'timeline-item-left' : 'timeline-item-right'}`}
              >
                {/* Scroll Reveal Wrapper */}
                <Reveal 
                  delay={index * 120} 
                  style={{ display: 'flex', width: '100%', flexDirection: 'inherit' }}
                >
                  {/* Timeline Dot */}
                  <div 
                    className="timeline-dot" 
                    style={{ 
                      background: theme.mode === 'dark' 
                        ? 'linear-gradient(135deg, #a78bfa, #22d3ee)' 
                        : 'linear-gradient(135deg, #4f46e5, #06b6d4)',
                      border: `4px solid ${theme.mode === 'dark' ? '#071022' : '#f8fbff'}`
                    }} 
                  />

                  {/* Image Column */}
                  <div className="timeline-image-column">
                    {event.image && (
                      <div className="timeline-img-wrapper" style={{ borderColor: theme.panelBorder }}>
                        <img 
                          src={event.image} 
                          alt={`${event.title} illustration`} 
                          className="timeline-img" 
                        />
                      </div>
                    )}
                  </div>

                  {/* Event Card */}
                  <div 
                    className="timeline-card" 
                    style={{ 
                      background: theme.panel,
                      border: `1px solid ${theme.panelBorder}`
                    }}
                  >
                    {/* Date at the top of the card */}
                    <div 
                      className="timeline-card-date" 
                      style={{ 
                        color: theme.mode === 'dark' ? '#22d3ee' : '#4f46e5'
                      }}
                    >
                      {event.date}
                    </div>

                    <h4 className="timeline-title" style={{ color: theme.text }}>
                      {event.title}
                    </h4>

                    <h5 className="timeline-subtitle" style={{ color: theme.softText }}>
                      {event.subtitle}
                    </h5>

                    <p className="timeline-desc" style={{ color: theme.muted }}>
                      {event.description}
                    </p>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default About

