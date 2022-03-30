import { Box,Typography } from '@mui/material';
import IssueHeader from './IssueHeader/IssueHeader'; 
import IssueContent from './issueContent';
import IssueDetails from './issueDetails';
import MenuSelect from './MenuSelect';

export const MaterialIssue = () => {
    return (
        <div className="App">
          <Box margin='0 auto' width='70%'>
            <IssueHeader/>
            <Box display='flex' alignItems="center" marginBottom='10px'>
              <Typography width='55%' sx={{fontSize:25,fontWeight:'600'}}> Test Issue</Typography>
              <Box width='10%'/>
              <MenuSelect ></MenuSelect>
            </Box>
            <Box display='flex' flexDirection='row'>
              <IssueContent/>
              <Box width='10%'>
              </Box>
              <IssueDetails/>
            </Box>
          </Box>
        </div> 
      );
}