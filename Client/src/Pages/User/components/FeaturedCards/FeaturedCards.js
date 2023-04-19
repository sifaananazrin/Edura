import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

//IMPORTING SVG'S AND IMAGES
// import photo_card from "../../../../assets/photo_card.png";
import plus from "../../../../assets/plus.svg";
import Wrapper from "../Wrapper";
import styles from "./styles";

const FeaturedCards = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      const response = await fetch("http://localhost:5000/api/course");
      const data = await response.json();
      setCourses(data.course);
      console.log(data.course);
    }

    fetchCourses();
  }, []);

  return (
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
  );
};

export default FeaturedCards;
