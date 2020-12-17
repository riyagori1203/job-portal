import React from "react";
import {
  Nav,
} from "react-bootstrap";

import CustomNavbar from "./CustomNavbar";
import ws1 from '../assets/images/jordan-epperson-fWU2Pr-0pjk-unsplash.jpg';
import ws2 from '../assets/images/jordan-epperson-wDw5XKpR7Tc-unsplash.jpg';
import ws3 from '../assets/images/career_resume_job_candidate-100787914-large.jpg';
import ws4 from '../assets/images/jesus-kiteque-wn-KYaHwcis-unsplash.jpg'
import ws5 from '../assets/images/pexels-photo-840996-2.jpeg'
import ws6 from '../assets/images/Nexus-Hub-How-to-Design-Your-Office-for-Optimal-Productivity-and-Workflow.jpg'
import ws7 from '../assets/images/Ergonomics-1_feat-570x350.jpg'
import ws8 from '../assets/images/PAFF_031318_workfromhome-609x419.jpg'

export default function Home() {
  const backgroundStyle = {
    backgroundColor: "#38ruc55",
    color: "white",
    boxShadow: "0 2px 20px 0px #3abcf0",
  };
  const style={
    padding:"128px 16px",
     id:"contact"
  };

  return (
    <div >
      <CustomNavbar/>
      
        <h3 style={{color:"white", margin:"40px"}}className="display-5 ">Find jobs.Find better.Find faster</h3>
        <div class="row">
          <div class="col-12 col-md-8">
            <div class="card card text white bg-dark mb-3">
              <div class="card-header ">
                <ul class="nav nav-pills card-header-pills">
                  <li class="nav-item">
                    <a class="nav-link white " href="#">
                      All sectors
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  white" href="#">
                      Information Technology
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  white" href="#">
                      Manufacturing
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  white" href="#">
                      Services
                    </a>
                  </li>
                </ul>
              </div>
              <div class="card-body text-dark">
                <Nav>
                  <form class="form-inline my-2 my-lg-0">
                    <input
                      class="form-control mr-lg-3"
                      type="search"
                      placeholder="Search by skills,companies and job titles"
                      aria-label="Search"
                    />
                    <button
                      class="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </Nav>
                <p class="card-text text white" style={{margin:"5px"}}>
                  Trending searches : Jobs in Delhi, Jobs in Mumbai, Jobs in
                  Banglore, Jobs in Chennai
                </p>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="card card text white bg-dark mb-3">
              <div class="card-header">
                <p>
                  <b>BE AN ENTREPRENEUR!</b>
                </p>
              </div>
              <div class="card-body text-dark">
                <p class="card-text text white">
                  Build your own company! Be an entrepreneur!
                  <br /> Give wings to your idea through our incubation center
                  at RIDDL .
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="jumbotron" style={{paddingtop: "15px", height: "400px"}}>

            <h1>Introducing : <strong>Interview Machine</strong> </h1>
            <br/>
            <div class="row ">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <br/>
                    <h5>What is the interview machine?</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum</p>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <br/>
                    <h5>How does interview machine work?</h5>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here', making it look like
                        readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                        their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                        purpose (injected humour and the like).</p>

                </div>
            </div>
        </div>
    
      <div class="row" style={{margintop: "0px"}}>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 mbs">
            <div class="jumbotron " style={{alignself: "center", height: "350px"}}>
                <div class="card backgrndplain white" style={{alignself: "center", border: "0px"}}>
                    <img src={ws1}class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Job Opening!</h5>
                        <p class="card-text">Great Job opening at this growth-paving companies to help in your progress
                            as an employee.</p>
                        <a href="#" class="btn btn-info ">Apply Now!</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 mbs">
            <div class="jumbotron " style={{alignself: "center", height: "350px"}}>
                <div class="card backgrndplain white" style={{alignself: "center", border: "0px"}}>
                    <img src={ws2} class="card-img-top !important" alt="..." style={{height:"217px"}}/>
                    <div class="card-body">
                        <h5 class="card-title">Now Hiring!</h5>
                        <p class="card-text">Great Job opening at this growth-paving companies to help in your progress
                            as an employee.</p>
                        <a href="#" class="btn btn-info ">Apply Now!</a>
                    </div>
                </div>

            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <div class="jumbotron "  style={{alignself: "center", height: "350px"}}>
                <div class="card backgrndplain white" style={{alignself: "center", border: "0px"}}>
                    <img src={ws3} class="card-img-top" alt="..."style={{height:"217px"}}/>
                    <div class="card-body">
                        <h5 class="card-title">Open Positions!</h5>
                        <p class="card-text">Great Job opening at this growth-paving companies to help in your progress
                            as an employee.</p>
                        <a href="#" class="btn btn-info ">Apply Now!</a>
                    </div>
                </div>





            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <div class="jumbotron "  style={{alignself: "center", height: "350px"}}>
                <div class="card backgrndplain white" style={{alignself: "center", border: "0px"}}>
                    <img src={ws4} class="card-img-top" alt="..."style={{height:"217px"}}/>
                    <div class="card-body">
                        <h5 class="card-title">Job Vacancies!</h5>
                        <p class="card-text">Great job opening at this growth-paving companies to help in your progress
                            as an employee.</p>
                        <a href="#" class="btn btn-info ">Apply Now!</a>
                    </div>
                </div>

            </div>
        </div>
      </div>

      <div class="row" style={{margintop: "0px"}}>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 " style={{marginbottom: "200px"}}>
            <div class="jumbotron" style={{alignself: "center", height: "350px", margintop: "0px"}}>
                <div class="card backgrndplain white" style={{alignself: "center", border: "0px"}}>
                    <img src={ws5} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Job Opportunities!</h5>
                        <p class="card-text">Great Job opening at this growth-paving companies to help in your progress
                            as an employee.</p>
                        <a href="#" class="btn btn-info ">Apply Now!</a>
                    </div>
                </div>

            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <div class="jumbotron" style={{alignself: "center", height: "350px", margintop: "0px"}}>
                <div class="card backgrndplain white" style={{alignself: "center", border: "0px"}}>
                    <img src={ws6} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Posts Vacant!</h5>
                        <p class="card-text">Great Job opening at this growth-paving companies to help in your progress
                            as an employee.</p>
                        <a href="#" class="btn btn-info ">Apply Now!</a>
                    </div>
                </div>

            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <div class="jumbotron" style={{alignself: "center", height: "350px", margintop: "0px"}}>
                <div class="card backgrndplain white" style={{alignself: "center", border: "0px"}}>
                    <img src={ws7} class="card-img-top" alt="..."style={{height:"202px"}}/>
                    <div class="card-body">
                        <h5 class="card-title">Poitions To Be Filled!</h5>
                        <p class="card-text">Great Job opening at this growth-paving companies to help in your progress
                            as an employee.</p>
                        <a href="#" class="btn btn-info ">Apply Now!</a>
                    </div>
                </div>

            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <div class="jumbotron" style={{alignself: "center", height: "350px", margintop: "0px"}}>
                <div class="card backgrndplain white" style={{alignself: "center", border: "0px"}}>
                    <img src={ws8} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Positions Open!</h5>
                        <p class="card-text">Great job opening at this growth-paving companies to help in your progress
                            as an employee.</p>
                        <a href="#" class="btn btn-info ">Apply Now!</a>
                    </div>
                </div>

            </div>
        </div>
      </div>

      <div class=" jumbotron-fluid" >
        <div class="row" >
            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-12 ">
                <div class="jumbotron" 
                    style={{height: "600px", paddingtop: "20px!important"}}>

                    <h3 style={{margintop: "0px", color: "white"}}>What you get with JobHunter+ Subscription :</h3>
                    <br/>
                    <ul style={{color: "white" ,fontsize: "16px;"}}>
                        <li>
                            <h6 style={{fontsize: "20px", color: "#30d6c0"}}>PROFILE DEVELOPMENT</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vel iste officiis
                                incidunt ullam atque harum error.</p>
                        </li>
                        <li>
                            <h6 style={{fontsize: "20px", color: "#30d6c0"}}>PORTFOLIO MANAGEMENT</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vel iste officiis
                                incidunt ullam atque harum error.</p>
                        </li>
                        <li>
                            <h6 style={{fontsize: "20px", color: "#30d6c0"}}>MOCK INTERVIEWS</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vel iste officiis
                                incidunt ullam atque harum error.</p>
                        </li>
                        <li>
                            <h6 style={{fontsize: "20px", color: "#30d6c0"}}>PORTFOLIO ANALYSIS</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vel iste officiis
                                incidunt ullam atque harum error.</p>
                        </li>
                        <li>
                            <h6 style={{fontsize: "20px", color: "#30d6c0"}}>TIPS FOR IMPROVEMENT</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vel iste officiis
                                incidunt ullam atque harum error.</p>
                        </li>
                    </ul>

                </div>

            </div>
        </div>
      </div>
      

      <div class="jumbotron back" style={{backgroundcolor: "black",height: "350px" ,paddingtop: "20px"}}>
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                    <h4 style={{marginleft: "37px", marginbottom: "25px"}}>Job Seekers</h4>
                    <ul class="normal">
                        <li style={{paddingtop: "7px"}}> <a class="normal" href="#">Job Search</a> </li>
                        <li style={{paddingtop: "7px"}}> <a class="normal" href="#">Job Search Login</a></li>
                        <li style={{paddingtop: "7px"}}> <a class="normal" href="#">Search Tips</a></li>
                        <li style={{paddingtop: "7px"}}> <a class="normal" href="#">Free Job Alerts</a></li>
                        <li style={{paddingtop: "7px"}}> <a class="normal" href="#">Find Companies</a></li>
                    </ul>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                    <h4 style={{marginleft: "37px", marginbottom: "25px"}}>Employers</h4>
                    <ul class="normal">
                        <li style={{paddingtop: "7px"}}><a class="normal" href="#">Employer Login</a></li>
                        <li style={{paddingtop: "7px"}}><a class="normal" href="#">Job Posting</a></li>
                        <li style={{paddingtop: "7px"}}><a class="normal" href="#">Access Resume</a></li>
                        <li style={{paddingtop: "7px"}}><a class="normal" href="#">Database</a></li>
                        <li style={{paddingtop: "7px"}}><a class="normal" href="#">Advertise with us</a></li>
                        <li style={{paddingtop: "7px"}}><a class="normal" href="#">Research Reports</a></li>
                    </ul>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                    <h4 style={{marginleft: "37px", marginbottom: "25px"}}>Stay Connected</h4>
                    <ul class="normal">
                        <li style={{paddingtop: "7px"}}><a class="normal" href="#">Facebook</a></li>
                        <li style={{paddingtop: "7px"}}><a class="normal" href="#">Twitter</a></li>
                        <li style={{paddingtop: "7px"}}><a class="normal" href="#">Linkedin</a></li>
                        <li style={{paddingtop: "7px"}}><a class="normal" href="#">Instagram</a></li>
                        <li style={{paddingtop: "7px"}}><a class="normal" href="#">GitHub</a></li>
                    </ul>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                    <h4 style={{marginleft: "37px", marginbottom: "25px", }}>JobHunter</h4>
                    <ul class="normal">
                        <li style={{paddingtop: "7px"}}><a class="normal" href="#">About Us</a></li>
                        <li style={{paddingtop: "7px"}}><a class="normal" href="#">Contact Us</a></li>
                        <li style={{paddingtop: "7px"}}><a class="normal" href="#">Careers with us</a></li>
                        <li style={{paddingtop: "7px"}}><a class="normal" href="#">Send feedback</a></li>
                        <li style={{paddingtop: "7px"}}><a class="normal" href="#">Testimonials</a></li>
                        <li style={{paddingtop: "7px"}}><a class="normal" href="#">Jobs App</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-copyright text-center" style={{margintop: "35px"}}>© 2020 Copyright :
                <a href="https://mdbootstrap.com/" style={{color: "white!important;"}}> JobHunter.com</a>
            </div>
        </div>
    </div>






    </div>
  );
}
