import { useEffect, useRef, useState } from 'react'

const styles = {
  base: {
    transitionProperty: 'opacity, transform, filter',
    transitionDuration: '760ms',
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'opacity, transform, filter',
  },
  hidden: {
    opacity: 0,
    transform: 'translateY(34px) scale(0.985)',
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
    filter: 'blur(0)',
  },
}

const Reveal = ({ as: Tag = 'div', children, delay = 0, style = {}, once = true, ...props }) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return undefined
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.14,
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [once])

  return (
    <Tag
      ref={ref}
      {...props}
      style={{
        ...styles.base,
        ...(isVisible ? styles.visible : styles.hidden),
        transitionDelay: `${delay}ms`,
        ...style,
      }}
    >
      {children}
    </Tag>
  )
}

export default Reveal
