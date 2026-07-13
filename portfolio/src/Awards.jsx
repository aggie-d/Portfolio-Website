import { useState } from 'react'
import Reveal from './Reveal'
import { useTheme } from './ThemeContext'
import placeholderImg from './assets/Agronil_Headshot.jpeg'

const styles = {
  section: {
    scrollMarginTop: '86px',
    minHeight: 'calc(100vh - 85px)',
    padding: '32px 0 88px',
    background:
      'radial-gradient(circle at 86% 24%, rgba(210, 184, 255, 0.22), transparent 15rem), radial-gradient(circle at 84% 17%, rgba(172, 219, 214, 0.14), transparent 13rem), linear-gradient(135deg, #071022 0%, #111a32 55%, #080e1f 100%)',
  },
  wrap: {
    width: 'min(1280px, calc(100% - 64px))',
    margin: '0 auto',
  },
  title: {
    maxWidth: '860px',
    margin: '0 0 46px',
    color: '#ffffff',
    fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
    fontWeight: 950,
    lineHeight: 1.04,
  },
  timeline: {
    display: 'grid',
    gap: '22px',
  },
  item: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr)',
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
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: '8px',
    gap: '16px',
  },
  role: {
    margin: 0,
    color: '#ffffff',
    fontSize: '1.3rem',
    fontWeight: 900,
  },
  date: {
    margin: 0,
    color: 'rgba(241, 245, 249, 0.62)',
    fontSize: '0.85rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
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

const awards = [
  {
    title: 'First Place, Placeholder Pitch Event',
    date: 'Jan 2026',
    summary: 'Developed a placeholder tool using NLP and machine learning. Replace this with the award context and result.',
    details: 'This award was given to our team for creating an innovative NLP tool that achieved state of the art results. We competed against 50 other teams and secured first place.'
  },
  {
    title: 'University Scholar Recognition',
    date: 'Fall 2025',
    summary: 'A placeholder scholarship or academic recognition description can live here.',
    details: 'Received this honor in recognition of maintaining a 4.0 GPA across all computer science coursework while actively participating in research and mentorship programs.'
  },
  {
    title: 'Selected Peer Mentor',
    date: '2024 - 2025',
    summary: 'Mentorship, leadership, and community contribution placeholder text.',
    details: 'Selected from a pool of over 100 applicants to serve as a peer mentor. Provided guidance, tutoring, and support to freshmen computer science students to help them succeed in their first year.'
  },
  {
    title: 'First in a Hackathon',
    date: 'Oct 2024',
    summary: 'A short hackathon summary with team, project, and impact placeholders.',
    details: 'Our team built a real-time web application to solve local community issues. We utilized React, Node, and Firebase to develop the solution within 48 hours, ultimately winning the grand prize.'
  }
]

const Awards = () => {
  const { theme } = useTheme()
  const [expandedIndex, setExpandedIndex] = useState(null)

  return (
    <section id="awards" style={{ ...styles.section, background: theme.page }}>
      <div style={styles.wrap}>
        <Reveal>
          <h2 style={{ ...styles.title, color: theme.text }}>AWARDS & RECOGNITIONS</h2>
        </Reveal>
        
        <div style={styles.timeline}>
          {awards.map((award, index) => {
            const isExpanded = expandedIndex === index
            return (
              <Reveal
                as="article"
                key={award.title}
                delay={index * 110}
                style={{
                  ...styles.item,
                  borderColor: isExpanded ? 'rgba(255, 255, 255, 0.45)' : theme.panelBorder,
                  background: isExpanded ? 'linear-gradient(145deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.08))' : theme.panel,
                }}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <div>
                  <div style={styles.headerRow}>
                    <h3 style={{ ...styles.role, color: theme.text }}>{award.title}</h3>
                    <span style={styles.date}>{award.date}</span>
                  </div>
                  <p style={{ ...styles.text, color: theme.muted }}>{award.summary}</p>
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
                    <div style={styles.expandedBox} onClick={(e) => e.stopPropagation()}>
                      <img src={placeholderImg} alt={award.title} style={styles.expandedImage} />
                      <div style={styles.expandedContent}>
                        <h4 style={styles.expandedTitle}>Award Details</h4>
                        <p style={styles.expandedText}>{award.details}</p>
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

export default Awards
