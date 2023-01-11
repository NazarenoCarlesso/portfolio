import Projects from './components/Projects'
import { certifications, projects } from './components/data'
import Certifications from './components/Certifications'
import { createTheme, Grid, ThemeProvider, Typography } from '@mui/material'
import Nav from './components/Nav'
import About from './components/About'

export default function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        color: '#252525',
      },
    },
  })

  return (
    <ThemeProvider theme={theme} >
      <Nav />
      <Grid container direction="column" justifyContent="center" alignItems="center" >
        <Typography variant="h2" >
          This is my <i>Portfolio</i>
        </Typography>
        <About />
        <Projects projects={projects} />
        <Certifications certifications={certifications} />
      </Grid>
    </ThemeProvider>
  )
}