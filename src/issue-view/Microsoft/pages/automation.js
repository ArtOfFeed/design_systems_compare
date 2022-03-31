import { ThemeWrapper } from "../../Atlassian/Skeleton";
import { Label, Pivot, PivotItem, Depths, Stack, NeutralColors, ProgressIndicator, Link as MicrosoftLink, DetailsList } from '@fluentui/react';
import { Icon } from '@fluentui/react/lib/Icon';
import { PrimaryButton, IconButton } from '@fluentui/react/lib/Button';

const labelStyles = {
    root: { marginTop: 10 },
};

const shadowBlocks = {
    boxShadow: Depths.depth8,
    flex: 1,
    margin: '10px',
    padding: '20px',
    position: 'relative',
}

const textSettings = {
    fontWeight: '400',
    color: NeutralColors.gray90
}

const subTitle = {
    textTransform: 'uppercase',
    margin: '0 0 15px',
    ...textSettings
}

const counterBlock = { fontSize: '32px', marginRight: '20px' };

const tagStyle = {
    padding: '5px',
    background: '#c7e0f4',
    color: '#0078d4', 
    textTransform: 'uppercase',
    alignSelf: 'center',
}

const linkStyle = {
    display: 'flex',
    alignItems: 'end',
    position: 'absolute', 
    right: '20px',
    top: '20px'
}

const items = [
    {
        execution: 1,
        name: 'John Doe',
        owner: 'Mikki Mouse',
        project: 'Disney',
    },
    {
        execution: 1,
        name: 'John Doe',
        owner: 'Mikki Mouse',
        project: 'Disney',
    },
    {
        execution: 1,
        name: 'John Doe',
        owner: 'Mikki Mouse',
        project: 'Disney',
    },
    {
        execution: 1,
        name: 'John Doe',
        owner: 'Mikki Mouse',
        project: 'Disney',
    },
    {
        execution: 1,
        name: 'John Doe',
        owner: 'Mikki Mouse',
        project: 'Disney',
    },
    {
        execution: 1,
        name: 'John Doe',
        owner: 'Mikki Mouse',
        project: 'Disney',
    },
]

export const MicrosoftAutomation = () => {
    return (
        <ThemeWrapper>
            <Stack style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <h2 style={{flex: '1'}}>Automation</h2>
                <PrimaryButton style={{ margin: '0 10px' }} text="Primary" />
                <IconButton iconProps={{iconName: 'More'}} />
            </Stack>
            <Pivot aria-label="Basic Pivot Example" defaultSelectedKey="1">
                <PivotItem
                    headerText="Rules"
                    itemIcon="LightningBolt"
                >
                    <Label styles={labelStyles}>Pivot #1</Label>
                </PivotItem>
                <PivotItem headerText="Audit log" itemIcon="SkypeCircleCheck">
                    <Label styles={labelStyles}>
                        <Stack style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={shadowBlocks}>
                                <h4 style={subTitle}>Execution available</h4>
                                <div style={{display: 'flex'}}>
                                    <span style={counterBlock}>1000</span>
                                    <span style={tagStyle}>Starndart</span>
                                </div>
                                <p style={textSettings}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <MicrosoftLink style={linkStyle} href="google.com">View details <Icon style={{ marginLeft: '5px' }} iconName="Info" /></MicrosoftLink>
                            </div>
                            <div style={shadowBlocks}>
                                <h4 style={subTitle}>Execution used</h4>
                                <div style={{display: 'flex'}}>
                                    <span style={counterBlock}>1000</span>
                                    <span style={{alignSelf: 'center', ...textSettings}}>/ 5</span>
                                </div>
                                <ProgressIndicator label="" description="995 executions left" percentComplete={0.05} />
                                <div style={{ marginTop: '10px', height: '1px' }}></div>
                                <ProgressIndicator label="" description="21 days left" percentComplete={0.3} />
                                <MicrosoftLink style={linkStyle} href="google.com">How is my usage calculated?</MicrosoftLink>
                            </div>
                        </Stack>
                        <DetailsList checkboxVisibility={false} items={items} />
                    </Label>
                </PivotItem>
                <PivotItem headerText="Usage" itemIcon="Chart">
                    <Label styles={labelStyles}>Pivot #3</Label>
                </PivotItem>
                <PivotItem headerText="Library" itemIcon="Copy">
                    <Label styles={labelStyles}>Pivot #4</Label>
                </PivotItem>
            </Pivot>
        </ThemeWrapper>
    )
};


