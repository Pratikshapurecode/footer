import React from "react";
import './footer.css';

const Footer=()=>{
    return(
        
       <div className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Affiliate Program</a></li>
                    </ul>
                    </div>
                    <div className="footer-col">
                    <h4>Get Help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Order Status</a></li>
                        <li><a href="#">Payment Options</a></li>
                    </ul>
                    </div>
                    <div className="footer-col">
                    <h4>Online Shopping</h4>
                    <ul>
                        <li><a href="#">Watch</a></li>
                        <li><a href="#">Bag</a></li>
                        <li><a href="#">Shoes</a></li>
                        <li><a href="#">Dress</a></li>
                    </ul>
                    </div>
                    <div className="footer-col">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    </div>
                    </div> 
                    </div>     

        </div>

     
    )
}

export default Footer;