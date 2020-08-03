import React from 'react'
import './shared/scss/main.scss'
import Me from './containers/me'
import NavigationMenu from './containers/navigation-menu'
import Education from './containers/education'

const App = () => {
  return (
    <div>
      <img
        alt="me-profile"
        src={require('./shared/icons/wave-profile.png')}
        className="me-profile"
      />
      <img
        alt="education-img"
        src={require('./shared/icons/wave-education.png')}
        className="education-img"
      />
      <div className="container">
        <NavigationMenu />
        <Me />
        <Education />
      </div>
    </div>
  )
}

export default App
