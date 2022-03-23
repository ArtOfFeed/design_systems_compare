import React from 'react';
import { Box, Button, useColorMode } from '@chakra-ui/react';

const Toggle = () => {
    const { toggleColorMode } = useColorMode();
    console.log('toggleColorMode: ', toggleColorMode);
    return (
        <Box ml="10px">
            <Button size="sm" onClick={toggleColorMode}>
                Toggle Mode
            </Button>
        </Box>
    );
};

export default Toggle;