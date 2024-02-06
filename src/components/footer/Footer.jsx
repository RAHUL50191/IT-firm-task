import React from 'react'
import './footer.css'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
export default function footer() {
    const services = [
        "Digital Business",
        "Digital Consulting",
        "Data and Analytics",
        "Total Experience",
        "Software-as-a-Service",
        "Enterprise Applications",
        "Application Development and Maintenance",
        "Application Modernization",
        "Intelligent Automation and Integration"
    ];
    const industries = [
      "Banking",
      "Capital Markets",
      "Consumer Goods and Distribution",
      "Communications, Media, and Information Services",
      "Education",
      "Energy, Resources, and Utilities",
      "Healthcare",
      "High Tech",
      "Insurance",
      "Life Sciences"
    ];
  
       
  return (
    <div className='footer'>
        <div className='col'>
            <h4 className='it-firm'>IT FIRM</h4>
              <ul className='social-media'>
                <li>
                <img src={facebook}alt='facebook'  width={40} height={40}></img>
                </li>
                <li>
                  <img src={twitter} alt='twitterx'  width={40} height={40}></img>
                </li>
                <li>
                  <img src={linkedin} alt='linkedin' width={40} height={40}></img>
                </li>
              </ul>
        </div>
        <div  className='col'>
            <h4>Services</h4>
              {services.map(item=>{
                return <li>{item }</li>
              })}
        </div>
        <div  className='col'>
            <h4>Industries</h4>
              {industries.map(item=>{
                return <li>{item }</li>
              })}
        </div>
    </div>
  )
}
