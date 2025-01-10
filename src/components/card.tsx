import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

export default function ResultCard({ site, title, description, link, imageUrl }: { site: string, title: string, description: string, link: string, imageUrl: string }) {
    return (
        <Link href={link} target="_blank">
            <Card sx={{ width: '75vw', margin: 2, backgroundColor: '#1c2020', maxHeigh: 120 }}>
                <CardContent>
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            justifyContent: "flex-start",
                            alignItems: "center",
                        }}
                    >
                        {imageUrl && (
                            <img
                                src={imageUrl}
                                loading="lazy"
                            />
                        )}
                        <Stack
                            direction="column"
                            spacing={0}
                            sx={{
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                            }}
                        >
                            <Typography sx={{ color: 'white' }} variant="h5">
                                {title}
                            </Typography>
                            <Typography sx={{ color: 'white' }} variant="h6">
                                {site}
                            </Typography>
                            <Typography sx={{ color: '#bdbdbd' }} variant="h6">
                                {description}
                            </Typography>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Link>
    );
}
