import "./intro.scss";
import { init } from "ityped";
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import SchoolIcon from '@material-ui/icons/School';
import CallIcon from '@material-ui/icons/Call';

import { useEffect, useRef, useState } from "react";
import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";


export default function Intro() {
  const textRef = useRef();
  const [personalInfo, setPersonalInfo] = useState([]);

  const useStyles = makeStyles(theme => ({
    clickableIcon: {
      color: 'black',
      '&:hover': {
        color: 'crimson',
        transform: 'scale(1.1)',
      },
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    axios.get("/api/personalinfo").then((response) => {
      setPersonalInfo(response.data[0]);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer", "Programmer", "Content Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="row">
        <div className="maincolumn">
          <div className="left">
            <div className="imageContainer">
              <img src="assets/man.png" alt="" />
            </div>
          </div>
          <div className="left2">
            <div className="wrapper">
              {/* <h2>Hi There, I'm</h2> */}
              <h2>Md Azad Hossain Tutul</h2>
              <h3>
                <span ref={textRef}></span>
              </h3>
              <div>
                <CallIcon className={classes.clickableIcon} fontSize="large" onClick={() => navigator.clipboard.writeText('+8801626364610') ? alert("copied The Number") : null} />
                <MailIcon className={classes.clickableIcon} fontSize="large" onClick={event => window.open('mailto:mdazadhossain95@gmail.com?subject=Subject&body=Body%20goes%20here')} />
                <GitHubIcon className={classes.clickableIcon} fontSize="large" onClick={event => window.open('https://github.com/mdazadhossain95')} />
                <LinkedInIcon className={classes.clickableIcon} fontSize="large" onClick={event => window.open('https://www.linkedin.com/in/azadhossain-tutul/')} />
                <FacebookIcon className={classes.clickableIcon} fontSize="large" onClick={event => window.open('https://www.facebook.com/Azadhossain95')} />
                <TwitterIcon className={classes.clickableIcon} fontSize="large" onClick={event => window.open('https://twitter.com/mdazadhossain95')} />
                {/* <span>{personalInfo.email}</span> */}
              </div>

              <h4>

                <button
                  onClick={() => window.open(personalInfo.resume, "_blank")}
                  type="submit"
                >
                  DOWNLOAD CV
                </button>
              </h4>
            </div>
          </div>
        </div>

        <div className="maincolumn2">
          <div className="right">
            <div className="wrapper">
              <h1>Biography</h1>
              <p>Hi, I’m Azad Hossain, currently doing an internship as a Software Developer at Divine IT Limited in Dhaka, Bangladesh.
                inshallah, I will have soon Bachelor's degree from Guangxi Science and technology normal university which is in Laibin City, Guangxi Province, China.<br /><br />
                Previously, I worked as a sales executive in so many companies like VIVO, PRAN-RFL, Shodesh Polli, and Market Access Providers Limited in Chittagong, Bangladesh.<br /><br />
                At present, I love to do coding, in my free time I like to play football or think about new ideas, try to solve every kind of problem quickly, and on vacation love to travel and explore new areas.</p>
            </div>
            <a href="#portfolio">
              <img src="images/down.png" alt="" />
            </a>
            <div className="row">
              <div className="maincolumn3 interests">
                {/* <div className="interests"> */}
                <h3>Interests</h3>
                <ul>
                  <li><ArrowRightIcon />Software Development</li>
                  <li><ArrowRightIcon />Web Development</li>
                  <li><ArrowRightIcon />Information Security</li>
                </ul>

                {/* </div> */}


              </div>
              <div className="maincolumn3 interests">
                {/* <div> */}
                <h3>Education</h3>
                <ul>
                  <li>
                    <div>
                      {/* <SchoolIcon /> */}
                      <h4> <SchoolIcon /> &nbsp; Bsc in Computer Science, 2022</h4>
                      <p>Guangxi Science and technology normal university</p>
                      <p>Laibin City, Guangxi Province, China.</p>
                    </div>
                    {/* <p>The University of Texas at Dallas</p> */}

                  </li>
                  {/* <li>
                    <i></i>
                    <div>
                      <p>BTech, 2016</p>
                      <p>Indian Institute of Technology Guwahati</p>
                    </div>
                  </li> */}
                </ul>

                {/* </div> */}



              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}