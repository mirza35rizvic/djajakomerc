import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
   @media(max-width: 1700px){
       font-size: 80%;
   }
   
    
}


body{
    background: white;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}

button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 2px solid #23d997;
    background: transparent;
    color: black;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    width: 50%;
    border-radius: 50px;
    padding: 2%;
    margin-top: 8%;
    text-decoration: none;
   
    &:hover{
        background-color: #23d997;
        color: white;

    }
}

Image{
    width: 100%;
    border: none;
    @media(max-width: 100px){
       max-width: 50%;
}
}

h2{
    font-weight: lighter;
    font-size: 4rem;
    color: black;
    text-decoration: none;
}

h3{
    
    color: black;
    text-decoration: none;
}

h4{
    font-weight: bold;
    color: black;
    text-decoration: none;
}

a{
    font-size: 1.1rem;
    text-decoration: none;
} 

span{
    font-weight: bold;
    color: #23d997;
    text-decoration: none;
}

p{
    padding: 3rem 0rem;
    color: black;
    font-size: 1.4rem;
    line-height: 150%;
    text-decoration: none;
}

`

export default GlobalStyle;