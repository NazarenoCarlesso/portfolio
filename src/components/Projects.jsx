import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Project from './Project'

export default function Projects({ projects }) {
    const [limit, setLimit] = useState(0)
    const [page, setPage] = useState(1)
    const widthRef = useRef(null)

    const onResize = () => {
        const rect = widthRef.current?.getBoundingClientRect()

        if (rect) {
            const newLimit = Math.floor(rect.width / 530)
            setLimit(newLimit ? newLimit : 1)
        }
    }

    useEffect(() => {
        onResize()
        window.addEventListener('resize', onResize)
    }, [])

    useEffect(() => setPage(1), [limit])

    const handleNextPage = () => {
        const lastPage = Math.ceil(projects.length / limit)
        if (page === lastPage) return

        setPage(page + 1)
    }

    const handlePrevPage = () => {
        if (page === 1) return

        setPage(page - 1)
    }

    return (
        <Box sx={{ width: "80vw", margin: "10px", padding: "10px" }} >
            <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                <Typography variant="h4" sx={{ marginBottom: "12px", paddingLeft: "12px", borderLeft: "4px solid chartreuse", fontStyle: "italic" }} >
                    Projects
                </Typography>
                <div>
                    <button onClick={handlePrevPage} style={{ border: 'none', borderRadius: '50%', background: 'transparent' }}>
                        <svg aria-hidden="true" width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ transform: 'rotate(90deg)', width: 30, height: 30 }}>
                            <path fill="#7fff00" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                    </button>
                    <button onClick={handleNextPage} style={{ border: 'none', borderRadius: '50%', background: 'transparent' }}>
                        <svg aria-hidden="true" width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ transform: 'rotate(-90deg)', width: 30, height: 30 }}>
                            <path fill="#7fff00" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                    </button>
                </div>
            </Grid>
            <Grid ref={widthRef} container direction="row" justifyContent="space-evenly" alignItems="center" >
                {
                    projects
                        .slice((page - 1) * limit, page * (limit ? limit : 1))
                        .map((p, i) => <Project
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
