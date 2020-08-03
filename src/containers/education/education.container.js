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
        <label className="display-desc">(2014-2018)</label>
        <label className="display-desc">
          @Northern Bukidnon Community College
        </label>
      </div>
    </div>
  )
}

export default Education
