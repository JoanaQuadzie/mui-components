import React from 'react';
import { Container, Typography } from "@mui/material";
import TextFields from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function BasicTextFields() {
    return (
        <Container maxWidth="sm">
            <Typography variant='h4'>Login</Typography>
            <Stack
                component="form"
                spacing={2}
                noValidate
                autoComplete="off"
                
            >
                <TextFields id="outlined-basic" label="Username" variant="outlined"/>
                <TextFields id="filled-basic" label="Password" variant="outlined" />
                <TextFields id="standard-basic" label="Confirm Password" variant="outlined" />
            </Stack>
            <Button variant="contained">LOGIN</Button>
        </Container>
    )
}