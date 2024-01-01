import React, { useEffect } from "react";
import SideNav from "../components/SideNav";
import { Box, Typography } from "@mui/material";
import NavigationBar from "../components/NavigationBar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from '@mui/material/Stack';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionDash from "../components/AccordionDash";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import BarChartDash from "../charts/BarChartDash";
import CountUp from 'react-countup';

const Dashboard = () => {
  return (
        <div>
      <div className="bgcolor">
      <NavigationBar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradient">
                  <CardContent>
                    <div className="iconstyle">
                      <CreditCardIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: "#ffffff"}}>
                    Rs.<CountUp delay={0.2} end={50000} duration={1.4} />.00
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                    Total Bookings
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradientlight">
                  <CardContent>
                  <div className="iconstyle">
                      <ShoppingBagIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: "#ffffff"}}>
                    Rs.<CountUp delay={0.2} end={100000} duration={1.4} />.00
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                    Total Earnings
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
            <Stack spacing={2}>
            <Card className="gradientlight"  >
                  <Stack spacing={2} direction="row">
                    <div className="iconstylewhite paddingall">
                    <StorefrontIcon />
                    </div>
                    <div className="paddingall">
                    <span className="pricetitle">
                      Rs. <CountUp delay={0.2} end={200} duration={1} />K
                      </span><br />
                    <span className="pricesubtitle">Total Income</span>
                    </div>
                    </Stack>
                </Card>
                <Card>
                  <Stack spacing={2} direction="row">
                    <div className="iconstyleblack paddingall">
                    <PeopleOutlineIcon />
                    </div>
                    <div className="paddingall">
                    <span className="pricetitle">
                    <CountUp delay={0.6} end={100} duration={2} />
                      </span><br />
                    <span className="pricesubtitle">Total Trains</span>
                    </div>
                    </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
            <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <BarChartDash />
                  </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
            <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                  <div className="paddingall">
                    <span className="pricetitle">Booking Details</span>
                    </div>
                  <AccordionDash />
                  </CardContent>
                </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </div>
    </div>
  )
}

export default Dashboard