import { useState } from 'react';
import React from 'react';
import { Container, TextField, Button, Select, MenuItem, InputLabel, Input, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  submitButton: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const categories = [
  'Arts & Crafts',
  'Business',
  'Computer Science',
  'Cooking',
  'Dance',
  'Music',
  'Photography',
  'Sports',
  'Writing'
];

const EditCourse = () => {
const classes = useStyles();
  const [courses, setCourses] = useState([]);

  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <h2>Create a Course</h2>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="price"
            label="Price"
            name="price"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="courseLink"
            label="Course Link"
            name="courseLink"
          />
          {/* <InputLabel htmlFor="category">Category</InputLabel> */}
          <Select
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="category"
            name="category"
            displayEmpty
            defaultValue=""
          >
            <MenuItem value="">
              <em>Select a category</em>
            </MenuItem>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
          <InputLabel htmlFor="image">Image</InputLabel>
          <Input
            type="file"
            id="image"
            name="image"
            required
            fullWidth
            margin="normal"
          />
         <Button
  type="submit"
  fullWidth
  variant="contained"
  className={classes.submitButton}
  style={{ backgroundColor: '#930050', color: 'white' }}
>
  Edit
</Button>

        </form>
      </div>
    </Container>
  );
};

export default EditCourse;
