import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import CheckCircleOutlineIcon from '@atlaskit/icon/glyph/check-circle-outline'
import GraphLineIcon from '@atlaskit/icon/glyph/graph-line';
import DocumentsIcon from '@atlaskit/icon/glyph/documents';
import StarFilledIcon from '@atlaskit/icon/glyph/star-filled';
import  './styles.css';

import RuleTabPanel from '../rules';
import AuditLogTabPanel from '../auditLog';
import LibraryTabPanel from '../library';
import UsageTabPanel from '../usage';


export const Panel = ({children}) => (
    <div style={{width:'100%'}} >
        {children}
    </div>
  );

const  TabContent = () => {
    return(
        <div>
            <Tabs
                id="default"
            >
                <TabList>
                    <Tab> 
                        <div className='tabContent'>
                            <StarFilledIcon/>
                            rules
                        </div>
                    </Tab>
                    <Tab>
                        <div className='tabContent'>
                            <CheckCircleOutlineIcon/>
                            Audit log
                        </div>
                    </Tab>
                    <Tab>
                        <div className='tabContent'>
                            <DocumentsIcon/>
                            Library
                        </div>
                    </Tab>
                    <Tab>
                        <div className='tabContent'>
                            <GraphLineIcon/>
                            Usage
                        </div>
                    </Tab>
                </TabList>
                <TabPanel>
                    <Panel>
                        <RuleTabPanel/>
                    </Panel>
                </TabPanel>
                <TabPanel>
                    <Panel>
                        <AuditLogTabPanel/>
                    </Panel>
                </TabPanel>
                <TabPanel>
                    <Panel>
                    <LibraryTabPanel/>
                    </Panel>
                </TabPanel>
                <TabPanel>
                    <Panel>
                        <UsageTabPanel/>
                    </Panel>
                </TabPanel>
            </Tabs>
        </div>
    )
}
export default TabContent;