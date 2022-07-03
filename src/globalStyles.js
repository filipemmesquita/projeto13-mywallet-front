import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
    background-color: #8C11BE;
    height: 100%;
}
input{
width: 326px;
height: 58px;
background: #FFFFFF;
border-radius: 5px;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20px;
padding:15px;
box-sizing:border-box;
border-style: none;
margin-bottom:13px;
}
button{
width: 326px;
height: 46px;
background: #A328D6;
border-radius: 5px;
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 20px;
border-style: none;
color: #FFFFFF;
margin-bottom: 35px;
}
h1{
font-family: 'Saira Stencil One';
font-style: normal;
font-weight: 400;
font-size: 32px;
color: #FFFFFF;
margin-bottom: 24px;
}
h2{
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 26px;
color: #FFFFFF;
}
`;



export default GlobalStyle;