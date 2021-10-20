import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{backgroundColor: 'rgb(37, 50, 99)'}}>
            <div className="d-flex align-items-center justify-content-evenly p-5">
                <div classname="">
                    <div className="text-light">
                        <h1 className="mb-4" style={{ color: 'rgb(242, 197, 252)' }}>MediGlow</h1>
                        <h6>23/2 South East Part <br /> Washington,USA</h6>
                    </div>
                </div>
                <div className="">
                    <div className="text-light">
                        <h3 className="mb-3">Contact us</h3>
                        <h6><i class="fas fa-phone-alt pe-1"></i> +91655423411</h6>
                        <h6><i class="fas fa-phone-alt pe-1"></i> +91659723781</h6>
                        <h6><i class="fas fa-briefcase pe-1"></i> +45655426713</h6>
                        <h6><i class="fas fa-envelope pe-1"></i> mediglow23@gmail.com</h6>
                    </div>

                </div>
                <div className="">
                    <div className="text-light">
                        <h4 className="mb-3">Follow Us</h4>
                        <i class="fab fa-facebook-square fs-2"></i>
                        <i class="fab fa-instagram-square fs-2 ps-2"></i>
                        <i class="fab fa-linkedin fs-2 ps-2"></i>
                        <i class="fab fa-google-plus-square fs-2 ps-2"></i>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
