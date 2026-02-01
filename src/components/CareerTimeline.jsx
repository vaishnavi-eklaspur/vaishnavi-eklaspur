import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './CareerTimeline.css';

const CareerTimeline = () => {
  const timelineRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Editable timeline data
  const academicTrack = [
    { year: "2019", title: "10th Grade Completed", description: "Secondary Education" },
    { year: "2021", title: "12th Grade Completed", description: "Higher Secondary Education" },
    { year: "2022-2026", title: "B.E. Engineering", description: "Bachelor of Engineering" }
  ];

  const internshipTrack = [
    { year: "June-July 2024", title: "Coventry University", description: "2 months internship" },
    { year: "March 2025 - Dec 2025", title: "Doshihein", description: "Long-term internship" }
  ];

  const volunteeringTrack = [
    { year: "Jan 2023 - Jan 2025", title: "German Language Lead", description: "Language Club" },
    { year: "Jan 2024 - Jan 2025", title: "Editorial Member", description: "Content & Publishing" },
    { year: "Jan 2025 - Jan 2026", title: "President", description: "Foreign Language Club" }
  ];

  useEffect(() => {
    // Animate timeline cards on scroll
    const cards = document.querySelectorAll('.timeline-card');
    cards.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        x: -50,
        scrollTrigger: {
          trigger: card,
          start: 'left 90%',
          toggleActions: 'play none none none'
        }
      });
    });
  }, []);

  // Drag to scroll functionality
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - timelineRef.current.offsetLeft;
    scrollLeft.current = timelineRef.current.scrollLeft;
    timelineRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    timelineRef.current.style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    timelineRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - timelineRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    timelineRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].pageX - timelineRef.current.offsetLeft;
    scrollLeft.current = timelineRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - timelineRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    timelineRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="career-timeline" id="timeline">
      <div className="timeline-container">
        <h2 className="timeline-title">Career Journey</h2>
        <p className="timeline-subtitle">Drag to explore my timeline →</p>

        <div 
          className="timeline-scroll-container"
          ref={timelineRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="timeline-tracks">
            {/* Track 1 - Academic */}
            <div className="timeline-track track-1">
              <div className="track-label">
                <span className="track-icon">🎓</span>
                <span className="track-name">Academic</span>
              </div>
              <div className="track-content">
                {academicTrack.map((item, index) => (
                  <div key={index} className="timeline-card academic">
                    <div className="card-marker"></div>
                    <div className="card-content">
                      <span className="card-year">{item.year}</span>
                      <h4 className="card-title">{item.title}</h4>
                      <p className="card-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Track 2 - Internships */}
            <div className="timeline-track track-2">
              <div className="track-label">
                <span className="track-icon">💼</span>
                <span className="track-name">Internships</span>
              </div>
              <div className="track-content">
                {internshipTrack.map((item, index) => (
                  <div key={index} className="timeline-card internship">
                    <div className="card-marker"></div>
                    <div className="card-content">
                      <span className="card-year">{item.year}</span>
                      <h4 className="card-title">{item.title}</h4>
                      <p className="card-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Track 3 - Volunteering */}
            <div className="timeline-track track-3">
              <div className="track-label">
                <span className="track-icon">🤝</span>
                <span className="track-name">Volunteering</span>
              </div>
              <div className="track-content">
                {volunteeringTrack.map((item, index) => (
                  <div key={index} className="timeline-card volunteering">
                    <div className="card-marker"></div>
                    <div className="card-content">
                      <span className="card-year">{item.year}</span>
                      <h4 className="card-title">{item.title}</h4>
                      <p className="card-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-hint">
          <span className="hint-arrow">←</span>
          <span className="hint-text">Scroll or drag to explore</span>
          <span className="hint-arrow">→</span>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
