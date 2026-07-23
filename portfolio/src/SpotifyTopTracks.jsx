import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeContext';

const SpotifyTopTracks = () => {
  const { theme } = useTheme();
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    fetch('/api/top-tracks')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch top tracks');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setTracks(data.slice(0, 5));
        } else {
          setTracks([]);
        }
      })
      .catch((err) => {
        console.error('Error fetching Spotify top tracks:', err);
        setTracks([]);
      });
  }, []);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box',
      gap: '10px',
      padding: '14px 16px',
      marginTop: '16px',
      borderRadius: '8px',
      border: `1px solid ${theme.panelBorder || 'rgba(226, 232, 240, 0.34)'}`,
      background: theme.panel || 'linear-gradient(145deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.05))',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: '8px',
      borderBottom: `1px solid ${theme.panelBorder || 'rgba(255, 255, 255, 0.1)'}`,
    },
    titleGroup: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
    },
    icon: {
      width: '15px',
      height: '15px',
      fill: '#1DB954',
    },
    title: {
      fontSize: '0.75rem',
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '0.6px',
      color: theme.softText || 'rgba(241, 245, 249, 0.85)',
    },
    subtitle: {
      fontSize: '0.65rem',
      color: '#1DB954',
      fontWeight: 700,
    },
    trackList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
    },
    trackItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '6px 8px',
      borderRadius: '6px',
      textDecoration: 'none',
      color: theme.text,
      transition: 'background 0.2s ease, transform 0.2s ease',
      cursor: 'pointer',
    },
    rank: {
      fontSize: '0.75rem',
      fontWeight: 800,
      color: '#1DB954',
      width: '14px',
      textAlign: 'center',
      flexShrink: 0,
    },
    albumArt: {
      width: '34px',
      height: '34px',
      borderRadius: '4px',
      objectFit: 'cover',
      flexShrink: 0,
    },
    info: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      flex: 1,
    },
    songName: {
      fontSize: '0.78rem',
      fontWeight: 700,
      color: theme.text,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    artistName: {
      fontSize: '0.68rem',
      color: theme.muted || 'rgba(248, 250, 252, 0.7)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  };

  // Avoid rendering until live tracks are retrieved from Spotify API
  if (!tracks || tracks.length === 0) return null;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.titleGroup}>
          <svg style={styles.icon} viewBox="0 0 24 24">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.2.359.18.479.659.241 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.54-1.02.72-1.56.3z"/>
          </svg>
          <span style={styles.title}>Top 5 This Week</span>
        </div>
        <span style={styles.subtitle}>On Repeat</span>
      </div>

      <div style={styles.trackList}>
        {tracks.map((track, idx) => (
          <a
            key={track.id || idx}
            href={track.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.trackItem}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateX(2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            <span style={styles.rank}>{idx + 1}</span>
            <img src={track.albumImageUrl} alt={`${track.title} cover`} style={styles.albumArt} />
            <div style={styles.info}>
              <span style={styles.songName}>{track.title}</span>
              <span style={styles.artistName}>{track.artist}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SpotifyTopTracks;
