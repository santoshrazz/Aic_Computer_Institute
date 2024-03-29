import React from 'react'
import "./Contact.css"
const Contact = () => {
    function focusFunc(e) {
        let parent = this.parentNode;
        parent.classList.add("focus");
    }
    function blurFunc() {
        let parent = this.parentNode;
        if (this.value == "") {
            parent.classList.remove("focus");
        }
    }
    return (
        <div className="container">
            <span className="big-circle"></span>
            <img src="img/shape.png" className="square" alt="" />
            <div className="form">
                <div className="contact-info">
                    <h3 className="title font-Roboto font-bold">Let's get in touch</h3>
                    <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                        dolorum adipisci recusandae praesentium dicta!
                    </p>

                    <div className="info">
                        <div className="information">
                            <i className="fas fa-map-marker-alt mx-5"></i>

                            <p>92 Cherry Drive Uniondale, NY 11553</p>
                        </div>
                        <div className="information">
                            <i className="fas fa-envelope mx-5"></i>
                            <p>lorem@ipsum.com</p>
                        </div>
                        <div className="information">
                            <i className="fas fa-phone mx-5"></i>
                            <p>123-456-789</p>
                        </div>
                    </div>

                    <div className="social-media">
                        <p className='font-bold'>Connect with us :</p>
                        <div className="social-icons">
                            <a href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <span className="circle one"></span>
                    <span className="circle two"></span>

                    <form action="index.html" autoComplete="off">
                        <h3 className="title">Contact us</h3>
                        <div className="input-container">
                            <input type="text" name="name" className="input placeholder:text-white" placeholder='Your Name' />
                            {/* <label for="">Username</label>
                            <span>Username</span> */}
                        </div>
                        <div className="input-container">
                            <input type="email" name="email" className="input placeholder:text-white" placeholder='Email' />
                        </div>
                        <div className="input-container">
                            <input type="tel" name="phone" className="input placeholder:text-white" placeholder='Phone' />
                        </div>
                        <div className="input-container textarea">
                            <textarea name="message" className="input placeholder:text-white" placeholder='Message'></textarea>
                        </div>
                        <input type="submit" value="Send" className="btn bg-white" />
                    </form>
                </div>
            </div>
        </div>


    )
}

export default Contact
