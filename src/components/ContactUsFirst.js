import React from 'react';
import Contact1 from '../img/contact1.jpg';
import styled from 'styled-components';

const ContactUs = () => {
    return(
        <ContactUss>
            <Image>
                <img src={Contact1} alt="Contact"/>
            </Image>
        
        </ContactUss>
 );
    };
   
    


    const ContactUss = styled.div`
    min-height: 50vh;
    display: flex;
    align-items: top;
    justify-content: center;
    margin-top: 0px;
    margin-bottom: 1px;
    padding:  1rem;
    background: white;
    height: 80vh;
    font-family: 'Inter', sans-serif;
    @media(max-width: 1300px){
        height: 40vh;
        min-height: 30vh;
        margin: 1rem 1rem 5rem 1rem;

    }
   `; 
    const Image = styled.div`
    flex: 1;
    overflow: hidden;
    margin-top: 0px;
    img{
        width: 100%;
        height: 53vh;
        object-fit: cover;
        margin-top: 2rem;

    }

    @media(max-width: 1300px){
        img{
            width: 90%;
            height: 50%;
            margin-top: 1rem;
            margin-bottom: 10rem;

        }
    }
    
`;
export default ContactUs;