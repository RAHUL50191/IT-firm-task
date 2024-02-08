import React from 'react'
import './home.css'
import Main from './main/Main'
import Service from './service/Service'
import Projects from './projects/Projects'
export default function Home() {
  return (
    <>
    <Main/>
    <Service/>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00043f" fill-opacity="1" d="M0,32L48,53.3C96,75,192,117,288,133.3C384,149,480,139,576,122.7C672,107,768,85,864,90.7C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    <Projects/>
    </>
  )
}
