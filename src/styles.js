
import styled from "styled-components";
import {motion} from 'framer-motion';

//Styled Components
export const About = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 10rem;
    color: white;
    
    @media(max-width: 1300px){
        display: block;
        padding: 2rem 2rem;
        text-align: center;
}
    
`;

export const Description = styled.div`
    flex: 1;
    padding-right: 0;
    h2{
        font-weight: lighter;
    }
    @media (max-width: 1300px){
        padding: 1rem 1rem;
        margin-bottom: 20rem; 
        margin-left: 1rem;
        margin-right: 2rem;
        h2{
            padding: 1rem 1rem;
        }
        
        button { 
            margin: 2rem 0rem 3rem 0rem;
            width: 12rem;
            font-size: 2rem;
            height: 7rem;
        }
}
  
`;

export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img{
        width: 100%;
        height: 85vh;
        object-fit: cover;
    }
    @media(max-width: 1300px){
        img{
            width: 50%;
            height: 80%;
            margin-top: 1rem;
            margin-bottom: 15rem;
        }
      
}
`;

export const Hide = styled.div`
    overflow: hidden;
`;
