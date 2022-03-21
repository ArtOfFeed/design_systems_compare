import React from 'react';

import { Flex, Box, Image, Text, Badge, Spacer } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const AllActivity = () => {
    return (
        <Flex mt="30px">
            <Image
                src="https://bit.ly/chakra-jonathan-bakebwa"
                h="35px"
                w="35px"
                rounded="full"
                mr="15px"
                mt="5px"
            />
            <Flex w="100%" mt="2px" flexDirection="column" h="50px">
                <Text><b>Maksym Mozdolevskyi</b> updated the <b>Labels</b> <Box as="span" px="8px">57 minutes ago</Box> <Badge>History</Badge></Text>
                <Spacer />
                <Text>
                    <Box as="span" color="gray" pr="5px">None</Box>
                    <ArrowForwardIcon />
                    <Box as="span" pl="5px">Admin</Box>
                </Text>
            </Flex>
        </Flex>
    );
};

export default AllActivity;