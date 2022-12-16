import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import { Link } from 'react-router-dom'

const Wrapper = styled.div``;
const Slider = styled.div`
     display: flex;
     height: ${props=>props.type==="sec-slide"?350:300}px;
     overflow-x: auto; 
      scrollbar-width: none; // for firefox
      -ms-overflow-style: none; //for Edge
     &::-webkit-scrollbar{
       display: none;
     }
     border-bottom: 1px solid black;
     ${mobile({
        height: "190px",
     })}
`;
const Item= styled.div`
    min-width: ${props=>props.type==="sec"?436:400}px ;
    height: 100%;
    display: flex;
    border-left: 1px solid black;
    position: ${props=>props.type==="sec"?"relative":"none"};
    ${mobile({minWidth:"228px"})}
`;
const ItemTitle= styled.div`
   width: 100px;
   height: 100%;
   position : relative ;
   overflow: hidden;
`;
const Title= styled.h3`
    position: absolute;
    transform: rotate(-90deg);
    transform-origin: bottom left;
    left: 100%;
    bottom: 0px;
    padding: 5px;
    width: 300px;
    color: black;
    font-size: 23px;
    font-weight: bold;
`;
const Image= styled.img`
    width: 300px;
    height: 100%;
`;
const Para = styled.p`
   font-size:70px;
   margin:30px;
   font-weight:bold;
   line-height:0.8;
   letter-spacing:-2px;
   ${mobile({fontSize:"32px",margin:"5px"})}
`;
const SecTitle = styled.h4`
   font-size: 22px;
   margin: 30px 0 0 30px;
   ${
      mobile({
         fontSize: "16px",
         margin: "5px 0 0 5px"
      })
   }
`;
const SecImage = styled.img`
   max-width: 100%;
   border: 0px;
   position: absolute;
   right: 0;
   bottom: 0;
   width: 363px;
   height: 262px;
   ${mobile({
      width: "196px",
      height: "136px"
   })}
`;

const Slide = () => {
  return (
    <> 
    <Wrapper>
       <Slider style={{borderTop:"1px solid black"}}>
          <Link to="#">
        <Item>
           <ItemTitle>
              <Title>CRISP MONOCHROME</Title>
           </ItemTitle>
           <Image src="https://cdna.lystit.com/cms/D322_B0_BC_BC_75_4_E5_B_9858_1_C26_E30_EC_7_DE_5706927b9d.png" alt='CRISP MONOCHROME'/>
        </Item>
      </Link>
      <Link to="#">
        <Item>
           <ItemTitle>
              <Title>ONE STEP AHEAD</Title>
           </ItemTitle>
           <Image src="https://cdna.lystit.com/cms/3c3d3937_f1dd_427c_ae5f_8a9cbb0788ee_45b3b02667.png" alt='ONE STEP AHEAD'/>
        </Item>
      </Link>
      <Link to="#">
        <Item>
           <ItemTitle>
              <Title>REFINED GLAMOUR</Title>
           </ItemTitle>
           <Image src="https://cdna.lystit.com/cms/e26b4a3a_f41f_4211_9d06_3f313c694247_1295b99158.png" alt='REFINED GLAMOUR'/>
        </Item>
      </Link>
      <Link to="#">
        <Item>
           <ItemTitle>
              <Title>NEW CLASSICS</Title>
           </ItemTitle>
           <Image src="https://cdna.lystit.com/cms/2ef642f2_4104_43b7_8717_e2cd74581b19_4c6570163e.png" alt='NEW CLASSICS'/>
        </Item>
      </Link>
      <Link to="#">
        <Item>
           <ItemTitle>
              <Title>30 UNDER 300</Title>
           </ItemTitle>
           <Image src="https://cdna.lystit.com/cms/0d04b456_fa24_42aa_9d35_c7008854e970_e4c36405b2.png" alt='30 UNDER 300'/>
        </Item>
      </Link>
    </Slider>
    <Slider >
    <Link to="#">
        <Item>
           <ItemTitle>
              <Title>ITALIST: SHOP DESIGNER BRANDS & SAVE UP TO 70%<sup>*</sup></Title>
           </ItemTitle>
           <Image src="https://cdna.lystit.com/cms/Top_Lyst5th_U_Sand_IT_600x600_s_594ad2e245.jpg" alt='ITALIST'/>
        </Item>
      </Link>
      <Link to="#">
        <Item>
           <ItemTitle>
              <Title>DISCOVER THE ICONIC MYEA BAG - EMPORIO ARMANI</Title>
           </ItemTitle>
           <Image src="https://cdna.lystit.com/cms/EA_7_Gift_Finder_4f3e2522b6.jpg" alt="MYEA BAG"/>
        </Item>
      </Link>
      <Link to="#">
        <Item>
           <ItemTitle>
              <Title>MICHAEL KORS: YOUR FAVORITE STYLES ARE WAITING AND ON SALE </Title>
           </ItemTitle>
           <Image src="https://cdna.lystit.com/cms/HP_Top_Lyst_Banner_600x600_6bb8c2a582.jpg" alt='MICHAEL KORS'/>
        </Item>
      </Link>
      <Link to="#">
        <Item>
           <ItemTitle>
              <Title>THE MULBERRY SOFTIE - A BAG MADE TO BE SQUEEZED</Title>
           </ItemTitle>
           <Image src="https://cdna.lystit.com/cms/LYST_600x600_2_1_43b30fb898.jpg" alt='MULBERRY SOFTIE'/>
        </Item>
      </Link>
      <Link to="#">
        <Item>
           <ItemTitle>
              <Title>ENJOY 30% OFF SELECTED MUST-HAVE PIECES ON 24S</Title>
           </ItemTitle>
           <Image src="https://cdna.lystit.com/cms/600x600_Affiliate_Prada_Holiday_BU_1_1_e41fdd0245.jpg" alt='24S'/>
        </Item>
      </Link>
    </Slider>
 </Wrapper>
 <Wrapper style={{marginTop:"10%"}}>
     <Slider type="sec-slide" style={{borderTop: "1px solid black"}}>
        <Item type="sec" style={{backgroundColor:"#f5f4f2", cursor:"e-resize"}}>
           <Para>BREAKOUT BRANDS</Para>
        </Item>
        <Item type="sec" >
             <SecTitle>PATOU</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/balenciaga_b4eec10d67.jpg" alt="Patou"/>
        </Item>
        <Item type="sec" >
             <SecTitle>GUCCI</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/vivienne_westwood_f7d712c58e.jpg" alt="GUCCI"/>
        </Item>
        <Item type="sec" >
             <SecTitle>SAINT LAURENT</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/hoka_one_one_7c61e26c5a.jpg" alt="SAINT LAURENT"/>
        </Item>
        <Item type="sec" >
             <SecTitle>OFF-WHITE C/O VIRGIL ABLOH</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/burberry_6d39746bc8.jpg" alt="VIRGIL ABLOH"/>
        </Item>
        <Item type="sec" >
             <SecTitle>BALENCIAGA</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/alexander_mcqueen_baedc5140b.jpg" alt="BALENCIAGA"/>
        </Item>
        <Item type="sec" >
             <SecTitle>NIKE</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/golden_goose_59e4b8afbb.jpg" alt="NIKE"/>
        </Item>
        <Item type="sec" >
             <SecTitle>DOLCE & GABBANA</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/tory_burch_c2694d7614.jpg" alt="DOLCE & GABBANA"/>
        </Item>
        <Item type="sec" >
             <SecTitle>MONOCLER</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/marc_jacobs_29e9988630.jpg" alt="MONOCLER"/>
        </Item>
        <Item type="sec" >
             <SecTitle>VALENTINO</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/moncler_627804ea66.jpeg" alt="VALENTINO"/>
        </Item>
     </Slider>
     <Slider type="sec-slide">

        <Item type="sec" >
             <SecTitle>MEN'S FERRAGAMO BELTS</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/ferragamo_belt_6f771dc38c.jpg" alt="Balenciaga Earrings"/>
        </Item>
        <Item type="sec" >
             <SecTitle>ALEXANDER MCQUEEN SNEAKERS</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/mcqueen_sneakers_8bed6ead41.jpg" alt="Simone Rocha Earrings"/>
        </Item>
        <Item type="sec" style={{backgroundColor:"#f5f4f2", cursor:"e-resize"}}>
           <Para >TRENDING NOW</Para>
        </Item>
        <Item type="sec" >
             <SecTitle>OFF-WHITE C/O VIRGIL ALBOH SANDALS</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/gucci_scarf_fe36f0efcf.jpg" alt="Alboh Sandals"/>
        </Item>
        <Item type="sec" >
             <SecTitle>AMIRI JEANS</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/canada_goose_jacket_8ef1b21a01.jpg" alt="Amiri Jeans"/>
        </Item>
        <Item type="sec" >
             <SecTitle>FENDI JUMPSUITS</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/mou_boots_b752d8b2d3.jpg" alt="Fendi Jumpsuits"/>
        </Item>
        <Item type="sec" >
             <SecTitle>GUCCI SUITS</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/coach_boots_501890e9f6.jpg" alt="Gucci Suits"/>
        </Item>

     </Slider>
     <Slider type="sec-slide" >
        
        <Item type="sec" >
             <SecTitle>GUCCI WALLETS AND CARDHOLDERS</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/gucci_wallet_efb3e00367.jpg" alt="GUCCI WALLETS AND CARDHOLDERS"/>
        </Item>
        <Item type="sec" style={{backgroundColor:"#f5f4f2", cursor:"e-resize"}}>
           <Para>HOT RIGHT NOW</Para>
        </Item>
        <Item type="sec" >
             <SecTitle>CANALI COATS</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/designer_category_mens_canali_coats_fcd56d8791.jpeg" alt="Canali Coats"/>
        </Item>
        <Item type="sec" >
             <SecTitle>CAMILLA DRESSES</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/mackage_coat_c28797a0bf.jpg" alt="Camilla Dresses"/>
        </Item>
        <Item type="sec" >
             <SecTitle>CHANEL SHOULDER BAGS</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/gucci_boots_b1ff8d0345.jpg" alt="Chanel Shoulder Bags"/>
        </Item>
        <Item type="sec" >
             <SecTitle>BALENCIAGA BOOTS</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/prada_boots_6233e75fa8.jpg" alt="Balenciaga Shoulder Bags"/>
        </Item>
        <Item type="sec" >
             <SecTitle>GIORGIO ARMANI SHIRTS</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/burberry_shirt_bfcb721a9f.jpg" alt="Giorgio Armani Sunglasses"/>
        </Item>

     </Slider>
 </Wrapper>
 </> 
  )
}

export default Slide