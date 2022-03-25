import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, TextField,Link, LinearProgress   } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { grey } from '@mui/material/colors';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import UserSelect from '../UserSelect'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const IssueDetails = () => {
    return(
        <Box  width='35%'>
            <Accordion  expanded='panel1'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                >
                <Typography>Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box display='flex' alignItems="center" margin='5px'>
                        <Typography width='40%'>Approvers</Typography>
                        <UserSelect/>
                    </Box>
                    <Box display='flex' alignItems="center" margin='5px'>
                        <Typography width='40%'>Assignee</Typography>
                        <UserSelect/>
                    </Box>
                    <Box display='flex' alignItems="center" margin='5px'>
                        <Typography width='40%'>Reporter</Typography>
                        <UserSelect/>
                    </Box>
                    <Box display='flex' alignItems="center" margin='5px'>
                        <Typography width='40%'>Development</Typography>
                        <GitHubIcon fontSize="small"  sx={{ marginRight: '5px' , }}/>
                        <Link href="#" underline="none" sx={{fontWeight:600}}> Create Branch</Link>
                    </Box>
                    <Box display='flex' alignItems="center" margin='5px'>
                        <Typography width='40%'>Labels</Typography>
                        <TextField  variant="outlined"  placeholder="None" size='small'/>
                    </Box>
                    <Box display='flex' alignItems="center" margin='5px'>
                        <Typography width='40%'>Region and Country</Typography>
                        <TextField   variant="outlined"  placeholder="None" size='small'/>
                    </Box>
                    <Box display='flex' alignItems="center" margin='5px'>
                        <Typography width='40%'>Required checkbox</Typography>
                        <Typography  sx={{backgroundColor:grey[300],padding:'3px',color:grey[700],fontWeight:'bold',":hover":{cursor:'pointer'}}}>First</Typography>
                    </Box>
                    <Box display='flex' alignItems="center" margin='5px'>
                        <Typography width='40%'>Progress</Typography>
                        <Box sx={{ width: '220px' }}>
                        <LinearProgress variant="determinate" value={50} />
                    </Box>
                    </Box>
                    <Box display='flex' alignItems="center" margin='5px'>
                        <Typography width='40%'>Priority</Typography>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel size='small' id="demo-simple-select-label">Set Priority</InputLabel>
                                <Select
                                label="Set Priority"
                                size='small'
                                >
                                <MenuItem value={10}>Hight</MenuItem>
                                <MenuItem value={20}>Medium</MenuItem>
                                <MenuItem value={30}>Low</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                </AccordionDetails>
             </Accordion>
             <Accordion >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                >
                <Typography>More Fields</Typography>
                </AccordionSummary>
                <AccordionDetails>
                </AccordionDetails>
             </Accordion>
             <Box display='flex' flexDirection='row' justifyContent='space-between' padding='10px' marginTop='5px'>
                <Typography sx={{fontSize:'12px'}}>Created 27 August 2019, 10:49</Typography>
                <Box>
                    <Typography display='flex' alignItems="center" sx={{fontSize:'12px'}}>configure <SettingsOutlinedIcon sx={{width:'18px', marginLeft:'5px'}}/></Typography>
                </Box>
             </Box>
        </Box>
    )
}
export default IssueDetails;