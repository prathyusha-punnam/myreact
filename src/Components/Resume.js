/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Resumeimg from "./resume.jpg"

const Resume = () => {
  return (
        <>
         <div className='Resume-main-heading'>Resume</div>
        <div className='Resume-continer'>
       
        <div className='Resume-left-container'>
        <div className='Resume-heading1'>Workshops and Internships:-</div>
        <hr/>
        <div className='Resume-year1'>2020</div>
        <div>
            <p>1.Attended 36 hackathon workshop in vjit clg hyderabad</p>
           
            <p>2.Attended the codecracking workshop at jntuh,which was conducted by the college management.</p>
        </div>
        <div className='Resume-heading1'>Accomplishments:-</div>
        <hr/>
        <div className='Resume-year2'>2019</div>
        <h3>Curricular:-</h3>
       
        <div>
            <p> Achieved Certificate in 36 hours hackathon-2020, big data analytics and case study organized by icicse-2018, cyber security,iot & web/app development-2019 Certificate of internship in ethical hacking & cyber security by sytech labs pvt.ltd Ignite-2019 received certificate of accomplishment for event code  cracking.
  .</p>
        </div>
        <h3>Extra-curricular:-</h3>
        <div>
          <p>participated and won appreciation certificate in Quizzes conducted in GNI.won appreciation certificate in National Workshop on Empowering Women Through Health and Hygiene organized by WHHEE.organized and hosted many events in school and college </p>
        </div>
        <div className='Resume-heading1'>Education:-</div>
        <hr/>
        <div className='Resume-year3'>2016-2020</div>
        <h3>Gurunanak institute of technology(JNTUH),Branch-CSE</h3>
        
        <p>Reference site about lorem ipsum giving information on its origin as well as a random lipsum generator</p>

        </div>

        <div>
         <img src={Resumeimg} className="Resume-image" />

         <div className='Fontawesom-icons'>
         <div><i class="fa-brands fa-facebook fa-3x"></i></div>
         <div><i class="fa-brands fa-skype fa-3x"></i></div>
         <div><i class="fa-brands fa-pinterest-p fa-3x"></i></div>
         <div><i class="fa-brands fa-linkedin fa-3x" ></i></div>
         <div><i class="fa-brands fa-instagram fa-3x"></i></div>
         </div>
        </div>
        </div>
        </>
    
  )
}

export default Resume