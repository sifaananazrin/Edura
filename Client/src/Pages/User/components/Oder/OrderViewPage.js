import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from '../../../../api/axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Grid,
  IconButton,
  Box,
  Button
} from '@material-ui/core';

const OrderViewPage = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const [order, setOrder] = useState([]);
  const [selectedCouser, setSelectedCouser] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");
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
      })
      .catch((error) => console.error(error));
  }, [uid]);

  const handleClick = (link) => {
    setTrailerUrl(link);
  };
  
  // const handleCoursedata = (name) => {
    
  // };

  const handleCoursedata = async (name) => {
    try {
      const response = await axios.get(`/api/product/${name}`);
      setSelectedCouser(response.data);
      navigate('/booking', { state: { selectedCouser: response.data } });
    } catch (error) {
      console.log(error);
    }
  }

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  if (!order) {
    return <div>No course purchased</div>
  }

  return (
    <>
      {order.map((item) => (
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Box
            sx={{
              position: "relative",
              width: "200px",
              height: "200px",
              marginRight: "48px",
            }}
          >
            <Box
              component="img"
              src={item.image[0].url}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <IconButton>
                <PlayCircleFilledIcon
                  onClick={() => handleClick(item.link)}
                  sx={{ fontSize: 48 }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              sx={{ marginBottom: "16px" }}
            >
              {item.name}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
               onClick={() => handleCoursedata(item.name)}
                variant="outlined"
                sx={{ marginRight: "12px" }}
              >
                View Course Details
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
      {trailerUrl && (
  <YouTube
    videoId={trailerUrl.replace("https://youtu.be/", "")}
    opts={opts}
  />
)}
    </>
  );
  
};

export default OrderViewPage;
