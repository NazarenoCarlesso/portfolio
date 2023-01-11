import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import Project from './Project'

export default function Projects({ projects }) {
    return (
        <Paper sx={{ width: "80vw", margin: "10px", padding: "10px" }} >
            <Typography variant="h4" >
                Projects
            </Typography>
            <Grid container direction="row" >
                {
                    projects.map(p => <Project
                        title={p.title}
                        description={p.description}
                        gif={p.gif}
                        techs={p.techs}
                        deploy={p.deploy}
                        repository={p.repository}
                    />)
                }
            </Grid>
        </Paper>
    )
}
