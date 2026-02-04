import React from 'react';

const Tabs = ({ activeTab, onTabChange }) => {
    const tabs = ['Roadmap', 'Videos', 'Documents'];

    return (
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)' }}>
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        padding: '1rem 1.5rem',
                        color: activeTab === tab ? 'var(--primary)' : 'var(--text-muted)',
                        fontWeight: activeTab === tab ? '600' : '400',
                        borderBottom: activeTab === tab ? '2px solid var(--primary)' : '2px solid transparent',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        transition: 'all 0.2s'
                    }}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
