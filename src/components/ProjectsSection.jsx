import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [counter, setCounter] = useState(1);
  const counterRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);

  // Project data - all editable
  const projects = [
    {
      name: "Smart Clinic Platform",
      techStack: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
      description: "Full-stack healthcare system with doctor & patient dashboards, appointments, prescriptions, and video consultations.",
      demoLink: "https://youtube.com/watch?v=demo1",
      liveLink: "https://smartclinic-demo.com",
      codeLink: "https://github.com/username/smart-clinic",
      thumbnail: "https://via.placeholder.com/400x300/667eea/ffffff?text=Smart+Clinic"
    },
    {
      name: "E-Commerce Dashboard",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
      description: "Modern admin dashboard for managing products, orders, and customer data with real-time analytics.",
      demoLink: "https://youtube.com/watch?v=demo2",
      liveLink: "https://ecommerce-demo.com",
      codeLink: "https://github.com/username/ecommerce",
      thumbnail: "https://via.placeholder.com/400x300/764ba2/ffffff?text=E-Commerce"
    },
    {
      name: "Task Management System",
      techStack: ["Vue.js", "Firebase", "TypeScript", "Vuetify"],
      description: "Collaborative task management tool with real-time updates, team collaboration, and progress tracking.",
      demoLink: "https://youtube.com/watch?v=demo3",
      liveLink: "https://taskmanager-demo.com",
      codeLink: "https://github.com/username/task-manager",
      thumbnail: "https://via.placeholder.com/400x300/667eea/ffffff?text=Task+Manager"
    },
    {
      name: "Weather Forecast App",
      techStack: ["React Native", "Redux", "Weather API", "Expo"],
      description: "Cross-platform mobile app providing detailed weather forecasts with beautiful UI and offline support.",
      demoLink: "https://youtube.com/watch?v=demo4",
      liveLink: "https://weather-demo.com",
      codeLink: "https://github.com/username/weather-app",
      thumbnail: "https://via.placeholder.com/400x300/764ba2/ffffff?text=Weather+App"
    },
    {
      name: "Portfolio Builder",
      techStack: ["Next.js", "Prisma", "PostgreSQL", "GSAP", "TailwindCSS"],
      description: "Drag-and-drop portfolio builder with customizable templates and instant deployment capabilities.",
      demoLink: "https://youtube.com/watch?v=demo5",
      liveLink: "https://portfolio-builder-demo.com",
      codeLink: "https://github.com/username/portfolio-builder",
      thumbnail: "https://via.placeholder.com/400x300/667eea/ffffff?text=Portfolio+Builder"
    }
  ];

  // Counter animation from 1 to 3
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.to(counterRef.current, {
      duration: 2,
      innerHTML: 3,
      roundProps: "innerHTML",
      ease: "power2.inOut",
      delay: 0.5
    });
  }, []);

  // Auto-rotate projects every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextProject();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentProject]);

  const handleNextProject = () => {
    // Animate left panel out
    gsap.to(leftPanelRef.current, {
      opacity: 0,
      x: -50,
      duration: 0.3,
      onComplete: () => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
        // Animate left panel in
        gsap.fromTo(leftPanelRef.current,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 0.3 }
        );
      }
    });

    // Animate card swap
    gsap.to(rightPanelRef.current.children, {
      rotateY: 180,
      duration: 0.6,
      stagger: 0.1,
      onComplete: () => {
        gsap.to(rightPanelRef.current.children, {
          rotateY: 0,
          duration: 0.6,
          stagger: 0.1
        });
      }
    });
  };

  const handleCardClick = (index) => {
    if (index !== currentProject) {
      gsap.to(leftPanelRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.3,
        onComplete: () => {
          setCurrentProject(index);
          gsap.fromTo(leftPanelRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.3 }
          );
        }
      });
    }
  };

  const project = projects[currentProject];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">What I've Built</h2>
          <div className="project-counter">
            <span ref={counterRef}>1</span>
            <span className="counter-max">/{projects.length}</span>
          </div>
        </div>

        <div className="projects-content">
          {/* Left Panel - Project Details */}
          <div className="left-panel" ref={leftPanelRef}>
            <h3 className="project-name">{project.name}</h3>
            
            <div className="tech-stack">
              {project.techStack.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-links">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                <span className="link-text">Watch Demo</span>
                <span className="link-arrow">↗</span>
              </a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                <span className="link-text">View Live</span>
                <span className="link-arrow">↗</span>
              </a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                <span className="link-text">View Code</span>
                <span className="link-arrow">↗</span>
              </a>
            </div>
          </div>

          {/* Right Panel - Card Swap Animation */}
          <div className="right-panel" ref={rightPanelRef}>
            {projects.map((proj, index) => (
              <div
                key={index}
                className={`project-card ${index === currentProject ? 'active' : ''}`}
                onClick={() => handleCardClick(index)}
                style={{
                  transform: `translateX(${(index - currentProject) * 20}px) translateZ(${(index - currentProject) * -50}px)`,
                  opacity: Math.abs(index - currentProject) <= 2 ? 1 - Math.abs(index - currentProject) * 0.3 : 0,
                  zIndex: projects.length - Math.abs(index - currentProject)
                }}
              >
                <a href={proj.demoLink} target="_blank" rel="noopener noreferrer" className="thumbnail-link">
                  <img src={proj.thumbnail} alt={proj.name} className="project-thumbnail" />
                  <div className="play-overlay">
                    <div className="play-button">▶</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
