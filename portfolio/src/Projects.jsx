import { useState, useEffect } from 'react'
import Reveal from './Reveal'
import TypewriterHeading from './TypewriterHeading'
import { useTheme } from './ThemeContext'
import placeholderImg from './assets/Agronil_Headshot.jpeg'
import react_logo from './assets/React_logo.webp'
import python_logo from './assets/Python.png'
import docker_logo from './assets/docker.png'
import farm_fresh_demo from './assets/Farm_Fresh_Demo.mp4'
import vite_logo from './assets/vite.svg'
import spotify_logo from './assets/spotify_logo.png'
import pysr_logo from './assets/PYsr.png'
import pandas_logo from './assets/Pandas.png'
import pysr_poster from './assets/PySR_Poster.jfif'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)


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
    textAlign: 'center',
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
    width: '26px',
    height: '26px',
    padding: '3px',
    borderRadius: '50%',
    objectFit: 'contain',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
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
  iconButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    color: '#0f172a',
    background: 'linear-gradient(110deg, #ffffff, #eef2ff 65%, #d8d8ff)',
    cursor: 'pointer',
    textDecoration: 'none',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
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
    width: '100%',
    maxWidth: '600px',
    alignSelf: 'center',
  },
  modalImage: {
    width: '100%',
    maxHeight: '350px',
    objectFit: 'contain',
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
    name: 'Portfolio Website',
    title: 'Interactive Personal Portfolio',
    meta: 'Personal Portfolio & Showcase',
    desc: 'A dynamic, modern personal portfolio website featuring 3D models and advanced animations all about me!',
    fullDesc: 'The website that you\re on right now! I created a fully responsive and interactive personal portfolio built to showcase my projects, skills, professional experience, and more. I used React for a component-driven architecture and Vite for fast development and optimized production builds. The user interface is brought to life using GSAP for smooth, advanced animations, and integrates Google\'s Model Viewer to natively render and interact with 3D models directly within the browser (seen on my homepage), delivering a (hopefully) highly engaging user experience.',
    techs: ['React', 'Vite', 'GSAP', 'Spotify API', 'Vercel', 'Docker'],
    techImages: [react_logo, vite_logo, spotify_logo], // Replace with your actual imported image variables (e.g., react_logo)
    githubUrl: 'https://github.com/aggie-d/Portfolio-Website',
    image: "", // Replace with your imported image variable for the project thumbnail
  },
  {
    name: 'Farm Fresh Market',
    title: 'Online Farmer\'s Market',
    meta: 'Fullstack Web Application',
    desc: 'A dual-sided marketplace connecting local farmers directly with consumers for fresh produce sales.',
    fullDesc: 'Created for my CSE 2102 Software Engineering course, Farm Fresh Market is a comprehensive online farmer\'s market designed to connect local agricultural producers directly with consumers. We built a dual-sided platform featuring dedicated dashboards for both buyers and sellers. Sellers can easily manage inventory and view sales analytics, while buyers can browse products, favorite local farms, and track past orders. The application utilizes a React single-page frontend and a Python Flask REST API backend, with Docker containerization ensuring seamless deployment.',
    techs: ['React', 'Flask', 'Python', 'SQLite', 'Docker'],
    techImages: [react_logo, docker_logo, python_logo],
    githubUrl: 'https://github.com/aggie-d/Farm_Fresh',
    // Replace the empty string below with the imported video variable once you import it at the top!
    demoVideo: farm_fresh_demo,
    image: "", // Replace with your imported image variable
  },
  {
    name: 'Ethylene Cracking Optimization',
    title: 'Symbolic Regression for Process Feasibility',
    meta: 'Machine Learning & Symbolic Regression',
    desc: 'A machine-learning pipeline using symbolic regression to discover interpretable mathematical equations for classifying process feasibility.',
    fullDesc: 'This project leverages PySR (Symbolic Regression) to discover interpretable mathematical equations for classifying ethylene cracking operating conditions as feasible or infeasible. Instead of relying on a black-box classifier, the pipeline produces a compact feasibility-boundary equation based on reactor variables. The end-to-end workflow handles dataset splitting, model training, and evaluation metrics (precision, recall, F1, AUC). It tracks trial metadata in a SQLite database and includes custom tools to measure structural drift between equations using SymPy and tree-edit distances.\nBased off this research, I created and presented a poster at the UConn Undergraduate Frontiers 2026 Exhibition.',
    techs: ['Python', 'PySR', 'SymPy', 'Scikit-learn', 'SQLite', 'Pandas'],
    techImages: [python_logo, pysr_logo, pandas_logo],
    githubUrl: 'https://github.com/aggie-d/Optimizing-Ethylene-Cracking-Using-Symbolic-Regression', // Replace with your actual repo URL    
    image: pysr_poster, // Replace with your imported image variable
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
            <h2 style={{ ...styles.title, color: theme.text }}>
              <TypewriterHeading text="MY PROJECTS" delay={120} />
            </h2>
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
                    {proj.techImages?.map((img, i) => (
                      <img key={i} src={img} alt={`Tech ${i+1}`} style={styles.techIcon} />
                    ))}
                  </div>
                  <a 
                    href={proj.githubUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ ...styles.iconButton, color: theme.buttonText, background: theme.button }}
                    onClick={(e) => { e.stopPropagation(); }}
                    title="View Source on GitHub"
                  >
                    <GithubIcon />
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
            <div style={styles.modalTextCol}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <h2 style={styles.modalTitle}>{selectedProject.name}</h2>
                <a 
                  href={selectedProject.githubUrl || '#'} 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    ...styles.iconButton, 
                    color: theme.buttonText, 
                    background: theme.button, 
                  }}
                  title="View Source on GitHub"
                >
                  <GithubIcon />
                </a>
              </div>
              <p style={styles.modalDesc}>{selectedProject.fullDesc}</p>
              
              <p style={styles.modalTechs}>
                <strong style={{ color: '#ffffff' }}>Tech Stack:</strong> {selectedProject.techs.join(', ')}
              </p>
              
              <div style={styles.modalImageWrapper}>
                {selectedProject.demoVideo ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                    <video 
                      src={selectedProject.demoVideo} 
                      controls 
                      style={{ ...styles.modalImage, backgroundColor: '#000' }} 
                    />
                    <span style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 600 }}>Watch our demo here!</span>
                  </div>
                ) : (
                  <img src={selectedProject.image || placeholderImg} alt={selectedProject.title} style={styles.modalImage} />
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default Projects
