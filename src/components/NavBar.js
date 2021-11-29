import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { Container as _Container } from './Container'
import { device } from '../components.styles/sizes'
import Menu from '../images/menu.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const NavBar = ({ children }) => {

  const [menuOpen, setMenuOpen] = useState(false)
  const drawerRef = useRef(null);

  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = event => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      setMenuOpen(false)
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  const handleMenuLink = () => {
    setMenuOpen(false)
  }

  return (
    <Root>
      <Container>
        <ThemeSwitch>
          <SwitchDiv>
            {children}
          </SwitchDiv>
          <>Dark-Mode</>
        </ThemeSwitch>


        <MenuButton onClick={() => setMenuOpen(true)}>
          <ImgMenu src={Menu} alt="Menu" />
        </MenuButton>
        <MenuBackground menuOpen={menuOpen}></MenuBackground>
        <NavLinksDiv ref={drawerRef} menuOpen={menuOpen}>
          <Close>
            <span onClick={() => setMenuOpen(false)} ><FontAwesomeIcon icon={faTimes} /></span>
          </Close>
          <NavbarItem onClick={handleMenuLink} href="#aboutme">About</NavbarItem>
          <NavbarItem onClick={handleMenuLink} href="#skills" >Skills</NavbarItem>
          <NavbarItem onClick={handleMenuLink} href="#projects">Projects</NavbarItem>
          <NavbarItem onClick={handleMenuLink} href="#contact">Contact</NavbarItem>
        </NavLinksDiv>
      </Container>
    </Root>
  )
}
const Close = styled.div`
font-size: 20px;
margin-left: 250px;
color: ${props => props.theme.headline};
cursor: pointer;
@media ${device.desktop} {
    display: none;
  }
`
const MenuBackground = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(214, 214, 214, 0.7);
  z-index: 1000;
  opacity: ${props => props.menuOpen ? 1 : 0};
  pointer-events: none;
  transition: opacity 0.5s;

  @media ${device.desktop} {
    display: none;
  }
`

const ImgMenu = styled.img`
width: 25px;
background-color: ${props => props.theme.menu};
@media ${device.desktop} {
    display: none;
  }
`

const MenuButton = styled.button`
margin-top: 15px;
height: 40px;
background-color: ${props => props.theme.menu};
border-radius: 2px;
    outline: 0 none;
    border: 0 none;
    display: flex;
    align-items: center;
    @media ${device.desktop} {
    display: none;
  }
    
`
const NavbarItem = styled.a`
  margin: 5px;
  font-size: 22px;
  text-decoration: none;
  color: white;
  position: relative;
  @media ${device.desktop} {
    margin: 0 25px 0;
    
    &::after {
      position: absolute;
      content: "";
      width: 0%;
      height: 4px;
      background-color: whitesmoke;
      left: 50%;
      bottom: -10px;
      transition: all 0.1s ease-in-out;
    }
    &:hover::after{
      left: 0;
      width: 100%;
    }
  }
`
const NavLinksDiv = styled.div`
display: flex;
align-items: center;
flex-direction: row;

border-radius: 5px;


@media ${device.smallerThanDesktop} {
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  z-index: 1000;
  padding: 30px 40px 80px 20px;
  transition: transform .5s;
  background-color: ${props => props.theme.menuBackground};
  transform: ${props => props.menuOpen ? 'translateX(0%)' : 'translateX(100%)'};
  flex-direction: column;
}

@media ${device.desktop} {}
`
const Container = styled(_Container)`
display: flex;
flex-direction: row;
justify-content: space-between;
`
const Root = styled.div`
background-color: ${props => props.theme.nav};
color: white;
position: fixed;
top: 0;
right: 0;
left: 0;
transform: translate(0,0);
/* 
@media ${device.desktop} {
  position: static;
} */
`
const SwitchDiv = styled.div`
 
`
const ThemeSwitch = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    padding: 10px 0 10px;
    
`
export default NavBar