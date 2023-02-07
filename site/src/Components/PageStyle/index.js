import React from 'react';
import { Container } from '@mui/system';
import { Paper } from '@mui/material';

export default function Event({children}) {
return (
    <Container sx={{
        maxWidth: '600px'
    }}>
        <Paper elevation={3} sx={{
            marginTop: '5rem',
            padding: '1rem'
        }}>
            {children}
        </Paper>
    </Container>
)
}