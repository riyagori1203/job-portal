import React from 'react'
import "./About.css"
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

export default function About() {
    return (
        
        <section class="Material-contact-section section-padding section-dark">
             <link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet"/>
  <link href="/your-path-to-fontawesome/css/brands.css" rel="stylesheet"/>
  <link href="/your-path-to-fontawesome/css/solid.css" rel="stylesheet"/>

      <div class="container">
          <div class="row">
              
              <div class="col-md-12 wow animated fadeInLeft" data-wow-delay=".2s">
                  <h1 class="section-title" style={{color:"white"}}>Love to Hear From You!</h1>
              </div>
          </div>
          <div class="row" >
              
              <div class="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft" data-wow-delay=".2s">
                <p style={{color:"white"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content.</p>

                <div class="find-widget">
                 <h4 style={{fontFamily: 'Roboto',color:"white"}}>Company:  <a href="https://hostriver.ro">JobHunter</a></h4>
                </div>
                <div class="find-widget">
                 <h4 style={{fontFamily: 'Roboto',color:"white"}}>Address: <a href="#">Somaiya Vidyavihar</a></h4>
                </div>
                <div class="find-widget">
                  <h4 style={{fontFamily: 'Roboto',color:"white"}}>Phone:  <a href="#">+ 91 895426332</a></h4>
                </div>
                
                <div class="find-widget">
                  <h4 style={{fontFamily: 'Roboto',color:"white"}}>Website:  <a href="https://uny.ro">www.jobhunter.com</a></h4>
                </div>
                
              </div>
             
              <div class="col-md-6 wow animated fadeInRight" data-wow-delay=".2s" style={{color:"white",borderRadius:"25"}}>
                  <form class="shake" role="form" method="post" id="contactForm" name="contact-form" data-toggle="validator">
                      
                      <div class="form-group label-floating">
                        <label class="control-label" for="name"style={{color:"white"}}>Name</label>
                        <input class="form-control" id="name" type="text" name="name" required data-error="Please enter your name"/>
                        <div class="help-block with-errors"></div>
                      </div>
                      
                      <div class="form-group label-floating">
                        <label class="control-label" for="email"style={{color:"white"}}>Email</label>
                        <input class="form-control" id="email" type="email" name="email" required data-error="Please enter your Email"/>
                        <div class="help-block with-errors"></div>
                      </div>
                      
                      <div class="form-group label-floating">
                        <label class="control-label"style={{color:"white"}}>Subject</label>
                        <input class="form-control" id="msg_subject" type="text" name="subject" required data-error="Please enter your message subject"/>
                        <div class="help-block with-errors"></div>
                      </div>
                      
                      <div class="form-group label-floating">
                          <label for="message" class="control-label"style={{color:"white"}}>Message</label>
                          <textarea class="form-control" rows="3" id="message" name="message" required data-error="Write your message"></textarea>
                          <div class="help-block with-errors"></div>
                      </div>
                      
                      <div class="form-submit mt-5">
                      <Button style={{color:"white",margin:"5px"}} class="btn btn-dark"> Send Message</Button>
                          <div id="msgSubmit" class="h3 text-center hidden"></div>
                          <div class="clearfix"></div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
      
      
        <div class="jumbotron back"style={{backgroundcolor: "black" ,paddingtop: "20px"}}>
            
               
                
                <div class="text-center">
                    <h4 > Connect With Us</h4>
                    <ul class="normal">
                        <h5><li style={{paddingtop: "7px"}}><a class="normal" href="#">Facebook</a></li></h5>
                        <h5><li style={{paddingtop: "7px"}}><a class="normal" href="#">Twitter</a></li></h5>
                        <h5><li style={{paddingtop: "7px"}}><a class="normal" href="#">Linkedin</a></li></h5>
                       <h5> <li style={{paddingtop: "7px"}}><a class="normal" href="#">Instagram</a></li></h5>
                        <h5><li style={{paddingtop: "7px"}}><a class="normal" href="#">GitHub</a></li></h5>
                    </ul>
                </div>
                
            
            <div class="footer-copyright text-center" style={{margintop: "35px"}}>© 2020 Copyright :
                <a href="https://mdbootstrap.com/" style={{color: "white!important;"}}> JobHunter.com</a>
            </div>
        </div>
    

    </section>
    )
}
