import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';

const UserSelect = () => {


    return(
        <Box  sx={{ width:'54%', }}>
        <FormControl fullWidth>
          <TextField select size='small'
          >
            <MenuItem ><Avatar src="https://www.volynpost.com/img/modules/news/a/2d/89c6db59bcc5faedda072e84c6e432da/cb-yz2dikefvsy.jpg" sx={{marginRight: '20px'}} />user 1</MenuItem>
            <MenuItem ><Avatar src="https://www.leoterra.com/sites/default/files/clAvHWVG4GE.jpg" sx={{marginRight: '20px'}} />user 2</MenuItem>
            <MenuItem ><Avatar src="https://www.volynpost.com/img/modules/news/e/1c/fced9d71d3a27fb3bf5751597e4451ce/cb-fwjpkocduqk.jpg" sx={{marginRight: '20px'}} />user 3</MenuItem>
          </TextField >
        </FormControl>
      </Box>
    )
}
export default UserSelect;