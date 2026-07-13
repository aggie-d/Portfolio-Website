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
      'radial-gradient(circle at 86% 31%, rgba(210, 184, 255, 0.24), transparent 15rem), radial-gradient(circle at 86% 22%, rgba(172, 219, 214, 0.15), transparent 13rem), linear-gradient(135deg, #071022 0%, #111a32 55%, #080e1f 100%)',
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
    display: 'grid',
    gridTemplateColumns: '170px minmax(0, 1fr)',
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
    width: '28px',
    height: '28px',
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

const researchEntries = [
  {
    date: 'Ongoing',
    role: 'Applied Symbolic Regression',
    org: 'Research Apprentice, Placeholder Modeling & Systems Engineering Lab',
    text: 'Working on optimization and interpretable models using placeholder libraries and experimental datasets.',
    details: 'Replace this with the research problem, methods, and outcomes. We explored the performance tradeoffs between various evolutionary algorithms to extract symbolic formulas from complex datasets. The findings were presented at our departmental symposium.'
  },
  {
    date: 'Past',
    role: 'Computer Architecture',
    org: 'University Name',
    text: 'Investigating low-level hardware design, logic gate configuration, and assembly concepts.',
    details: 'Replace this with architecture tools, coursework, or research details. We simulated complex microprocessor designs in Logisim and analyzed power consumption versus performance throughput on a cycle-by-cycle basis.'
  }
]

const Research = () => {
  const { theme } = useTheme()
  const [expandedIndex, setExpandedIndex] = useState(null)

  return (
    <section id="research" style={{ ...styles.section, background: theme.page }}>
      <div style={styles.wrap}>
        <Reveal>
          <h2 style={{ ...styles.title, color: theme.text }}>RESEARCH</h2>
          <p style={{ ...styles.intro, color: theme.muted }}>
            My academic focus revolves around applied symbolic regression and computer architecture, pushing the boundaries of interpretable machine learning and efficient systems design.
          </p>
        </Reveal>

        <div style={styles.timeline}>
          {researchEntries.map((res, index) => {
            const isExpanded = expandedIndex === index
            return (
              <Reveal
                as="article"
                key={`${res.date}-${res.role}`}
                delay={index * 110}
                style={{
                  ...styles.item,
                  borderColor: isExpanded ? 'rgba(255, 255, 255, 0.45)' : theme.panelBorder,
                  background: isExpanded ? 'linear-gradient(145deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.08))' : theme.panel,
                }}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <div style={styles.circlesContainer}>
                  <img src={placeholderImg} alt="Icon 1" style={styles.circleImage} />
                  <img src={placeholderImg} alt="Icon 2" style={styles.circleImage} />
                  <img src={placeholderImg} alt="Icon 3" style={styles.circleImage} />
                </div>

                <p style={{ ...styles.date, color: theme.softText }}>{res.date}</p>
                <div>
                  <h3 style={{ ...styles.role, color: theme.text }}>{res.role}</h3>
                  <p style={{ ...styles.org, color: theme.softText }}>{res.org}</p>
                  <p style={{ ...styles.text, color: theme.muted }}>{res.text}</p>
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
                      <img src={placeholderImg} alt={res.role} style={styles.expandedImage} />
                      <div style={styles.expandedContent}>
                        <h4 style={styles.expandedTitle}>Research Details</h4>
                        <p style={styles.expandedText}>{res.details}</p>
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

export default Research
