import React from 'react';

const VideoList = ({ videos }) => {
    return (
        <div className="fade-in">
            <h3 style={{ marginBottom: '1.5rem' }}>Related Videos</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {videos.map((video, index) => (
                    <a
                        key={index}
                        href={video.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'block',
                            background: 'var(--bg-card)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '1px solid var(--border-color)',
                            transition: 'transform 0.2s',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{
                            height: '160px',
                            background: '#000',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#888'
                        }}>
                            {/* Placeholder for thumbnail */}
                            <span>▶ Video {index + 1}</span>
                        </div>
                        <div style={{ padding: '1rem' }}>
                            <h4 style={{ marginBottom: '0.5rem', }}>{video.title}</h4>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Watch on YouTube ↗</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default VideoList;
