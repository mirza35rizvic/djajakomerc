import React from 'react';
//images
import whoweare from '../img/whoweare.png';
import  { About, Description  } from "../styles";

import styled from "styled-components";
import { useScroll } from './useScroll';
import { fade, scrollReveal } from '../animation';

const WhoWeAre = () => {
    const [element,controls] = useScroll();
    return(
        
        <About variants={scrollReveal} ref={element} animate={controls} initial="hidden" >
            
            <Description>
                <p>
                     Đajakomerc d.o.o. Novi Travnik, s tradicijom dugom preko 20 godina u odkupu i prodaji 
                        šumskih plodova i jagodičastog voča. Zahvaljući kvaliteti i tradiciji  Đajakomerc je vodeća firma u odkupu i prodaji  šumskih plodova i jagodičastog voča  na području Općine Novi Travnik i šire.
                    Upravljanje trajnim i jedinstvenim vrijednostima na način njihovog prilagođavanja modernom okruženju, područje je na kojem Đajakomerc gradi svoju priču.
                </p>
            </Description>
            <ImageWhoWeAre>
            <img src={whoweare} alt="whoweare"/>
            </ImageWhoWeAre>
        </About>
    );
};

const ImageWhoWeAre = styled.div`
    flex: 1;
    overflow: hidden;
    img{
        width: 100%;
        height: 91vh;
        object-fit: cover;

        
    }
    @media(max-width: 1300px){
        img{
            width: 70%;
            height: 90%;
            margin-top: 1rem;
            margin-bottom: 1rem;

        }
      
}
    
`;


export default WhoWeAre;
