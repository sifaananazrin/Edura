// import { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import UserTable from "../Admin/component/AdminUser/UserTable";

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//     backgroundColor: '#1A237E', // add background color here
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }));

// function Sidebar() {
//   const classes = useStyles();
//   const [open, setOpen] = useState(true);
//   const [selectedOption, setSelectedOption] = useState("dashboard"); // add this line

//   const toggleDrawer = () => {
//     setOpen(!open);
//   };

  

//   return (
//     <div className={classes.root}>
//       <Drawer
//         className={classes.drawer}
//         variant="persistent"
//         anchor="left"
//         open={open}
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//       >
//         <List>
//         <ListItem button onClick={() => setSelectedOption("dashboard")}>
//   <ListItemText primary="Dashboard" />
// </ListItem>
// <ListItem button onClick={() => setSelectedOption("users")}>
//   <ListItemText primary="Users" />
// </ListItem>
// <ListItem button onClick={() => setSelectedOption("products")}>
//   <ListItemText primary="Products" />
// </ListItem>

//         </List>
//       </Drawer>
//       <main className={classes.content}>
//         {selectedOption === "users" && <UserTable />}
//       </main>
//     </div>
//   );
// }

// export default Sidebar;
