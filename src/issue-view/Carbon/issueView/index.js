import React from "react";
import { Grid, Column, Row, Button, FileUploaderButton, ButtonSet } from "carbon-components-react";
import { Attachment32 } from "@carbon/icons-react";
import { settings } from "carbon-components";
import { Gap } from "../components";
import { OverflowMenu } from "carbon-components-react";
import { OverflowMenuItem } from "carbon-components-react";
import { ChevronDown32 } from "@carbon/icons-react";
import { Link32 } from "@carbon/icons-react";
import { OverflowMenuVertical32 } from "@carbon/icons-react";
const { prefix } = settings;

const CarbonDesignIssueView = () => {
    return (
        <Grid>
            <Row>
                <Column sm={2} md={4} lg={6}>

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

                        <Button renderIcon={Link32} >Linck issue</Button>

                        <OverflowMenu renderIcon={ChevronDown32} size="lg" >
                            <OverflowMenuItem itemText="Option A" />
                            <OverflowMenuItem itemText="Option B" />
                        </OverflowMenu>
                        <Gap />
                        <OverflowMenu renderIcon={OverflowMenuVertical32} size="lg" 
                            kind="primary"
                            light
                            data-floating-menu-container
                        >
                            <OverflowMenuItem itemText="Option A" />
                            <OverflowMenuItem itemText="Option B" />
                        </OverflowMenu>
                    </Row>

                </Column>
                <Column sm={2} md={2} lg={3}>
                    Right

                </Column>
            </Row>

        </Grid>
    )
}

export default CarbonDesignIssueView;