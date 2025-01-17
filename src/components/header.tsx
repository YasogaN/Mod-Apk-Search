import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Header() {
    return (
        <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '4vh',
                    marginBottom: '2vh',
                    pointerEvents: 'none'
                }}
                src="./logo.png"
                alt=""
            />
            <Typography
                variant="h4"
                m={2}
                sx={{
                    color: 'white'
                }}
                textAlign='center'
            >
                APK Mods Search
            </Typography>
            <Typography
                variant='subtitle1'
                m={2}
                sx={{
                    color: 'white'
                }}
                textAlign='center'
            >
                Made with ❤️ by YasogaN
            </Typography>
        </>
    );
}
