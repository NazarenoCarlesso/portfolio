import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Project from './Project'

export default function Projects({ projects }) {
    return (
        <Box sx={{ width: "80vw", margin: "10px", padding: "10px" }} >
            <Typography variant="h4" sx={{ marginBottom: "12px", paddingLeft: "12px", borderLeft: "4px solid chartreuse", fontStyle: "italic" }} >
                Projects
            </Typography>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >
                {
                    projects.map((p, i) => <Project
                        key={i}
                        title={p.title}
                        description={p.description}
                        gif={p.gif}
                        techs={p.techs}
                        deploy={p.deploy}
                        repository={p.repository}
                    />)
                }
            </Grid>
        </Box>
    )
}
