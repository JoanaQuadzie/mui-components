import React from 'react';
import { Container, Typography } from "@mui/material";
import TextFields from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

export default function BasicTextFields() {
    return (
        <>
            <Container maxWidth="sm">
                <br></br>
                <Typography variant='h4'>Login To Fresh Farms</Typography>
                <br></br>
                <Stack
                    component="form"
                    spacing={2}
                    noValidate
                    autoComplete="off"

                >
                    <TextFields id="outlined-basic" label="Username" variant="outlined" />
                    <TextFields id="filled-basic" label="Password" variant="outlined" />
                    <TextFields id="standard-basic" label="Confirm Password" variant="outlined" />
                </Stack>
                <br></br>

                <Button variant="contained" style={{ backgroundColor: '#673ab7', color: 'white'}}>LOGIN</Button>

                <br></br>

            </Container>
            <br></br>
            <FacebookIcon/><TwitterIcon/><GoogleIcon/>
        </>
    )
}