import { useState } from 'react'
import Reveal from './Reveal'
import TypewriterHeading from './TypewriterHeading'
import { useTheme } from './ThemeContext'
import ASMLimg from './assets/ASML_logo.webp'
import UConn_logo from './assets/University_of_Connecticut_logo.png'
import NGI_logo from './assets/NGI_logo.webp'
import Calmare_logo from './assets/Calmare_Therapuetics_logo.webp'
import Exnuero_logo from './assets/exnuero_logo.jfif'
import UConn_SOC from './assets/UConn_soc.jpg'
import Python_logo from './assets/Python.png'
import github from './assets/github.png'
import Cplusplus_logo from './assets/C++.png'
import git from './assets/Git.png'
import SQL_logo from './assets/SQL.png'
import Java_logo from './assets/Java.png'
import docker_logo from './assets/docker.png'

const styles = {
  section: {
    scrollMarginTop: '86px',
    minHeight: 'calc(100vh - 85px)',
    padding: '32px 0 108px',
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
    maxWidth: '100%',
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
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '28px',
    alignItems: 'start',
    padding: '28px',
    border: '1px solid rgba(226, 232, 240, 0.34)',
    borderRadius: '8px',
    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.05))',
    boxShadow: '0 26px 70px rgba(0, 0, 0, 0.28)',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  circlesContainer: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    display: 'flex',
    gap: '8px',
  },
  circleImage: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
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
    paddingRight: '90px',
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
  expandWrapper: {
    gridColumn: '1 / -1',
    display: 'grid',
    transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), margin-top 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  expandInner: {
    overflow: 'hidden',
  },
  expandedBox: {
    padding: '24px',
    background: 'rgba(0, 0, 0, 0.25)',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-start',
  },
  expandedImage: {
    width: '140px',
    height: '140px',
    borderRadius: '8px',
    objectFit: 'cover',
    flexShrink: 0,
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
  },
  expandedContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  expandedTitle: {
    margin: 0,
    color: '#ffffff',
    fontSize: '1.15rem',
    fontWeight: 700,
  },
  expandedText: {
    color: 'rgba(248, 250, 252, 0.9)',
    fontSize: '0.95rem',
    lineHeight: 1.6,
    margin: 0,
  },
}

const experiences = [
  {
    date: 'May 2026 - August 2026',
    role: 'Software Engineering Intern',
    org: 'ASML',
    text: 'Developed an HDR imaging pipeline combining six exposure images into a high-quality diagnostic image and designed a configurable multi-exposure imaging workflow.',
    details: 'I developed a HDR imaging pipeline that combines six exposure images into a high-quality diagnostic image. I also designed a configurable multi-exposure imaging workflow for the diagnostic camera systems, which drove a 98% increase in diagnostic productivity. Finally, I built an automated validation tool that significantly accelerated the testing and integration of new image-processing capabilities.',
    image: ASMLimg,
    images: [Cplusplus_logo, Python_logo, git],
  },
  {
    date: 'September 2025 - January 2026',
    role: 'Chief Technology Officer',
    org: 'Exneuro',
    text: 'Led technical development for RaayuXAI, an early-stage Alzheimer\'s disease precision-diagnostic tool leveraging multimodal linguistic biomarkers.',
    details: 'At Exneuro, I led technical development for RaayuXAI, an early-stage Alzheimer\'s disease (MCI) precision-diagnostic tool leveraging neurobiologically-grounded multimodal linguistic biomarkers. In collaboration with the UConn Health Center, I trained models using patient blood samples and data from DementiaBank. I also refactored the codebase to streamline operations and minimize API calls, achieving a ~90% reduction in application load times.',
    image: Exnuero_logo,
    images: [Python_logo, git],
  },
  {
    date: 'May 2025 - Present',
    role: 'S-STEM Peer Mentor',
    org: 'University of Connecticut',
    text: 'Coordinate regular meetings with mentee to talk about experiences, advice, guidance, and support as they navigate STEM studies.',
    details: 'I\'m a peer mentor for a student in the S-STEM program. S-STEM is a scholarship granted to students who demonstrate financial need, or are First-Generation students, and are majoring in a STEM field. As a peer mentor, I coordinate regular meetings with my mentee to talk about my experiences as a student, provide them advice, guidance, and support as they navigate their major and UConn.',
    image: UConn_logo,
    images: [],
  },
  {
    date: 'May 2025 - August 2025',
    role: 'Intern',
    org: 'Next Generation L.L.C.',
    text: 'Created and deployed Nous Meeting, an AI-powered note-taking application designed for live Zoom meetings on a Django backend.',
    details: 'During my internship at Next Generation L.L.C., I created and deployed Nous Meeting, an AI-powered note-taking application designed for live Zoom meetings, built on a robust Django backend. I was responsible for integrating Cohere and OpenAI APIs to develop and evaluate intelligent meeting analysis features, enabling real-time meeting summarization and automated key insight extraction.',
    image: NGI_logo,
    images: [Python_logo, git],
  },
  {
    date: 'June 2023 - August 2025',
    role: 'Intern',
    org: 'Calmare Therapuetics L.L.C.',
    text: 'Assisted HealthTech startup operations, inventory management, and testing of patented pain mitigation technologies.',
    details: 'Calmare Therapuetics is a HealthTech Startup creating pain mitigation systems. At Calmare, I helped keep inventory, tested patented technologies, and assisted in day-to-day operations for the company.',
    image: Calmare_logo,
    images: [],
  },
  {
    date: 'June 2023 - August 2025',
    role: 'Teaching Assistant',
    org: 'University of Connecticut, School of Computing',
    text: 'Supported educational CS workshops for high school and under-resourced students, preparing curriculum and translating content to Spanish.',
    details: 'With the UConn School of Computing, I worked on an educational program for high school students and incoming freshmen/sophomores from under-resourced areas in Hartford, CT. The program provides laptops, WiFi in regions of Hartford, and teaches students about computer science as a field to prepare them to move into more advanced study of CS in the future. A significant portion of the student population are Spanish-only speakers, and I help support workshops and other programs being developed for these students by translating videos for the program into Spanish and assisting students during workshops.',
    image: UConn_SOC,
    images: [],
  },
]

const Experience = () => {
  const { theme } = useTheme()
  const [expandedIndex, setExpandedIndex] = useState(null)

  return (
    <section id="experience" style={{ ...styles.section, background: theme.page }}>
      <div style={styles.wrap}>
        <Reveal>
          <h2 style={{ ...styles.title, color: theme.text }}>
            <TypewriterHeading text="MY EXPERIENCE" delay={120} />
          </h2>
          <p style={{ ...styles.intro, color: theme.muted }}>
            I have extensive professional experience working on teams dedicated to delivering high quality software in both corporate and startup settings.
          </p>
        </Reveal>

        <div style={styles.timeline}>
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index
            const cardIcons = exp.images || [exp.image, exp.image, exp.image]
            return (
              <Reveal
                as="article"
                key={`${exp.date}-${exp.role}`}
                delay={index * 110}
                style={{
                  ...styles.item,
                  borderColor: isExpanded ? 'rgba(255, 255, 255, 0.45)' : theme.panelBorder,
                  background: isExpanded ? 'linear-gradient(145deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.08))' : theme.panel,
                }}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <div style={styles.circlesContainer}>
                  {cardIcons.map((imgSrc, i) => (
                    <img key={i} src={imgSrc} alt={`Icon ${i + 1}`} style={styles.circleImage} />
                  ))}
                </div>

                <p style={{ ...styles.date, color: theme.softText, flexBasis: '170px', flexShrink: 0 }}>{exp.date}</p>
                <div style={{ flex: '1 1 250px' }}>
                  <h3 style={{ ...styles.role, color: theme.text }}>{exp.role}</h3>
                  <p style={{ ...styles.org, color: theme.softText }}>{exp.org}</p>
                  <p style={{ ...styles.text, color: theme.muted }}>{exp.text}</p>
                </div>

                <div 
                  style={{
                    ...styles.expandWrapper,
                    gridTemplateRows: isExpanded ? '1fr' : '0fr',
                    opacity: isExpanded ? 1 : 0,
                    marginTop: isExpanded ? '16px' : '0px',
                    pointerEvents: isExpanded ? 'auto' : 'none',
                  }}
                >
                  <div style={styles.expandInner}>
                    <div className="expanded-box" style={styles.expandedBox} onClick={(e) => e.stopPropagation()}>
                      <img src={exp.image} alt={exp.role} style={styles.expandedImage} />
                      <div style={styles.expandedContent}>
                        <h4 style={styles.expandedTitle}>Role & Impact Details</h4>
                        <p style={styles.expandedText}>{exp.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience


