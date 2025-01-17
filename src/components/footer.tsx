import { Typography } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";

export default function Footer() {
    return (
        <Typography
            variant="body1"
            mt='auto'
            mb={5}
            maxWidth={'75vw'}
            sx={{
                color: 'white'
            }}
            textAlign='center'
        >
            &copy; 2023+ <Link href="https://github.com/YasogaN/">YasogaN</Link> | Powered by Cloudflare Pages and Google Programmable Search Engine | <Link href="https://github.com/YasogaN/APK-Mods-Search">GitHub</Link> | <Link href="https://github.com/YasogaN/APK-Mods-Search/blob/v2/TERMS_OF_USE.md">Terms of Use</Link> | <Link href="https://github.com/YasogaN/APK-Mods-Search/blob/v2/PRIVACY_POLICY.md">Privacy Policy</Link> | <Link href="https://github.com/YasogaN/APK-Mods-Search/blob/v2/SOURCES.md">Sources List</Link>
        </Typography>
    );
}