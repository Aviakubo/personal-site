import React from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
  return (

    <FooterContainer id="contact">
      <ContactMe>Contact me</ContactMe>
      <FooterLinks>
        <Icon target="blank" href="mailto:dbov93@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></Icon>
        <Icon target="blank" href="https://www.linkedin.com/in/dannyyacks/"><FontAwesomeIcon icon={faLinkedin} /></Icon>
        <Icon target="blank" href="https://github.com/Aviakubo"><FontAwesomeIcon icon={faGithub} /></Icon>
      </FooterLinks>

      <Contact>I'm currently available to work</Contact>
      <Copy>	&copy; David Yakubov 2021</Copy>
    </FooterContainer>

  )
}
const Copy = styled.div`
font-family: 'Roboto Condensed', sans-serif;
display: flex;
justify-content: center;
`
const ContactMe = styled.div`
font-size: 30px;
display: flex;
justify-content: center;
margin: 30px 20px 10px;
color: ${props => props.theme.headline};
`
const Icon = styled.a`
font-size: 40px;
color: white;
margin: 0 30px 20px;
transition: transform 150ms;
        &:hover{
        transform: scale(1.55);
        }
`
const FooterLinks = styled.div`
margin: 20px;
display: flex;
justify-content: center;
`
const Contact = styled.div`
font-size: 17px;
padding: 0 50px 30px;
font-family: 'Roboto Condensed', sans-serif;
font-weight: bold;
`
const FooterContainer = styled.div`
background-color: ${props => props.theme.footer};
color: white;
height: 300px;
display: flex;
flex-direction: column;
`

export default Footer