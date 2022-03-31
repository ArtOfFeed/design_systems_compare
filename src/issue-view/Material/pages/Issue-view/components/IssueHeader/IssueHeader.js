import { Box,Typography } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CampaignIcon from '@mui/icons-material/Campaign';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ShareIcon from '@mui/icons-material/Share';
import './IssueHeader.css'
const IssueHeader = () => {
    return(
        <Box display='flex' flexDirection='row' justifyContent='space-between' marginTop='40px' marginBottom='50px'  sx={{ color: '#9e9e9e', fontFamily:'sans-serif' }}>
            <Box display='flex' flexDirection='row'>
               <BookmarkIcon   fontSize="small" sx={{ color: '#eceff1' }}   style={{ backgroundColor: 'green', borderRadius:'4px', marginRight:'10px' }}/>
               <Typography className='iconsGroup' >DP-9</Typography>
            </Box>
            <Box display='flex' flexDirection='row' >
                <Box className='iconsGroup' display='flex' flexDirection='row'>
                    <CampaignIcon/>
                    <Typography  style={{marginRight:'20px'}}>Give Feedback</Typography>
                </Box>
                <Box className='iconsGroup' display='flex' flexDirection='row'>
                    <RemoveRedEyeOutlinedIcon/>
                    <Typography style={{marginRight:'20px'}}>1</Typography>
                </Box>
                <ThumbUpOutlinedIcon className='iconsGroup' style={{marginRight:'20px'}}/>
                <ShareIcon className='iconsGroup' style={{marginRight:'20px'}}/>
                <MoreHorizOutlinedIcon className='iconsGroup' style={{marginRight:'20px'}} />
                <CloseOutlinedIcon className='iconsGroup' style={{marginRight:'20px'}}/>
            </Box>
        </Box>
    )
}
export default IssueHeader;