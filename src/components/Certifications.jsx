import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Certification from './Certification'

export default function Certifications({ certifications }) {
    return (
        <Box sx={{ width: "80vw", margin: "10px", padding: "10px" }} >
            <Typography variant="h4" sx={{ marginBottom: "12px", paddingLeft: "12px", borderLeft: "4px solid chartreuse", fontStyle: "italic" }} >
                Certifications
            </Typography>
            <Grid container direction="row" justifyContent="center" alignItems="center" >
                {
                    certifications.map((c, i) => <Certification
                        key={i}
                        title={c.title}
                        image={c.image}
                        platform={c.platform}
                        duration={c.duration}
                        link={c.link}
                    />)
                }
            </Grid>
        </Box>
    )
}