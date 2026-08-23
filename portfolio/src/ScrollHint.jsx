import React, { useState, useEffect } from 'react'
import { useTheme } from './ThemeContext'

const ScrollHint = () => {
  const { theme } = useTheme()
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Hide if user scrolled down more than 50px
      if (window.scrollY > 50) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    // Check initial position
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  const styles = {
    container: {
      position: 'fixed',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      opacity: 0.8,
      animation: 'bounce 2s infinite',
      pointerEvents: 'none', // Don't block clicks
      zIndex: 10,
    },
    text: {
      color: theme.text,
      fontSize: '0.85rem',
      fontWeight: 600,
      margin: 0,
      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
    },
    arrow: {
      color: theme.text,
      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
    }
  }

  return (
    <>
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
            40% { transform: translateY(-10px) translateX(-50%); }
            60% { transform: translateY(-5px) translateX(-50%); }
          }
        `}
      </style>
      <div style={styles.container}>
        <p style={styles.text}>Scroll For More!</p>
        <svg 
          width="20" height="20" viewBox="0 0 24 24" 
          fill="none" stroke="currentColor" strokeWidth="2.5" 
          strokeLinecap="round" strokeLinejoin="round" 
          style={styles.arrow}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </>
  )
}

export default ScrollHint
