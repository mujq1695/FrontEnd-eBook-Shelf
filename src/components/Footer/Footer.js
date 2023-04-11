import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div> 
      <footer>
    <div className="row">
        <div className="col">
            <div className="logo-details">
                    <span className="logo_name">MyBookStack</span>
            </div>
            <p>This platform was created with the avid reader in mind. As a book lover myself, I wanted to build a tool that would allow users to easily manage and share their book collections..</p>
        </div>
        <div className="col">
            <h3>Office</h3>
            <p>
                Think about future growth: Choose an office location that can accommodate your company's future growth.
            </p>
            <p className="mail-id">MyBookStack@gmail.com</p>
            <p>+92545458528</p>
        </div>
        <div className="col">
            <h3>Links</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Gallery</a></li>
            </ul>
        </div>
        <div className="col">
            <h3>Newsletter</h3>
            <form>
                <i className="far fa-envelope"></i>
                <input type="email" name="email" placeholder="Enter your email id" required/>
                <button type="submit"><i className="fas fa-arrow-right"></i></button>
            </form>
            <div className="social-icons">
                <a href="#" className="facebook"><i className="fa fa-facebook"></i></a> 
                <a href="#" className="twitter"><i className="fa fa-twitter"></i></a> 
                <a href="#" className="google"><i className="fa fa-google"></i></a> 
                <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>
    </div>
    <hr/>
    <p className="copyright">© 2023 My Book Stack Pvt. Ltd.
    All rights are reserved</p>
</footer>
</div>
  )
}

export default Footer