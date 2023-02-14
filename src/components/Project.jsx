import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { badges } from '../data'

export default function Project({ title, description, gif, techs, deploy, repository }) {
    return (
        <Card sx={{ width: 500, margin: "12px", border: "3px solid #b8ff70", boxShadow: "0px 0px 16px 4px #7fff004f" }} >
            <CardActionArea href={deploy} target="_blank" rel="noopener noreferrer">
                <CardMedia image={gif} sx={{ height: 227 }} />
            </CardActionArea>
            <CardContent sx={{ padding: "10px" }} >
                <Typography variant="h5" >
                    {title}
                </Typography>
                <Typography variant="body2" >
                    {description}
                </Typography>
                {
                    techs.map((t, i) => <Box key={i} component="img" src={badges[t]} alt={t} sx={{ margin: "1px" }} />)
                }
            </CardContent>
            <CardActions sx={{ padding: 0 }}>
            </CardActions>
        </Card>
    )
}