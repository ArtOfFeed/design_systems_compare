import React, { useState } from 'react';

import { Box, Table, TableHead, TableBody, TableRow, TableCell, Link, Avatar, Grid,
    Typography, Badge, Accordion, AccordionDetails, Pagination, Collapse
} from '@mui/material';
import MuiAccordionSummary from '@mui/material/AccordionSummary';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AutorenewIcon from '@mui/icons-material/Autorenew';

import { styled } from '@mui/material/styles';

const CustomizedAccordionSummary = styled(props => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
    ))(({ theme }) => ({
        flexDirection: "row-reverse",
        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(90deg)",
        },
        "& .MuiAccordionSummary-content": {
            marginLeft: theme.spacing(1),
        },
    })
);

export const AuditLogContent = () => {
    const [expanded, setExpanded] = useState('false');
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Box>
            <Box sx={{display: "flex", justifyContent: "space-between", marginTop: "2px", marginBottom: "20px"}}>
                <Typography component="span" sx={{fontWeight: "bold"}}>1-6</Typography>
                <Box display="flex" alignItems="center">
                    <Pagination count={1} variant="outlined" shape="rounded" sx={{marginRight: "5px"}} />
                    <AutorenewIcon />
                </Box>
            </Box>
            <Box sx={{marginBottom: "30px"}}>
                <Box>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" sx={{color: "#5E6C84", fontWeight: "600", fontSize: "12px", padding: "4px 8px"}}>Date</TableCell>
                                <TableCell align="left" sx={{color: "#5E6C84", fontWeight: "600", fontSize: "12px", padding: "4px 8px"}}>Rule</TableCell>
                                <TableCell align="left" sx={{color: "#5E6C84", fontWeight: "600", fontSize: "12px", padding: "4px 8px"}}>Projects</TableCell>
                                <TableCell align="left" sx={{color: "#5E6C84", fontWeight: "600", fontSize: "12px", padding: "4px 8px"}}>Status</TableCell>
                                <TableCell align="left" sx={{color: "#5E6C84", fontWeight: "600", fontSize: "12px", padding: "4px 8px"}}>Duration</TableCell>
                                <TableCell align="left" sx={{color: "#5E6C84", fontWeight: "600", fontSize: "12px", padding: "4px 8px"}}>Operations</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow sx={{"&:hover": {backgroundColor: "rgb(250, 251, 252)"}}}>
                                <TableCell>
                                    <Typography component="span" sx={{paddingRight: "5px", fontSize: "14px"}}>28/03/22 11:23:47 am</Typography>
                                    <Typography component="span" sx={{color: "rgb(193, 199, 208)", fontSize: "14px"}}>(7167271982)</Typography>
                                </TableCell>
                                <TableCell>
                                    <Link href="#" underline="hover">
                                        When all stories are completed → then close epic
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Grid container sx={{alignItems: "center"}}>
                                        <Grid item sx={{pr: "10px"}}>
                                            <Avatar sx={{width: "25px", height: "25px"}}>
                                                <AssignmentIcon />
                                            </Avatar>
                                        </Grid>
                                        <Grid item>
                                            <Typography>Business Systems development</Typography>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell sx={{textAlign: "center", width: "11.7%"}}>
                                    <Badge 
                                        badgeContent="CONFIG CHANGE"
                                        color="secondary"
                                        sx={{"& > span": {width: "106px", height: "16px", whiteSpace: "nowrap", fontSize: "11px", marginRight: "22px", fontWeight: "700"}}}
                                    />
                                </TableCell>
                                <TableCell></TableCell>
                                <TableCell>
                                    <Link href="#" underline="hover" color="rgb(107, 119, 140)" onClick={() => setOpen1(!open1)}>Show more</Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6} sx={{backgroundColor: "rgb(250, 251, 252)", padding: "0"}}>
                                    <Collapse in={open1} timeout="auto" unmountOnExit sx={{padding: "8px"}}>
                                        <Grid container justifyContent="space-between">
                                            <Grid item sx={{padding: "8px"}}>
                                                <Typography component="p" sx={{fontWeight: "bold", fontSize: "14px", marginBottom: "5px"}}>Action details:</Typography>
                                                <Typography component="p" sx={{fontSize: "14px"}}>Automation rule was created.</Typography>
                                            </Grid>
                                            <Grid item sx={{width: "300px", backgroundColor: "rgba(9, 30, 66, 0.04)", padding: "8px", margin: "8px"}}>
                                                <Typography component="p" sx={{fontWeight: "bold", fontSize: "14px"}}>Associated items:</Typography>
                                                <Box sx={{display: "flex", alignItems: "center"}}>
                                                    <Avatar sx={{width: "25px", height: "25px"}}>I</Avatar>
                                                    <Typography sx={{paddingLeft: "5px", fontSize: "14px", color: "rgb(52, 69, 99)"}}>Ievgen Golubiev</Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Collapse>
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{"&:hover": {backgroundColor: "rgb(250, 251, 252)"}}}>
                                <TableCell>
                                    <Typography component="span" sx={{paddingRight: "5px", fontSize: "14px"}}>28/03/22 11:23:47 am</Typography>
                                    <Typography component="span" sx={{color: "rgb(193, 199, 208)", fontSize: "14px"}}>(7167271884)</Typography>
                                </TableCell>
                                <TableCell>
                                    <Link href="#" underline="hover">
                                        When epic is completed → then close all the stories present
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Grid container sx={{alignItems: "center"}}>
                                        <Grid item sx={{pr: "10px"}}>
                                            <Avatar sx={{width: "25px", height: "25px"}}>
                                                <AssignmentIcon />
                                            </Avatar>
                                        </Grid>
                                        <Grid item>
                                            <Typography>Business Systems development</Typography>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell sx={{textAlign: "center"}}>
                                    <Badge 
                                        badgeContent="CONFIG CHANGE"
                                        color="secondary"
                                        sx={{"& > span": {width: "106px", height: "16px", whiteSpace: "nowrap", fontSize: "11px", marginRight: "22px", fontWeight: "700"}}}
                                    />
                                </TableCell>
                                <TableCell></TableCell>
                                <TableCell>
                                    <Link href="#" underline="hover" color="rgb(107, 119, 140)" onClick={() => setOpen2(!open2)}>Show more</Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6} sx={{backgroundColor: "rgb(250, 251, 252)", padding: "0"}}>
                                    <Collapse in={open2} timeout="auto" unmountOnExit sx={{padding: "8px"}}>
                                        <Grid container justifyContent="space-between">
                                            <Grid item sx={{padding: "8px"}}>
                                                <Typography component="p" sx={{fontWeight: "bold", fontSize: "14px", marginBottom: "5px"}}>Action details:</Typography>
                                                <Typography component="p" sx={{fontSize: "14px"}}>Automation rule was created.</Typography>
                                            </Grid>
                                            <Grid item sx={{width: "300px", backgroundColor: "rgba(9, 30, 66, 0.04)", padding: "8px", margin: "8px"}}>
                                                <Typography component="p" sx={{fontWeight: "bold", fontSize: "14px"}}>Associated items:</Typography>
                                                <Box sx={{display: "flex", alignItems: "center"}}>
                                                    <Avatar sx={{width: "25px", height: "25px"}}>I</Avatar>
                                                    <Typography sx={{paddingLeft: "5px", fontSize: "14px", color: "rgb(52, 69, 99)"}}>Ievgen Golubiev</Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Collapse>
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{"&:hover": {backgroundColor: "rgb(250, 251, 252)"}}}>
                                <TableCell>
                                    <Typography component="span" sx={{paddingRight: "5px", fontSize: "14px"}}>28/03/22 11:23:47 am</Typography>
                                    <Typography component="span" sx={{color: "rgb(193, 199, 208)", fontSize: "14px"}}>(7167271773)</Typography>
                                </TableCell>
                                <TableCell>
                                    <Link href="#" underline="hover">
                                        When an issue is transitioned → then automatically assign
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Grid container sx={{alignItems: "center"}}>
                                        <Grid item sx={{pr: "10px"}}>
                                            <Avatar sx={{width: "25px", height: "25px"}}>
                                                <AssignmentIcon />
                                            </Avatar>
                                        </Grid>
                                        <Grid item>
                                            <Typography>Business Systems development</Typography>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell sx={{textAlign: "center"}}>
                                    <Badge 
                                        badgeContent="CONFIG CHANGE"
                                        color="secondary"
                                        sx={{"& > span": {width: "106px", height: "16px", whiteSpace: "nowrap", fontSize: "11px", marginRight: "22px", fontWeight: "700"}}}
                                    />
                                </TableCell>
                                <TableCell></TableCell>
                                <TableCell>
                                    <Link href="#" underline="hover" color="rgb(107, 119, 140)" onClick={() => setOpen3(!open3)}>Show more</Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6} sx={{backgroundColor: "rgb(250, 251, 252)", padding: "0"}}>
                                    <Collapse in={open3} timeout="auto" unmountOnExit sx={{padding: "8px"}}>
                                        <Grid container justifyContent="space-between">
                                            <Grid item sx={{padding: "8px"}}>
                                                <Typography component="p" sx={{fontWeight: "bold", fontSize: "14px", marginBottom: "5px"}}>Action details:</Typography>
                                                <Typography component="p" sx={{fontSize: "14px"}}>Automation rule was created.</Typography>
                                            </Grid>
                                            <Grid item sx={{width: "300px", backgroundColor: "rgba(9, 30, 66, 0.04)", padding: "8px", margin: "8px"}}>
                                                <Typography component="p" sx={{fontWeight: "bold", fontSize: "14px"}}>Associated items:</Typography>
                                                <Box sx={{display: "flex", alignItems: "center"}}>
                                                    <Avatar sx={{width: "25px", height: "25px"}}>I</Avatar>
                                                    <Typography sx={{paddingLeft: "5px", fontSize: "14px", color: "rgb(52, 69, 99)"}}>Ievgen Golubiev</Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Collapse>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
                <Box sx={{marginTop: "20px"}}>
                    <Accordion disableGutters elevation={0} square expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                        <CustomizedAccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography variant="h5" sx={{fontWeight: "600", fontSize: "14px"}}>What do the different statuses mean?</Typography>
                        </CustomizedAccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>
        </Box>
    );
};