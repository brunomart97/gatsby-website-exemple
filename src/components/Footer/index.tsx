import React from 'react';

import Layout from '../Layout';

const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row text-white py-4">
          <div className="col-6">
            Description
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            Social Media
          </div>
          <div className="col-12 d-flex justify-content-center">
            Copyright
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;