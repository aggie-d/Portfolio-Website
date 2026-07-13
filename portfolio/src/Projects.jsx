import { useState, useEffect } from 'react'
import Reveal from './Reveal'
import { useTheme } from './ThemeContext'
import placeholderImg from './assets/Agronil_Headshot.jpeg'

const styles = {
  section: {
    scrollMarginTop: '86px',
    padding: '32px 0 88px',
    background:
      'radial-gradient(circle at 86% 24%, rgba(210, 184, 255, 0.24), transparent 15rem), radial-gradient(circle at 84% 18%, rgba(172, 219, 214, 0.15), transparent 13rem), linear-gradient(135deg, #071022 0%, #111a32 55%, #080e1f 100%)',
  },
  wrap: {
    width: 'min(1280px, calc(100% - 64px))',
    margin: '0 auto',
  },
  top: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '16px',
    marginBottom: '46px',
  },
  title: {
    maxWidth: '820px',
    margin: 0,
    color: '#ffffff',
    fontSize: 'clamp(2rem, 4vw, 3.2rem)',
    fontWeight: 950,
    lineHeight: 1.05,
  },
  intro: {
    maxWidth: '100%',
    margin: 0,
    color: 'rgba(248, 250, 252, 0.82)',
    fontSize: '1.05rem',
    lineHeight: 1.45,
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
    cursor: 'pointer',
    transition: 'transform 0.2s ease, background 0.2s ease',
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
    fontSize: '1.2rem',
    lineHeight: 1.12,
  },
  meta: {
    margin: 0,
    color: 'rgba(226, 232, 240, 0.76)',
    fontSize: '0.9rem',
  },
  desc: {
    margin: 0,
    color: 'rgba(248, 250, 252, 0.82)',
    fontSize: '0.95rem',
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
    gap: '6px',
    alignItems: 'center',
  },
  techIcon: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '1px solid rgba(255, 255, 255, 0.2)',
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
    fontSize: '0.9rem',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    backdropFilter: 'blur(10px)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  modalOverlayOpen: {
    opacity: 1,
  },
  modalContent: {
    position: 'relative',
    width: '100%',
    maxHeight: '94vh',
    maxWidth: '1200px',
    height: '500px',
    backgroundColor: '#0f172a',
    borderRadius: '16px',
    padding: '50px 60px',
    border: '1px solid rgba(226, 232, 240, 0.2)',
    boxShadow: '0 40px 100px rgba(0, 0, 0, 0.8)',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '50px',
    alignItems: 'start',
    overflowY: 'auto',
    transform: 'scale(0.95) translateY(15px)',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  modalContentOpen: {
    transform: 'scale(1) translateY(0)',
  },
  modalCloseBtn: {
    position: 'absolute',
    top: '24px',
    right: '32px',
    background: 'transparent',
    border: 'none',
    color: '#ffffff',
    fontSize: '2.5rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    zIndex: 10,
    lineHeight: 1,
  },
  modalImageWrapper: {
    width: '200px',
    maxWidth: '35%',
    flexShrink: 0,
  },
  modalImage: {
    width: '100%',
    aspectRatio: '1',
    objectFit: 'cover',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
  },
  modalTextCol: {
    flex: '1 1 300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  modalTitle: {
    margin: 0,
    color: '#ffffff',
    fontSize: '2.2rem',
    fontWeight: 900,
    paddingRight: '30px',
  },
  modalDesc: {
    margin: 0,
    color: 'rgba(248, 250, 252, 0.88)',
    fontSize: '1rem',
    lineHeight: 1.7,
  },
  modalTechs: {
    margin: 0,
    color: 'rgba(226, 232, 240, 0.75)',
    fontSize: '0.95rem',
  },
}

const projects = [
  {
    name: 'Project Alpha',
    title: 'Multimodal Research Tool',
    meta: 'First place, placeholder pitch event',
    desc: 'A precision-diagnostic tool using advanced NLP and machine learning. Replace this with your real project summary.',
    fullDesc: 'This project involved building a robust tool using advanced NLP and machine learning techniques to diagnose issues with precision. It successfully parsed multimodal inputs and provided accurate outputs, earning first place at the recent pitch event. Our focus was on creating a highly scalable and resilient architecture. We gathered an extensive dataset spanning several modalities and achieved an impressive F1 score in our final benchmarks.',
    techs: ['Python', 'TensorFlow', 'React', 'AWS'],
  },
  {
    name: 'Project Beta',
    title: 'AI Meeting Transcription',
    meta: 'Django, Tailwind CSS, automation',
    desc: 'An AI-driven application for meeting transcription, summaries, and task extraction. Replace with your case study.',
    fullDesc: 'An AI-driven application designed to automate meeting transcriptions and generate concise summaries. We used OpenAI APIs to extract actionable tasks directly from the conversation, improving team productivity. The frontend was built with modern UI frameworks to ensure a snappy user experience. Features include live audio streaming, speaker diarization, and automatic syncing to Jira and Asana.',
    techs: ['Django', 'Tailwind CSS', 'OpenAI API', 'WebSockets'],
  },
  {
    name: 'Project Gamma',
    title: 'Dashboard Platform',
    meta: 'Analytics and data visualization',
    desc: 'A web platform for tracking key metrics, visualizing patterns, and presenting usable insights.',
    fullDesc: 'A comprehensive web platform that integrates with multiple data sources to provide real-time tracking of key performance metrics. We utilized D3.js for intricate data visualizations and built a modular dashboard where users can customize their views according to their specific needs. The application handles high-frequency data ingestion and caches it via Redis for instant load times.',
    techs: ['React', 'D3.js', 'Node.js', 'Redis'],
  },
  {
    name: 'Project Delta',
    title: 'Systems Utility',
    meta: 'Architecture and tooling',
    desc: 'A low-level or developer productivity project with placeholder results, stack details, and links.',
    fullDesc: 'This utility was designed to enhance developer productivity by providing a low-level tooling interface. It intercepts system calls to log performance bottlenecks and generates detailed reports. It integrates seamlessly into existing CI/CD pipelines, saving hours of manual debugging. We wrote the core logic in Rust to guarantee memory safety and optimal execution speed across platforms.',
    techs: ['Rust', 'Docker', 'Bash', 'GitHub Actions'],
  },
]

const Projects = () => {
  const { theme } = useTheme()
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const openModal = (proj) => {
    setSelectedProject(proj)
    document.body.style.overflow = 'hidden'
    setTimeout(() => setIsModalVisible(true), 10)
  }

  const closeModal = () => {
    setIsModalVisible(false)
    document.body.style.overflow = ''
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <>
      <section id="projects" style={{ ...styles.section, background: theme.page }}>
        <div style={styles.wrap}>
          <Reveal style={styles.top}>
            <h2 style={{ ...styles.title, color: theme.text }}>MY PROJECTS</h2>
            <p style={{ ...styles.intro, color: theme.muted }}>
              I love building and deploying tools that fill the niches of the people around me!
            </p>
          </Reveal>

          <div style={styles.grid}>
            {projects.map((proj, index) => (
              <Reveal 
                as="article" 
                style={{ ...styles.card, borderColor: theme.panelBorder, background: theme.panel }} 
                delay={index * 110} 
                key={proj.name}
                onClick={() => openModal(proj)}
              >
                <div style={styles.logo}>{proj.name}</div>
                <h3 style={{ ...styles.titleSmall, color: theme.text }}>{proj.title}</h3>
                <p style={{ ...styles.meta, color: theme.softText }}>{proj.meta}</p>
                <p style={{ ...styles.desc, color: theme.muted }}>{proj.desc}</p>
                <div style={styles.footer}>
                  <div style={styles.tech}>
                    <img src={placeholderImg} alt="Tech 1" style={styles.techIcon} />
                    <img src={placeholderImg} alt="Tech 2" style={styles.techIcon} />
                    <img src={placeholderImg} alt="Tech 3" style={styles.techIcon} />
                  </div>
                  <a 
                    href="#"
                    style={{ ...styles.button, color: theme.buttonText, background: theme.button }}
                    onClick={(e) => { e.stopPropagation(); }}
                  >
                    Link to Demo
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div 
          style={{ 
            ...styles.modalOverlay, 
            ...(isModalVisible ? styles.modalOverlayOpen : {}) 
          }} 
          onClick={closeModal}
        >
          <div 
            style={{ 
              ...styles.modalContent, 
              ...(isModalVisible ? styles.modalContentOpen : {}) 
            }} 
            onClick={(e) => e.stopPropagation()}
          >
            <button style={styles.modalCloseBtn} onClick={closeModal}>&times;</button>
            
            <div style={styles.modalImageWrapper}>
              <img src={placeholderImg} alt={selectedProject.title} style={styles.modalImage} />
            </div>
            
            <div style={styles.modalTextCol}>
              <h2 style={styles.modalTitle}>{selectedProject.title}</h2>
              <p style={styles.modalDesc}>{selectedProject.fullDesc}</p>
              
              <div style={{ marginTop: 'auto' }}>
                <p style={styles.modalTechs}>
                  <strong style={{ color: '#ffffff' }}>Technologies Used:</strong> {selectedProject.techs.join(', ')}
                </p>
                <a 
                  href="#" 
                  style={{ 
                    ...styles.button, 
                    color: theme.buttonText, 
                    background: theme.button, 
                    display: 'inline-flex',
                    marginTop: '20px'
                  }}
                  onClick={(e) => e.preventDefault()}
                >
                  Link to Demo
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default Projects
