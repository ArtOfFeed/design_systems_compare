import React from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';

import { MoreHoriz } from '@mui/icons-material';

export const Header = () => {
    return (
        <Box sx={{marginBottom: "20px"}}>
            <Grid container spacing={2}>
                <Grid item sx={{flex: "1 1 0%"}}>
                    <Typography variant="h2" sx={{height: "100%", fontSize: "24px", fontWeight: "500"}} >Automation</Typography>
                </Grid>
                <Grid item sx={{width: "205px"}}>
                    <Button variant="contained" size="small" sx={{marginRight: "9px"}}>Create rule</Button>
                    <Button variant="contained" size="small" sx={{backgroundColor: "rgba(118, 118, 118, 0.3)", color: "rgb(66, 82, 110)"}}>
                        <MoreHoriz/>
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};