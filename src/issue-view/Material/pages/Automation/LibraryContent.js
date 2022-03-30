import React from 'react';

import { Box, Typography, Card, Grid, CardContent, CardActionArea, Link } from '@mui/material';

import { HiOutlineArrowRight } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';
import { SiJirasoftware } from 'react-icons/si';
import { CgGitBranch } from 'react-icons/cg';

export const LibraryContent = () => {
    return (
        <Box>
            <Typography variant="h3" sx={{fontSize: "20px", fontWeight: "500"}}>Software</Typography>
            <Grid container spacing={3} sx={{marginTop: 0}}>
                <Grid item>
                    <Card sx={{width: 268, height: 218, border: "2px solid rgb(235, 236, 240)"}}>
                        <CardActionArea>
                            <Box sx={{backgroundColor: "rgb(250, 251, 252)", height: "40px", padding: "24px", display: "flex", alignItems: "center"}}>
                                <SiJirasoftware style={{width: "40px", height: "40px", paddingRight: "5px"}} />
                                <HiOutlineArrowRight style={{width: "25px", height: "40px"}} />
                                <CgGitBranch style={{width: "40px", height: "40px"}} />
                            </Box>
                            <CardContent sx={{height: "82px", padding: "24px"}}>
                                <Typography variant="body2" component="span" sx={{fontSize: "14px"}}>
                                    Close duplicate issues
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{width: 268, height: 218, border: "2px solid rgb(235, 236, 240)"}}>
                        <CardActionArea>
                            <Box sx={{backgroundColor: "rgb(250, 251, 252)", height: "40px", padding: "24px", display: "flex", alignItems: "center"}}>
                                <SiJirasoftware style={{width: "40px", height: "40px", paddingRight: "5px"}} />
                                <HiOutlineArrowRight style={{width: "25px", height: "40px"}} />
                                <CgGitBranch style={{width: "40px", height: "40px"}} />
                            </Box>
                            <CardContent sx={{height: "82px", padding: "24px"}}>
                                <Typography variant="body2" component="span" sx={{fontSize: "14px"}}>
                                    When all sub-tasks are done → move parent to done
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{width: 268, height: 218, border: "2px solid rgb(235, 236, 240)"}}>
                        <CardActionArea>
                            <Box sx={{backgroundColor: "rgb(250, 251, 252)", height: "40px", padding: "24px", display: "flex", alignItems: "center"}}>
                                <SiJirasoftware style={{width: "40px", height: "40px", paddingRight: "5px"}} />
                                <HiOutlineArrowRight style={{width: "25px", height: "40px"}} />
                                <CgGitBranch style={{width: "40px", height: "40px"}} />
                            </Box>
                            <CardContent sx={{height: "82px", padding: "24px"}}>
                                <Typography variant="body2" component="span" sx={{fontSize: "14px"}}>
                                    When parent is done → move all sub-tasks to done
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{width: 268, height: 218, border: "2px solid rgb(235, 236, 240)"}}>
                        <CardActionArea>
                            <Box sx={{backgroundColor: "rgb(250, 251, 252)", height: "40px", padding: "24px", display: "flex", alignItems: "center"}}>
                                <SiJirasoftware style={{width: "40px", height: "40px", paddingRight: "5px"}} />
                                <HiOutlineArrowRight style={{width: "25px", height: "40px"}} />
                                <CgGitBranch style={{width: "40px", height: "40px"}} />
                            </Box>
                            <CardContent sx={{height: "82px", padding: "24px"}}>
                                <Typography variant="body2" component="span" sx={{fontSize: "14px"}}>
                                    When issue is resolved → comment on related issues
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{width: 268, height: 218, border: "2px solid rgb(235, 236, 240)"}}>
                        <CardActionArea>
                            <Box sx={{backgroundColor: "rgb(250, 251, 252)", height: "40px", padding: "24px", display: "flex", alignItems: "center"}}>
                                <SiJirasoftware style={{width: "40px", height: "40px", paddingRight: "5px"}} />
                                <HiOutlineArrowRight style={{width: "25px", height: "40px"}} />
                                <CgGitBranch style={{width: "40px", height: "40px"}} />
                            </Box>
                            <CardContent sx={{height: "82px", padding: "24px"}}>
                                <Typography variant="body2" component="span" sx={{fontSize: "14px"}}>
                                    Link issues that are mentioned in the comments
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            <Box sx={{marginTop: "24px"}}>
                <Typography variant="h3" sx={{fontSize: "20px", fontWeight: "500"}}>DevOps</Typography>
            </Box>
            <Grid container spacing={3} sx={{marginTop: 0}}>
                <Grid item>
                    <Card sx={{width: 268, height: 218, border: "2px solid rgb(235, 236, 240)"}}>
                        <CardActionArea>
                            <Box sx={{backgroundColor: "rgb(250, 251, 252)", height: "40px", padding: "24px", display: "flex", alignItems: "center"}}>
                                <SiJirasoftware style={{width: "40px", height: "40px", paddingRight: "5px"}} />
                                <HiOutlineArrowRight style={{width: "25px", height: "40px"}} />
                                <CgGitBranch style={{width: "40px", height: "40px"}} />
                            </Box>
                            <CardContent sx={{height: "82px", padding: "24px"}}>
                                <Typography variant="body2" component="span" sx={{fontSize: "14px"}}>
                                    When a commit is made → then move issue to in progress
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{width: 268, height: 218, border: "2px solid rgb(235, 236, 240)"}}>
                        <CardActionArea>
                            <Box sx={{backgroundColor: "rgb(250, 251, 252)", height: "40px", padding: "24px", display: "flex", alignItems: "center"}}>
                                <SiJirasoftware style={{width: "40px", height: "40px", paddingRight: "5px"}} />
                                <HiOutlineArrowRight style={{width: "25px", height: "40px"}} />
                                <CgGitBranch style={{width: "40px", height: "40px"}} />
                            </Box>
                            <CardContent sx={{height: "82px", padding: "24px"}}>
                                <Typography variant="body2" component="span" sx={{fontSize: "14px"}}>
                                    When a branch is created → then move issue to in progress
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{width: 268, height: 218, border: "2px solid rgb(235, 236, 240)"}}>
                        <CardActionArea>
                            <Box sx={{backgroundColor: "rgb(250, 251, 252)", height: "40px", padding: "24px", display: "flex", alignItems: "center"}}>
                                <SiJirasoftware style={{width: "40px", height: "40px", paddingRight: "5px"}} />
                                <HiOutlineArrowRight style={{width: "25px", height: "40px"}} />
                                <CgGitBranch style={{width: "40px", height: "40px"}} />
                            </Box>
                            <CardContent sx={{height: "82px", padding: "24px"}}>
                                <Typography variant="body2" component="span" sx={{fontSize: "14px"}}>
                                    When a pull request is merged → then move issue to done
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            <Box sx={{marginTop: "16px"}}>
                <Link href="#" underline="hover" sx={{display: "flex"}}>
                    <Typography sx={{paddingRight: "3px"}}>See more templates in our automation library</Typography>
                    <FiArrowUpRight/>
                </Link>
            </Box>
        </Box>
    );
};