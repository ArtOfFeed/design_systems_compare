import React from 'react';
import Comments from './Comments';
import AllActivity from './AllActivity';

import { Flex, Box, Text, Heading, Tabs, TabList, Tab, TabPanels, TabPanel, Center, Spacer, IconButton } from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';
import { BsSortDownAlt } from 'react-icons/bs';

const Activity = () => {
    return (
        <Flex flexDirection="column" fontSize="14px" mt="20px">
            <Box>
                <Heading as="h3" size="sm" textAlign="start">Activity</Heading>
            </Box>
            <Box mt="10px" w="100%">
                <Tabs variant="soft-rounded" colorScheme="telegram" display="flex" alignItems="center" flexDirection="column" w="100%" defaultIndex={1}>
                    <TabList w="100%" display="flex" h={{sm: "100%", md: "100%", lg: "20px"}} flexDirection={{sm: "column", md: "column", lg: "row"}}>
                        <Box display="flex" justifyContent="space-between" flexDirection={{sm: "column", md: "column", lg: "row"}}>
                            <Box as="span" mr="10px" fontWeight="medium" mb={{sm: "10px", md: "10px", lg: 0}}>Show:</Box>
                            <Tab bg="lightgray" mr="7px" mb={{sm: "10px", md: "10px", lg: 0}}>All</Tab>
                            <Tab bg="lightgray" mr="7px" mb={{sm: "10px", md: "10px", lg: 0}}>Comments</Tab>
                            <Tab bg="lightgray" mr="7px" mb={{sm: "10px", md: "10px", lg: 0}}>History</Tab>
                            <Tab bg="lightgray" mr="7px" mb={{sm: "10px", md: "10px", lg: 0}}>Work log</Tab>
                        </Box>
                        <Spacer />
                        <Flex alignItems="center">
                            <IconButton
                                variant="ghost"
                                colorScheme="gray"
                                aria-label="Call Sage"
                                h="20px"
                                p="5px"
                                icon={
                                    <Flex>
                                        <Text pr="4px" fontWeight="medium" fontSize="14px">Newest first</Text>
                                        <BsSortDownAlt />
                                    </Flex>
                                }
                            />
                        </Flex>
                    </TabList>
                    <TabPanels>
                        <TabPanel p="0">
                            <AllActivity />
                        </TabPanel>
                        <TabPanel p="0">
                            <Comments />
                        </TabPanel>
                        <TabPanel p="0">
                            <AllActivity />
                        </TabPanel>
                        <TabPanel>
                            <Center><QuestionIcon mt="70px" w={40} h={40} /></Center>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Flex>
    );
};

export default Activity;