import React from "react";
import styled from "styled-components";
import Navbar from "./NavBar";
import Image4 from "./banner.png";
import Card from "./Card";

function Home()
{
    return (
        <Container>
        <Navbar />
         <Banner>
             <img src={Image4} alt=""></img>
         </Banner>
         <Main>
            <Card  image={"https://m.media-amazon.com/images/I/81OC0ojxH6L._AC_UY218_.jpg"} price={13999} rating={3} title={"Samsung Galaxy M32 Prime Edition (Light Blue, 6GB RAM, 128GB)"}/>
            <Card  image={"https://m.media-amazon.com/images/I/61VbKHdE0rL._AC_UY218_.jpg"} price={15299} rating={3} title={"iQOO Z6 Lite 5G (Stellar Green, 6GB RAM, 128GB Storage) | World's First Snapdr..."}/>
            <Card  image={"https://m.media-amazon.com/images/I/810KHyQ4WcL._AC_UY218_.jpg"} price={6300} rating={3} title={"Redmi 9A Sport (Coral Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25..."}/>
            <Card image={"https://m.media-amazon.com/images/I/41BnHjRP0ZS._SX300_SY300_QL70_FMwebp_.jpg"} price={15999} rating={3} title={"OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage) with No Cost EMI/Additional Exchange Offers"}/>
         </Main>
        </Container>
    );
}

const Container=styled.div`
 width:100%;
 margin-top:none;
 background-color:rgb(234,237,237);
`; 

const Banner=styled.div`
  width:100%;
  flex:1;
  margin-left:none;
  img{
    width:100%;
    height:300px;
    -webkit-mask-image:linear-gradient(to bottom , 
        rgba(0,0,0,2),
        rgba(0,0,0,0.95),
        rgba(0,0,0,0.85),
        rgba(0,0,0,0.75),
        rgba(0,0,0,0.55),
        rgba(0,0,0,0)
        );
  }

`;

const Main =styled.div`
display:grid;
justify-content:center;
place-items:center;
width:100%;
grid-auto-rows: 430px 430px;
grid-template-columns:repeat(4,300px);
grid-gap:20px;
@media only screen and (max-width:767px){
    grid-template-columns:repeat(2,50%);
    grid-gap:0px;
}

@media only screen and (min-width:767px)
{
    margin-top:-20px;
    padding:10px 0px;
}
`;
export default Home;
