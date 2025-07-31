import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import styles from './PortfolioNav.module.css';

const PAGES = [
  { name: 'Home', component: <Home /> },
  { name: 'About', component: <About /> },
  { name: 'Projects', component: <Projects /> },
  { name: 'Contact', component: <Contact /> },
];

function App() {
  const [page, setPage] = useState('Home');
  const [hovered, setHovered] = useState(null);

  return (
    <div className={styles['app-bg']}>
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.videoBackground}
      >
        <source src="/1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className={styles.contentOverlay}>
        <header className={styles.header}>
          <h1 style={{ color: '#00ff00', letterSpacing: '2px', margin: 0 }}>SkyVerse</h1>
          <nav className={styles.navbar}>
            {PAGES.map(({ name }) => (
              <button
                key={name}
                className={
                  page === name
                    ? `${styles['nav-btn']} ${styles['active']}`
                    : styles['nav-btn']
                }
                style={
                  hovered === name
                    ? {
                        boxShadow: '0 0 16px #00ff00, 0 0 4px #00ff00',
                        color: '#000',
                        background: '#00ff00',
                      }
                    : {}
                }
                onClick={() => setPage(name)}
                onMouseEnter={() => setHovered(name)}
                onMouseLeave={() => setHovered(null)}
              >
                {name}
              </button>
            ))}
          </nav>
        </header>
        <main
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '4rem',
          }}
        >
          {PAGES.find((p) => p.name === page)?.component}
        </main>
      </div>
    </div>
  );
}

export default App;
