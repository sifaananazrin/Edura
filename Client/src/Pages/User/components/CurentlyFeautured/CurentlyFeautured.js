// import Typography from '@mui/material/Typography'
// import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import Divider from '@mui/material/Divider'
// import ListItem from '@mui/material/ListItem'
// import List from '@mui/material/List'
// import Grid from '@mui/material/Grid'
// import Button from '@mui/material/Button'

// //IMPORTING SVG'S
// import aprove from '../../../../../src/assets/aprove.svg'
// import close_item from '../../../../../src/assets/close-item-list.svg'

// import styles from './styles'

// const CurentlyFeatured = () => {
//   return (
//     <Box sx={{ pt: '96px' }}>
//       <Typography variant='h1' textAlign='center'>
//         featured course
//       </Typography>
//       <Typography variant='h2' textAlign='center' sx={styles.subTitle}>
//         curntly featured
//       </Typography>

//       <Grid
//         container
//         spacing={{ xs: 2, md: 3 }}
//         sx={{ justifyContent: 'center' }}
//         columns={{ xs: 4, sm: 8, md: 12 }}
//       >
//         <Grid item xs={4} sm={4} md={4}>
//           <Card sx={styles.card}>
//             <Typography sx={styles.titleCard}></Typography>
//             <Divider sx={styles.dividerCard} />
//             <List>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={aprove} />
                
//               </ListItem>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={aprove} />
//               </ListItem>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={aprove} />
             
//               </ListItem>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={aprove} />
//               </ListItem>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={aprove} />
//               </ListItem>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={aprove} />
               
//               </ListItem>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={close_item} />
              
//               </ListItem>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={close_item} />
               
//               </ListItem>
//             </List>
//             <Typography sx={styles.price}></Typography>
//             <Button sx={styles.btnCard}></Button>
//           </Card>
//         </Grid>
//         <Grid item xs={4} sm={4} md={4}>
//           <Card sx={styles.card}>
//             <Typography sx={styles.titleCard}></Typography>
//             <Divider sx={styles.dividerCard} />
//             <List>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={aprove} />
               
//               </ListItem>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={aprove} />
//               </ListItem>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={aprove} />
             
//               </ListItem>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={aprove} />
//               </ListItem>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={aprove} />
//               </ListItem>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={aprove} />
               
//               </ListItem>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={close_item} />
               
//               </ListItem>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={close_item} />
               
//               </ListItem>
//             </List>
//             <Typography sx={styles.price}></Typography>
//             <Button sx={styles.btnCard}></Button>
//           </Card>
//         </Grid>
//         <Grid item xs={4} sm={4} md={4}>
//           <Card sx={styles.card}>
//             <Typography sx={styles.titleCard}></Typography>
//             <Divider sx={styles.dividerCard} />
//             <List>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={aprove} />
                
//               </ListItem>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={aprove} />
//               </ListItem>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={aprove} />
              
//               </ListItem>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={aprove} />
//               </ListItem>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={aprove} />
//               </ListItem>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={aprove} />
                
//               </ListItem>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={aprove} />
               
//               </ListItem>
//               <ListItem sx={styles.listItem}>
//                 <Box component='img' src={aprove} />
                
//               </ListItem>
//             </List>
//             <Typography sx={styles.price}></Typography>
//             <Button sx={styles.btnCard}></Button>
//           </Card>
//         </Grid>
//       </Grid>
//     </Box>
//   )
// }

// export default CurentlyFeatured
// import React, { useState } from 'react';
// import { Typography, FormControl, RadioGroup, FormControlLabel, Radio, Button, Grid } from '@mui/material';

// const CurentlyFeatured = () => {
//   const [paymentMethod, setPaymentMethod] = useState('');

//   const handlePaymentChange = (event) => {
//     setPaymentMethod(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Payment Method: ${paymentMethod}`);
    // Add code for handling payment method selection
  // };

//   return (
//     <Grid container spacing={2} justifyContent="center">
//       <Grid item xs={12}>
//         <Typography variant="h4" align="center">
//           Payment Information
//         </Typography>
//       </Grid>
//       <Grid item xs={12}>
//         <form onSubmit={handleSubmit}>
//           <FormControl component="fieldset">
//             <RadioGroup aria-label="payment" name="payment" value={paymentMethod} onChange={handlePaymentChange}>
//               <FormControlLabel value="online" control={<Radio />} label="Online Payment" />
             
//             </RadioGroup>
//           </FormControl>
//           <Button variant="contained" type="submit" color="primary" fullWidth>
//            payment
//           </Button>
//         </form>
//       </Grid>
//     </Grid>
//   );
// };

// export default CurentlyFeatured;

import React from 'react'

function CurentlyFeautured() {
  return (
    <div>CurentlyFeautured</div>
  )
}

export default CurentlyFeautured
