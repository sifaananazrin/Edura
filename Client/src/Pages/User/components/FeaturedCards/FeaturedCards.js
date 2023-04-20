import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import axios from "../../../../api/axios";
import {config} from "../../../../Helpers/axiosUserEndpoints"
import Spinner from '../../../../component/Spinner';
// import photo_card from "../../../../assets/photo_card.png";
import plus from "../../../../assets/plus.svg";
import Wrapper from "../Wrapper";
import styles from "./styles";

const FeaturedCards = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCourses() {
      try {
        setLoading(true);
        const response = await axios.get("/api/course", config);
        setCourses(response.data.course);
        setLoading(false);
        console.log(response.data.course);
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchCourses();
  }, []);
  

  return (

    <>
    {loading ? (
      <Spinner loading={loading} />
    ) : (
    <Box>
      <Wrapper>
        <Grid
          container
          rowSpacing={4}
          columnSpacing={3}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {courses.map((course, index) => {
            return (
              <Grid item xs={4} sm={4} md={4} key={index}>
                <Card sx={styles.card}>
                  <Box sx={styles.blockPhoto}>
                    <Box
                      component="div"
                      sx={{
                        width: "100%",
                        height: "0",
                        paddingBottom: "56.25%", // 16:9 aspect ratio
                        position: "relative",
                        background:
                          course.image && course.image.length > 0
                            ? `url(${course.image[0].url}) no-repeat center center`
                            : undefined,
                        backgroundSize: "cover", // or 'contain'
                      }}
                    />

                    <Box sx={styles.language}>{course.name}</Box>
                  </Box>
                  <Box sx={{ textAlign: "center", m: "24px 0" }}>
                    {course.title}
                  </Box>
                  <Divider sx={styles.divider} />
                  <Box sx={styles.footerCard}>
                    <Box sx={styles.price}>${course.price}</Box>
                    <Link sx={styles.link}>
                      <Box component="span" sx={{ mr: "5px" }}>
                        enroll now
                      </Box>
                      <Box component="img" src={plus} />
                    </Link>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Wrapper>
    </Box>

)}
</>
  );
};

export default FeaturedCards;
