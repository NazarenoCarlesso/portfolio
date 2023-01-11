import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import Certification from './Certification'

export default function Certifications({ certifications }) {
    return (
        <Paper sx={{ width: "80vw", margin: "10px", padding: "10px" }} >
            <Typography variant="h4" >
                Certifications
            </Typography>
            <Grid container direction="row" >
                {
                    certifications.map(c => <Certification
                        title={c.title}
                        image={c.image}
                        platform={c.platform}
                        duration={c.duration}
                        link={c.link}
                    />)
                }
            </Grid>
        </Paper>
    )
}