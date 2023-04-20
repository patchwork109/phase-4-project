import React from "react";


function Footer() {
 
  return (
    <footer className="footer">
    <div className="footer-left col-md-4 col-sm-6">
      <p className="about">
        <span>About the company</span>We believe that French fries are more than just a snack – they are a culinary experience. We are committed to providing our customers with the best possible experience, from the moment they place their order to the moment they take their first bite. Come experience fries like never before.
      </p>
      
    </div>
    <div className="footer-center col-md-4 col-sm-6">
      <div>
        <i className="fa fa-map-marker"></i>
        <p>101 BestSpuds Drive<br/>Idaho, United States</p>
      </div>
      <div>
        <i className="fa fa-phone"></i>
        <p> (1) 800 SPUDLUV </p>
      </div>
      <div>
        <i className="fa fa-envelope"></i>
        <p><a href="#">getfried@getfried.com</a></p>
      </div>
    </div>
    <div className="footer-right col-md-4 col-sm-6">
      <h2> Company<span> logo</span></h2>
      <p className="menu">
        Made with coffee, love, and preworkout ♡
      </p>
      <p className="name"> Get FRIED &copy; 2023</p>
    </div>
  </footer>
  )

}

export default Footer;