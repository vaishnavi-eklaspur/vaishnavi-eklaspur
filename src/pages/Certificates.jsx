import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Certificates.css';

const Certificates = () => {
  const navigate = useNavigate();

  // Editable certificates data
  const certificates = [
    {
      id: 1,
      title: "Java Programming Masterclass",
      issuer: "Udemy",
      date: "December 2023",
      image: "https://via.placeholder.com/400x300/667eea/ffffff?text=Java+Certificate"
    },
    {
      id: 2,
      title: "React - The Complete Guide",
      issuer: "Udemy",
      date: "January 2024",
      image: "https://via.placeholder.com/400x300/764ba2/ffffff?text=React+Certificate"
    },
    {
      id: 3,
      title: "Spring Boot & Spring Framework",
      issuer: "Coursera",
      date: "February 2024",
      image: "https://via.placeholder.com/400x300/667eea/ffffff?text=Spring+Boot"
    },
    {
      id: 4,
      title: "Docker & Kubernetes",
      issuer: "Coursera",
      date: "March 2024",
      image: "https://via.placeholder.com/400x300/764ba2/ffffff?text=Docker+K8s"
    },
    {
      id: 5,
      title: "Database Design & PostgreSQL",
      issuer: "edX",
      date: "April 2024",
      image: "https://via.placeholder.com/400x300/667eea/ffffff?text=PostgreSQL"
    },
    {
      id: 6,
      title: "Git & GitHub Essentials",
      issuer: "LinkedIn Learning",
      date: "May 2024",
      image: "https://via.placeholder.com/400x300/764ba2/ffffff?text=Git+GitHub"
    },
    {
      id: 7,
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "June 2024",
      image: "https://via.placeholder.com/400x300/667eea/ffffff?text=Web+Dev"
    },
    {
      id: 8,
      title: "AWS Cloud Practitioner",
      issuer: "AWS",
      date: "July 2024",
      image: "https://via.placeholder.com/400x300/764ba2/ffffff?text=AWS+Cloud"
    },
    {
      id: 9,
      title: "Blockchain Fundamentals",
      issuer: "Coursera",
      date: "August 2024",
      image: "https://via.placeholder.com/400x300/667eea/ffffff?text=Blockchain"
    },
    {
      id: 10,
      title: "Python for Data Science",
      issuer: "DataCamp",
      date: "September 2024",
      image: "https://via.placeholder.com/400x300/764ba2/ffffff?text=Python"
    },
    {
      id: 11,
      title: "Node.js Advanced Concepts",
      issuer: "Udemy",
      date: "October 2024",
      image: "https://via.placeholder.com/400x300/667eea/ffffff?text=Node.js"
    },
    {
      id: 12,
      title: "Agile & Scrum Certification",
      issuer: "Scrum Alliance",
      date: "November 2024",
      image: "https://via.placeholder.com/400x300/764ba2/ffffff?text=Agile+Scrum"
    }
  ];

  return (
    <div className="certificates-page">
      <div className="certificates-container">
        <button className="back-button" onClick={() => navigate('/')}>
          <span className="back-arrow">←</span>
          <span>Back to Home</span>
        </button>

        <div className="certificates-header">
          <h1 className="certificates-title">My Certificates</h1>
          <p className="certificates-subtitle">
            A collection of {certificates.length} professional certifications and courses completed
          </p>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-image-wrapper">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="certificate-image"
                />
                <div className="certificate-overlay">
                  <button className="view-button">View Certificate</button>
                </div>
              </div>
              <div className="certificate-info">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-issuer">{cert.issuer}</p>
                <p className="certificate-date">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
