
import React, { useState } from 'react';
import './registration_styles.css'; // Assuming you have a separate CSS file for registration styles

const Registration = ({ onLoginClick }) => {
  // State variables for user's McGill email and password
  const [mcgillEmail, setMcgillEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handler for McGill email input change
  const handleMcgillEmailChange = (event) => {
    setMcgillEmail(event.target.value);
  };

  // Handler for password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('McGill Email:', mcgillEmail, 'Password:', password);
    // Implement registration logic here
    // For example, making a POST request to a registration API endpoint
  };

  // Rendering the registration form
  return (
    <div className='outer'>
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto">
            
            <p className="registration-message">Register for an Account</p>
            <form className="registration-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="fullName">Name</label>
                <input
                  id="fullName"
                  type="text"
                  value={mcgillEmail} // Remember to set up different state variables for each input
                  onChange={handleMcgillEmailChange}
                  required 
                />
              </div>

              <div className="input-group">
                <label htmlFor="preferredName">Preferred Name</label>
                <input
                  id="preferredName"
                  type="text"
                  value={mcgillEmail} // This should probably be a different state variable
                  onChange={handleMcgillEmailChange}
                  required 
                />
              </div>

              <div className="input-group">
                <label htmlFor="mcgillEmail">Email</label>
                <input
                  id="mcgillEmail"
                  type="email"
                  value={mcgillEmail}
                  onChange={handleMcgillEmailChange}
                  required 
                />
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required 
                />
              </div>
              
              <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <p className="account-exists">Already have an account? <span className="link-button-reg" onClick={onLoginClick}>Login</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;