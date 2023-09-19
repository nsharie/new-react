import React from 'react'
import portfolioImage from './image.jpg'
import './body.css'

export default function Body() {
  return (
    <div className='body'>
        <span className='container'>
            Hello World
        </span>
        <span className="leftside">
            <img src={portfolioImage} alt='displayphoto'>
            </img>
        </span>
    </div>
  )
}
