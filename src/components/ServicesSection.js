import React from 'react';
//Import Icons 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{  faUserTie } from "@fortawesome/free-solid-svg-icons"
import{  faPeopleCarry } from "@fortawesome/free-solid-svg-icons"
import{  faMedal } from "@fortawesome/free-solid-svg-icons"

//Styles
import styled from 'styled-components';
import { About, Description } from "../styles";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";


const ServicesSection = () => {
    const [element, controls] = useScroll();
    return(
        <Services variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <Description>
                    <h2>   Šta možete očekivati od nas</h2>
                <Cards>
                    <Card>
                    <Icon>
                            <FontAwesomeIcon className="tie" icon={ faUserTie}  />
                            <h3>Profesionalnost</h3>
                       </Icon>
                       <p>U kooperaciji sa nama mi  vam pružamo profesionalnost
                           od momenta dikusije do momenta implementacije dogovorenog.</p>
                    </Card>
                    <Card>
                    <Icon>
                            <FontAwesomeIcon className="peopleCarry" icon={faPeopleCarry}  />
                            <h3>Zadovoljstvo kupca</h3>
                       </Icon>
                       <p>Glavna karakterisitka profesionalizma jeste zadovoljstvo kupca, mi se  truditi
                           da završimo naše dužnosti na vrijeme kako je i planirano </p>
                    </Card>
                    <Card>
                    <Icon>
                            <FontAwesomeIcon className="medal" icon={faMedal}  />
                            <h3>Visoka kvaliteta</h3>
                       </Icon>
                       <p>Jedan od ciljeva našeg rada  postići visok kvalitet naših proizvoda.
                            </p>
                    </Card>
                </Cards>
            </Description>
        </Services>
    )
}



const Services = styled(About)`
    display: flex;
    h2 {
        padding-bottom: 10rem;
        margin-top: 1rem;
        display: flex;
        -webkit-box-pack: center;
        justify-content: space-around;
        align-items: center;
        letter-spacing: 2px;
        

    }   
 
   
`;
const Cards = styled.div`
display: grid;
grid-gap: 20px;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

@media(max-width: 1300px){
       justify-content: center;
       margin: 0rem ;
}
`;


const Card = styled.div`
display: grid;
grid-template-columns: center;
background: white;
padding: 10px;
border: 1px solid white;
text-align: center;
box-shadow: 0 0 4px rgba(0, 0, 0,0.1); 
`;   

const Icon = styled.div`
`;


export default ServicesSection;
