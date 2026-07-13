import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '@google/model-viewer'
import { useTheme } from './ThemeContext'
import InteractiveButton from './InteractiveButton'

// Import your actual asset filenames here.
import icon14 from './assets/C.png'
import icon2 from './assets/C++.png'
import icon3 from './assets/CSS.png'
import icon4 from './assets/docker.png'
import icon5 from './assets/Git.png'
import icon6 from './assets/github.png'
import icon7 from './assets/HTML.png'
import icon8 from './assets/Java.png'
import icon9 from './assets/JIRA.png'
import icon10 from './assets/JS.png'
import icon11 from './assets/Matplotlib.png'
import icon12 from './assets/Pandas.png'
import icon13 from './assets/PYsr.png'
import icon1 from './assets/Python.png'
import icon15 from './assets/SQL.png'
import icon16 from './assets/Overleaf.png'
import cubeModel from './assets/cube.glb?url'

gsap.registerPlugin(ScrollTrigger)

const styles = {
  section: {
    minHeight: 'calc(100vh - 85px)',
    padding: '40px 0 96px',
    background:
      'radial-gradient(circle at 82% 35%, rgba(205, 174, 255, 0.26), transparent 18rem), radial-gradient(circle at 78% 20%, rgba(154, 211, 210, 0.18), transparent 16rem), linear-gradient(135deg, #071022 0%, #101a33 48%, #071022 100%)',
  },
  wrap: {
    width: 'min(1280px, calc(100% - 64px))',
    margin: '0 auto',
  },
  hero: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
    gap: '48px',
    alignItems: 'center',
    minHeight: '320px',
  },
  title: {
    margin: 0,
    color: '#ffffff',
    fontSize: 'clamp(3rem, 8vw, 5.5rem)',
    fontWeight: 950,
    lineHeight: 0.93,
    letterSpacing: 0,
    textShadow: '0 6px 0 rgba(0, 0, 0, 0.28)',
  },
  subtitle: {
    margin: '28px 0 0',
    color: 'rgba(241, 245, 249, 0.78)',
    fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
    fontWeight: 700,
    textShadow: '0 4px 12px rgba(0, 0, 0, 0.42)',
  },
  modelContainer: {
    minHeight: '320px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselContainer: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    margin: '78px 0',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  carouselTrack: {
    display: 'flex',
    alignItems: 'center',
    width: 'max-content',
  },
  carouselIcon: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    fontSize: '0.8rem',
    border: '1px solid rgba(226, 232, 240, 0.34)',
    marginRight: '48px',
  },
  aboutPreview: {
    display: 'flex',
    flexDirection: 'column',
    gap: '26px',
  },
  sectionIntro: {
    margin: '0 0 28px',
    color: '#ffffff',
    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
    fontWeight: 950,
  },
  tile: {
    width: '100%',
    height: '250px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '32px',
    padding: '34px clamp(24px, 5vw, 48px)',
    border: '1px solid rgba(226, 232, 240, 0.34)',
    borderRadius: '8px',
    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.05))',
    boxShadow: '0 26px 70px rgba(0, 0, 0, 0.28)',
    overflow: 'hidden',
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
    fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
    fontWeight: 950,
  },
  previewText: {
    maxWidth: '680px',
    margin: '16px 0 24px',
    color: 'rgba(241, 245, 249, 0.86)',
    fontSize: '1rem',
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
    fontSize: '1rem',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.35)',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
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
  ['Experience', 'Work', 'A timeline of internships.', '/experience', 'VIEW EXPERIENCE'],
  ['Research', 'Labs', 'A preview of research interests, methods, and academic exploration.', '/research', 'VIEW RESEARCH'],
  ['Projects', 'Builds', 'Selected applications, tools, .', '/projects', 'VIEW PROJECTS'],
  ['Awards & Honors', 'Recognition', 'Scholarships, competitions, leadership milestones, and achievements.', '/awards', 'VIEW AWARDS'],
  ['Contact', 'Connect', 'Quick links for email, LinkedIn, and code so viewers can reach you.', '/contact', 'GET IN TOUCH'],
]

const Home = ({ onNavigate }) => {
  const { theme } = useTheme()

  // Heuristic to detect dark mode robustly based on common theme properties
  const isDarkMode = theme.mode === 'dark' || theme.name === 'dark' || theme.type === 'dark' || theme.text === '#ffffff';
  const textShadowStyle = isDarkMode ? '0 4px 12px rgba(0, 0, 0, 0.6)' : 'none';
  const smallTextShadowStyle = isDarkMode ? '0 2px 8px rgba(0, 0, 0, 0.4)' : 'none';

  // Setup model switching based on theme
  const lightModelSrc = cubeModel;
  const darkModelSrc = cubeModel; // Replace this with your actual dark mode model later
  const currentModel = isDarkMode ? darkModelSrc : lightModelSrc;

  const trackRef = useRef(null)
  const containerRef = useRef(null)
  const tweenRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Carousel infinite scroll
      tweenRef.current = gsap.to(trackRef.current, {
        xPercent: -50,
        ease: 'none',
        duration: 40,
        repeat: -1,
      })

      // Scroll and load reveal animations
      const revealElements = gsap.utils.toArray('.gsap-reveal')
      revealElements.forEach((el) => {
        const delay = el.dataset.delay ? parseFloat(el.dataset.delay) / 1000 : 0
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            delay: delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const carouselIcons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15, icon16]
  // Duplicated array for seamless GSAP scrolling loop
  const carouselItems = [...carouselIcons, ...carouselIcons]

  const handleTileClick = (event, path) => {
    event.preventDefault()
    onNavigate(path)
  }

  return (
    <section id="home" ref={containerRef} style={{ ...styles.section, background: theme.page }}>
      <div style={styles.wrap}>
        <div style={styles.hero}>
          <div className="gsap-reveal">
            <h1 style={{ ...styles.title, color: theme.text, textShadow: isDarkMode ? styles.title.textShadow : 'none' }}>Agronil<br />Das</h1>
            <p style={{ ...styles.subtitle, color: theme.softText, textShadow: isDarkMode ? styles.subtitle.textShadow : 'none' }}>Computer Science & Cognitive Science</p>
          </div>

          <div className="gsap-reveal" data-delay="140" style={styles.modelContainer}>
            <model-viewer
              src={currentModel}
              alt="A 3D model placeholder"
              auto-rotate="true"
              camera-controls="true"
              style={{ width: '100%', height: '320px', background: 'transparent' }}
            >
              <div slot="poster" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: theme.softText, textShadow: smallTextShadowStyle }}>
                3D Model Placeholder
              </div>
            </model-viewer>
          </div>
        </div>
      </div>

        <div className="gsap-reveal" data-delay="80">
          <div 
            style={styles.carouselContainer} 
            aria-hidden="true"
            onMouseEnter={() => tweenRef.current && tweenRef.current.pause()}
            onMouseLeave={() => tweenRef.current && tweenRef.current.play()}
          >
            <div ref={trackRef} style={styles.carouselTrack}>
              {carouselItems.map((item, index) => (
                <div key={index} style={{ ...styles.carouselIcon, background: isDarkMode ? '#ffffff' : '#111827', borderColor: theme.panelBorder }}>
                  <img src={item} alt={`Carousel Icon ${index}`} style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                </div>
              ))}
            </div>
          </div>
        </div>

      <div style={styles.wrap}>

        <div className="gsap-reveal">
          <h2 style={{ ...styles.sectionIntro, color: theme.text, textShadow: textShadowStyle }}>Explore My Portfolio!</h2>
        </div>

        <div style={styles.aboutPreview}>
          {previewTiles.map(([title, kicker, text, path, buttonLabel], index) => (
            <div
              key={path}
              className="gsap-reveal"
              data-delay={index * 90}
              style={{ ...styles.tile, borderColor: theme.panelBorder, background: theme.panel }}
            >
              <div style={styles.tileBody}>
                <p style={{ ...styles.tileKicker, color: theme.softText, textShadow: smallTextShadowStyle }}>{kicker}</p>
                <h3 style={{ ...styles.previewTitle, color: theme.text, textShadow: textShadowStyle }}>{title}</h3>
                <p style={{ ...styles.previewText, color: theme.muted, textShadow: smallTextShadowStyle }}>{text}</p>
              </div>
              <InteractiveButton
                href={path}
                style={{ ...styles.button, color: theme.buttonText, background: theme.button, textDecoration: 'none' }}
                onClick={(event) => handleTileClick(event, path)}
              >
                {buttonLabel}
              </InteractiveButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
