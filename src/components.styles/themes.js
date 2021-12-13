import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  dark: false,
  body: '#FFFFFF',
  text: '#0A0A0A',
  textHeaders: '#000000',
  nav: '#004a8d',
  headline: '#FFFFFF',
  subHeader: '#000000',
  aboutBackground: '#FFFFFF',
  projectsBackground: '#F2F2F2',
  website: '#004a8d',
  footer: '#004a8d',
  skills: '#F8F8F8',
  menu: '#FFFFFF',
  menuBackground: '#004a8d',
  link: '#004a8d'
}

export const darkTheme = {
  dark: true,
  body: '#1D1D1D',
  text: '#fff',
  textHeaders: '#ba93fb',
  nav: '#1D1D1D',
  headline: '#ba93fb',
  subHeader: '#ba93fb',
  aboutBackground: '#282828',
  projectsBackground: '#101010',
  website: '#616161',
  footer: '#1F1F1F',
  skills: '#1D1D1D',
  menu: '#ba93fb',
  menuBackground: '#282828',
  link: '#ba93fb'
}

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: ${props => props.theme.text};
}

a:hover {
  text-decoration: underline;
  color: ${props => props.theme.link};
}


html {
  scroll-behavior: smooth;

}
  html, body {
    margin: 0;
    font-family: 'Righteous', cursive;
    text-align: center;
  }
  body {
    min-height: 100vh;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
  }
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }


`