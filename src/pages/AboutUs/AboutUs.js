import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'

const AboutUs = ({checkDarkMode, checkSaudiFlag}) => {
  return (
  <div style={{position: 'relative',}} >
        <Header checkDarkMode={checkDarkMode} checkSaudiFlag={checkSaudiFlag}/>
        <Body checkDarkMode={checkDarkMode} checkSaudiFlag={checkSaudiFlag}/>
    </div>
  )
}

export default AboutUs