import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Certification({ title, image, platform, duration, link }) {
    return (
        <Card sx={{ width: 200, height: 240, margin: "12px", border: "3px solid #b8ff70", boxShadow: "0px 0px 16px 4px #7fff004f" }} >
            <CardActionArea href={link} target="_blank" rel="noopener noreferrer">
                <CardMedia image={image} sx={{ height: 140 }} />
            </CardActionArea>
            <CardContent sx={{ padding: "12px", height: "76px" }} >
                <Typography variant="subtitle1" title={title} sx={{ maxHeight: "56px", overflowY: "hidden", height: "100%" }} >
                    {title}
                </Typography>
                <Grid container justifyContent="space-between" direction="row" >
                    <Typography variant="subtitle2" color="primary" >
                        {platform}
                    </Typography>
                    {duration
                        ? <Typography variant="subtitle2" color="primary" >
                            {duration} hs
                        </Typography>
                        : null}
                </Grid>
            </CardContent>
        </Card>
    )
}