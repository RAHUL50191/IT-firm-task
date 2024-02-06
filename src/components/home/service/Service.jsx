import React from 'react'
import ServiceCard from './service-card/ServiceCard'
import './service.css'
export default function Service() {
  return (
    <section className='services-container'>
        <div className='service-title'>Services:</div>
        <div className='serviceCArd-container'>
    <ServiceCard
          icon={<i className="fa fa-desktop"></i>}
          serviceName="Web Development"
          description="We specialize in building modern, responsive websites."
        />
        <ServiceCard
          icon={<i className="fa fa-mobile"></i>}
          serviceName="Mobile App Development"
          description="We create native and cross-platform mobile applications."
        />
        <ServiceCard
          icon={<i className="fa fa-cloud"></i>}
          serviceName="Cloud Services"
          description="We provide scalable cloud solutions for your business needs."
        />
        <ServiceCard
          icon={<i className="fa fa-database"></i>}
          serviceName="Data Analytics"
          description="We offer data-driven insights and analytics solutions."
        />
        </div>
    </section>
  )
}
