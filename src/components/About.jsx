import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export default function About() {
    return (
        <Paper sx={{ width: "80vw", margin: "10px", padding: "10px" }} >
            <Grid container direction="row" justifyContent="center" alignItems="center" >
                <Box sx={{ width: "500px" }} >
                    <Typography variant="h3" >
                        Nazareno Carlesso
                    </Typography>
                </Box>
                <Paper sx={{ width: "500px" }} >
                </Paper>
            </Grid>
        </Paper>
    )
}