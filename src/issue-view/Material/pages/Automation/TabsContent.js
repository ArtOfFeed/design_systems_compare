import React, { useState } from 'react';
import { UsageContent } from './UsageContent';
import { RulesContent } from './RulesContent';
import { AuditLogContent } from './AuditLogContent';
import { LibraryContent } from './LibraryContent';

import { Tab, Box } from '@mui/material';
import { TabList, TabPanel, TabContext } from '@mui/lab';
import BoltIcon from '@mui/icons-material/Bolt';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const TabsContent = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab icon={<BoltIcon  />} label="Rules" value="1" sx={{flexDirection: "row"}} />
                        <Tab icon={<CheckCircleOutlineIcon sx={{marginRight: "5px"}} />} label="Audit log" value="2" sx={{flexDirection: "row"}} />
                        <Tab icon={<SummarizeOutlinedIcon sx={{marginRight: "5px"}} />} label="Library" value="3"  sx={{flexDirection: "row"}} />
                        <Tab icon={<InsightsOutlinedIcon sx={{marginRight: "5px"}} />} className="dsa" label="Usage" value="4" sx={{flexDirection: "row"}} />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <RulesContent />
                </TabPanel>
                <TabPanel value="2">
                    <AuditLogContent />
                </TabPanel>
                <TabPanel value="3">
                    <LibraryContent />
                </TabPanel>
                <TabPanel value="4">
                    <UsageContent />
                </TabPanel>
            </TabContext>
        </Box>
    );
};