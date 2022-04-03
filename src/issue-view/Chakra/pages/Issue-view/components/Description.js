import React from 'react';

import { Box, Heading, Textarea } from '@chakra-ui/react';

const Description = () => {
    return (
        <Box mt="20px">
            <Heading as="h3" size="sm" mb="10px" textAlign="start">Description</Heading>
            <Textarea placeholder="Test issue description" variant="unstyled" resize="none" />
        </Box>
    );
};

export default Description;