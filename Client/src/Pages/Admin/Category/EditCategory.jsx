import { useState } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import axios from '../../../api/axios';
import requests from '../../../api/request';
import { useLocation } from 'react-router-dom';
function EditCategory({ onAddCategory }) {
    const location = useLocation();
    const selected = location.state.selected;
    const categories = selected.categories;
  
    const config = {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    };
    // Initialize state with the current category values
    const [name, setName] = useState(categories.name);
    const [description, setDescription] = useState(categories.description);
  
    const handleSubmit = async (id) => {
        // event.preventDefault();
        
        try {
          // Send a POST request to the server's API endpoint with the new category data
          const response = await axios.put(`/admin/editcategory/${id}`, {
            name: name,
            description: description,
          },config);
          if (response) {
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
      <Box component="form" style={{ backgroundColor: 'white', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
  
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '20px' }}
          onClick={() => handleSubmit(categories._id)}
        >
          Edit Category
        </Button>
      </Box>
    );
  }
  

export default EditCategory;
