import styled from "styled-components";
import {motion} from 'framer-motion';

//Styled Components
export const About = styled(motion.div)`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 1rem;
    color: white;
   @media (max-width: 1300px) {
       display: grid;
       padding: 1rem 1rem;
       text-align: center;

       img{
           height: 100vh;
       }
      
   }
 
`;

export const Description = styled.div`
    flex: 1;
    padding-right: 0;
    h2{
        font-weight: lighter;
    }
    @media (max-width: 1300px) {
        margin-top: 5rem;
        padding: 0;
        height: 60vh;
        button{
            margin: 2rem 0rem 2rem 0rem;
        }
    }
  
    @media (max-width: 750px) {
        padding: 0;
        button{
            margin: 2rem 0rem 2rem 0rem;
        }
    }
  
        
`;

export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img{
        width: 100%;
        height: 10vh;
        object-fit: cover;
    }
    @media (max-width: 750px) {
        margin-bottom:  1rem;
       img{ 
           margin-top: 5rem;
           margin-bottom: 13rem;
           width: 80%;
           height: 40vh; 
        }
    }
`;

export const Hide = styled.div`
    overflow: hidden;
`;
