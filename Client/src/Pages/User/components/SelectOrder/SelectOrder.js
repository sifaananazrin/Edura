import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
//IMPORTING ICONS AND IMAGES
import arrow from "../../../../assets/arrow_down.svg";
import card_title_img from "../../../../assets/card_title_img.png";
import DescriptionIcon from "@mui/icons-material/Description";
import GroupsIcon from "@mui/icons-material/Groups";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles";
import axios from "../../../../api/axios";
// import { Link } from '@mui/material';
import {config} from "../../../../Helpers/axiosUserEndpoints"
import Spinner from '../../../../component/Spinner';


const SelectOrder = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchCourses() {
      try {
        setLoading(true);
        const response = await axios.get("/api/course",config);
        setCourses(response.data.course);
        setLoading(false);
        console.log(response.data.course);
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchCourses();
  }, []);
  

  const CouresDetails = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `/api/product/${id}`,config
      );
      console.log(response);
      setLoading(false);
      setSelectedCourses(response.data.found);
      navigate("/user/course-details", {
        state: { selectedCourses: response.data.found },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <>
    {loading ? (
      <Spinner loading={loading} />
    ) : (
    <Box sx={{ pt: "90px", flex: 1 }}>
      <Typography
        sx={{ ...styles.title, display: "flex", alignItems: "center" }}
      >
        {/* select order */}
        {/* <Box component="img" src={arrow} sx={{ marginLeft: "12px" }} /> */}
      </Typography>
      <Box sx={styles.wrapperCard}>
        {courses.map((course, index) => {
          return (
            <Card
              sx={{
                ...styles.card,
                width: "100%",
                display: "flex",
                marginBottom: "24px",
              }}
              key={index}
            >
              <Box sx={{ padding: "24px", display: "flex", width: "100%" }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", width: "100%" }}
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
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#673F86",
                      color:"white",
                      fontSize: "24px",
                      width: "100px",
                      height: "50px",
                    }}
                  >
                    {course.price}
                  </Box>
                </Box>
                <Typography
                  sx={{
                    ...styles.titleCard,
                    marginLeft: "24px",
                    alignSelf: "center",
                  }}
                >
                  {course.name}
                </Typography>
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
