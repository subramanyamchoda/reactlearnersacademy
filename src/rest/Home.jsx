import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Home = (props) => {
  const { free, teacher, time } = props.home; // Corrected the destructure statement
    
  return (
    <div>
    
      <div className="my-2 py-2 mt-1">
        <div className="row align-items-center py-1 g-2">
          <div className="col-md-6 text-center">
            <div className="matter">
              <h1 className="fw-bold animated bounceInDown text-bold">Learners <br />Academy</h1><br /><br />
              <h2 className="additional-text animated fadeIn">A great Place To Learn Through the Online!</h2>
              <h4 className="additional-text animated fadeIn">Join us today and start your learning journey!</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img">
              <img src="assrets\images/1.svg" className="img-fluid animated bounce" width="650px" height="650px" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="row animated-from-top">
        <div className="col-md-4 my-2 text-center">
          <img src={free} alt="Expert Instructor Icon" className="img-fluid fa-beat" width="70px" />
          <div className="matter mt-3">
            <h5 className="animated fadeIn">Free Online Courses</h5>
            <p>Access a variety of high-quality courses for free.</p>
          </div>
        </div>

        <div className="col-md-4 my-2 text-center">
          <img src={teacher} alt="Expert Instructor Icon" className="img-fluid fa-beat" width="70px" />
          <div className="matter mt-3">
            <h5 className="fw-bold">Expert Instructors</h5>
            <p>Learn from experienced professionals who are experts in their fields.</p>
          </div>
        </div>

        <div className="col-md-4 my-2 text-center">
          <img src={time} alt="Lifetime Access Icon" className="img-fluid fa-beat" width="70px" />
          <div className="matter mt-3">
            <h5 className="fw-bold">Lifetime Access</h5>
            <p>Enjoy lifetime access to all course materials and updates.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
