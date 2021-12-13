import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from './components.styles/themes'
import { BrowserRouter } from 'react-router-dom'
import useLocalStorage from "use-local-storage"
import SwitchButton from "react-switch"

import NavBar from './components/NavBar'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Main />
        <NavBar>
          <SwitchButton offColor="#D3D3D3" onColor="#ba93fb" activeBoxShadow="0 3 2px 3px #FFFFFF" onChange={themeToggler} checked={theme === 'dark'} />
        </NavBar>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}


export default App;

