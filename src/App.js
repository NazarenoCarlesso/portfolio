import Projects from './components/Projects'
import { certifications, projects } from './data'
import Certifications from './components/Certifications'
import { createTheme, Grid, ThemeProvider } from '@mui/material'
import Nav from './components/Nav'
import About from './components/About'

export default function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#7fff00',
      },
    },
    typography: {
      fontFamily: 'system-ui',
    },
  })

  return (
    <ThemeProvider theme={theme} >
      <Nav />
      <Grid container direction="column" justifyContent="center" alignItems="center" >
        <About />
        <Projects projects={projects} />
        <Certifications certifications={certifications} />
      </Grid>
    </ThemeProvider>
  )
}