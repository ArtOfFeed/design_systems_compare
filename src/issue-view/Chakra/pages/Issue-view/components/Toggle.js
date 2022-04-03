import React from 'react';
import { useColorMode, Flex, Switch, Text, Spacer } from '@chakra-ui/react';

import { MdOutlineLightMode, MdModeNight } from 'react-icons/md';

const Toggle = () => {
    const { toggleColorMode } = useColorMode();

    return (
        <Flex ml="10px" alignItems="center" pb="15px" w="150px">
            <Flex alignItems="center">
                <Text pr="5px">Light</Text>
                <MdOutlineLightMode />
            </Flex>
            <Spacer />
            <Switch size="lg" onChange={toggleColorMode} mx="10px" />
            <Spacer />
            <Flex alignItems="center">
                <MdModeNight />
                <Text pl="5px">Dark</Text>
            </Flex>
        </Flex>
    );
};

export default Toggle;