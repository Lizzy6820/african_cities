import React from 'react'
import {Facebook, Instagram, Pinterest, Twitter} from '@material-ui/icons';
import styled from "styled-components";
import logo from '../../imagez/logo.jpg';
import { mobile } from '../../responsive';

const Container = styled.div`
    display: flex;
    background-color: #D3D3D3;
    ${mobile({ flexDirection:'column' })}
   
  `;
  
  const Left = styled.div`
    flex: 0.5;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-left: 10px;
    ${mobile({marginLeft:'50px', width:'55%',padding:'10px'})}
  `;
  

  const Desc = styled.p`
    margin: 10px 10px;
    ${mobile({flexDirection:'column', width:'100%'})}
  `;
  
  const SocialContainer = styled.div`
    display: flex;
 margin-left: 20rem;
    ${mobile({marginLeft:'8rem'})}
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  
  `;
 
  const Title = styled.h3`
    margin: 0px;
  `;
  const Title1 = styled.h3`
  margin: 0 px;
`;

  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ width:'100%',padding:'2px'})}
  
  `;

const Footer = () => {
  return (
    <Container id="contact">
    <Left>
    <Title>About Us</Title>
    <img src={logo} alt="African cities" height="50%" width="30%" style={{borderRadius: '50%', marginLeft:'10rem'}}/>
      <Desc>
       Our mission is to provide a fun safe space where everyone can share
       their best experiences while living or visiting a city in Africa.
      </Desc>
    </Left>

    <Right>
    <Title1>Social</Title1>
      <SocialContainer>
        <SocialIcon color= 'd4a437'>
          <Facebook />
        </SocialIcon>
        <SocialIcon color= 'd4a437'>
          <Instagram />
        </SocialIcon>
        <SocialIcon color='d4a437'>
          <Twitter />
        </SocialIcon>
        <SocialIcon color= 'd4a437'>
          <Pinterest />
        </SocialIcon>
      </SocialContainer>
    </Right>

  </Container>
  )
}

export default Footer