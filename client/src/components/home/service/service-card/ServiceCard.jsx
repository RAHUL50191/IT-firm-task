import React from 'react';
import './serviceCard.css';  

function ServiceCard({ icon, serviceName, description }) {
  return (
    <div className="service-card">
      <div className="icon">{icon}</div>
      <h3 className="service-name">{serviceName}</h3>
      <p className="description">{description}</p>
    </div>
  );
}

export default ServiceCard;
