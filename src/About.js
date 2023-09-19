import React from 'react';
import './About.css';

export default function About() {
  return (
  <>
    <div className='container'>
      <div className='center'> 
        <div className="centerimage">
          <img src="/Images/new.jpg" alt="centerImage" />
        </div>
      </div>
      <div className="information">
        <p>
          Hi, my name is <span>Nawaz Sharief</span>, and I'm a computer science major. And well-qualified 
          Full Stack Developer familiar with wide range of programming utilities and languages. 
          Knowledgeable of backend and frontend development requirements. Handles any part of process 
          with ease. Collabarative team player with excellent technical abilities offering 1 year of related
          experience.
        </p>
        <p className='experience'>
          Experience:
          <p> Full Stack Intern <span>@ </span>KodNest</p>
          Acquired hands on experience on Full Stack Development, Jsp and Servlets. Use of Java and Python Frameworks for developing web pages.
          Trained and acquired hands on experience in Java SE, Java EE, SQL, HTML, CSS, Java Script and Basics of Data Structures.
          Successfully developed of a Full Stack Web Application called Shop Nest which increased my expertise and hands on experience in Full Stack Web Development.
        </p>
      </div>
    </div>
  </>
  )
}
