import "./footer.scss"
// import React from 'react';
// import styled from 'styled-components'


function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer>
        <p>Copyright ⓒ {year}</p>
      </footer>
    );
  }
  
  export default Footer;