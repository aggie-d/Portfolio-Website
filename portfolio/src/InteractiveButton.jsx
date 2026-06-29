import React, { useRef, useState } from 'react'

const InteractiveButton = ({ children, style, href, onClick, className = '', ...props }) => {
  const buttonRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    buttonRef.current.style.setProperty('--x', `${x}px`)
    buttonRef.current.style.setProperty('--y', `${y}px`)

    // Compute dynamic 3D tilt
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10

    buttonRef.current.style.setProperty('--rotateX', `${rotateX}deg`)
    buttonRef.current.style.setProperty('--rotateY', `${rotateY}deg`)
  }

  const handleMouseEnter = () => setIsHovered(true)
  
  const handleMouseLeave = () => {
    setIsHovered(false)
    if (buttonRef.current) {
      buttonRef.current.style.setProperty('--rotateX', `0deg`)
      buttonRef.current.style.setProperty('--rotateY', `0deg`)
    }
  }

  const baseStyle = {
    ...style,
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.15s ease-out, box-shadow 0.2s ease',
    transform: isHovered
      ? 'perspective(1000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) scale(1.02)'
      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
    transformStyle: 'preserve-3d',
    willChange: 'transform'
  }

  const Component = href ? 'a' : 'button'

  return (
    <Component
      ref={buttonRef}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={baseStyle}
      className={className}
      {...props}
    >
      {/* Blending highlight overlay tracking cursor */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          background: isHovered
            ? 'radial-gradient(circle 20px at var(--x) var(--y), rgba(255, 255, 255, 0.4), transparent)'
            : 'transparent',
          transition: 'background 0.2s ease',
          zIndex: 0,
          mixBlendMode: 'overlay'
        }}
      />
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </Component>
  )
}

export default InteractiveButton