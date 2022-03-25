import { useState } from 'react';
import { 
    Button,
    defaultTheme,
    Provider,
    Grid,
    View,
    Breadcrumbs,
    Item,
    Heading,
    Content,
    ButtonGroup,
    TextArea,
    Tabs,
    TabList,
    TabPanels,
    TextField,
    Flex,
    Text,
    ActionButton,
    Menu,
    MenuTrigger,
    Link as LinkItem,
    Picker,
    ComboBox,
} from '@adobe/react-spectrum';

import BookmarkSingle from '@spectrum-icons/workflow/BookmarkSingle';
import Attach from '@spectrum-icons/workflow/Attach';
import Light from '@spectrum-icons/workflow/Light';
import Moon from '@spectrum-icons/workflow/Moon';
import Link from '@spectrum-icons/workflow/Link';
import User from '@spectrum-icons/workflow/User';
import ShareAndroid from '@spectrum-icons/workflow/ShareAndroid';
import ThumbUp from '@spectrum-icons/workflow/ThumbUp';
import Visibility from '@spectrum-icons/workflow/Visibility';
import CallCenter from '@spectrum-icons/workflow/CallCenter';
import More from '@spectrum-icons/workflow/More';
import Close from '@spectrum-icons/workflow/Close';
import Branch3 from '@spectrum-icons/workflow/Branch3';
import ChevronUp from '@spectrum-icons/workflow/ChevronUp';
import ChevronDown from '@spectrum-icons/workflow/ChevronDown';
import SortOrderDown from '@spectrum-icons/workflow/SortOrderDown';
import SubtractFrontPath from '@spectrum-icons/workflow/SubtractFrontPath';

export const Adobe = () => {
    let [mode, setMode] = useState(false)

    return (
        <Provider theme={defaultTheme} colorScheme={ mode ? 'dark' : 'light' }>
            <Grid
                width={{ base: "100%", M: "1200px" }}
                margin="auto"
                areas={{
                    base: [
                        'content content',
                        'sidebar sidebar'
                    ],
                    M: ['content sidebar',]
                }}
                columns={{
                    base: ['1fr', '1fr'],
                    M: ['2fr', '1fr'],
                }}
                gap="size-100">
                <View gridArea="content" marginBottom="size-400">
                    <Content marginStart="size-400" marginEnd="size-400">
                        <Breadcrumbs size="M">
                            <Item key="home">
                                <>
                                    <BookmarkSingle size="S" aria-label="Bookmark" color="positive" />
                                    DP-9
                                </>
                            </Item>
                        </Breadcrumbs>
                        <Heading level={2}>Test Issue</Heading>
                        <ButtonGroup>
                            <ActionButton>
                                <Attach size="S" aria-label="Attach" />
                                <Text>Attach</Text>
                            </ActionButton>
                            <ActionButton marginStart="size-200">
                                <SubtractFrontPath size="S" aria-label="SubtractFrontPath" />
                                <Text>Create sub-task</Text>
                            </ActionButton>
                            <ComboBox aria-label="issue link" width="140px" marginStart="size-200" defaultSelectedKey="red panda">
                                <Item key="red panda">Link issue</Item>
                                <Item key="cat">Sub issue</Item>
                                <Item key="dog">Default issue</Item>
                            </ComboBox>
                            <MenuTrigger>
                                <ActionButton marginStart="size-100" isQuiet>
                                    <More size="S" aria-label="high" color="more" />
                                </ActionButton>
                                <Menu onAction={(key) => alert(key)}>
                                    <Item key="cut">Cut</Item>
                                    <Item key="copy">Copy</Item>
                                    <Item key="paste">Paste</Item>
                                    <Item key="replace">Replace</Item>
                                </Menu>
                            </MenuTrigger>
                        </ButtonGroup>
                        <Heading level={4}>Description</Heading>
                        <TextArea width="100%" aria-label="Description" />
                        <Heading level={4} position="relative">
                            <Text>Activity</Text>
                            <ActionButton position="absolute" right="size-0" top="size-600" zIndex="99" isQuiet>
                                <SortOrderDown size="S" aria-label="high" color="sort" />
                                <Text>Newest first</Text>
                            </ActionButton>
                        </Heading>
                        <Tabs 
                            aria-label="status tabs"
                            defaultSelectedKey="comments"
                            >
                            <TabList>
                                <Item key="all">All</Item>
                                <Item key="comments">Comments</Item>
                                <Item key="history">History</Item>
                                <Item key="log">Work Log</Item>
                            </TabList>
                            <TabPanels marginTop="size-200">
                                <Item key="all">
                                    All tab
                                </Item>
                                <Item key="comments">
                                    <Flex>
                                        <View><User marginTop="size-100" size="S" aria-label="user" /></View>
                                        <View marginStart="size-100" flex>
                                            <TextField width="100%" aria-label="comment" />
                                            <Text UNSAFE_style={{ fontSize: '11px', fontWeight: 500, }}>Pro tip: press M to comment</Text>
                                        </View>
                                    </Flex>
                                </Item>
                                <Item key="history">
                                    History tab
                                </Item>
                                <Item key="log">
                                    Work log tab
                                </Item>
                            </TabPanels>
                        </Tabs>
                    </Content>
                </View>
                <View gridArea="sidebar">
                    <Content marginEnd="size-200" marginStart="size-200" marginTop="size-200" marginBottom="size-200">
                        <Flex justifyContent="end">
                            <ActionButton marginEnd="size-100" isQuiet>
                                <CallCenter size="M" aria-label="Feedback"/>
                                <Text>Give Feedback</Text>
                            </ActionButton>
                            <ActionButton marginStart="size-100" onClick={() => setMode(!mode)} isQuiet>
                                { mode ? <Moon size="M" aria-label="dark mode" isQuiet /> : <Light size="M" aria-label="light mode" isQuiet /> }
                            </ActionButton>
                            <ActionButton marginStart="size-100" isQuiet>
                                <Visibility size="M" aria-label="Visibility" />
                            </ActionButton>
                            <ActionButton marginStart="size-100" isQuiet>
                                <ThumbUp size="M" aria-label="ThumbUp" />
                            </ActionButton>
                            <ActionButton marginStart="size-100" isQuiet>
                                <ShareAndroid size="M" aria-label="Share" />
                            </ActionButton>
                            <MenuTrigger>
                                <ActionButton marginStart="size-100" isQuiet>
                                    <More size="S" aria-label="high" color="more" />
                                </ActionButton>
                                <Menu onAction={(key) => alert(key)}>
                                    <Item key="cut">Cut</Item>
                                    <Item key="copy">Copy</Item>
                                    <Item key="paste">Paste</Item>
                                    <Item key="replace">Replace</Item>
                                </Menu>
                            </MenuTrigger>
                            <ActionButton marginStart="size-100" isQuiet>
                                <Close size="M" aria-label="Close" isQuiet />
                            </ActionButton>
                        </Flex>
                        <Flex marginTop="size-200">
                            <Picker aria-label="Choose frequency" width="size-1600" defaultSelectedKey="backlog">
                                <Item key="backlog">
                                    <Text width="100%">Backlog</Text>
                                </Item>
                                <Item key="todo">
                                    <Text width="100%">To do</Text>
                                </Item>
                                <Item key="inprogress">
                                    <Text>In Progress</Text>
                                </Item>
                                <Item key="inreview">
                                    <Text>In Review</Text>
                                </Item>
                                <Item key="done">
                                    <Text>Done</Text>
                                </Item>
                                <Item key="pause">
                                    <Text>Pause</Text>
                                </Item>
                            </Picker>
                        </Flex>
                        <Heading level={4}>Details</Heading>
                        <View>
                            <Flex marginTop="size-150" justifyContent="space-between">
                                <Text UNSAFE_style={{ fontSize: '10px', paddingTop: '7px', fontWeight: '500' }} >Approvers</Text>
                                <TextField aria-label="Reporter" width="70%"  />
                            </Flex>
                            <Flex marginTop="size-150" justifyContent="space-between">
                                <Text UNSAFE_style={{ fontSize: '10px', paddingTop: '7px', fontWeight: '500' }} >Assignee</Text>
                                <TextField aria-label="Reporter" width="70%"  />
                            </Flex>
                            <Flex marginTop="size-150" justifyContent="space-between">
                                <Text UNSAFE_style={{ fontSize: '10px', paddingTop: '7px', fontWeight: '500' }} >Reporter</Text>
                                <TextField aria-label="Reporter" width="70%"  />
                            </Flex>
                            <Flex marginTop="size-150" justifyContent="space-between">
                                <Text UNSAFE_style={{ fontSize: '10px', paddingTop: '7px', fontWeight: '500' }} >Development</Text>
                                <LinkItem width="70%" justifyContent="flexStart" alignSelf="center">
                                    <a href="https://www.adobe.com"><Branch3 marginTop="size-100" size="S" aria-label="git" /> Adobe.com</a>
                                </LinkItem>
                            </Flex>
                            <Flex marginTop="size-150" justifyContent="space-between">
                                <Text UNSAFE_style={{ fontSize: '10px', paddingTop: '7px', fontWeight: '500' }} >Labels</Text>
                                <TextField aria-label="Reporter" width="70%"  />
                            </Flex>
                            <Flex marginTop="size-150" justifyContent="space-between">
                                <Text UNSAFE_style={{ fontSize: '10px', paddingTop: '7px', fontWeight: '500' }} >Region and Counties</Text>
                                <TextField aria-label="Reporter" width="70%"  />
                            </Flex>
                            <Flex marginTop="size-150" justifyContent="space-between">
                                <Text UNSAFE_style={{ fontSize: '10px', paddingTop: '7px', fontWeight: '500' }} >Required checkbox</Text>
                                <TextField aria-label="Reporter" width="70%"  />
                            </Flex>
                            <Flex marginTop="size-150" justifyContent="space-between">
                                <Text UNSAFE_style={{ fontSize: '10px', paddingTop: '7px', fontWeight: '500' }} >Priority</Text>
                                <Picker aria-label="Choose frequency" width="70%" defaultSelectedKey="Low">
                                    <Item key="Low">
                                        <ChevronDown size="S" aria-label="low" color="positive" />
                                        <Text width="100%">Low</Text>
                                    </Item>
                                    <Item key="Normal">
                                        <BookmarkSingle size="S" aria-label="normal" color="notice" />
                                        <Text width="100%">Normal</Text>
                                    </Item>
                                    <Item key="High">
                                        <ChevronUp size="S" aria-label="high" color="negative" />
                                        <Text>High</Text>
                                    </Item>
                                </Picker>
                            </Flex>
                        </View>
                    </Content>
                </View>
            </Grid>
        </Provider>
    )
}