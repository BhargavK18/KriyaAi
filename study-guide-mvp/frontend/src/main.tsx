import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

console.log('main.tsx is running');

const rootElement = document.getElementById('root');

if (!rootElement) {
    console.error('Failed to find the root element');
    document.body.innerHTML = '<h1>FATAL ERROR: Root element not found</h1>';
} else {
    try {
        ReactDOM.createRoot(rootElement).render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
        )
        console.log('React app mounted successfully');
    } catch (err) {
        console.error('React crashed during mount:', err);
        rootElement.innerHTML = `<h1>React Crash: ${err}</h1>`;
    }
}
