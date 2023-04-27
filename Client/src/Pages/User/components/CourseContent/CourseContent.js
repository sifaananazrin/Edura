import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Radio from '@mui/material/Radio'
import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'

//IMPORTING ICONS
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'
import DescriptionIcon from '@mui/icons-material/Description'
import styles from './styles'
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const CourseContent = ({list }) => {

  // console.log(list)
  const [openCollapse, setOpenCollapse] = useState(false)
  const [trailerUrl, setTrailerUrl] = useState("");
  const handleClick = () => {
    setOpenCollapse(!openCollapse)
  }


  const handleClick2 = (item) => {
    setTrailerUrl(item.list);
    console.log(item.list)
    // console.log(link)
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };


  return (
    <Box sx={{ pt: '48px', minWidth: '299px' }}>
      <Box sx={styles.titleBlock}>
        <Typography sx={styles.title}>Course content</Typography>
        <Button onClick={handleClick}>Expand all </Button>
      </Box>

      <Card sx={styles.cardLesson}>
        <Box sx={styles.lesson}>
          {' '}
          <Box sx={styles.titleLesson}>
           
            <Typography>Chapters</Typography>
          </Box>
          <Box onClick={handleClick} sx={styles.btnCollapse}>
            Collapse
            <Box sx={styles.wrapperIcon}>
              {openCollapse ? (
                <ExpandLess sx={styles.icon} />
              ) : (
                <ExpandMore sx={styles.icon} />
              )}
            </Box>
          </Box>
        </Box>
        <Collapse in={openCollapse} timeout='auto'>
          <Box>
            <Box sx={styles.blockTopic}>
               topic
            
             
            </Box>
          </Box>
          <Box sx={styles.blockInfo}>
          {list.map((item, index) => (
  <Typography onClick={() => handleClick2(item)} sx={styles.titleInfo}>
    <DescriptionIcon />
    Lesson {index + 1}
  </Typography>
))}

          
          </Box>
         
        </Collapse>
      </Card>
      {trailerUrl && (
    <YouTube
videoId={typeof trailerUrl === "string" ? trailerUrl.replace("https://youtu.be/", "") : ""}

opts={opts}
/>

)}

    </Box>
    
  )


}

export default CourseContent


// import { useState } from 'react'
// import Typography from '@mui/material/Typography'
// import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
// import Card from '@mui/material/Card'
// import Radio from '@mui/material/Radio'
// import Collapse from '@mui/material/Collapse'
// import Divider from '@mui/material/Divider'

// //IMPORTING ICONS
// import ExpandMore from '@mui/icons-material/ExpandMore'
// import ExpandLess from '@mui/icons-material/ExpandLess'
// import DescriptionIcon from '@mui/icons-material/Description'
// import styles from './styles'
// import movieTrailer from 'movie-trailer';
// import YouTube from 'react-youtube';

// const CourseContent = ({list}) => {

//   console.log(list)
//   const [openCollapse, setOpenCollapse] = useState(false)
//   const [trailerUrl, setTrailerUrl] = useState("");
//   const handleClick = () => {
//     setOpenCollapse(!openCollapse)
//   }

//   const handleClick2 = (link) => {
//     setTrailerUrl(link);
//     // console.log(link)
//   };

//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   return (
//     <Box sx={{ pt: '48px', minWidth: '299px' }}>
//       <Box sx={styles.titleBlock}>
//         <Typography sx={styles.title}>Course content</Typography>
//         <Button onClick={handleClick}>Expand all</Button>
//       </Box>

//       <Card sx={styles.cardLesson}>
//         <Box sx={styles.lesson}>
//           {' '}
//           <Box sx={styles.titleLesson}>
//             <Typography>Chapters</Typography>
//           </Box>
//           <Box onClick={handleClick} sx={styles.btnCollapse}>
//             Collapse
//             <Box sx={styles.wrapperIcon}>
//               {openCollapse ? (
//                 <ExpandLess sx={styles.icon} />
//               ) : (
//                 <ExpandMore sx={styles.icon} />
//               )}
//             </Box>
//           </Box>
//         </Box>
//         <Collapse in={openCollapse} timeout='auto'>
//           <Box>
//             {list.map((link, index) => (
//               <Box key={index} sx={styles.blockTopic}>
//                 {link}
//               </Box>
//             ))}
//           </Box>
//           <Box sx={styles.blockInfo}>
//           {list.map((item, index) => (
//   <Typography onClick={() => handleClick2(item)} sx={styles.titleInfo}>
//     <DescriptionIcon />
//     Lesson {index + 1}
//   </Typography>
// ))}


          
//           </Box>
//         </Collapse>
//       </Card>

//       {/* {list.map((item, index) => (
//   <li key={index}>
//     <a href={item.list} target="_blank" rel="noopener noreferrer">
//       {item.list}
//     </a>
//   </li>
// ))} */}

//     </Box>
//   )
// }

// export default CourseContent
