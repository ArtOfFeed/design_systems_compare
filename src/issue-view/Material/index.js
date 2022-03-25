<<<<<<< HEAD
import { Box,Typography } from '@mui/material';
import IssueHeader from './components/IssueHeader/IssueHeader'; 
import IssueContent from './components/issueContent';
import IssueDetails from './components/issueDetails';
import MenuSelect from './components/MenuSelect';

export const Material = () => {
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
         )
    }
=======
export const Material = () => <h2 className="secondary-heading">Material</h2>
>>>>>>> db6caccee04b0c610868b8ada2b0773adb053269
