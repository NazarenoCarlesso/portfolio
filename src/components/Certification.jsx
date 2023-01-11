import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function Certification({ title, image, platform, duration, link }) {
    return (
        <Card sx={{ maxWidth: 345 }} >
            <CardMedia image={image} sx={{ height: 140 }} />
            <CardContent>
                <Typography variant="h5" >
                    {title}
                </Typography>
                <Typography variant="body2" >
                    {platform}
                </Typography>
                <Typography variant="body2" >
                    {duration} hs
                </Typography>
            </CardContent>
            <CardActions>
                <Button href={link} size="small" >
                    Certificate
                </Button>
            </CardActions>
        </Card>
    )
}