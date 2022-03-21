import React from 'react';

import { Flex, Box, Text, Spacer, IconButton, Menu, MenuButton, MenuList, MenuItem, Button, Divider } from '@chakra-ui/react';
import { BsThreeDots, BsFillShareFill } from 'react-icons/bs';
import { ViewIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { HiSpeakerphone } from 'react-icons/hi';
import { AiOutlineLike } from 'react-icons/ai';

const FeedbackActions = () => {
    return (
        <Flex ml="50px" mb="25px">
            <Box>
                <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="Call Sage"
                    icon={
                        <Flex p="8px">
                            <HiSpeakerphone />
                            <Text pl="5px" fontWeight="medium" fontSize="14px">Give feedback</Text>
                        </Flex>
                    }
                />
            </Box>
            <Spacer />
            <Box>
                <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="Call Sage"
                    icon={
                        <Flex p="8px">
                            <ViewIcon />
                            <Text pl="10px" fontSize="14px">1</Text>
                        </Flex>
                    }
                />
            </Box>
            <Spacer />
            <Box>
                <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="Call Sage"
                    icon={<AiOutlineLike />}
                />
            </Box>
            <Spacer />
            <Box>
                <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="Call Sage"
                    icon={<BsFillShareFill />}
                />
            </Box>
            <Spacer />
            <Box>
                <Menu>
                    <MenuButton as={Button} bg="inherit" p="0" >
                        <Flex justifyContent="center">
                            <BsThreeDots />
                        </Flex> 
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Text>Log work</Text>
                        </MenuItem>
                        <MenuItem>
                            <Text>Add flag</Text>
                        </MenuItem>
                        <MenuItem>
                            <Text>Connect Slack channel</Text>
                        </MenuItem>
                        <Divider my="5px"/>
                        <MenuItem>
                            <Text>Convert to Subtask</Text>
                        </MenuItem>
                        <MenuItem>
                            <Text>Move</Text>
                        </MenuItem>
                        <MenuItem>
                            <Text>Clone</Text>
                        </MenuItem>
                        <MenuItem>
                            <Text>Delete</Text>
                        </MenuItem>
                        <Divider my="5px"/>
                        <MenuItem>
                            <Text>Find your field</Text>
                        </MenuItem>
                        <Divider my="5px"/>
                        <MenuItem>
                            <Text>Actions menu</Text>
                        </MenuItem>
                        <Divider my="5px"/>
                        <MenuItem>
                            <Text>Print</Text>
                        </MenuItem>
                        <MenuItem>
                            <Text>Export XML</Text>
                        </MenuItem>
                        <MenuItem>
                            <Text>Export World</Text>
                        </MenuItem>
                        <Divider my="5px"/>
                        <Text pl="10px" py="2px" fontSize="13px" fontWeight="bold">NEW JIRA ISSUE VIEW</Text>
                        <MenuItem>
                            <Text>Take a tour</Text>
                        </MenuItem>
                        <MenuItem>
                            <Text>Find out more</Text>
                        </MenuItem>
                        <MenuItem>
                            <Text>See the old view</Text>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Spacer />
            <Box>
                <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="Call Sage"
                    icon={<SmallCloseIcon />}
                />
            </Box>
        </Flex>
    );
};

export default FeedbackActions;