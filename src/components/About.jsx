import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export default function About() {
    return (
        <Box sx={{ width: "80vw", margin: "10px", padding: "10px" }} >
            <Grid container direction="row" justifyContent="center" alignItems="center" >
                <Box sx={{ width: "500px" }} >
                    <Typography variant="h6" sx={{ fontWeight: 300 }} >
                        HEY! 👋🏻 NICE TO SEE YOU, I'M
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 600 }} >
                        Nazareno Carlesso
                    </Typography>
                    <Typography variant="h5" sx={{ color: "chartreuse", letterSpacing: "5px", wordSpacing: "10px", lineHeight: 2 }} >
                        FULLSTACK DEVELOPER 👨🏻‍💻
                    </Typography>
                    <Typography variant="span" >
                        from  Córdoba, Argentina
                    </Typography>
                    <Box>
                        <Button variant="contained" size="large" sx={{ borderRadius: "1.5rem", marginTop: "16px" }} >
                            Contact me
                        </Button>
                    </Box>
                </Box>
                <Paper sx={{ backgroundColor: "#7fff00a6", rotate: "8deg" }} >
                    <Paper sx={{ backgroundColor: "#7fff00e3", rotate: "-4deg" }} >
                        <Box
                            component="img"
                            src="https://avatars.githubusercontent.com/u/95937325?v=4"
                            sx={{
                                width: "254px",
                                height: "254px",
                                border: "3px solid #b8ff70",
                                boxShadow: "0px 0px 16px 4px #7fff004f",
                                rotate: "-4deg"
                            }}
                        />
                    </Paper>
                </Paper>
            </Grid>
        </Box>
    )
}