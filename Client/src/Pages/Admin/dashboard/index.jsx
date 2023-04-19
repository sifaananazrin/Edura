import { Box,  useTheme } from "@mui/material";
import { tokens } from "../theme";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BarChart from "./BarChart";
import { UserData } from "./UserData";


import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import Header from "../Header/Header";

 import StatBox from "../Statebox/StatBox";


const Dashboard = () => {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState({
    labels: ["Students", "Instructors", "Courses"],
    datasets: [
      {
        label: "Count",
        data: [data.student, data.instractor, data.courses],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    axios.get('http://localhost:5000/admin/students')
      .then(response => {
        setData(response.data);
        setUserData({
          labels: ["Students", "Instructors", "Courses"],
          datasets: [
            {
              label: "Count",
              data: [response.data.student, response.data.instractor, response.data.courses],
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log(userData);
  
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box
       display="flex"
        // justifyContent="space-between"
       alignItems="center"
       >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={data.student}
            subtitle="Total Student"
            progress="0.75"
            // increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={data.courses}
            subtitle="Total courses"
            progress="0.50"
            // increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
             }
          /> 
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={data.instractor}
            subtitle="Total instructures"
            progress="0.30"
            // increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
       
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={data.TotalAmout}
            subtitle="Total revinew"
            progress="0.30"
            // increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
       <Box style={{ width: 700}}>
        <BarChart chartData={userData} />
        </Box>
     </Box>
    </Box>
  );
  }


export default Dashboard;
