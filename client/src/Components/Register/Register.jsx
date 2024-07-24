import React from 'react';


function Register() {
  
    return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-10 col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-center">
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-user me-3 icon"></i>
                <input type="text" id="form1" className="form-control w-100" placeholder="Your Name" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-envelope me-3 icon"></i>
                <input type="email" id="form2" className="form-control w-100" placeholder="Your Email" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lock me-3 icon"></i>
                <input type="password" id="form3" className="form-control w-100" placeholder="Password" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-key me-3 icon"></i>
                <input type="password" id="form4" className="form-control w-100" placeholder="Repeat your password" />
              </div>

              <div className="mb-4">
                <input type="checkbox" id="flexCheckDefault" className="form-check-input" />
                <label className="form-check-label" htmlFor="flexCheckDefault">Subscribe to our newsletter</label>
              </div>

              <button className="btn btn-primary mb-4" size="lg">Register</button>
            </div>

            <div className="col-md-10 col-lg-6 order-1 order-lg-2 d-flex align-items-center">
              <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' alt="Sign up illustration" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
