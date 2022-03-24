import React from 'react';

import { Flex, Input, Button, ButtonGroup, Box, Menu, MenuButton, MenuList, MenuItem, Text, Center } from '@chakra-ui/react';
import { AttachmentIcon, LinkIcon, ChevronDownIcon, AddIcon } from '@chakra-ui/icons';
import { BsThreeDots } from 'react-icons/bs';
import { RiTaskLine } from 'react-icons/ri';
import { BiWorld } from 'react-icons/bi';
import { CgNotes } from 'react-icons/cg';

const Actions = () => {
    return (
        <Flex alignItems="center">
            <ButtonGroup flexDirection={{sm: "column", md: "column", lg: "row"}}>
                <Button mb={{sm: "10px", md: "10px"}} ml={{sm: "10px", md: "10px", lg: "0"}}>
                    <Input type="file" id="attach" display="none"></Input>
                    <AttachmentIcon />
                    <Box as="label" htmlFor="attach" pl="5px" cursor="pointer">Attach</Box>
                </Button>
                <Button mb={{sm: "10px", md: "10px"}}>
                    <RiTaskLine />
                    <Box as="span" pl="5px">Create subtask</Box>
                </Button>
                <Button borderRightRadius={{lg: "0"}} borderRight={{sm: 0, md: 0, lg: "1px solid lightgray"}}>
                    <LinkIcon />
                    <Box as="span" pl="5px">Link issue</Box>
                </Button>
                <Menu>
                    <MenuButton ml={{lg: "0 !important"}} borderLeftRadius={{lg: "0"}} as={Button} mb={{sm: "10px", md: "10px"}}>
                        <ChevronDownIcon />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <CgNotes />
                            <Text pl="8px" fontWeight="medium" fontSize="14px">Link Confluence page</Text>
                        </MenuItem>
                        <MenuItem>
                            <Flex alignItems="center">
                                <BiWorld />
                                <Text pl="8px" fontWeight="medium" fontSize="14px">Add web link</Text>
                            </Flex>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton as={Button}>
                        <Center>
                            <BsThreeDots />
                        </Center>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Flex p="8px" alignItems="center">
                                <AddIcon />
                                <Text pl="8px" fontWeight="medium" fontSize="14px">Add apps</Text>
                            </Flex>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </ButtonGroup>
        </Flex>
    );
};

export default Actions;