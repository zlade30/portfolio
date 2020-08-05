import React from 'react'

const Education = () => {
  return (
    <div className="row education-container">
      <div className="col" />
      <div
        className="col-md d-flex justify-content-center align-items-center"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label className="display-course">
          Bachelors of Science in Information Technology
        </label>
        <div className="d-flex align-items-center">
          <img
            alt="school-img"
            src={require('../../shared/icons/school.png')}
            width={30}
            height={30}
            style={{ marginRight: 10 }}
          />
          <label className="display-schoolyear">
            @Northern Bukidnon Community College
          </label>
        </div>
        <div className="d-flex align-items-center">
          <img
            alt="school-img"
            src={require('../../shared/icons/calendar.png')}
            width={30}
            height={30}
            style={{ marginRight: 10 }}
          />
          <label className="display-schoolyear">(2014-2018)</label>
        </div>
      </div>
    </div>
  )
}

export default Education
