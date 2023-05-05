
import { Box,  useTheme ,Typography} from "@mui/material";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import { tokens } from "../theme";
import { useState, useEffect } from 'react';
import {config} from "../../../Helpers/axiosAdminEndpoints"
import axios from "../../../api/axios";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Spinner from "../../../component/Spinner";
// import ProgressCircle from "../../../component/ProgressCircle";

import Header from "../Header/Header";

 import StatBox from "../Statebox/StatBox";


const Dashboard = () => {
  const [chartData, setChartData] = useState([]);
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);




  
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


  const [product, setproduct] = useState({
    labels: ["Total Users", "Total Products"],
    datasets: [
      {
        label: "Count",
        data: [data.usercount, data.productcount],
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
console.log(data)
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get("/admin/students",config);
        setLoading(false);
        setdata(response.data);
        console.log(response.data)
        setUserData({
                    labels: ["Approve coures ", " rejected coures", " pending review"],
                    datasets: [
                      {
                        label: "Count",
                        data: [response.data.pricegt, response.data.pricelt, response.data.courses],
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
        setproduct({
          labels: ["Students", "instractor"],
          datasets: [
            {
              label: "Count",
              data: [response.data.student, response.data.instractor],
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
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [setdata]);




// useEffect(() => {
//   async function fetchData() {
//     try {
//       const response = await axios.get("http://localhost:5000/admin/chart");
//       setChartData(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   fetchData();
// }, []);


  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
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
            title={data.courses}
            subtitle="Total Cousers"
            // progress="0.75"
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
            title={data.TotalAmout}
            subtitle="Total income"
            // progress="0.50"
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
            title={data.student}
            subtitle="Total Students"
            // progress="0.30"
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
            title={data.instractor}
            subtitle="Total instractor"
            // progress="0.30"
            // increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
       

        
        </Box>
       
        <Box display="flex" flexDirection="row">
  <Box flex="1" style={{ width: 400 }}>
    <PieChart chartData={product} />
  </Box>
  <Box flex="2" style={{ width: 700 }}>
    <BarChart chartData={userData} />
  </Box>
</Box>

     </Box>
    
  );
  }


export default Dashboard;