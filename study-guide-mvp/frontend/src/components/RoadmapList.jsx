import React from 'react';

const RoadmapList = ({ steps }) => {
    return (
        <div className="fade-in">
            <h3 style={{ marginBottom: '1.5rem' }}>Learning Path</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {steps.map((step, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        background: 'var(--bg-card)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        border: '1px solid var(--border-color)'
                    }}>
                        <div style={{
                            width: '32px',
                            height: '32px',
                            background: 'var(--primary)',
                            color: 'white',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            marginRight: '1rem',
                            flexShrink: 0
                        }}>
                            {index + 1}
                        </div>
                        <span style={{ fontSize: '1.1rem' }}>{step}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoadmapList;
