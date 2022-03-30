import React, { useState, useMemo, useContext, createContext } from 'react';
import { Header } from './Header';
import { TabsContent } from './TabsContent';

import { Container, Box, IconButton } from '@mui/material';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const ToggleColorMode = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <Container maxWidth="xl">
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    borderRadius: 1,
                    p: 3,
                }}
            >
                {theme.palette.mode} mode
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Box>
        </Container>
    );
};

export const MaterialAtomation = () => {
    const [mode, setMode] = useState('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () =>
        createTheme({
            palette: {
            mode,
            },
        }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Container maxWidth="xl" sx={{bgcolor: "background.default", color: "text.primary"}}>
                    <ToggleColorMode />
                    <Header />
                    <TabsContent />
                </Container>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};