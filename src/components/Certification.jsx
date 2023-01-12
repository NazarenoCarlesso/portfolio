import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import React from 'react'

export default function Certification({ title, image, platform, duration, link }) {
    return (
        <Card sx={{ width: 200, height: 240, margin: "12px", border: "3px solid #b8ff70", boxShadow: "0px 0px 16px 4px #7fff004f" }} >
            <CardMedia image={image} sx={{ height: 140 }} />
            <CardContent>
                <Typography variant="subtitle1" sx={{ maxHeight: "56px", overflowY: "hidden" }} >
                    {title}
                </Typography>
                <Grid container justifyContent="space-between" direction="row" >
                    <Typography variant="subtitle2" color="primary" >
                        {platform}
                    </Typography>
                    <Typography variant="subtitle2" color="primary" >
                        {duration} hs
                    </Typography>
                </Grid>
            </CardContent>
            <CardActions>
                <Button variant="contained" href={link} size="small" sx={{ position: "absolute", marginBottom: "480px", marginLeft: "126px" }} >
                    <WorkspacePremiumIcon />
                </Button>
            </CardActions>
        </Card>
    )
}