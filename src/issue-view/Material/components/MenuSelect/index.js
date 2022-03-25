import * as React from 'react';
import {Button,Typography,Menu,MenuItem} from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { grey } from '@mui/material/colors';

export default function MenuSelect() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment  width='35%'>
          <Button variant="contained" sx={{ color: grey[700] , backgroundColor:grey[200], borderRadius:'0',fontWeight:600, boxShadow:'none', textTransform: 'none' }} {...bindTrigger(popupState)}>
            BackLog 
            <KeyboardArrowDownIcon sx={{marginLeft: '4px'}}/>
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}><Typography sx={{backgroundColor:'#c8e6c9', paddingRight:'4px', paddingLeft:'4px',fontWeight:600,fontSize:'13px',borderRadius:'3px'}}>to Do</Typography></MenuItem>
            <MenuItem onClick={popupState.close}><Typography sx={{backgroundColor:'#c8e6c9', paddingRight:'4px', paddingLeft:'4px',fontWeight:600,fontSize:'13px',borderRadius:'3px'}}>Dev in Process</Typography></MenuItem>
            <MenuItem onClick={popupState.close}><Typography sx={{backgroundColor:'#b3e5fc', paddingRight:'4px', paddingLeft:'4px',fontWeight:600,fontSize:'13px',borderRadius:'3px'}}>In review</Typography></MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}