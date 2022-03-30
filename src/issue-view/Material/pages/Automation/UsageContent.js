import React, { useState } from 'react';

import { Box, Card, CardContent, Typography, Grid, Link, Badge, LinearProgress, TableContainer,
    Table, TableHead, TableRow, TableCell, TableBody, Popover, Divider, Button
} from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { CgShapeRhombus } from 'react-icons/cg';

export const UsageContent = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{marginTop: "16px"}}>
            <Grid container spacing={4}>
                <Grid item sx={{flex: "1 1 0%"}}>
                    <Card>
                        <CardContent sx={{padding: "24px", height: "96px"}}>
                            <Grid container justifyContent="space-between" alignItems="center">
                                <Grid item>
                                    <Typography sx={{fontSize: 12, color: "rgb(107, 119, 140)", fontWeight: "700"}} gutterBottom>
                                        Executions available
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Box onClick={handleClick} sx={{display: "flex", alignItems: "center", cursor: "pointer"}}>
                                        <Link aria-describedby={id} href="#" underline="hover" sx={{fontSize: "14px"}}>View details</Link>
                                        <KeyboardArrowDownIcon />
                                    </Box>
                                </Grid>
                                <Popover
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left",
                                    }}
                                    sx={{margin: "15px 0 0 -10px", "& .MuiPaper-root": {width: "496px"}}}
                                >
                                    <Box sx={{padding: "16px 24px"}}>
                                        <Typography sx={{fontSize: "20px", fontWeight: "500", marginBottom: "16px"}} component="h4">Executions available</Typography>
                                        <Typography component="p" sx={{fontSize: "14px"}}>This monthly limit is the combined total of your Jira products and plans.</Typography>
                                        <TableContainer>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell
                                                            sx={{
                                                                padding: "4px 8px 4px 0",
                                                                fontSize: "12px",
                                                                fontWeight: "600",
                                                                color: "rgb(94, 108, 132)",
                                                                width: "203px"
                                                            }}
                                                        >
                                                            Product
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{
                                                                padding: "4px 8px 4px 10px",
                                                                fontSize: "12px", fontWeight: "600",
                                                                color: "rgb(94, 108, 132)",
                                                                width: "74px"
                                                            }}
                                                        >
                                                            Calories
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{padding: "4px 0 4px 10px", fontSize: "12px", fontWeight: "600", color: "rgb(94, 108, 132)"}}
                                                        >
                                                            Executions per month
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                                        <TableCell component="th" scope="row" sx={{padding: "4px 8px 4px 0", display: "flex", alignItems: "center"}}>
                                                            <BsFillLightningChargeFill style={{width: "19px", height: "21px", paddingRight: "5px"}} />
                                                            <Typography component="span" sx={{fontSize: "14px"}}>Jira Service Management</Typography>
                                                        </TableCell>
                                                        <TableCell sx={{padding: "4px 8px 4px 10px"}}>
                                                            <Badge 
                                                                badgeContent="PREMIUM"
                                                                color="warning"
                                                                sx={{
                                                                    "& > span": {
                                                                        width: "70px",
                                                                        height: "15px",
                                                                        whiteSpace: "nowrap",
                                                                        fontSize: "11px",
                                                                        fontWeight: "700",
                                                                        marginRight: "-24px"
                                                                    }
                                                                }}
                                                            />
                                                        </TableCell>
                                                        <TableCell sx={{padding: "4px 0 4px 10px"}}>1000/licensed user</TableCell>
                                                    </TableRow>
                                                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                                        <TableCell component="th" scope="row" sx={{padding: "4px 8px 4px 0", display: "flex", alignItems: "center"}}>
                                                            <CgShapeRhombus style={{width: "19px", height: "21px", paddingRight: "5px"}} />
                                                            <Typography component="span" sx={{fontSize: "14px"}}>Jira Software</Typography>
                                                        </TableCell>
                                                        <TableCell sx={{padding: "4px 8px 4px 10px"}}>
                                                            <Badge 
                                                                badgeContent="PREMIUM"
                                                                color="info"
                                                                sx={{
                                                                    "& > span": {
                                                                        width: "70px",
                                                                        height: "15px",
                                                                        whiteSpace: "nowrap",
                                                                        fontSize: "11px",
                                                                        fontWeight: "700",
                                                                        marginRight: "-24px"
                                                                    }
                                                                }}
                                                            />
                                                        </TableCell>
                                                        <TableCell sx={{padding: "4px 0 4px 10px"}}>1000/licensed user</TableCell>
                                                    </TableRow>
                                                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                                        <TableCell component="th" scope="row" sx={{padding: "4px 8px 4px 0", display: "flex", alignItems: "center"}}>
                                                            <BsFillLightningChargeFill style={{width: "19px", height: "21px", paddingRight: "5px"}} />
                                                            <Typography component="span" sx={{fontSize: "14px"}}>Jira Work Management</Typography>
                                                        </TableCell>
                                                        <TableCell sx={{padding: "4px 8px 4px 10px"}}>
                                                            <Badge 
                                                                badgeContent="STANDART"
                                                                color="primary"
                                                                sx={{
                                                                    "& > span": {
                                                                        width: "70px",
                                                                        height: "15px",
                                                                        whiteSpace: "nowrap",
                                                                        fontSize: "11px",
                                                                        fontWeight: "700",
                                                                        marginRight: "-24px"
                                                                    }
                                                                }}
                                                            />
                                                        </TableCell>
                                                        <TableCell sx={{padding: "4px 0 4px 10px"}}>500</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        <Divider />
                                        <Box sx={{display: "flex", justifyContent: "flex-end", marginTop: "20px"}}>
                                            <Button size="small" variant="contained">View plans</Button>
                                        </Box>
                                    </Box>
                                </Popover>
                            </Grid>
                            <Box display="flex" alignItems="center">
                                <Typography sx={{marginRight: "10px", fontWeight: "bold", fontSize: "18px"}}>70,000,500</Typography>
                                <Badge 
                                    badgeContent="PREMIUM"
                                    color="warning"
                                    sx={{
                                        "& > span": {
                                            width: "70px",
                                            height: "15px",
                                            whiteSpace: "nowrap",
                                            fontSize: "11px",
                                            fontWeight: "700",
                                            marginRight: "-28px"
                                        }
                                    }}
                                />
                            </Box>
                            <Box>
                                <Typography sx={{fontSize: "13px", color: "rgb(94, 108, 132)"}}>*For a limited time, your execution limit is not being enforced.</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sx={{flex: "1 1 0%"}}>
                    <Card>
                        <CardContent sx={{padding: "24px", height: "96px"}}>
                            <Grid container justifyContent="space-between" alignItems="center">
                                <Grid item>
                                    <Typography sx={{fontSize: 12, color: "rgb(107, 119, 140)", fontWeight: "700"}} gutterBottom>
                                        Executions used
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Link href="#" underline="hover" sx={{fontSize: "14px"}}>How is my usage calculated?</Link>
                                </Grid>
                            </Grid>
                            <Box display="flex" alignItems="center">
                                <Typography style={{fontWeight: "bold", fontSize: "18px"}}>0&nbsp;</Typography>
                                <Typography sx={{fontSize: "14px"}}>/ 70,000,500</Typography>
                            </Box>
                            <Box display="flex" flexDirection="column" justifyContent="space-between" height="18px" marginTop="2px">
                                <LinearProgress variant="determinate" color="secondary" value={100} sx={{borderRadius: "5px", height: "7px"}} />
                                <LinearProgress variant="determinate" color="inherit" value={80} sx={{borderRadius: "5px", height: "7px"}} />
                            </Box>
                            <Box marginTop="2px">
                                <Typography sx={{fontSize: "13px", color: "rgb(94, 108, 132)", textAlign: "right"}}>4 days left</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Box sx={{marginTop: "32px"}}>
                <Typography variant="h5" sx={{fontSize: "16px", color: "rgb(23, 43, 77)", fontWeight: "500", marginBottom: "16px"}}>Usage in the last 30 days</Typography>
                <Typography sx={{fontSize: "14px"}}>These are the top rules that count towards your execution limit. The counts are for the last 30 days and not for the current billing period.</Typography>
            </Box>
            <Box sx={{marginTop: "16px"}}>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{padding: "4px 8px 4px 0", fontSize: "12px", fontWeight: "600", color: "rgb(94, 108, 132)"}}>Executions</TableCell>
                                <TableCell sx={{padding: "4px 8px", fontSize: "12px", fontWeight: "600", color: "rgb(94, 108, 132)"}}>Name</TableCell>
                                <TableCell sx={{padding: "4px 8px", fontSize: "12px", fontWeight: "600", color: "rgb(94, 108, 132)"}}>Owner</TableCell>
                                <TableCell sx={{padding: "4px 0 4px 8px", fontSize: "12px", fontWeight: "600", color: "rgb(94, 108, 132)"}}>Project</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                        </TableBody>
                    </Table>
                </TableContainer>
                <Box sx={{margin: "16px"}}>
                    <Typography textAlign="center" sx={{color: "rgb(94, 108, 132)", fontSize: "14px", fontWeight: "400", lineHeight: "20px"}}>
                        No active global or multi-project rules were executed during this time period
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};