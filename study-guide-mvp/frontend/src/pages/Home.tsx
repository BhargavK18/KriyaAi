import React from 'react';
import SubjectCard from '../components/SubjectCard';

// Define the Subject shape
interface Subject {
    name: string;
    description: string;
}

// Dummy configuration data
const DUMMY_SUBJECTS: Subject[] = [
    { name: "DSA", description: "Learn Data Structures and Algorithms" },
    { name: "OS", description: "Operating Systems fundamentals" }
];

const Home: React.FC = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Study Guide Subjects</h1>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px'
            }}>
                {DUMMY_SUBJECTS.map((subject) => (
                    <SubjectCard
                        key={subject.name}
                        name={subject.name}
                        description={subject.description}
                    />
                ))}
            </div>

            {/* Developer Context */}
            <div style={{
                marginTop: '40px',
                padding: '15px',
                border: '1px dashed #666',
                borderRadius: '8px',
                fontSize: '0.9rem',
                color: '#aaa'
            }}>
                <strong>Backend Note:</strong> This list is currently static. Later, we will fetch this array from the backend API (e.g., MongoDB).
            </div>
        </div>
    );
};

export default Home;
