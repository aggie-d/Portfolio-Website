import Reveal from './Reveal'
import { useTheme } from './ThemeContext'
import profile_pic from './assets/Agronil_Headshot.jpeg'
import SpotifyNowPlaying from './SpotifyNowPlaying'
import InteractiveButton from './InteractiveButton'
// Import timeline event graphics
import researchImg from './assets/research_event.png'
import softwareImg from './assets/software_event.png'
import internshipImg from './assets/internship_event.png'
import timberwolves_logo from './assets/Minnesota-Timberwolves-Logo-2017-Present.png'
import liverpool_logo from './assets/Liverpool_FC.svg.png'
import lions_logo from './assets/Detroit_Lions_logo.svg.png'

const card = {
  border: '1px solid rgba(226, 232, 240, 0.34)',
  borderRadius: '8px',
  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.05))',
  boxShadow: '0 26px 70px rgba(0, 0, 0, 0.28)',
}

const styles = {
  section: {
    scrollMarginTop: '86px',
    padding: '32px 0 96px',
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

  const hobbies = [
    {
      name: 'Photography',
      description: 'Capturing nature & cityscapes.',
      image: profile_pic,
    },
    {
      name: 'Reading',
      description: 'Sci-fi & tech history.',
      image: profile_pic,
    },
    {
      name: 'Hiking',
      description: 'Exploring mountain trails.',
      image: profile_pic,
    },
    {
      name: 'Cooking',
      description: 'Experimenting with recipes.',
      image: profile_pic,
    },
    {
      name: 'Gaming',
      description: 'Indie & strategy games.',
      image: profile_pic,
    },
    {
      name: 'Music',
      description: 'Playing guitar & synth.',
      image: profile_pic,
    },
    {
      name: 'Coding',
      description: 'Building open-source tools.',
      image: profile_pic,
    },
    {
      name: 'Traveling',
      description: 'Discovering new cultures.',
      image: profile_pic,
    },
  ]

  const sportsTeams = [
    {
      name: 'Liverpool',
      description: 'Soccer',
      image: liverpool_logo,
    },
    {
      name: 'Timberwolves',
      description: 'Basketball',
      image: timberwolves_logo,
    },
    {
      name: 'Lions',
      description: 'Football',
      image: lions_logo,
    },
  ]

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

            <h4 style={{ 
              color: theme.softText, 
              fontSize: '0.85rem', 
              fontWeight: 850, 
              textTransform: 'uppercase', 
              letterSpacing: '1.2px',
              marginTop: '44px',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              My Hobbies
            </h4>

            <div className="hobbies-grid">
              {hobbies.map((hobby) => (
                <InteractiveButton 
                  key={hobby.name} 
                  style={{ 
                    padding: '10px', 
                    borderRadius: '8px', 
                    background: theme.panel,
                    border: `1px solid ${theme.panelBorder}`,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    textAlign: 'left',
                    color: 'inherit',
                    width: '100%',
                    display: 'block'
                  }}
                >
                  <div style={{
                    display: 'flex', 
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px',
                    width: '100%'
                  }}>
                    {/* Text on the left */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.76rem', fontWeight: 700, color: theme.text, lineHeight: 1.25, marginBottom: '3px' }}>
                        {hobby.name}
                      </div>
                      <div style={{ fontSize: '0.68rem', fontWeight: 400, color: theme.muted, lineHeight: 1.3 }}>
                        {hobby.description}
                      </div>
                    </div>
                    {/* Image on the right */}
                    <img 
                      src={hobby.image} 
                      alt={`${hobby.name} placeholder`} 
                      style={{ 
                        width: '30px', 
                        height: '30px', 
                        borderRadius: '5px', 
                        objectFit: 'contain', 
                        border: `1px solid ${theme.panelBorder}`,
                        flexShrink: 0,
                      }} 
                    />
                  </div>
                </InteractiveButton>
              ))}
            </div>

            <h4 style={{ 
              color: theme.softText, 
              fontSize: '0.85rem', 
              fontWeight: 850, 
              textTransform: 'uppercase', 
              letterSpacing: '1.2px',
              marginTop: '24px',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              My Teams
            </h4>

            <InteractiveButton 
              style={{
                width: '100%',
                padding: '20px',
                borderRadius: '12px',
                background: theme.panel,
                border: `1px solid ${theme.panelBorder}`,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                display: 'block',
                cursor: 'default',
              }}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                width: '100%'
              }}>
                {sportsTeams.map((team) => (
                  <div 
                    key={team.name}
                    style={{
                      display: 'flex', 
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '16px 10px', 
                      borderRadius: '8px', 
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: `1px solid rgba(255, 255, 255, 0.05)`,
                    }}
                  >
                    <img 
                      src={team.image} 
                      alt={`${team.name} logo`} 
                      style={{ 
                        width: '100%', 
                        height: '90px', 
                        objectFit: 'contain', 
                      }} 
                    />
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: theme.text, textAlign: 'center', marginTop: '10px' }}>
                      {team.name}
                    </div>
                  </div>
                ))}
              </div>
            </InteractiveButton>

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

