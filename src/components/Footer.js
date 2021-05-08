import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <FooterSection>
            <h1>Copyright © 2021. All Rights Reserved.</h1>
        </FooterSection>
    )
};

const FooterSection  = styled.div`
    min-height: 7vh;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    background-color:#282828;
    padding: 1rem 0rem;
    margin: 5rem  0rem 0rem 0rem;
    bottom: 0;
    h1{
        color:#3f3f3f;
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1.4;
        
    }
`;
  
export default    Footer;