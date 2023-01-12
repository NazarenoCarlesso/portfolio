import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { badges } from './data'

export default function Project({ title, description, gif, techs, deploy, repository }) {
    return (
        <Card sx={{ width: 500, height: 400, margin: "12px", border: "3px solid #b8ff70", boxShadow: "0px 0px 16px 4px #7fff004f" }} >
            <CardMedia image={gif} sx={{ height: 140 }} />
            <CardContent>
                <Typography variant="h5" >
                    {title}
                </Typography>
                <Typography variant="body2" >
                    {description}
                </Typography>
                {
                    techs.map(t => <Box component="img" src={badges[t]} alt={t} />)
                }
            </CardContent>
            <CardActions>
                <Button href={deploy} size="small" >
                    Deploy
                </Button>
                <Button href={repository} size="small" >
                    Repository
                </Button>
            </CardActions>
        </Card>
    )
}