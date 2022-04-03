import React from 'react';
import Toggle from './components/Toggle';
import Actions from './components/Actions';
import Details from './components/Details';
import Activity from './components/Activity';
import Configure from './components/Configure.js';
import Description from './components/Description';
import FeedbackActions from './components/FeedbackActions';

import { ChakraProvider, extendTheme, Container, Flex, Box, Heading, Text, Spacer, Menu, MenuButton, MenuList, MenuItem, Button, Badge } from '@chakra-ui/react';
import { MoonIcon, ChevronDownIcon } from '@chakra-ui/icons';

export const ChakraIssue = () => {
    const theme = extendTheme({
        colors: {
          hover: {
            gray: "rgb(235, 236, 240)"
          },
        },
        breakpoints: {
            sm: '320px',
            md: '768px',
            lg: '960px',
            xl: '1200px',
            '2xl': '1536px',
        }
    });

    return (
        <ChakraProvider theme={theme}>
            <Container maxW="container.xl">
                <Box ml="15px">
                    <Toggle />
                </Box>
                <Flex m="20px">
                    <Box w="60%" fontSize="14px">
                        <Flex alignItems="center" mb="25px" pl="5px">
                            <MoonIcon pr="5px"/>
                            <Text>DP-9</Text>
                        </Flex>
                        <Heading as="h1" size="lg" mb="20px" textAlign="start">Test issue</Heading>
                        <Actions />
                        <Description />
                        <Activity />
                    </Box>
                    <Spacer />
                    <Box w="36%">
                        <FeedbackActions />
                        <Box mb="15px">
                            <Menu>
                                <MenuButton ml="0 !important" as={Button}>
                                    <Flex alignItems="center">
                                        <Text pr="5px">Backlog</Text>
                                        <ChevronDownIcon />
                                    </Flex>
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>
                                        <Badge>Archive</Badge>
                                    </MenuItem>
                                    <MenuItem>
                                        <Badge colorScheme="blue">To Do</Badge>
                                    </MenuItem>
                                    <MenuItem>
                                        <Badge colorScheme="blue">Dev</Badge>
                                    </MenuItem>
                                    <MenuItem>
                                        <Badge colorScheme="blue">Dev (Returned)</Badge>
                                    </MenuItem>
                                    <MenuItem>
                                        <Badge colorScheme="blue">Dev Done</Badge>
                                    </MenuItem>
                                    <MenuItem>
                                        <Badge colorScheme="blue">On Stage</Badge>
                                    </MenuItem>
                                    <MenuItem>
                                        <Badge colorScheme="blue">Review</Badge>
                                    </MenuItem>
                                    <MenuItem>
                                        <Badge colorScheme="blue">Stage Test Done</Badge>
                                    </MenuItem>
                                    <MenuItem>
                                        <Badge colorScheme="blue">Test</Badge>
                                    </MenuItem>
                                    <MenuItem>
                                        <Badge colorScheme="blue">Test Done</Badge>
                                    </MenuItem>
                                    <MenuItem>
                                        <Badge colorScheme="green">Closed</Badge>
                                    </MenuItem>
                                    <MenuItem>
                                        <Badge colorScheme="green">Live</Badge>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                        <Details />
                        <Configure />
                    </Box>
                </Flex>
            </Container>
        </ChakraProvider>
    );
};