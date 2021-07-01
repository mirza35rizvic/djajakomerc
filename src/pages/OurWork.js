import React from 'react';
import styled from "styled-components";



//Images
import Chives from '../img/Chives.jpg';

import Raspberry from '../img/raspberry.jpeg';
import Foxmushroom2 from '../img/fox mushroom2.jpg';
import Blueberry from '../img/blueberry1.jpg';
import Sambucusnigra from '../img/Sambucus nigra1.jpg';
import Bloetus2 from '../img/vrganj.jpg';

//Styleing and Animation
import {useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";



const OurWork = () => {
    //get the current location
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    console.log(path);
    
    return(
        <OurImages
        exit="exit"  
        variants={pageAnimation} 
        initial="hidden"  
        animate="show">
           
             
            <h1>Naši proizvodi</h1>
            <Images>
               
              
                <div className="chives">
              {/*   <ProductDetails/> */}
                    <h2>srijemuž</h2>
                <Link to="/work/chives">
                <img src={Chives} alt="Chives"/>
                </Link>
                </div>

                <div className="Bloetus2">
                    <h2>vrganj</h2>
                    <img src={Bloetus2} alt="Bloetus2"/>
                </div>

                <div className="raspberry">
                    <h2>malina</h2>
                    <Link to="/work/raspberry">
                    <img src={Raspberry} alt="Raspberry"/>
                    </Link>
                </div>
                
                <div className="Foxmushroom">
                    <h2>lisicarka</h2>
                    <Link to="/work/foxmushroom">
                    <img src={Foxmushroom2} alt="Foxmushroom2"/>
                    </Link>
                </div>

                <div className="blueberry1">
                    <h2>borovnica</h2>
                    <Link to="/work/blueberry3">
                    <img src={Blueberry} alt="blueberry1"/>
                    </Link>
                </div>

                <div className="elderberry">
                    <h2>zohva</h2>
                    <Link to="/work/elderberry">
                    <img src={Sambucusnigra} alt="Sambucusnigra"/>
                    </Link>
                </div>
                
              
         
              
            </Images>
            
            <ScrollTop/>
            
        </OurImages>
        
      
    )
}

const OurImages = styled(motion.div)`
    background: white;
    padding: 0rem 5rem;
    @media(max-width: 750px) {
        justify-content: center;
        margin-left: 15rem;
        margin-bottom: 2rem;
        padding: 2rem 2px;
          h1{
              justify-content: center;
              margin-right: 15rem;
          }
        }
    
    img { 
        display: block;
        width: 100%;
        height: 40vh;
        overFlow: hidden;
    }
   
    h1{
        padding: 5rem 0rem;
        color: black;
        text-align: center;
    }
    
    h2{
        font-size: 30px;
        text-align: center;

        padding: 3rem 10rem;
        @media(max-width: 750px) {
        padding: 0rem 5px;
        margin-right: 14.5rem;
        margin-bottom: 3rem;
          
        }
    
        } 
        
`;

const Images = styled.div`   
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px,1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem; 
    cursor: pointer;
    overFlow: hidden;
    @media(max-width: 750px) {
        img{
            padding: 0rem 10px;
            margin-right: 14.5rem;
            justify-items: center;
            justify-content: center;
            width: 70%;
            height: 60%;
        }
        padding: 0rem 10px;
        margin-right: 1rem;
        }
`;




export default OurWork;

