import React from "react";
import "./footer.css";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SiLinkedin } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Instagran = styled(SlSocialInstagram)`
  margin: 20px;
  color: white;
  height: 40px;
  width: 30px;
  @media screen and (max-width: 855px) {
    height: 15px;
    width: 15px;
  }
`;

const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="FooterLeft">
        <h3>For any query, contact us on</h3>
      </div>
      <div className="FooterRight">
        <Link className="Socials" to="/">
          <div className="instagram">
            <SlSocialInstagram size="25px" />
          </div>
        </Link>
        <Link className="Socials" to="/">
          <div className="twitter">
            <SlSocialTwitter size="25px" />
          </div>
        </Link>
        <Link className="Socials" to="/">
          <div className="linkedin">
            <SiLinkedin size="25px" />
          </div>
        </Link>
        <Link className="Socials" to="/">
          <div className="gmail">
            <SiGmail size="25px" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
