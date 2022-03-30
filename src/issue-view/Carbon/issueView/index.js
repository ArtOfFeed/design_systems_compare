import React from "react";
import {
    Grid, Column, Row, Button, FileUploaderButton, TextArea, OverflowMenu, OverflowMenuItem,
    TileGroup, RadioTile, TextInput, CodeSnippet, Dropdown, Accordion, AccordionItem,
    StructuredListWrapper, StructuredListBody, StructuredListRow, StructuredListCell,
} from "carbon-components-react";
import {
    ChevronDown32, OverflowMenuVertical32, Bookmark32, Link32, Replicate32, UserAvatarFilledAlt32, SortAscending32,
    Bullhorn32, ThumbsUp32, Share32, Close32, View32, Branch32, Checkmark32,
} from "@carbon/icons-react";
import { Gap } from "../components";

const DROPDOWN_ITEMS_1 = [
    {
        id: 'option-0',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        id: 'option-1',
        text: 'Option 1',
    },
    {
        id: 'option-2',
        text: 'Option 2',
    },
    {
        id: 'option-3',
        text: 'Option 3 - a disabled item',
        disabled: true,
    },
    {
        id: 'option-4',
        text: 'Option 4',
    },
    {
        id: 'option-5',
        text: 'Option 5',
    },
];

const DROPDOWN_ITEMS_2 = [
    {
        id: 'Low',
        component: <span>Low <Checkmark32 height={16} /></span>,
    },
    {
        id: 'Medium',
        component: <span>Medium <Checkmark32 height={16} /></span>,
    },
    {
        id: 'High',
        component: <span>High <Checkmark32 height={16} /></span>,
    },
];

const CarbonDesignIssueView = () => {
    return (
        <Grid className="issueView" fullWidth>
            <Row>
                <Column lg={8}>
                    <Row>
                        <Bookmark32 aria-label="Bookmark" height="16" /> DP-9
                    </Row>
                    <Row>
                        <h2>Test issue</h2>
                    </Row>
                    <Row>
                        {/*
                            EXAMPLE of strange styling presented in official docs AND wich are not matches with default button style
                            <div className={`${prefix}--file__container`}><FileUploaderButton labelText="Attach" /></div> 
                         */}
                        <FileUploaderButton labelText="Attach" />
                        <Gap />
                        <Button renderIcon={Replicate32}>Create subtask</Button>
                        <Gap />
                        <Button renderIcon={Link32} >Linck issue</Button>
                        <OverflowMenu renderIcon={ChevronDown32} size="lg" className="restyledOwerflowMenu" >
                            <OverflowMenuItem itemText="Option A" />
                            <OverflowMenuItem itemText="Option B" />
                        </OverflowMenu>
                        <Gap />
                        <OverflowMenu renderIcon={OverflowMenuVertical32} size="lg"
                            kind="primary"
                            light
                            data-floating-menu-container
                            className="restyledOwerflowMenu"
                        >
                            <OverflowMenuItem itemText="Option A" />
                            <OverflowMenuItem itemText="Option B" />
                        </OverflowMenu>
                    </Row>
                    <Row>
                        <h4>Description</h4>
                        <TextArea
                            labelText="Description"
                            placeholder="Test issue description"
                        />
                    </Row>
                    <Row>
                        <Column>
                            <Row>
                                <h4>Activity</h4>
                                <Gap />
                                <Gap />
                                <TileGroup
                                    defaultSelected="default-selected"
                                    legend="Show"
                                    valueSelected="option1"
                                    className="issueHistoryFiler"
                                >
                                    <RadioTile value="option1" id="tile-1" light>
                                        All
                                    </RadioTile>
                                    <RadioTile value="option2" id="tile-2" light>
                                        Comments
                                    </RadioTile>
                                    <RadioTile value="option3" id="tile-3" light>
                                        History
                                    </RadioTile>
                                    <RadioTile value="option4" id="tile-4" light>
                                        Worklog
                                    </RadioTile>
                                </TileGroup>
                                <Button renderIcon={SortAscending32} kind="tertiary" className="newestSort" size="sm">Newest first</Button>
                            </Row>
                            <Row>
                                <UserAvatarFilledAlt32 />
                                <TextInput placeholder="Add a comment" helperText={
                                    <span><b>Pro tip:</b> press <CodeSnippet type="inline">M</CodeSnippet> to comment</span>
                                } />
                            </Row>
                        </Column>
                    </Row>

                </Column>
                <Column lg={4}>
                    <Row className="topRightMenuBar">
                        <Button renderIcon={Bullhorn32} kind="ghost">Give feedback</Button>
                        <Button renderIcon={View32} hasIconOnly kind="ghost" iconDescription="view" />
                        <Button renderIcon={ThumbsUp32} hasIconOnly kind="ghost" iconDescription="likes" />
                        <Button renderIcon={Share32} hasIconOnly kind="ghost" iconDescription="share" />
                        <OverflowMenu renderIcon={OverflowMenuVertical32} size="lg"
                            kind="ghost"
                            light
                            data-floating-menu-container
                        >
                            <OverflowMenuItem itemText="Option A" />
                            <OverflowMenuItem itemText="Option B" />
                        </OverflowMenu>
                        <Button renderIcon={Close32} hasIconOnly kind="ghost" iconDescription="close" />
                    </Row>
                    <Row>
                        <Dropdown label="Backlog" type="inline" items={DROPDOWN_ITEMS_1} itemToString={(item) => (item ? item.text : '')} />
                    </Row>
                    <Row>
                        <Accordion className="issueFields">

                            <AccordionItem title="Details" open className="issueFieldsList">
                                <StructuredListWrapper>
                                    <StructuredListBody>
                                        <StructuredListRow>
                                            <StructuredListCell>Approvers</StructuredListCell>
                                            <StructuredListCell>
                                                <span>None</span>
                                            </StructuredListCell>
                                        </StructuredListRow>
                                        <StructuredListRow>
                                            <StructuredListCell>Assignee</StructuredListCell>
                                            <StructuredListCell>
                                                <UserAvatarFilledAlt32 />
                                                <span>Charlie 2</span>
                                            </StructuredListCell>
                                        </StructuredListRow>
                                        <StructuredListRow>
                                            <StructuredListCell>Reporter</StructuredListCell>
                                            <StructuredListCell>
                                                <UserAvatarFilledAlt32 />
                                                <span>Charlie 2</span>
                                            </StructuredListCell>
                                        </StructuredListRow>
                                        <StructuredListRow>
                                            <StructuredListCell>Development</StructuredListCell>
                                            <StructuredListCell>
                                                <Branch32 height={24} />
                                                <Button kind="ghost" size="sm" >Carete Branch</Button>
                                            </StructuredListCell>
                                        </StructuredListRow>
                                        <StructuredListRow>
                                            <StructuredListCell>Labels</StructuredListCell>
                                            <StructuredListCell>
                                                <span>None</span>
                                            </StructuredListCell>
                                        </StructuredListRow>
                                        <StructuredListRow>
                                            <StructuredListCell>Region and Country</StructuredListCell>
                                            <StructuredListCell>
                                                <span>None</span>
                                            </StructuredListCell>
                                        </StructuredListRow>
                                        <StructuredListRow>
                                            <StructuredListCell>Reqired checkbox</StructuredListCell>
                                            <StructuredListCell>
                                                <span>None</span>
                                            </StructuredListCell>
                                        </StructuredListRow>
                                        <StructuredListRow>
                                            <StructuredListCell>Priority</StructuredListCell>
                                            <StructuredListCell>
                                                <Dropdown
                                                    label="Priority"
                                                    type="inline"
                                                    items={DROPDOWN_ITEMS_2}
                                                    initialSelectedItem={DROPDOWN_ITEMS_2[0]}
                                                    itemToElement={(item) => (item ? item.component : '')}
                                                    renderSelectedItem={(item) => (item ? item.component : '')}
                                                />

                                            </StructuredListCell>
                                        </StructuredListRow>
                                    </StructuredListBody>
                                </StructuredListWrapper>
                            </AccordionItem>
                            <AccordionItem title="More fields"  >
                                More fields here...
                            </AccordionItem>
                            <AccordionItem title="Even More fields"  >
                                More fields here...
                            </AccordionItem>
                        </Accordion>
                    </Row>
                </Column>
            </Row>

        </Grid>
    )
}

export default CarbonDesignIssueView;