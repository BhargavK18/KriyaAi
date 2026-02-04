import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Tabs from '../components/Tabs';
import RoadmapList from '../components/RoadmapList';
import VideoList from '../components/VideoList';

// 1. DUMMY DATA (Extends what's in Home)
const COURSE_DATA = {
    'dsa': {
        name: 'Data Structures & Algorithms',
        description: 'Master the fundamentals of computer science.',
        roadmap: ['Arrays', 'Linked List (Singly & Doubly)', 'Stack & Queues', 'Recursion', 'Trees & BST', 'Graphs', 'Dynamic Programming'],
        videos: [
            { title: 'Complete Arrays Course in 1 Hour', url: '#' },
            { title: 'Linked List Implementation Guide', url: '#' },
            { title: 'Stack vs Queue - Visualized', url: '#' }
        ]
    },
    'os': {
        name: 'Operating Systems',
        description: 'Understand how computers work under the hood.',
        roadmap: ['Introduction to OS', 'Process Management', 'Threads & Concurrency', 'CPU Scheduling', 'Memory Management (Paging)', 'File Systems'],
        videos: [
            { title: 'OS for Beginners', url: '#' },
            { title: 'Process vs Thread Explained', url: '#' }
        ]
    }
};

const Subject = () => {
    const { id } = useParams(); // Get "dsa" or "os" from URL
    const [activeTab, setActiveTab] = useState('Roadmap');

    const subject = COURSE_DATA[id];

    // Handle case where subject doesn't exist
    if (!subject) {
        return <div className="container">Subject not found! <Link to="/" style={{ color: 'var(--primary)' }}>Go Back</Link></div>;
    }

    return (
        <div className="container">
            <Link to="/" style={{ color: 'var(--text-muted)', marginBottom: '1rem', display: 'inline-block' }}>
                ← Back to Subjects
            </Link>

            <header style={{ marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{subject.name}</h1>
                <p style={{ color: 'var(--text-muted)', maxWidth: '600px' }}>{subject.description}</p>
            </header>

            <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

            <div style={{ minHeight: '300px' }}>
                {activeTab === 'Roadmap' && <RoadmapList steps={subject.roadmap} />}
                {activeTab === 'Videos' && <VideoList videos={subject.videos} />}
                {activeTab === 'Documents' && (
                    <div className="fade-in" style={{ padding: '2rem', border: '1px dashed var(--border-color)', borderRadius: '12px', textAlign: 'center', color: 'var(--text-muted)' }}>
                        📄 Document resources will appear here (PDFs, Notes).
                    </div>
                )}
            </div>

            {/* 3. EXPLANATION FOR DEVELOPER */}
            <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>💡 Developer Note:</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    <strong>Dynamic Routing:</strong> We use `useParams()` to grab the ID (`{id}`) from the URL.<br />
                    <strong>Data Fetching:</strong> In the real app, this ID will be used to Query the Database (e.g., `Subject.findById(id)`).
                </p>
            </div>
        </div>
    );
};

export default Subject;
