import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Dashboard, PeopleAlt, ViewList } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import ViewCoursesTable from '../Teacher/ViewCoursesTable';

function TeacherSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTable, setShowTablw] = useState(false)
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };


  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  const handleAddCourse = () => {
    setShowTablw(true)
  };

  return (
    <>
    {showTable? <ViewCoursesTable /> : ''}
      <ListItem button onClick={handleDrawerOpen}>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={handleDrawerClose}
        PaperProps={{ style: { backgroundColor: '#000' } }}
      >
        <List>
          <ListItem button style={{ backgroundColor: '#fff' }} onClick={handleAddCourse}>
            <ListItemIcon>
              <ViewList />
            </ListItemIcon>
            <ListItemText primary="View Course" />
          </ListItem>
         
          <ListItem button style={{ backgroundColor: '#fff' }}>
            <ListItemIcon>
              <PeopleAlt />
            </ListItemIcon>
            <ListItemText primary="My Students" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default TeacherSidebar;
