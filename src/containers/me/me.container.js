import React from 'react'

const Me = () => {
  return (
    <div className="row me-container">
      <div
        className="col-md d-flex justify-content-center align-items-center"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label className="display-name">Hi! My name is Zal</label>
        <label className="display-desc">
          I'm a simple person, open-minded and I'm really fun to talk with. I
          can handle multiple task on a daily basis. I use some creative
          approach in terms of solving problem. I'm hardworking and have a lot
          of ideas to share with. :)
        </label>
        <div className="d-flex justify-content-end resume-container">
          <div className="resume-btn">My Resume</div>
        </div>
      </div>
      <div className="col me-right-container" />
    </div>
  )
}

export default Me
