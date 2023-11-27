import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import axios from "../../../../api/axios";
import { config } from "../../../../Helpers/axiosUserEndpoints";
import Spinner from "../../../../component/Spinner";
import plus from "../../../../assets/plus.svg";
import Wrapper from "../Wrapper";
import styles from "./styles";
import Pagination from "../../../../component/Pagination";

const FeaturedCards = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [perPage] = useState(3); // Adjusted perPage to 3 for demonstration
  const [totalPages, setTotalPages] = useState(1);

  const user_id = localStorage.getItem("uid");

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/course?page=${page}&size=${perPage}`, config);

      console.log("Backend Response:", response.data);

      const totalCourses = response.data?.totalPages || 1;
      const fetchedCourses = response.data?.courses || [];

      console.log("Fetched Courses:", fetchedCourses);

      setCourses(fetchedCourses);
      setTotalPages(totalCourses);
      setLoading(false);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Error loading courses");
      setLoading(false);
    }
  };

  const CourseDetails = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/product/${id}`, {
        ...config,
        params: { user_id: user_id },
      });
      setLoading(false);
      navigate("/user/course-details", {
        state: { selectedCourses: response.data },
      });
    } catch (error) {
      console.error(error);
      setError("Error loading course details");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [page, perPage]);

  useEffect(() => {
    console.log("Courses State:", courses);
  }, [courses]);

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Box>
          <Wrapper>
            <Grid
              container
              rowSpacing={4}
              columnSpacing={3}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
            {Array.isArray(courses) && courses.map((course, index) => (
                <Grid item xs={4} sm={4} md={4} key={index}>
                  <Card sx={styles.card}>
                    <Box sx={styles.blockPhoto}>
                      <Box
                        component="div"
                        sx={{
                          width: "100%",
                          height: "0",
                          paddingBottom: "56.25%",
                          position: "relative",
                          background:
                            course.image && course.image.length > 0
                              ? `url(${course.image[0].url}) no-repeat center center`
                              : undefined,
                          backgroundSize: "cover",
                        }}
                      />
                      <Box sx={styles.language}>{course.name}</Box>
                    </Box>
                    <Box sx={{ textAlign: "center", m: "24px 0" }}>
                      {course.title}
                    </Box>
                    <Divider sx={styles.divider} />
                    <Box sx={styles.footerCard}>
                      <Box sx={styles.price}>Rs{course.price}</Box>
                      <Link sx={styles.link}>
                        <Box
                          onClick={() => CourseDetails(course._id)}
                          component="span"
                          sx={{ mr: "5px" }}
                        >
                          enroll now
                        </Box>
                        <Box component="img" src={plus} />
                      </Link>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Wrapper>

          <Box mt={2} display="flex" justifyContent="center">
            <Pagination
              totalItems={totalPages * perPage}
              itemsPerPage={perPage}
              currentPage={page}
              onPageChange={(event, newPage) => {
                setPage(newPage);
                fetchCourses(); // Trigger fetchCourses on page change
              }}
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default FeaturedCards;