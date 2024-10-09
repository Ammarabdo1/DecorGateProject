import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'

const Contact = ({checkDarkMode, checkSaudiFlag}) => {
  return (
    <div>
        <Header checkDarkMode={checkDarkMode} checkSaudiFlag={checkSaudiFlag} />
        <Body checkDarkMode={checkDarkMode} checkSaudiFlag={checkSaudiFlag} />
    </div>
  )
}

export default Contact