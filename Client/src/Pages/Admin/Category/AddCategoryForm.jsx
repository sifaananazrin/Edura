import { useState } from 'react';
import { TextField, Button, Box } from '@material-ui/core';

function AddCategoryForm({ onAddCategory }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add category using onAddCategory prop
    onAddCategory({ name, description });
    // Clear form inputs
    setName('');
    setDescription('');
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
