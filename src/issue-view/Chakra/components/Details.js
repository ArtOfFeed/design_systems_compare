import React from 'react';

import { Wrap, Flex, Box, Text, VStack, Input, Button, Link, AccordionItem, Accordion,
    AccordionButton, AccordionIcon, AccordionPanel, Heading, Avatar, NumberInput, NumberInputField,
    NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Progress, Menu,
    MenuButton, MenuList, MenuItem, Select
} from '@chakra-ui/react';
import { FcMediumPriority, FcLowPriority, FcHighPriority } from 'react-icons/fc';
import { AiOutlineBranches } from 'react-icons/ai';

const Details = () => {
    return (
        <Wrap>
            <Box border="1px solid lightgrey" borderBottom="none" borderRadius="4px" mb="10px" w="100%">
                <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                        <Heading as="h2" borderBottom="1px solid lightgray">
                            <AccordionButton h="48px" p="11px 12px">
                                <Box flex="1" textAlign="left">
                                    Details
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel p="8px 12px">
                            <VStack>
                                <Flex w="100%" alignItems="center" flexDirection={{sm: "column", md: "row"}} mb={{sm: "10px", md: "0"}}>
                                    <Text w="37%" textAlign={{sm: "center", md: "left"}} fontSize={{sm: "13px"}} fontWeight={{sm: "medium"}} mb={{sm: "10px"}}>Approvers</Text>
                                    <Menu>
                                        <MenuButton w="63%" as={Button} bg="inherit">
                                            <Flex alignItems="center" flexDirection={{sm: "column", md: "row"}}>
                                                <Avatar w="30px" h="30px" mr="5px" bg="black" />
                                                <Box as="span" pl="5px" fontSize={{sm: '13px'}}>Charlie 2</Box>
                                            </Flex>
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem>
                                                <Flex alignItems="center" flexDirection={{sm: "column", md: "row"}}>
                                                    <Avatar w="30px" h="30px" mr="5px" bg="blue" />
                                                    <Box as="span" pl="5px" fontSize={{sm: "13px"}}>Charlie 1</Box>
                                                </Flex>
                                            </MenuItem>
                                            <MenuItem>
                                                <Flex alignItems="center" flexDirection={{sm: "column", md: "row"}}>
                                                    <Avatar w="30px" h="30px" mr="5px" bg="green" />
                                                    <Box as="span" pl="5px" fontSize={{sm: "13px"}}>Charlie 3</Box>
                                                </Flex>
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Flex>
                                <Flex w="100%" alignItems="center" flexDirection={{sm: "column", md: "row"}} mb={{sm: "10px !important", md: "0"}}>
                                    <Text w="37%" textAlign={{sm: "center", md: "left"}} fontSize={{sm: "13px"}} fontWeight={{sm: "medium"}} mb={{sm: "10px"}}>Assignee</Text>
                                    <Menu>
                                        <MenuButton w="63%" as={Button} bg="inherit">
                                            <Flex alignItems="center" flexDirection={{sm: "column", md: "row"}}>
                                                <Avatar w="30px" h="30px" mr="5px" bg="black" />
                                                <Box as="span" pl="5px" fontSize={{sm: "13px"}}>Charlie 2</Box>
                                            </Flex>
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem>
                                                <Flex alignItems="center" flexDirection={{sm: "column", md: "row"}}>
                                                    <Avatar w="30px" h="30px" mr="5px" bg="blue" />
                                                    <Box as="span" pl="5px" fontSize={{sm: "13px"}}>Charlie 1</Box>
                                                </Flex>
                                            </MenuItem>
                                            <MenuItem>
                                                <Flex alignItems="center" flexDirection={{sm: "column", md: "row"}}>
                                                    <Avatar w="30px" h="30px" mr="5px" bg="green" />
                                                    <Box as="span" pl="5px" fontSize={{sm: "13px"}}>Charlie 3</Box>
                                                </Flex>
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Flex>
                                <Flex w="100%" alignItems="center" flexDirection={{sm: "column", md: "row"}} mb={{sm: "10px !important", md: "0"}}>
                                    <Text w="37%" textAlign={{sm: "center", md: "left"}} fontSize={{sm: "13px"}} fontWeight={{sm: "medium"}} mb={{sm: "10px"}}>Reporter</Text>
                                    <Menu>
                                        <MenuButton w="63%" as={Button} bg="inherit">
                                            <Flex alignItems="center" flexDirection={{sm: "column", md: "row"}}>
                                                <Avatar w="30px" h="30px" mr="5px" bg="black" />
                                                <Box as="span" pl="5px" fontSize={{sm: "13px"}}>Charlie 2</Box>
                                            </Flex>
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem>
                                                <Flex alignItems="center" flexDirection={{sm: "column", md: "row"}}>
                                                    <Avatar w="30px" h="30px" mr="5px" bg="blue" />
                                                    <Box as="span" pl="5px" fontSize={{sm: "13px"}}>Charlie 1</Box>
                                                </Flex>
                                            </MenuItem>
                                            <MenuItem>
                                                <Flex alignItems="center" flexDirection={{sm: "column", md: "row"}}>
                                                    <Avatar w="30px" h="30px" mr="5px" bg="green" />
                                                    <Box as="span" pl="5px" fontSize={{sm: "13px"}}>Charlie 3</Box>
                                                </Flex>
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Flex>
                                <Flex w="100%" alignItems="center" flexDirection={{sm: "column", md: "row"}} mb={{sm: "10px", md: "0"}}>
                                    <Text w="37%" textAlign={{sm: "center", md: "left"}} fontSize={{sm: "13px"}} fontWeight={{sm: "medium"}}>Development</Text>
                                    <Flex w="63%" h="40px" _hover={{bg: "hover.gray", borderRadius: "5px"}} p="5px" _focus={{boxShadow: "none !important"}}>
                                        <Button variant="link" w="100%" display="flex" justifyContent={{sm: "center", md: "flex-start"}}>
                                            <AiOutlineBranches />
                                            <Link pl="5px" color="#0065FF" fontSize={{sm: "13px"}}>Create branch</Link>
                                        </Button>
                                    </Flex>
                                </Flex>
                                <Flex w="100%" alignItems="center" flexDirection={{sm: "column", md: "row"}} mb={{sm: "10px", md: "0"}}>
                                    <Text w="60%" textAlign={{sm: "center", md: "left"}} mb={{sm: "10px"}} fontSize={{sm: "13px"}} fontWeight={{sm: "medium"}}>Labels</Text>
                                    <Input placeholder="None" />
                                </Flex>
                                <Flex w="100%" alignItems="center" flexDirection={{sm: "column", md: "row"}} mb={{sm: "10px", md: "0"}}>
                                    <Text w="60%" textAlign={{sm: "center", md: "left"}} mb={{sm: "10px"}} fontSize={{sm: "13px"}} fontWeight={{sm: "medium"}}>Region and Country</Text>
                                    <Input placeholder="None" />
                                </Flex>
                                <Flex w="100%" alignItems="center" flexDirection={{sm: "column", md: "row"}} mb={{sm: "10px", md: "0"}}>
                                    <Text w="60%" textAlign={{sm: "center", md: "left"}} mb={{sm: "10px"}} fontSize={{sm: "13px"}} fontWeight={{sm: "medium"}}>Required checkbox</Text>
                                    <Input placeholder="None" />
                                </Flex>
                                <Flex w="100%" alignItems="center" flexDirection={{sm: "column", md: "row"}} mb={{sm: "10px", md: "0"}}>
                                    <Text w="37%" textAlign={{sm: "center", md: "left"}} mb={{sm: "10px"}} fontSize={{sm: "13px"}} fontWeight={{sm: "medium"}}>Priority</Text>
                                    <Menu>
                                        <MenuButton w="63%" as={Button} bg="inherit">
                                            <Flex alignItems="center" justifyContent={{sm: "center", md: "flex-start"}}>
                                                <FcMediumPriority />
                                                <Box as="span" pl="10px" fontSize={{sm: "13px"}}>Medium</Box>
                                            </Flex>
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem>
                                                <Flex alignItems="center">
                                                    <FcLowPriority />
                                                    <Box as="span" pl="10px">Low</Box>
                                                </Flex>
                                            </MenuItem>
                                            <MenuItem>
                                                <Flex alignItems="center">
                                                    <FcHighPriority />
                                                    <Box as="span" pl="10px">High</Box>
                                                </Flex>
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Flex>
                                <Flex w="100%" alignItems="center" flexDirection={{sm: "column", md: "row"}} mb={{sm: "10px", md: "0"}}>
                                    <Text w="37%" textAlign={{sm: "center", md: "left"}} mb={{sm: "10px"}} fontSize={{sm: "13px"}} fontWeight={{sm: "medium"}}>Priority</Text>
                                    <Select w="63%" height="40px" placeholder="Select option" variant="unstyled" cursor="pointer" _hover={{bg: "hover.gray"}} fontSize={{sm: "13px"}}>
                                        <option value="option1">
                                            Medium
                                        </option>
                                        <option value="option2">Highest</option>
                                        <option value="option3">High</option>
                                        <option value="option3">Low</option>
                                        <option value="option3">Lowest</option>
                                    </Select>
                                </Flex>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
            <Box w="100%" border="1px solid lightgrey" borderBottom="none" borderRadius="4px">
                <Accordion allowMultiple>
                    <AccordionItem>
                        <Heading as="h2" borderBottom="1px solid lightgray">
                            <AccordionButton h="48px" p="11px 12px">
                                <Box flex="1" textAlign="left">
                                    More fields
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel p="8px 12px">
                            <VStack>
                                <Flex w="100%" alignItems="center" flexDirection={{sm: "column", md: "row"}} mb={{sm: "10px", md: "0"}}>
                                    <Text w="37%" textAlign={{sm: "center", md: "left"}} mb={{sm: "10px"}} fontSize={{sm: "13px"}} fontWeight={{sm: "medium"}}>Story points</Text>
                                    <NumberInput min={0} w="63%">
                                        <NumberInputField id="amount" />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </Flex>
                                <Flex w="100%" alignItems="center" flexDirection={{sm: "column", md: "row"}} mb={{sm: "10px", md: "0"}}>
                                    <Text w="60%" textAlign={{sm: "center", md: "left"}} mb={{sm: "10px"}} fontSize={{sm: "13px"}} fontWeight={{sm: "medium"}}>Original estimate</Text>
                                    <Input placeholder="None" />
                                </Flex>
                                <Flex w="100%" alignItems="center" flexDirection={{sm: "column", md: "row"}} mb={{sm: "10px", md: "0"}}>
                                    <Text w="38%" textAlign={{sm: "center", md: "left"}} mb={{sm: "10px"}} fontSize={{sm: "13px"}} fontWeight={{sm: "medium"}}>Time tracking</Text>
                                    <Progress w="62%" value={20} size="xs" colorScheme="gray" />
                                </Flex>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </Wrap>
    );
};

export default Details;