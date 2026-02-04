import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubjectCard = ({ subject }) => {
    const navigate = useNavigate();

    return (
        <div
            className="subject-card fade-in"
            onClick={() => navigate(`/subject/${subject.id}`)}
            style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '24px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(139, 92, 246, 0.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            }}
        >
            <div style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '8px'
            }}>
                {subject.name.charAt(0)}
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>{subject.name}</h3>
            <p style={{ color: 'var(--text-muted)' }}>{subject.description}</p>
        </div>
    );
};

export default SubjectCard;
