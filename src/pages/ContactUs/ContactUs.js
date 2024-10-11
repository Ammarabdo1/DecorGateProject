import React, {useEffect} from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import { useLocation } from 'react-router-dom'

const Contact = ({checkDarkMode, checkSaudiFlag}) => {

  const {pathname} = useLocation();

  useEffect(() => window.scrollTo(0, 0) ,[pathname])

  return (
    <div>
        <Header checkDarkMode={checkDarkMode} checkSaudiFlag={checkSaudiFlag} />
        <Body checkDarkMode={checkDarkMode} checkSaudiFlag={checkSaudiFlag} />
    </div>
  )
}

export default Contact