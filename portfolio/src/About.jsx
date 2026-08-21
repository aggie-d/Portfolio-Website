import React, { useState, useEffect } from 'react'
import Reveal from './Reveal'
import { useTheme } from './ThemeContext'
import profile_pic from './assets/Agronil_Headshot.jpeg'
import SpotifyNowPlaying from './SpotifyNowPlaying'
import SpotifyTopTracks from './SpotifyTopTracks'
import InteractiveButton from './InteractiveButton'
// Import timeline event graphics
import SciMaLL from './assets/SciMaLL_image.png'
import ASMLimg from './assets/ASML_logo.webp'
import UConn_logo from './assets/University_of_Connecticut_logo.png'
import SASE_logo from './assets/SASE_logo.png'
import UConn_SOC from './assets/UConn_soc.jpg'
import NGI_logo from './assets/NGI_logo.webp'
import Calmare_logo from './assets/Calmare_Therapuetics_logo.webp'
import Exnuero_logo from './assets/exnuero_logo.jfif'
import softwareImg from './assets/software_event.png'
import internshipImg from './assets/internship_event.png'
import timberwolves_logo from './assets/Minnesota-Timberwolves-Logo-2017-Present.png'
import liverpool_logo from './assets/Liverpool_FC.svg.png'
import lions_logo from './assets/Detroit_Lions_logo.svg.png'
import TypewriterHeading from './TypewriterHeading'
import soccer_ball_image from './assets/soccer_ball_image.webp'
import airplane from './assets/airplane.png'
import Basketball from './assets/Basketball.png'
import coding_clipart from './assets/coding_clipart.png'
import Controller_image from './assets/xbox_logo.webp'
import Headphones_image from './assets/Headphones_image.webp'
import Movie_image from './assets/Movie_image.png'
import pikachu from './assets/pikachu.png'
import Optimization_lab from './assets/Optimization_Lab_Image.png'

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
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
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
    date: 'August 2026 - Present',
    title: 'ASML',
    subtitle: 'Campus Ambassador',
    description: 'Bringining awareness to the ASML brand at UConn.',
    image: ASMLimg,
  },
  {
    date: 'May 2026 - Present',
    title: 'Scientific & Computational Machine Learning Laboratory (SciMaLL)',
    subtitle: 'Undergraduate Researcher',
    description: 'Helping conduct research under Dr. Qian Yang on implicit Symbolic Regression. I\'m leveraging Python to build automated machine learning evaluation pipelines, eliminating manual analysis and enabling real-time tracking of model performance. I\'m also developing dynamic visualization and scoring tools designed to automatically categorize mathematical models, which greatly accelerates the overall model selection workflow',
    image: SciMaLL,
  },
  {
    date: 'May 2026 - Present',
    title: 'Society of Asian Scientists and Engineers (SASE)',
    subtitle: 'Analytics Chair',
    description: 'As the Analytics Chair for SASE, I collect and analyze data from our weekly meetings to drive member participation and corporate engagement. To streamline administrative overhead, I built an automated pipeline using Python and SQL to accurately track member attendance and engagement trends.',
    image: SASE_logo,
  },
    {
    date: 'May 2025 - Present',
    title: 'Univeristy of Connecticut',
    subtitle: 'S-STEM Peer Mentor',
    description: 'I\'m a peer mentor for a student in the S-STEM program. S-STEM is a scholarship granted to students who demonstrate financial need, or are First-Generation students, and are majoring in a STEM field. As a peer mentor, I coordinate regular meetings with my mentee to talk about my experiences as a student, provide them advice, guidance, and support as they navigate their major and UConn.',
    image: UConn_logo,
  },
  {
    date: 'May 2026 - August 2026',
    title: 'ASML',
    subtitle: 'Software Engineering Intern',
    description: 'I developed a HDR imaging pipeline that combines six exposure images into a high-quality diagnostic image. I also designed a configurable multi-exposure imaging workflow for the diagnostic camera systems, which drove a 98% increase in diagnostic productivity. Finally, I built an automated validation tool that significantly accelerated the testing and integration of new image-processing capabilities.',
    image: ASMLimg,
  },
  {
    date: 'September 2025 - April 2026',
    title: 'Hybrid Modeling & Systems Engineering Laboratory',
    subtitle: 'Research Apprentice',
    description: 'At the Hybrid Modeling & Systems Engineering Laboratory, I utilized Symbolic Regression (PySR) to optimize feasibility studies for ethylene cracker reactors. I designed a machine learning pipeline to process 500 daily data entries, which cut manual analysis time by roughly 75%. By employing a Sigmoid Loss Function on a dataset of 5,000 datapoints, I successfully trained a model that achieved a 97.1% accuracy score.',
    image: Optimization_lab,
  },
    {
    date: 'September 2025 - January 2026',
    title: 'Exneuro',
    subtitle: 'Chief Technology Officer',
    description: 'At Exneuro, I led technical development for RaayuXAI, an early-stage Alzheimer\'s disease (MCI) precision-diagnostic tool leveraging neurobiologically-grounded multimodal linguistic biomarkers. In collaboration with the UConn Health Center, I trained models using patient blood samples and data from DementiaBank. I also refactored the codebase to streamline operations and minimize API calls, achieving a ~90% reduction in application load times.',
    image: Exnuero_logo,
  },
      {
    date: 'May 2025 - August 2025',
    title: 'Next Generation L.L.C.',
    subtitle: 'Intern',
    description: 'During my internship at Next Generation L.L.C., I created and deployed Nous Meeting, an AI-powered note-taking application designed for live Zoom meetings, built on a robust Django backend. I was responsible for integrating Cohere and OpenAI APIs to develop and evaluate intelligent meeting analysis features, enabling real-time meeting summarization and automated key insight extraction.',
    image: NGI_logo,
  },
  {
    date: 'June 2023 - August 2025',
    title: 'Calmare Therapuetics L.L.C.',
    subtitle: 'Intern',
    description: 'Calmare Therapuetics is a HealthTech Startup creating pain mitigation systems. At Calmare, I helped keep inventory, tested patented technologies, and assisted in day-to-day operations for the company.',
    image: Calmare_logo,
  },
  {
    date: 'June 2023 - August 2025',
    title: 'University of Connecticut, School of Computing',
    subtitle: 'Teaching Assistant',
    description: 'With the UConn School of Computing, I worked on an educational program for high school students and incoming freshmen/sophomores from under-resourced areas in Hartford, CT. The program provides laptops, WiFi in regions of Hartford, and teaches students about computer science as a field to prepare them to move into more advanced study of CS in the future. A significant portion of the student population are Spanish-only speakers, and I help support workshops and other programs being developed for these students by translating videos for the program into Spanish and assisting students during workshops.',
    image: UConn_SOC,
  },
]

const About = ({ onNavigate }) => {
  const { theme } = useTheme()

  const hobbies = [
    {
      name: 'Building',
      description: 'From quick tools to full-stack applications, I love to create!',
      image: coding_clipart,
    },
    {
      name: 'Soccer',
      description: 'I love watching and playing soccer!',
      image: soccer_ball_image,
    },
    {
      name: 'Movies',
      description: 'My favorites are Into The Spiderverse, Interstellar, and Cars',
      image: Movie_image,
    },
    {
      name: 'Music',
      description: 'Check out what I\'m listening to on the right!',
      image: Headphones_image,
    },
    {
      name: 'Gaming',
      description: 'Fifa, Overwatch, Assassin\'s Creed. Need I say more?',
      image: Controller_image,
    },
    {
      name: 'Basketball',
      description: 'I\'m a walking bucket (jk I suck)',
      image: Basketball,
    },
    {
      name: 'Traveling',
      description: 'I\'ve been to India, Dubai, Puerto Rico and Cancún.',
      image: airplane,
    },
    {
      name: 'Collecting',
      description: 'I collect pins, Pokémon cards, Legos, and soccer jerseys. RIP my wallet',
      image: pikachu,
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

  const highlightStyle = {
    backgroundImage: theme.mode === 'dark' ? 'linear-gradient(135deg, #a78bfa, #22d3ee)' : 'linear-gradient(135deg, #4f46e5, #06b6d4)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
    fontWeight: 800,
  }

  return (
    <section id="about" style={{ ...styles.section, background: theme.page }}>
      <div style={styles.wrap}>
        {/* Mobile Title */}
        <div className="mobile-only-title">
          <Reveal>
            <h2 style={{ ...styles.title, color: theme.text }}>
              <TypewriterHeading text="ABOUT ME" delay={120} />
            </h2>
            <h3 style={styles.heading}> </h3>
          </Reveal>
        </div>

        <div className="about-top" style={styles.top}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Desktop Title */}
            <div className="desktop-only-title">
              <Reveal>
                <h2 style={{ ...styles.title, color: theme.text }}>
                  <TypewriterHeading text="ABOUT ME" delay={120} />
                </h2>
                <h3 style={styles.heading}> </h3>
              </Reveal>
            </div>
            <Reveal delay={150}>
              <p style={{ ...styles.text, color: theme.muted }}>
              It's nice to meet you! I'm Aggie, a UConn student pursuing a dual-degree in <span style={highlightStyle}>Computer Science</span> and <span style={highlightStyle}>Cognitive Science</span> with a minor in <span style={highlightStyle}>Statistics</span>. 
              My interests lie in <span style={highlightStyle}>Machine Learning</span>, <span style={highlightStyle}>Data Science</span>, <span style={highlightStyle}>Software Engineering</span>, <span style={highlightStyle}>Low-Level Programming</span>, and <span style={highlightStyle}>AI</span> (who isn't nowadays?). 
              As a <span style={highlightStyle}>CS<sup>2</sup></span> student, I get to not only apply AI, but also study its history, new advancements, and most importantly, its limitations. 
              I'm extremely passionate about my work and dedicated to what I do. Take 5 minutes to look around, and if something catches your eye, let me know! 
              I'm always happy to chat with like-minded people and would love to <a href="/contact" style={{ color: theme.mode === 'dark' ? '#22d3ee' : '#4f46e5', textDecoration: 'underline', cursor: 'pointer', fontWeight: 600 }} onClick={(e) => { e.preventDefault(); onNavigate('/contact'); }}>connect</a>.
              </p>
            </Reveal>

            <Reveal delay={300}>
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
            </Reveal>

            <Reveal delay={450}>
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
          </div>

          <Reveal as="aside" delay={140} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'min(100%, 300px)', margin: '0 auto' }}>
            <div style={{ ...styles.portraitCard, borderColor: theme.panelBorder, background: theme.panel }}>
              <div style={styles.portrait} aria-label="Portrait of me"></div>
            </div>
            <SpotifyNowPlaying />
            <SpotifyTopTracks />
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
            My Journey
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
                  delay={index * 15} 
                  style={{ display: 'flex', width: '100%', flexDirection: 'inherit', justifyContent: 'space-between' }}
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

