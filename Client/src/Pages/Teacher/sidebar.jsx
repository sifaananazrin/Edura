import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewCourseTable from "./ViewCoursesTable"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'blue', // Set background color
  },
  toolbar: theme.mixins.toolbar,
}));

const Sidebar = () => {
  const classes = useStyles();
  const [selectedItem, setSelectedItem] = useState('View Courses'); // Initialize state for selected item in sidebar

  const handleListItemClick = (event, text) => {
    setSelectedItem(text); // Update selected item in state
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {[{ text: 'View Courses', icon: <ViewListIcon />, component: <ViewCourseTable /> }].map((item, index) => (
            <ListItem
              button
              key={item.text}
              selected={selectedItem === item.text} // Highlight selected item in sidebar
              onClick={(event) => handleListItemClick(event, item.text)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <ViewCourseTable /> {/* Render the ViewCourseTable component */}
    </div>
  );
};

export default Sidebar;
