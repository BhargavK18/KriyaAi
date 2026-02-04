import React from 'react';

// Simple interface for props
interface SubjectCardProps {
    name: string;
    description: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ name, description }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            backgroundColor: '#2e2e2e',
            color: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h3 style={{ margin: '0 0 8px 0', color: '#8b5cf6' }}>{name}</h3>
            <p style={{ margin: 0, color: '#ccc' }}>{description}</p>
        </div>
    );
};

export default SubjectCard;
