import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {useLocation} from 'react-router-dom';

const Nav = () => {
    const {pathname} = useLocation();
    return(
        <StyledNav>
            <h1>
                <Link id='logo' to="/"> đajakomerc</Link>
                 </h1>
             <ul>
                 <li>
                     <Link to='/'> O nama</Link>
                     <Line
                      transition={{ duration: 0.75 }} 
                      initial={{width: "0%" }}
                      animate={{ width: pathname === '/'?  "50%" : "0%" }}
                      />

                 </li>
                 <li>
                     <Link to="/work"> Proizvodi</Link>
                     <Line
                      transition={{ duration: 0.75 }} 
                      initial={{width: "0%" }}
                      animate={{ width: pathname === '/work'?  "50%" : "0%" }}
                      />
                 </li>
                 <li>
                     <Link to="/contact"> Kontakt</Link>
                     <Line
                      transition={{ duration: 0.75 }} 
                      initial={{width: "0%" }}
                      animate={{ width: pathname === '/contact'?  "50%" : "0%" }}
                      />
                 </li>
             </ul>
        </StyledNav>
    );
};

const StyledNav  = styled.nav`
    min-height: 9vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;
    a {
        color: white;
        text-decoration: none
    }
    ul{
        display: flex;
        list-style: none;
    }

    #logo{
        font-size: 1.5rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
    @media(max-width: 1300px){
       flex-direction: column;
       padding: 2rem 3rem;
       #logo {
           display: inline-block;
           margin: 1rem
       }
       ul{
           padding: 2rem;
           justify-content: space-around;
           width: 100%;
           li{
               padding: 0;
           }
       }
      
    }
`;
const Line = styled(motion.div)`
    height: 0.3rem;
    background: #23d997;
    width: 10%;
    position: absolute;
    bottom: -80%;
    left: 60%;
    @media(max-bottom: 1300px) {
        left: 0;
        width: 50%;
        }
        
    
  
`;

export default Nav;