import React from 'react';
//Import Icons 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import{ faBblackTie, faPeopleCarry, medalSolid, } from "@fortawesome/fontawesome-svg-core";
import{ faPhone, faMapMarkedAlt, faEnvelope  } from "@fortawesome/free-solid-svg-icons"
//Styles
import styled from 'styled-components';



const ContactUsTheSecond = () => {
    return(
               <Cards>
                   <Card>
                       <Icon>
                            <FontAwesomeIcon className="phone" icon={faPhone}  />
                            <h3>Mobitel</h3>
                       </Icon>
                       <p>+387 62 678 586 </p>
                   </Card>
                   <Card>
                       <Icon>
                            <FontAwesomeIcon className="phone" icon={faEnvelope}  />
                            <h3>E-mail</h3>
                       </Icon>
                       <p>djajakomerc@gmail.com </p>
                   </Card>
                   <Card>
                       <Icon>
                            <FontAwesomeIcon className="phone" icon={faMapMarkedAlt}  />
                            <h3>Sjedište</h3>
                       </Icon>
                       <p>Omladinska bb, 72290 Novi Travnik, BiH </p>
                   </Card>
               </Cards>
           
       

    );
};

const Cards = styled.div`
display: grid;
grid-gap: 20px;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));    
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



export default ContactUsTheSecond;
