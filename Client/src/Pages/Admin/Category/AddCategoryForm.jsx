import { useState } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import axios from '../../../api/axios';
import requests from '../../../api/request';
function AddCategoryForm({ onAddCategory }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const config = {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // Send a POST request to the server's API endpoint with the new category data
      const response = await axios.post(requests.addCatory, { name, description },config);
      if(response.data.success){
        window.location="/admin/category"
      }

      // Call the `onAddCategory` callback function with the new category data returned from the server
      onAddCategory(response.data);

      // Clear the form input fields
      setName('');
      setDescription('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <TextField
        label="Category Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        label="Category Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Add Category
      </Button>
    </Box>
  );
}

export default AddCategoryForm;
