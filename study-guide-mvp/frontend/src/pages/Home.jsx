import React from 'react';
import SubjectCard from '../components/SubjectCard';

// 1. DUMMY DATA (Normally fetched from Backend API)
const DUMMY_SUBJECTS = [
    {
        id: 'dsa',
        name: 'Data Structures & Algorithms',
        description: 'Master the fundamentals of computer science and crack coding interviews.'
    },
    {
        id: 'os',
        name: 'Operating Systems',
        description: 'Understand how computers work under the hood: processes, threads, and memory.'
    },
    {
        id: 'dbms',
        name: 'Database Management',
        description: 'Learn SQL, NoSQL, and how to design scalable database schemas.'
    }
];

const Home = () => {
    return (
        <div className="container">
            <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    background: 'linear-gradient(to right, #fff, #94a3b8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Start Your Learning Journey
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>
                    Select a subject to view its roadmap, resources, and more.
                </p>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {DUMMY_SUBJECTS.map(subject => (
                    <SubjectCard key={subject.id} subject={subject} />
                ))}
            </div>

            {/* 3. EXPLANATION FOR DEVELOPER */}
            <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>💡 Developer Note:</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Currently, the `DUMMY_SUBJECTS` array is hardcoded in this file.<br />
                    <strong>Backend Integration:</strong> Later, you will replace this array with a `fetch('/api/subjects')` call inside a `useEffect` hook to get real data from your MongoDB database.
                </p>
            </div>
        </div>
    );
};

export default Home;
