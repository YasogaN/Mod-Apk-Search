import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

export default function ResultCard({ site, title, description, link }: { site: string, title: string, description: string, link: string }) {
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
                        <Stack
                            direction="column"
                            spacing={0}
                            sx={{
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                            }}
                        >
                            <Typography sx={{ color: 'white' }} variant="h6">
                                {title}
                            </Typography>
                            <Typography sx={{ color: 'white' }} variant="subtitle1">
                                {site}
                            </Typography>
                            <Typography sx={{ color: '#bdbdbd' }} variant="subtitle1">
                                {description}
                            </Typography>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Link>
    );
}
