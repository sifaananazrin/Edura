import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../../../api/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import StarIcon from "@mui/icons-material/Star";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import {
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Grid,
  IconButton,
  Box,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    maxWidth: 1200, // increase the maxWidth to 1200
    padding: theme.spacing(2),
  },
  card: {
    position: "relative",
    borderRadius: 8,
    overflow: "hidden",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "sc ale(1.05)",
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
    },
  },
  cardMedia: {
    height: 0,
    paddingTop: "56.25%",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  playIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    fontSize: 64,
    color: "white",
    opacity: 0.9,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      opacity: 1,
    },
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 600,
    margin: theme.spacing(2, 0),
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  detailsButton: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
}));

const OrderViewPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { orderId } = useParams();
  const [order, setOrder] = useState([]);
  const [selectedCouser, setSelectedCouser] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [rating, setRating] = useState(0);
  const uid = localStorage.getItem("uid");

  useEffect(() => {
    axios
      .get("/api/oderhistory", {
        params: {
          uid: uid,
        },
      })
      .then((response) => {
        console.log(response.data.userBooked);
        setOrder(response.data.userBooked);
        console.log(response.data.userBooked);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

const handleRatingClick = (value) => {
    setRating(value);
  };
  const handleClick = (course) => {
    if (typeof course.title === "string") {
      movieTrailer(course.title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          setSelectedCouser(course);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    
    <Box className={classes.root}>
      <Grid container spacing={3}>
        {order.map((course) => (
          <Grid
            item
            xs={12}
            sm={6}
            style={{ marginTop: "2rem" }}
            md={4}
            lg={3}
            key={course._id}
          >
            <Card className={classes.card} style={{ marginTop: "2rem" }}>
              <CardHeader title={course.title} />
              <CardMedia
                className={classes.cardMedia}
                image={course.image[0].url}
                title={course.title}
                onClick={() => handleClick(course)}
              >
                <IconButton
                  className={classes.playIcon}
                  aria-label="play"
                  onClick={() => handleClick(course)}
                >
                  <PlayCircleFilledIcon />
                </IconButton>
              </CardMedia>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {course.description}
                </Typography>
              </CardContent>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding={2}
              >
                <Typography variant="subtitle1" color="textPrimary">
                  {course.name}
                </Typography>
                <Typography variant="subtitle1" color="textPrimary">
                  {course.teachername}
                </Typography>
                <div>
                {[...Array(3)].map((_, i) => (
        <StarIcon
          key={i}
          style={{ color: i < rating ? "#fdd835" : "#e0e0e0" }}
          onClick={() => handleRatingClick(i + 1)}
        />
      ))}
                </div>
              </Box>

              <Button
                className={classes.detailsButton}
                variant="outlined"
                style={{ background: "#673F86" ,color:"white"}}
                fullWidth
                endIcon={<ArrowCircleRightIcon />}
                onClick={() => navigate(`/courses/${course._id}`)}
              >
                Details
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
      {trailerUrl && (
        <YouTube
          videoId={trailerUrl.replace("https://youtu.be/", "")}
          opts={opts}
        />
      )}
    </Box>
  );
};

export default OrderViewPage;
