import React from 'react'
import './shared/scss/main.scss'
import Me from './containers/me'
import NavigationMenu from './containers/navigation-menu'

const App = () => {
  return (
    <div>
      <div class="pure-container" data-effect="pure-effect-push">
        <input
          type="checkbox"
          id="pure-toggle-right"
          class="pure-toggle"
          data-toggle="right"
        />
        <label
          class="pure-toggle-label menu-icon"
          for="pure-toggle-right"
          data-toggle-label="right"
        >
          <span class="pure-toggle-icon"></span>
        </label>

        <nav class="pure-drawer" data-position="right">
          <p>Insert your off-canvas content here</p>
        </nav>

        <div class="pure-pusher-container">
          <div class="pure-pusher"></div>
        </div>

        <label
          class="pure-overlay"
          for="pure-toggle-right"
          data-overlay="right"
        ></label>
      </div>
      <img
        alt="me-profile"
        src={require('./shared/icons/wave-profile.png')}
        className="me-profile"
      />
      <div className="container">
        <NavigationMenu />
        <Me />
      </div>
    </div>
  )
}

export default App
