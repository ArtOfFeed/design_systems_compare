import React from 'react';

import { Container, Flex, Box, Text, Spacer, Link } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';

const Configure = () => {
    return (
        <Container p="10px">
            <Flex fontWeight="medium" alignItems="center">
                <Box fontSize="12px" color="gray">
                    <Text>Created 27 August 2019, 10:49</Text>
                    <Text>Updated 27 August 2019, 10:49</Text>
                </Box>
                <Spacer />
                <Box>
                    <Link display="flex" alignItems="center">
                        <SettingsIcon color="gray" />
                        <Text pl="8px" color="gray" fontSize="14px">Configure</Text>
                    </Link>
                </Box>
            </Flex>
        </Container>
    );
};

export default Configure;