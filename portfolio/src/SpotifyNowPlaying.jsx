import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeContext';

const SpotifyNowPlaying = () => {
  const { theme } = useTheme();
  const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    // Point this to your backend or serverless function
    fetch('/api/now-playing')
      .then((res) => res.json())
      .then((data) => setNowPlaying(data))
      .catch((err) => console.error('Error fetching Spotify data:', err));
  }, []);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box',
      gap: '12px',
      padding: '12px 18px',
      marginTop: '28px',
      borderRadius: '8px',
      border: `1px solid ${theme.panelBorder || 'rgba(226, 232, 240, 0.34)'}`,
      background: theme.panel || 'linear-gradient(145deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.05))',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      textDecoration: 'none',
      color: theme.text,
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      cursor: 'pointer',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
    },
    icon: {
      width: '16px',
      height: '16px',
      fill: '#1DB954', // Spotify Green
    },
    status: {
      fontSize: '0.7rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      color: theme.softText || 'rgba(241, 245, 249, 0.78)',
    },
    trackContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    albumArt: {
      width: '40px',
      height: '40px',
      borderRadius: '4px',
      objectFit: 'cover',
    },
    info: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '0.9rem',
    },
    song: {
      fontWeight: 700,
      color: theme.text,
    },
    artist: {
      fontSize: '0.8rem',
      color: theme.softText || 'rgba(241, 245, 249, 0.78)',
    }
  };

  if (!nowPlaying) return null; // Avoid rendering until loaded

  return (
    <a
      href={nowPlaying.songUrl || 'https://open.spotify.com'}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.container}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={styles.header}>
        <svg style={styles.icon} viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.2.359.18.479.659.241 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.54-1.02.72-1.56.3z"/>
        </svg>
        {nowPlaying.title && (
          <span style={styles.status}>
            {nowPlaying.isPlaying ? 'Now Playing' : 'Last Played'}
          </span>
        )}
      </div>
      
      <div style={styles.trackContent}>
        {nowPlaying.albumImageUrl && (
          <img src={nowPlaying.albumImageUrl} alt={`${nowPlaying.title} album art`} style={styles.albumArt} />
        )}
        <div style={styles.info}>
          {nowPlaying.title ? (
            <>
              <span style={styles.song}>{nowPlaying.title}</span>
              <span style={styles.artist}>{nowPlaying.artist}</span>
            </>
          ) : (
            <span style={styles.song}>Not Currently Playing</span>
          )}
        </div>
      </div>
    </a>
  );
};

export default SpotifyNowPlaying;