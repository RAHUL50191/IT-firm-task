import React from 'react'
import Projectscard from './projectsCard/Projectscard'
import './projects.css'
export default function projects() {
    const data=[
        {
          "img":"https://images.pexels.com/photos/12003996/pexels-photo-12003996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "title": "Smart Traffic Management System",
          "useCase": "Implemented in urban areas to alleviate traffic congestion and improve road safety. Utilizes real-time data from sensors, cameras, and GPS to optimize traffic flow, reduce travel time, and minimize accidents."
        },
        {
          "img":"https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "title": "Healthcare Telemedicine Platform",
          "useCase": "Developed a telemedicine platform that enables remote consultations between patients and healthcare providers. Facilitates access to medical services for individuals in rural or underserved areas, enhances patient care, and reduces healthcare costs."
        },
        {
          "img":"https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "title": "AI-Powered Fraud Detection System",
          "useCase": "Implemented an AI-based fraud detection system for financial institutions to identify and prevent fraudulent activities such as credit card fraud, identity theft, and money laundering. Enhances security, protects customer assets, and preserves trust in the banking system."
        }
      ]
      
  return (
    <section className='project-container'>
      <div>
      <div className='project-title'>Projects:</div>
      <div className='project-description'> we take pride in our commitment to delivering cutting-edge technology solutions that address real-world challenges and drive positive impact. Over the past year, we have successfully completed three major projects that showcase our expertise in leveraging technology to solve complex problems</div></div>
      {data.map(item=>{
        return <Projectscard image={item.img} description={item.useCase} projectName={item.title}/>
      })}
    </section>
  )
}
