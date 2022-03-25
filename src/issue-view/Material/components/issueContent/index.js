import * as React from 'react';

import { Box, Button,Typography,Avatar,TextField,Menu,MenuItem } from '@mui/material';
import { grey } from '@mui/material/colors';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './styles.css';
const IssueContent = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <Box width='55%'>
            <Button sx={{ color: grey[700] , backgroundColor:grey[200], borderRadius:'0',fontWeight:600,marginRight:'20px', textTransform: 'none' }}> <AttachFileIcon sx={{ color: grey[700] }} />Attach</Button>
            <Button sx={{ color: grey[700] , backgroundColor:grey[200], borderRadius:'0',fontWeight:600,marginRight:'20px', textTransform: 'none' }} > <LibraryAddCheckOutlinedIcon sx={{ color: grey[700] }} />Create Subtask</Button>
            <Button sx={{ color: grey[700] , backgroundColor:grey[200], borderRadius:'0',fontWeight:600, textTransform: 'none' }}> <InsertLinkIcon sx={{ color: grey[700], marginRight:'5px' }} />linkIssue</Button>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                <React.Fragment  width='35%'>
                    <Button variant="contained" sx={{ color: grey[700] ,marginRight:'20px', backgroundColor:grey[200], borderRadius:'0',fontWeight:600, boxShadow:'none', textTransform: 'none' }} {...bindTrigger(popupState)}>
                        <KeyboardArrowDownIcon sx={{marginLeft: '4px'}}/>
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem  onClick={popupState.close}>
                                <Typography sx={{ paddingRight:'4px', paddingLeft:'4px',fontWeight:600,fontSize:'13px'}}>+ Add Issue</Typography>
                        </MenuItem>
                    </Menu>
                </React.Fragment>
      )}
    </PopupState>
            <Button sx={{ color: grey[700] , backgroundColor:grey[200], borderRadius:'0',fontWeight:600,marginRight:'20px', textTransform: 'none' }}> <MoreHorizIcon/></Button>
            <Typography marginTop='50px' sx={{color: grey[700], fontWeight:'bold'}}> Description</Typography>
            <TextField
                placeholder="test issue Description"
                multiline
                rows={4}
                maxRows={4}
                fullWidth
            />
            <Typography  sx={{color: grey[700], fontWeight:'bold', marginTop:'20px'}}> Activity</Typography>
            <TabContext value={value}>
                <Box  display='flex' alignItems="center" >
                        <Typography>
                            Show:
                        </Typography>
                    <TabList  onChange={handleChange} >
                            <Tab sx={{color:grey[700], backgroundColor:grey[300],borderRadius:'5px',margin:'5px'}} label="All" value="1" />
                            <Tab  sx={{color:grey[700], backgroundColor:grey[300],borderRadius:'5px',margin:'5px'}} label="Comments" value="2" />
                            <Tab  sx={{color:grey[700], backgroundColor:grey[300],borderRadius:'5px',margin:'5px'}} label="History" value="3" />
                            <Tab  sx={{color:grey[700], backgroundColor:grey[300],borderRadius:'5px',margin:'5px'}} label="Worklog" value="4" />
                    </TabList>
                    <Typography marginLeft='25%'>
                            Newest:
                    </Typography>
                </Box>
                    <TabPanel value="1">
                        <Box display='flex' flexDirection='row' v>
                        <Avatar src="https://photoshablon.com/_ph/44/92968529.jpg" sx={{marginRight: '20px'}} />
                        <Box>
                            <TextField id="outlined-basic" label="Add comment..." variant="outlined" fullWidth />
                            <Typography sx={{ color: grey[700]}}>Pro tip: press M to comment</Typography>
                        </Box>
                        </Box>
                    </TabPanel>
                    <TabPanel value="2">Item One</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                    <TabPanel value="4">Item Four</TabPanel>
            </TabContext> 

        </Box>
    )
}
export default IssueContent;