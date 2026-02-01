import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import './SkillsetBoard.css';

const SkillsetBoard = () => {
  const navigate = useNavigate();
  const certificateCountRef = useRef(null);

  // Editable data
  const certificateCount = 12;
  
  const skills = [
    { name: "Java", level: 90, icon: "☕" },
    { name: "Spring Boot", level: 85, icon: "🍃" },
    { name: "React", level: 88, icon: "⚛️" },
    { name: "JavaScript", level: 85, icon: "📜" },
    { name: "PostgreSQL", level: 80, icon: "🐘" },
    { name: "Docker", level: 75, icon: "🐳" },
    { name: "Git", level: 90, icon: "🌿" },
    { name: "Linux", level: 82, icon: "🐧" },
    { name: "HTML/CSS", level: 92, icon: "🎨" },
    { name: "Node.js", level: 78, icon: "📗" },
    { name: "MySQL", level: 80, icon: "💾" },
    { name: "Blockchain", level: 70, icon: "🔗" }
  ];

  const techCategories = [
    {
      category: "Backend",
      items: ["Java", "Spring Boot", "Node.js", "PostgreSQL", "MySQL"]
    },
    {
      category: "Frontend",
      items: ["React", "JavaScript", "HTML/CSS", "GSAP", "Responsive Design"]
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "Git", "Linux", "CI/CD", "AWS"]
    },
    {
      category: "Emerging Tech",
      items: ["Blockchain", "Hyperledger", "Smart Contracts", "Web3"]
    }
  ];

  useEffect(() => {
    // Animate certificate count
    gsap.to(certificateCountRef.current, {
      duration: 2,
      innerHTML: certificateCount,
      roundProps: "innerHTML",
      ease: "power2.out",
      delay: 0.3
    });

    // Animate skill cards
    gsap.from('.skill-card', {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.skillset-board',
        start: 'top 80%'
      }
    });
  }, [certificateCount]);

  const handleViewCertificates = () => {
    navigate('/certificates');
  };

  return (
    <section className="skillset-board" id="skills">
      <div className="skillset-container">
        <div className="skillset-header">
          <h2 className="skillset-title">Skillset & Expertise</h2>
          <div className="certificate-badge">
            <span className="cert-count" ref={certificateCountRef}>0</span>
            <span className="cert-label">Certificates</span>
          </div>
        </div>

        {/* Interactive Skill Grid */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <h4 className="skill-name">{skill.name}</h4>
                <div className="skill-progress-bar">
                  <div 
                    className="skill-progress-fill" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Categories */}
        <div className="tech-categories">
          <h3 className="categories-title">Technical Proficiencies</h3>
          <div className="categories-grid">
            {techCategories.map((category, index) => (
              <div key={index} className="category-card">
                <h4 className="category-name">{category.category}</h4>
                <div className="category-tags">
                  {category.items.map((item, idx) => (
                    <span key={idx} className="tech-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="button-container">
          <button className="view-certificates-btn" onClick={handleViewCertificates}>
            <span>View More Certificates</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsetBoard;
