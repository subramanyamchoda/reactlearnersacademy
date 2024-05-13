import React from 'react'

const About = (props) => {
  const{about1,about2,about3,about4,matter1,matter2,matter3,matter4}=props.about;
  return (
    <div>
         <div>
      <h5 className="text-primary text-center animated-from-top text-bold">About Us</h5>
      <div className="py-1 mt-3 mx-3">
        <div className="row g-1 align-items-center">
          <div className="col-lg-6 text-center animated-from-right">
            <h1 className="mb-4">Welcome to Learners Academy</h1>
            <p className="mb-4">
              <i className="fa-solid fa-arrow-right fa-beat fa-lg text-primary"></i>
              <em> {matter1}</em>
            </p>
            <p className="mb-4">
              <i className="fa-solid fa-arrow-right fa-beat fa-lg text-primary"></i>
              <em>
               {matter2}
              </em>
            </p>
            <p className="mb-4">
              <i className="fa-solid fa-arrow-right fa-beat fa-lg text-primary"></i>
              <em> 
                {matter3}
              </em>
            </p>
            <p className="mb-4">
              <i className="fa-solid fa-arrow-right fa-beat fa-lg text-primary"></i>
              <em>
                {matter4}
              </em>
            </p>
          </div>
          <div className="col-lg-6 animated-from-left">
            <div className="row g-3">
              <div className="col-6 text-start">
                <img className="img-fluid rounded w-100 wow zoomIn" src={about1} alt="About 2" />
              </div>
              <div className="col-6 text-start">
                <img className="img-fluid rounded w-75 wow zoomIn" src={about2} style={{ marginTop: '20%' }} alt="About 1" />
              </div>
              <div className="col-6 text-end">
                <img className="img-fluid rounded w-75 wow zoomIn" src={about3} alt="About 4" />
              </div>
              <div className="col-6 text-end">
                <img className="img-fluid rounded w-100 wow zoomIn" src={about4} alt="About 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About