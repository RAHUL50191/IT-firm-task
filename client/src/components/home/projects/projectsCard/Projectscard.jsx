import React from 'react'
import './projectscard.css'
export default function Projectscard({ image,  projectName, description }) {
  return (
    <div className="project-card">
    <img className="project-image" src={image} alt={projectName} />
    <div className="project-info">
      <h3 className="project-name">{projectName}</h3>
      <p className="description">{description}</p>
    </div>
  </div>
  )
}
