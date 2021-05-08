import React from 'react';
//Page Components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhoWeAre from '../components/WhoWeAre';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
import Footer from "../components/Footer";



const AboutUs = () => {
    return ( 
    <motion.div
    exit="exit"    
    variants={pageAnimation}  
    initial='hidden' 
    animate="show"> 
    <AboutSection />
    <ServicesSection />
    <ScrollTop/>
    <WhoWeAre/>
    <Footer></Footer>

    </motion.div>
   
    );
};


export default AboutUs;