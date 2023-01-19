import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import { badges } from './data'

export default function Project({ title, description, gif, techs, deploy, repository }) {
    return (
        <Card sx={{ width: 500, height: 360, margin: "12px", border: "3px solid #b8ff70", boxShadow: "0px 0px 16px 4px #7fff004f" }} >
            <CardActionArea href={deploy} >
                <CardMedia image={gif} sx={{ height: 227 }} />
            </CardActionArea>
            <CardContent sx={{ padding: "12px", height: "100px" }} >
                <Typography variant="h5" >
                    {title}
                </Typography>
                <Typography variant="body2" >
                    {description}
                </Typography>
                {
                    techs.map(t => <Box component="img" src={badges[t]} alt={t} sx={{ margin: "1px" }} />)
                }
            </CardContent>
            <CardActions>
                <Button variant="contained" href={repository} size="small" sx={{ position: "absolute", marginBottom: "678px", marginLeft: "424px" }} >
                    <GitHubIcon />
                </Button>
            </CardActions>
        </Card>
    )
}