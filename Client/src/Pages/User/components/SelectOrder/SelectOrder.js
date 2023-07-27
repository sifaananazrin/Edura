import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import React, { useState, useEffect } from "react";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles";
import axios from "../../../../api/axios";

import { config } from "../../../../Helpers/axiosUserEndpoints";
import Spinner from "../../../../component/Spinner";

const SelectOrder = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState(null);
  const navigate = useNavigate();
  const user_id = localStorage.getItem("uid");
  useEffect(() => {
    async function fetchCourses() {
      try {
        setLoading(true);
        const response = await axios.get("/api/course", config);
        setCourses(response.data.course);
        setLoading(false);
        // window.location.reload(); 
        // console.log(response);
      } catch (error) {
        localStorage.removeItem("usertoken");
        localStorage.removeItem("uid");
        console.error(error);
      }
    }

    fetchCourses();
  }, []);

  const CouresDetails = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/product/${id}`, {
        ...config,
        params: { user_id: user_id },
      });
      setLoading(false);
      setSelectedCourses(response.data.found);
      navigate("/user/course-details", {
        state: { selectedCourses: response.data },
      });
    } catch (error) {
      localStorage.removeItem("usertoken");
      localStorage.removeItem("uid");
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{ ...styles.title, display: "flex", alignItems: "center" }}
          ></Typography>
          <Box sx={styles.wrapperCard}>
            {courses.map((course, index) => {
              return (
                <Card
                  sx={{
                    ...styles.card,
                    width: "550px",
                    display: "flex",
                    marginBottom: "24px",
                  }}
                  key={index}
                >
                  <Box
                    sx={{ padding: "20px", display: "flex", width: "300px" }}
                  >
                    {course.image && course.image.length > 0 && (
                      <Box
                        component="img"
                        src={course.image[0].url}
                        sx={{
                          width: "200px",
                          height: "200px",
                          objectFit: "cover",
                          marginRight: "48px",
                        }}
                      />
                    )}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Typography sx={styles.titleCard}>
                        {course.name}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "text.secondary" }}
                      >
                        Instructor: {course.teachername}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#673F86",
                          color: "white",
                          fontSize: "20px",
                          width: "100px",
                          height: "50px",
                          alignSelf: "flex-end",
                        }}
                      >
                        Rs {course.price}
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "auto",
                        }}
                      >
                        {/* <Link to="/user/course-details"> */}
                        <ArrowCircleRightIcon
                          onClick={() => CouresDetails(course._id)}
                          sx={styles.iconRightArrow}
                        />
                        {/* </Link> */}
                      </Box>
                    </Box>
                  </Box>
                </Card>
              );
            })}
          </Box>
        </Box>

       
      )}
    </>
  );
};

export default SelectOrder;
