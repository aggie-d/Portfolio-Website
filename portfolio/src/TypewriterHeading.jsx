import React, { useState, useEffect } from 'react';

const TypewriterHeading = ({ text, delay = 120 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span>
      {currentText}
      <span style={{ 
        borderRight: '0.08em solid currentColor', 
        animation: 'blink-caret 1.5s step-end infinite',
        marginLeft: '4px'
      }}></span>
      <style>{`
        @keyframes blink-caret {
          50% { border-color: transparent; }
        }
      `}</style>
    </span>
  );
};

export default TypewriterHeading;
