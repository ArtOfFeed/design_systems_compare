import React, { useState } from 'react';

import { Box, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Link, 
    Avatar, Typography, Switch, TextField, Stack, Menu, MenuItem, Button, Pagination, Select
} from '@mui/material';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { GiStandingPotion } from 'react-icons/gi';
import { BiMemoryCard } from 'react-icons/bi';
import { BsCloudDrizzleFill } from 'react-icons/bs';

import "./styles.css";

export const RulesContent = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [page, setPage] = useState(20);

    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (event) => {
        setPage(event.target.value);
    };

    return (
        <Box>
            <Grid container spacing={4}>
                <Grid item sx={{width: "220px"}}>
                    <TextField
                        label="Fiter rules"
                        size="small"
                    />
                    <Box sx={{marginTop: "16px"}}>
                        <Stack spacing={2}>
                            <Box sx={{display: "flex", alignItems: "center"}}>
                                <Avatar sx={{width: "25px", height: "25px"}}>A</Avatar>
                                <Typography sx={{paddingLeft: "10px", fontSize: "14px", fontWeight: "bold", color: "rgb(52, 69, 99)"}}>All rules</Typography>
                            </Box>
                            <Box sx={{display: "flex", alignItems: "center"}}>
                                <Avatar sx={{width: "25px", height: "25px"}}>A</Avatar>
                                <Typography sx={{paddingLeft: "10px", fontSize: "14px"}}>Global rules</Typography>
                            </Box>
                            <Box sx={{display: "flex", alignItems: "center"}}>
                                <Avatar sx={{width: "25px", height: "25px"}}>A</Avatar>
                                <Typography sx={{paddingLeft: "10px", fontSize: "14px"}}>Add label</Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item sx={{flex: "1 1 0%"}}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow sx={{height: "21px"}}>
                                    <TableCell sx={{padding: "4px 8px 4px 10px", fontSize: "12px", fontWeight: "600", color: "rgb(94, 108, 132)"}}>Name</TableCell>
                                    <TableCell sx={{padding: "4px 8px", fontSize: "12px", fontWeight: "600", color: "rgb(94, 108, 132)"}}>Owner</TableCell>
                                    <TableCell sx={{padding: "4px 8px", fontSize: "12px", fontWeight: "600", color: "rgb(94, 108, 132)"}}>Projects</TableCell>
                                    <TableCell sx={{padding: "4px 8px", fontSize: "12px", fontWeight: "600", color: "rgb(94, 108, 132)"}}>Enabled</TableCell>
                                    <TableCell sx={{padding: "4px 0 4px 8px", fontSize: "12px", fontWeight: "600", color: "rgb(94, 108, 132)"}}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow sx={{"&:hover": {backgroundColor: "rgb(250, 251, 252)", "& .horizButton": {display: "inline-flex !important"}}}}>
                                    <TableCell sx={{padding: "4px 8px 4px 10px", height: "32px", width: "60.22%"}}>
                                        <Link href="#" underline="hover">Bulk sub-tasks</Link>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px", width: "9.98%"}}>
                                        <Box sx={{display: "flex", alignItems: "center"}}>
                                            <Avatar sx={{width: "25px", height: "25px"}}>A</Avatar>
                                            <Typography sx={{paddingLeft: "5px", fontSize: "14px"}}>Andriy</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px", width: "20.49%"}}>
                                        <Box sx={{display: "flex", alignItems: "center"}}>
                                            <GiStandingPotion style={{width: "25px", height: "25px"}}/>
                                            <Typography sx={{paddingLeft: "5px", fontSize: "14px"}}>Team in Space</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px", width: "5.84%"}}>
                                        <Switch />
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 0 4px 8px", width: "46.69px"}}>
                                        <Button
                                            id="basic-button"
                                            aria-controls={open ? "basic-menu" : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? "true" : undefined}
                                            onClick={handleClick}
                                            className="horizButton"
                                            sx={{minWidth: "0"}}
                                        >
                                            <MoreHorizIcon />
                                        </Button>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                "aria-labelledby": "basic-button",
                                            }}
                                        >
                                            <MenuItem>Copy</MenuItem>
                                            <MenuItem>Remove</MenuItem>
                                            <MenuItem>Export</MenuItem>
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{"&:hover": {backgroundColor: "rgb(250, 251, 252)", "& .horizButton": {display: "inline-flex !important"}}}}>
                                    <TableCell sx={{padding: "4px 8px 4px 10px", height: "32px"}}>
                                        <Link href="#" underline="hover">Test sub-task</Link>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px"}}>
                                        <Box sx={{display: "flex", alignItems: "center"}}>
                                            <Avatar sx={{width: "25px", height: "25px"}}>A</Avatar>
                                            <Typography sx={{paddingLeft: "5px", fontSize: "14px"}}>Andriy</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px"}}>
                                        <Box sx={{display: "flex", alignItems: "center"}}>
                                            <BiMemoryCard style={{ width: "25px", height: "25px" }} />
                                            <Typography sx={{paddingLeft: "5px", fontSize: "14px"}}>Ecomm Platform Dev</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px"}}>
                                        <Switch defaultChecked />
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 0 4px 8px"}}>
                                        <Button
                                            id="basic-button"
                                            aria-controls={open ? "basic-menu" : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? "true" : undefined}
                                            onClick={handleClick}
                                            className="horizButton"
                                                sx={{minWidth: "0"}}
                                            >
                                                <MoreHorizIcon />
                                            </Button>
                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                    "aria-labelledby": "basic-button",
                                                }}
                                            >
                                                <MenuItem>Copy</MenuItem>
                                                <MenuItem>Remove</MenuItem>
                                                <MenuItem>Export</MenuItem>
                                            </Menu>
                                        </TableCell>
                                </TableRow>
                                <TableRow sx={{"&:hover": {backgroundColor: "rgb(250, 251, 252)", "& .horizButton": {display: "inline-flex !important"}}}}>
                                    <TableCell sx={{padding: "4px 8px 4px 10px", height: "32px"}}>
                                        <Link href="#" underline="hover">When all stories are complited → then close epic</Link>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px"}}>
                                        <Box sx={{display: "flex", alignItems: "center"}}>
                                            <Avatar sx={{width: "25px", height: "25px"}}>A</Avatar>
                                            <Typography sx={{paddingLeft: "5px", fontSize: "14px"}}>Andriy</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px"}}>
                                        <Box sx={{display: "flex", alignItems: "center"}}>
                                            <BiMemoryCard style={{ width: "25px", height: "25px" }} />
                                            <Typography sx={{paddingLeft: "5px", fontSize: "14px"}}>Ecomm Platform Dev</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px"}}>
                                        <Switch />
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 0 4px 8px"}}>
                                        <Button
                                            id="basic-button"
                                            aria-controls={open ? "basic-menu" : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? "true" : undefined}
                                            onClick={handleClick}
                                            className="horizButton"
                                            sx={{minWidth: "0"}}
                                        >
                                            <MoreHorizIcon />
                                        </Button>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                "aria-labelledby": "basic-button",
                                            }}
                                        >
                                            <MenuItem>Copy</MenuItem>
                                            <MenuItem>Remove</MenuItem>
                                            <MenuItem>Export</MenuItem>
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{"&:hover": {backgroundColor: "rgb(250, 251, 252)", "& .horizButton": {display: "inline-flex !important"}}}}>
                                    <TableCell sx={{padding: "4px 8px 4px 10px", height: "32px"}}>
                                        <Link href="#" underline="hover">When all stories are complited → then close epic</Link>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px"}}>
                                        <Box sx={{display: "flex", alignItems: "center"}}>
                                            <Avatar sx={{width: "25px", height: "25px"}}>A</Avatar>
                                            <Typography sx={{paddingLeft: "5px", fontSize: "14px"}}>Andriy</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px"}}>
                                        <Box sx={{display: "flex", alignItems: "center"}}>
                                            <BsCloudDrizzleFill style={{width: "25px", height: "25px"}}/>
                                            <Typography sx={{paddingLeft: "5px", fontSize: "14px"}}>Business Systems development</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px"}}>
                                        <Switch defaultChecked />
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 0 4px 8px"}}>
                                        <Button
                                            id="basic-button"
                                            aria-controls={open ? "basic-menu" : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? "true" : undefined}
                                            onClick={handleClick}
                                            className="horizButton"
                                            sx={{minWidth: "0"}}
                                        >
                                            <MoreHorizIcon />
                                        </Button>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                "aria-labelledby": "basic-button",
                                            }}
                                        >
                                            <MenuItem>Copy</MenuItem>
                                            <MenuItem>Remove</MenuItem>
                                            <MenuItem>Export</MenuItem>
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{"&:hover": {backgroundColor: "rgb(250, 251, 252)", "& .horizButton": {display: "inline-flex !important"}}}}>
                                    <TableCell sx={{padding: "4px 8px 4px 10px", height: "32px"}}>
                                        <Link href="#" underline="hover">When an issue is transitioned → then automatically assign</Link>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px"}}>
                                        <Box sx={{display: "flex", alignItems: "center"}}>
                                            <Avatar sx={{width: "25px", height: "25px"}}>A</Avatar>
                                            <Typography sx={{paddingLeft: "5px", fontSize: "14px"}}>Andriy</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px"}}>
                                        <Box sx={{display: "flex", alignItems: "center"}}>
                                            <BiMemoryCard style={{ width: "25px", height: "25px" }} />
                                            <Typography sx={{paddingLeft: "5px", fontSize: "14px"}}>Ecomm Platform Dev</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px"}}>
                                        <Switch />
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 0 4px 8px"}}>
                                        <Button
                                            id="basic-button"
                                            aria-controls={open ? "basic-menu" : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? "true" : undefined}
                                            onClick={handleClick}
                                            className="horizButton"
                                            sx={{minWidth: "0"}}
                                        >
                                            <MoreHorizIcon />
                                        </Button>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                "aria-labelledby": "basic-button",
                                            }}
                                        >
                                            <MenuItem>Copy</MenuItem>
                                            <MenuItem>Remove</MenuItem>
                                            <MenuItem>Export</MenuItem>
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{"&:hover": {backgroundColor: "rgb(250, 251, 252)", "& .horizButton": {display: "inline-flex !important"}}}}>
                                    <TableCell sx={{padding: "4px 8px 4px 10px", height: "32px"}}>
                                        <Link href="#" underline="hover">When an issue is transitioned → then automatically assign</Link>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px"}}>
                                        <Box sx={{display: "flex", alignItems: "center"}}>
                                            <Avatar sx={{width: "25px", height: "25px"}}>A</Avatar>
                                            <Typography sx={{paddingLeft: "5px", fontSize: "14px"}}>Andriy</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px"}}>
                                        <Box sx={{display: "flex", alignItems: "center"}}>
                                            <BsCloudDrizzleFill style={{width: "25px", height: "25px"}}/>
                                            <Typography sx={{paddingLeft: "5px", fontSize: "14px"}}>Business Systems development</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px"}}>
                                        <Switch defaultChecked />
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 0 4px 8px"}}>
                                        <Button
                                            id="basic-button"
                                            aria-controls={open ? "basic-menu" : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? "true" : undefined}
                                            onClick={handleClick}
                                            className="horizButton"
                                            sx={{minWidth: "0"}}
                                        >
                                            <MoreHorizIcon />
                                        </Button>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                "aria-labelledby": "basic-button",
                                            }}
                                        >
                                            <MenuItem>Copy</MenuItem>
                                            <MenuItem>Remove</MenuItem>
                                            <MenuItem>Export</MenuItem>
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{"&:hover": {backgroundColor: "rgb(250, 251, 252)", "& .horizButton": {display: "inline-flex !important"}}}}>
                                    <TableCell sx={{padding: "4px 8px 4px 10px", height: "32px"}}>
                                        <Link href="#" underline="hover">When epic is complited → then close all the stories present</Link>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px"}}>
                                        <Box sx={{display: "flex", alignItems: "center"}}>
                                            <Avatar sx={{width: "25px", height: "25px"}}>A</Avatar>
                                            <Typography sx={{paddingLeft: "5px", fontSize: "14px"}}>Andriy</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px"}}>
                                        <Box sx={{display: "flex", alignItems: "center"}}>
                                            <BsCloudDrizzleFill style={{width: "25px", height: "25px"}}/>
                                            <Typography sx={{paddingLeft: "5px", fontSize: "14px"}}>Business Systems development</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px"}}>
                                        <Switch defaultChecked />
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 0 4px 8px"}}>
                                        <Button
                                            id="basic-button"
                                            aria-controls={open ? "basic-menu" : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? "true" : undefined}
                                            onClick={handleClick}
                                            className="horizButton"
                                            sx={{minWidth: "0"}}
                                        >
                                            <MoreHorizIcon />
                                        </Button>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                "aria-labelledby": "basic-button",
                                            }}
                                        >
                                            <MenuItem>Copy</MenuItem>
                                            <MenuItem>Remove</MenuItem>
                                            <MenuItem>Export</MenuItem>
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{"&:hover": {backgroundColor: "rgb(250, 251, 252)", "& .horizButton": {display: "inline-flex !important"}}}}>
                                    <TableCell sx={{padding: "4px 8px 4px 10px", height: "32px"}}>
                                        <Link href="#" underline="hover">When epic is complited → then close all the stories present</Link>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px"}}>
                                        <Box sx={{display: "flex", alignItems: "center"}}>
                                            <Avatar sx={{width: "25px", height: "25px"}}>A</Avatar>
                                            <Typography sx={{paddingLeft: "5px", fontSize: "14px"}}>Andriy</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px"}}>
                                        <Box sx={{display: "flex", alignItems: "center"}}>
                                            <BiMemoryCard style={{ width: "25px", height: "25px" }} />
                                            <Typography sx={{paddingLeft: "5px", fontSize: "14px"}}>Ecomm Platform Dev</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 8px"}}>
                                        <Switch />
                                    </TableCell>
                                    <TableCell sx={{padding: "4px 0 4px 8px"}}>
                                        <Button
                                            id="basic-button"
                                            aria-controls={open ? "basic-menu" : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? "true" : undefined}
                                            onClick={handleClick}
                                            className="horizButton"
                                            sx={{minWidth: "0"}}
                                        >
                                            <MoreHorizIcon />
                                        </Button>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                "aria-labelledby": "basic-button",
                                            }}
                                        >
                                            <MenuItem>Copy</MenuItem>
                                            <MenuItem>Remove</MenuItem>
                                            <MenuItem>Export</MenuItem>
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box sx={{display: "flex", justifyContent: "space-between", marginTop: "20px", marginBottom: "20px"}}>
                        <Pagination count={1} variant="outlined" shape="rounded" />
                        <Box>
                            <span>Results per page:</span>
                            <Select
                                defaultValue={20}
                                value={page}
                                onChange={handleChange}
                                sx={{width: "100px", marginLeft: "5px", "& > div": {padding: "4px 8px"}}}
                                variant="filled"
                            >
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                                <MenuItem value={40}>40</MenuItem>
                            </Select>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};