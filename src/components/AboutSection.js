import React from 'react';
import team2 from '../img/pngegg (6).png';
//Styled
import  { About, Description, Image, Hide } from "../styles";

import { Link } from "react-router-dom";

//Framer Motion
import { motion } from "framer-motion";
import { titleAinm, fade, photoAnim } from '../animation';

const AboutSection = () => {
    return(
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAinm} >Nudimo saradnju  </motion.h2>
                    </Hide>
                    <Hide>
                        
                        <motion.h2 variants={titleAinm} >otkup i prodaju<span> šumskih plodova</span> 
                        </motion.h2 >
                    </Hide>
                    
                </motion.div>
                <motion.p variants={fade}> Kontaktirajte nas ukoliko želite ostvariti  saradnju  sa nama.
                Mi smo profesionalci sa nevjerovatnim osobinama.</motion.p>
                <motion.button variants={fade}><Link to="/contact"> KONTAKTIRAJTE NAS</Link></motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={team2} alt="we are"/>
            </Image>
        </About>
    );
};



export default AboutSection;