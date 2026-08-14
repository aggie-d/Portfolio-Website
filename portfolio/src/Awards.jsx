import { useState } from 'react'
import Reveal from './Reveal'
import TypewriterHeading from './TypewriterHeading'
import { useTheme } from './ThemeContext'
import placeholderImg from './assets/Agronil_Headshot.jpeg'
import CMOCawardimg from './assets/CMOC_Award.png'

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
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'flex-start',
  },
  expandedImage: {
    maxWidth: '100%',
    maxHeight: '600px',
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'contain',
    alignSelf: 'center',
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
    title: 'Dean\'s List',
    date: 'Fall 2024, Fall 2025, Spring 2026',
    summary: 'Awarded by the UConn College of Engineering and the College of Liberal Arts and Science ',
    details: 'Awarded to the students in the upper 25th percentile in the College.',
  },
  {
    title: 'Excellence in Reliability Award',
    date: 'May 2026',
    summary: 'Awarded by UConn Vergnano Institute of of Impact (VII).',
    details: 'Received for my dedication and effort to the Society of Asian Scientists and Engineers',
  },
  {
    title: 'Best Poster Paper: Undergraduate Student Category Award',
    date: 'March 2026',
    summary: 'Awarded by the CMOC Symposium',
    details: 'Received for my research titled "Comparative Tele-Traffic Analysis for Zoom Bot Infrastructure". This research paper focused on optimizing the infrastructure for AI agents in the application of Zoom note-taking bots. \n This research was inspired by the work I did at Next Generation Innovations for Nous Meeting. ',
    image: CMOCawardimg 
  },
  {
    title: 'New England Scholar',
    date: '2025',
    summary: 'Awarded by UConn',
    details: 'Awarded for having a GPA of above 3.7 for 2 semesters in a calendar year.',
  },
  {
    title: 'Saint Michael\'s College Book Award for Academic Achievment and Social Conscience',
    date: 'May 2024',
    summary: 'Awarded by Saint Michael\'s College',
    details: 'Recognized for my demostration of volunteerism and leadership in my community.',
  },
]

const Awards = () => {
  const { theme } = useTheme()
  const [expandedIndex, setExpandedIndex] = useState(null)

  return (
    <section id="awards" style={{ ...styles.section, background: theme.page }}>
      <div style={styles.wrap}>
        <Reveal>
          <h2 style={{ ...styles.title, color: theme.text }}>
            <TypewriterHeading text="AWARDS & RECOGNITIONS" delay={120} />
          </h2>
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
                      {award.image && (
                        <img src={award.image} alt={award.title} style={styles.expandedImage} />
                      )}
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
