import { useState } from 'react';
import { TextField, Button, Box, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
// import {config} from "../../../Helpers/axiosAdminEndpoints"
function AddCourseForm({ onAddCourse, categories }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add course using onAddCourse prop
    onAddCourse({ name, description, category, price });
    // Clear form inputs
    setName('');
    setDescription('');
    setCategory('');
    setPrice('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} style={{ backgroundColor: 'white' }}>
      <TextField
        label="Course Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        label="Course Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        multiline
        rows={4}
      />
      <FormControl variant="outlined" margin="normal" fullWidth required>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          label="Category"
        >
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        type="number"
        inputProps={{ min: 0 }}
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginBottom: '16px' }}>
  Add Course
</Button>
    </Box>
  );
}

export default AddCourseForm;
