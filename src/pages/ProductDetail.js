import React, {useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ProductState} from '../productState';
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";



const ProductDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [products, setProducts] = useState(ProductState);
    const [product, setProduct] = useState(null);



    //UseEffect
    useEffect(() =>{
        const currentProduct = products.filter((stateProduct) => stateProduct.url === url)
        setProduct(currentProduct[0])
    }, [products, url]);
    
 return(
    <>
    {product &&( 
    <Details 
    className="shadow"
    exit="exit"  
    variants={pageAnimation} 
    initial="hidden"  
    animate="show">
        <Headline>
            <h2>{product.title}</h2>
            <img src={product.mainImg} alt="mainImg"/>
            <h3>{product.title2}</h3>
            <h3>{product.description1}</h3>
            <h3>{product.description2}</h3>
        </Headline>
    </Details>
    )}
    </>
 );
};

const Details = styled(motion.div)`
        width: 100%;
        height:100%;
        min-height: 100vh;
        overflow-y: scroll;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        &::-webkit-scrollbar {
           width: 0.5rem;
        }
        &::-webkit-scrolbar-thumb {
           background-color: #ff7676;
        }
        &::-webkit-scrollbar-track {
           background: white;
    
           @media(max-width: 1300px){
               height: 100%;
        img{
            width: 70%;
            height: 90%;
            margin-top: 1rem;
            margin-bottom: 1rem;

        }
      
}

        }
    

`;
const Headline = styled.div`
    width: 100%;
    border-radius: 1rem;
    padding: 2rem 20rem;
    background: white;
    position: absolute;
    
   
    color: black;
    @media(max-width: 750px) {
        padding: 0rem 5px;
        
        margin-bottom: 3rem;
          
        }
    img{
        width: 100%;

    }
    h2{
        padding: 5rem 5rem;
        text-align: center;
        @media(max-width: 1300px){
        margin-top: 19rem;
        
        justify-content: center;
      
}
    }
    h3{
        
        text-align: center;
        color: black;
    }
`;

export default ProductDetail
