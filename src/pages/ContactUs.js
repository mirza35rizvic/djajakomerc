import React from 'react';
import Contact from '../img/Contact.jpg';
import styled from 'styled-components';
import ContactUsFirst from '../components/ContactUsFirst';
import ContactUsTheSecond from '../components/ContactUsTheSecond';
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
import Footer from "../components/Footer";

const ContactUs = () => {
    return( 
    <motion.div exit="exit"  
    variants={pageAnimation} 
    initial="hidden"  
    animate="show">
    <ContactUsFirst/>
    <ContactUsTheSecond/>
    <ScrollTop/>
    <Footer></Footer>
    </motion.div>
    );
};


export default ContactUs;