import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function Nav() {
    return (
        <Box sx={{ flexGrow: 1, maxWidth: "100%" }}>
            <AppBar position="fixed" sx={{ backgroundColor: "#080808eb", backgroundImage: "none" }} >
                <Toolbar>
                    <Grid container direction="row" alignItems="start">
                        <Typography variant="h6" sx={{ fontStyle: "italic" }} >
                            Nazareno Carlesso
                        </Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box sx={{ minHeight: "100px" }} />
        </Box>
    )
}