import "./topbar.scss";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import React, { useState, useEffect } from "react";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export default function Topbar(props) {
  const [personalInfo, setPersonalInfo] = useState([]);
  // const ai = axios.create({
  //   // baseURL: "https://techtouhid.herokuapp.com",
  //   baseURL: "http://127.0.0.1:8000",
  // });

  const useStyles = makeStyles(theme => ({
    clickableIcon: {
      color: 'black',
      '&:hover': {
        color: 'crimson',
        // pleacehoder: 'copy',
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

  return (
    <div className={"topbar " + (props.menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <div className="itemContainer">
            <MailIcon className={classes.clickableIcon} onClick={() => navigator.clipboard.writeText('mdazadhossain95@gmail.com') ? alert("copied the mail address") : null} />
          </div>
        </div>

        <div className="middle">
          <a href="#intro" className="logo">
            DazaD
          </a>
        </div>
        <div className="right">
          <div
            className="hamburger"
            onClick={() => props.setMenuOpen(!props.menuOpen)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>

      </div>
    </div>
  );
}
