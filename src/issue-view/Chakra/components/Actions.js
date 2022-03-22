import React from 'react';

import { Flex, Input, Button, ButtonGroup, Box, Menu, MenuButton, MenuList, MenuItem, Text, IconButton } from '@chakra-ui/react';
import { AttachmentIcon, LinkIcon, ChevronDownIcon, AddIcon } from '@chakra-ui/icons';
import { BsThreeDots } from 'react-icons/bs';
import { RiTaskLine } from 'react-icons/ri';
import { BiWorld } from 'react-icons/bi';
import { CgNotes } from 'react-icons/cg';

const Actions = () => {
    return (
        <Flex alignItems="center">
            <ButtonGroup>
                <Button>
                    <Input type="file" id="attach" display="none"></Input>
                    <AttachmentIcon />
                    <Box as="label" htmlFor="attach" pl="5px" cursor="pointer">Attach</Box>
                </Button>
                <Button>
                    <RiTaskLine />
                    <Box as="span" pl="5px">Create subtask</Box>
                </Button>
                <Button borderRightRadius="0" borderRight="1px solid lightgray">
                    <LinkIcon />
                    <Box as="span" pl="5px">Link issue</Box>
                </Button>
                <Menu>
                    <MenuButton ml="0 !important" borderLeftRadius="0" as={Button} >
                        <ChevronDownIcon />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <IconButton
                                variant="ghost"
                                colorScheme="gray"
                                aria-label="Call Sage"
                                icon={
                                    <Flex>
                                        <CgNotes />
                                        <Text pl="8px" fontWeight="medium" fontSize="14px">Link Confluence page</Text>
                                    </Flex>
                                }
                            />
                        </MenuItem>
                        <MenuItem>
                            <IconButton
                                variant="ghost"
                                colorScheme="gray"
                                aria-label="Call Sage"
                                icon={
                                    <Flex>
                                        <BiWorld />
                                        <Text pl="8px" fontWeight="medium" fontSize="14px">Add web link</Text>
                                    </Flex>
                                }
                            />
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton as={Button} >
                        <BsThreeDots />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <IconButton
                                variant="ghost"
                                colorScheme="gray"
                                aria-label="Call Sage"
                                icon={
                                    <Flex p="8px">
                                        <AddIcon />
                                        <Text pl="5px" fontWeight="medium" fontSize="14px">Add apps</Text>
                                    </Flex>
                                }
                            />
                        </MenuItem>
                    </MenuList>
                </Menu>
            </ButtonGroup>
        </Flex>
    );
};

export default Actions;