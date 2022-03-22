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
    Flex
} from '@adobe/react-spectrum';

import BookmarkSingle from '@spectrum-icons/workflow/BookmarkSingle';
import Attach from '@spectrum-icons/workflow/Attach';
import Link from '@spectrum-icons/workflow/Link';
import User from '@spectrum-icons/workflow/User';
import ShareAndroid from '@spectrum-icons/workflow/ShareAndroid';
import ThumbUp from '@spectrum-icons/workflow/ThumbUp';
import Visibility from '@spectrum-icons/workflow/Visibility';
import Feedback from '@spectrum-icons/workflow/Feedback';
import More from '@spectrum-icons/workflow/More';
import Close from '@spectrum-icons/workflow/Close';
import SubtractFrontPath from '@spectrum-icons/workflow/SubtractFrontPath';

export const Adobe = () => {
    return (
        <Provider theme={defaultTheme} colorScheme="light">
            <Grid
                areas={[
                    'content sidebar',
                ]}
                columns={['2fr', '1fr']}
                gap="size-100">
                <View backgroundColor="gray-400" gridArea="content">
                    <Content marginStart="size-400" marginEnd="size-400">
                        <Breadcrumbs size="M">
                            <Item key="home">
                                <>
                                    <BookmarkSingle size="S" aria-label="Bookmark" />
                                    DP-9
                                </>
                            </Item>
                        </Breadcrumbs>
                        <Heading level={2}>Test Issue</Heading>
                        <ButtonGroup>
                            <Button variant="primary"><Attach size="S" aria-label="Attach" />Attach</Button>
                            <Button variant="primary"><SubtractFrontPath size="S" aria-label="SubtractFrontPath" />Create sub-task</Button>
                            <Button variant="primary"><Link size="S" aria-label="Link" />Link issue</Button>
                        </ButtonGroup>
                        <Heading level={4}>Description</Heading>
                        <TextArea width="100%" aria-label="Description" />
                        <Heading level={4}>Activity</Heading>
                        <Tabs 
                            aria-label="status tabs"
                            defaultSelectedKey={2}
                            >
                            <TabList>
                                <Item>All</Item>
                                <Item>Comments</Item>
                                <Item>History</Item>
                                <Item>Work Log</Item>
                            </TabList>
                            <TabPanels marginTop="size-200">
                                <Item>
                                    All tab
                                </Item>
                                <Item>
                                    <Flex>
                                        <View><User marginTop="size-100" size="S" aria-label="user" /></View>
                                        <View marginStart="size-100" flex><TextField width="100%" aria-label="comment" /></View>
                                    </Flex>
                                </Item>
                                <Item>
                                    History tab
                                </Item>
                                <Item>
                                    Work log tab
                                </Item>
                            </TabPanels>
                        </Tabs>
                    </Content>
                </View>
                <View backgroundColor="gray-300" gridArea="sidebar">
                    <Flex>

                    </Flex>
                </View>
            </Grid>
        </Provider>
    )
}