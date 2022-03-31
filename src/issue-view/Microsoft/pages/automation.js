import { ThemeWrapper } from "../../Atlassian/Skeleton";
import { Label, Pivot, PivotItem, Depths, Stack, NeutralColors, ProgressIndicator, Link as MicrosoftLink, DetailsList, TextField } from '@fluentui/react';
import { Icon } from '@fluentui/react/lib/Icon';
import { PrimaryButton, IconButton, ActionButton } from '@fluentui/react/lib/Button';

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

const blockItemList = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    boxSizing: 'border-box'
}

const blockItem = {
    width: '25%',
    margin: '15px 0',
    padding: '0 15px',
    boxSizing: 'border-box'
}

const blockItemTop = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
    background: NeutralColors.gray10
}

export const MicrosoftAutomation = () => {
    return (
        <ThemeWrapper>
            <Stack style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <h2 style={{flex: '1'}}>Automation</h2>
                <PrimaryButton style={{ margin: '0 10px' }} text="Primary" />
                <IconButton iconProps={{iconName: 'More'}} />
            </Stack>
            <Pivot aria-label="Basic Pivot Example" defaultSelectedKey="2">
                <PivotItem headerText="Rules" itemIcon="LightningBolt">
                    <Label styles={labelStyles}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '25%', flexDirection: 'column', display: 'flex', padding: '30px 30px 0 0' }}>
                                <TextField label="" />
                                <ActionButton style={{ marginTop: '15px' }} iconProps={{iconName: 'WindowsLogo'}}>
                                    All rules
                                </ActionButton>
                                <ActionButton iconProps={{iconName: 'Globe'}}>
                                    Global rules
                                </ActionButton>
                                <ActionButton iconProps={{iconName: 'AddTo'}}>
                                    Add rules
                                </ActionButton>
                            </div>
                            <div style={{ flex: '1' }}>
                                <DetailsList checkboxVisibility={false} items={items} />
                            </div>
                        </div>
                    </Label>
                </PivotItem>
                <PivotItem headerText="Audit log" itemIcon="SkypeCircleCheck">
                    <Label styles={labelStyles}>
                        <DetailsList checkboxVisibility={false} items={items} />
                    </Label>
                </PivotItem>
                <PivotItem headerText="Usage" itemIcon="Chart">
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
                <PivotItem headerText="Library" itemIcon="Copy">
                    <Label styles={labelStyles}>
                        <h3>Software</h3>
                        <div style={blockItemList}>
                            <Stack style={blockItem}>
                                <div style={{ boxShadow: Depths.depth8 }}>
                                    <div style={blockItemTop}>
                                        <IconButton iconProps={{iconName: 'WindowsLogo', style: { fontSize: '28px' }}} />
                                        <span style={{ fontSize: '22px', margin: '0 15px' }}>→</span>
                                        <IconButton iconProps={{iconName: 'BranchMerge', style: { fontSize: '28px' }}} />
                                    </div>
                                    <div style={{padding: '40px 20px'}}>
                                        <p style={{ fontSize: '13px', fontWeight: '400' }}>When a pull request is merged → then move issue to done</p>
                                    </div>
                                </div>
                            </Stack>
                            <Stack style={blockItem}>
                                <div style={{ boxShadow: Depths.depth8 }}>
                                    <div style={blockItemTop}>
                                        <IconButton iconProps={{iconName: 'WindowsLogo', style: { fontSize: '28px' }}} />
                                        <span style={{ fontSize: '22px', margin: '0 15px' }}>→</span>
                                        <IconButton iconProps={{iconName: 'BranchMerge', style: { fontSize: '28px' }}} />
                                    </div>
                                    <div style={{padding: '40px 20px'}}>
                                        <p style={{ fontSize: '13px', fontWeight: '400' }}>When a pull request is merged → then move issue to done</p>
                                    </div>
                                </div>
                            </Stack>
                            <Stack style={blockItem}>
                                <div style={{ boxShadow: Depths.depth8 }}>
                                    <div style={blockItemTop}>
                                        <IconButton iconProps={{iconName: 'WindowsLogo', style: { fontSize: '28px' }}} />
                                        <span style={{ fontSize: '22px', margin: '0 15px' }}>→</span>
                                        <IconButton iconProps={{iconName: 'BranchMerge', style: { fontSize: '28px' }}} />
                                    </div>
                                    <div style={{padding: '40px 20px'}}>
                                        <p style={{ fontSize: '13px', fontWeight: '400' }}>When a pull request is merged → then move issue to done</p>
                                    </div>
                                </div>
                            </Stack>
                            <Stack style={blockItem}>
                                <div style={{ boxShadow: Depths.depth8 }}>
                                    <div style={blockItemTop}>
                                        <IconButton iconProps={{iconName: 'WindowsLogo', style: { fontSize: '28px' }}} />
                                        <span style={{ fontSize: '22px', margin: '0 15px' }}>→</span>
                                        <IconButton iconProps={{iconName: 'BranchMerge', style: { fontSize: '28px' }}} />
                                    </div>
                                    <div style={{padding: '40px 20px'}}>
                                        <p style={{ fontSize: '13px', fontWeight: '400' }}>When a pull request is merged → then move issue to done</p>
                                    </div>
                                </div>
                            </Stack>
                            <Stack style={blockItem}>
                                <div style={{ boxShadow: Depths.depth8 }}>
                                    <div style={blockItemTop}>
                                        <IconButton iconProps={{iconName: 'WindowsLogo', style: { fontSize: '28px' }}} />
                                        <span style={{ fontSize: '22px', margin: '0 15px' }}>→</span>
                                        <IconButton iconProps={{iconName: 'BranchMerge', style: { fontSize: '28px' }}} />
                                    </div>
                                    <div style={{padding: '40px 20px'}}>
                                        <p style={{ fontSize: '13px', fontWeight: '400' }}>When a pull request is merged → then move issue to done</p>
                                    </div>
                                </div>
                            </Stack>
                            <Stack style={blockItem}>
                                <div style={{ boxShadow: Depths.depth8 }}>
                                    <div style={blockItemTop}>
                                        <IconButton iconProps={{iconName: 'WindowsLogo', style: { fontSize: '28px' }}} />
                                        <span style={{ fontSize: '22px', margin: '0 15px' }}>→</span>
                                        <IconButton iconProps={{iconName: 'BranchMerge', style: { fontSize: '28px' }}} />
                                    </div>
                                    <div style={{padding: '40px 20px'}}>
                                        <p style={{ fontSize: '13px', fontWeight: '400' }}>When a pull request is merged → then move issue to done</p>
                                    </div>
                                </div>
                            </Stack>
                        </div>
                    </Label>
                </PivotItem>
            </Pivot>
        </ThemeWrapper>
    )
};


