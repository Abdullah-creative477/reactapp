import React, { useState, useEffect } from 'react';
import './About.css';

function About() {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const skillBars = document.querySelectorAll('.skill-bar-fill');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.getAttribute('data-skill') + '%';
        }
      });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
  }, []);

  return (
    <div className="about-box">
      <h2 className="about-heading">About Me</h2>
      <p className="about-intro">
        I'm an Electrical Engineer passionate about drones, RC planes, and IC design.
        I thrive on converting innovative ideas into real-world tech blending hardware with creativity.
      </p>

      <section className="skills-section">
        <h3>Skills</h3>
        {[
          ['Embedded Systems', 90],
          ['FPGA & Verilog', 85],
          ['Drone Systems', 95],
          ['Web Development', 70],
        ].map(([label, value], i) => (
          <div className="skill" key={i}>
            <span>{label}</span>
            <div className="skill-bar">
              <div className="skill-bar-fill" data-skill={value}></div>
            </div>
          </div>
        ))}
      </section>

      <section className="timeline-section">
        <h3>Journey</h3>
        <ul className="timeline">
          <li><span className="timeline-date">2022</span><p>Started Electrical Engineering at PIEAS</p></li>
          <li><span className="timeline-date">2024</span><p>Internship in UAV systems development</p></li>
          <li><span className="timeline-date">2024</span><p>Developed smart FPGA-based monitoring systems</p></li>
          <li><span className="timeline-date">2025</span><p>Final Year Project: VFD & PLC-based predictive maintenance platform</p></li>
        </ul>
      </section>
<section className="reading-section">
  <h3>Beyond Engineering</h3>
  <p className="reading-paragraph">
    I’m truly an <strong>avid reader</strong> of wartime and crisis-based literature,
    captivated by the human spirit in the face of chaos.
    <span className={!showMore ? '' : 'hidden'}>
      {' '}
      <button className="read-toggle" onClick={() => setShowMore(true)}>Read more</button>
    </span>
    {showMore && (
      <span>
        {' '}
        I find depth and power in authors who portray emotion, resilience, and transformation through their storytelling.
      </span>
    )}
  </p>

  {showMore && (
    <>
      <ul className="author-list">
        <li><strong>Mohsin Hamid</strong> – <em>Exit West</em>, <em>The Reluctant Fundamentalist</em></li>
        <li><strong>Khaled Hosseini</strong> – <em>The Kite Runner</em>, <em>A Thousand Splendid Suns</em></li>
        <li><strong>Fyodor Dostoevsky</strong> – <em>Crime and Punishment</em>, <em>The Brothers Karamazov</em></li>
        <li><strong>Nimra Ahmed</strong> – <em>Jannat Kay Pattay</em>, <em>Haalim</em></li>
        <li><strong>Umera Ahmed</strong> – <em>Pir-e-Kamil</em>, <em>Aab-e-Hayat</em></li>
      </ul>

      <div className="book-count">
        <label>Books Read: <strong>70</strong> / 1000</label>
        <div className="book-progress-bar">
          <div className="book-progress-fill" style={{ width: '7%' }}></div>
        </div>
      </div>

      <button className="read-toggle" onClick={() => setShowMore(false)}>Read less</button>
    </>
  )}
</section>
    </div>
  );
}   
export default About;
