import React, { useState } from 'react';
import { useDropzone } from 'react-drag-drop-files';

const AddListing = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');
  const [pictures, setPictures] = useState([]);

  const { dropzoneProps, files } = useDropzone({
    onDrop: (droppedFiles) => {
      // Handle dropped files
      console.log('Dropped files:', droppedFiles);
      setPictures([...pictures, ...droppedFiles]);
    },
  });

  const handleAddListing = async () => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('size', size);
      formData.append('gender', gender);
      formData.append('category', category);
      pictures.forEach((file, index) => {
        formData.append(`picture${index + 1}`, file);
      });

      const response = await fetch('http://localhost:3001/graphql', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Listing added successfully');
        // Redirect or perform any other actions after successful listing addition
      } else {
        console.error('Failed to add listing');
      }
    } catch (error) {
      console.error('Error during listing addition:', error);
    }
  };

  return (
    <div>
      <h1>Add Listing</h1>
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        <label>Price:</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />

        <label>Size:</label>
        <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />

        <label>Gender:</label>
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />

        <label>Category:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />

        {/* Dropzone for pictures */}
        <label>Pictures:</label>
        <div {...dropzoneProps} style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center', cursor: 'pointer' }}>
          <p>Drag and drop files here, or click to select files</p>
        </div>

        {/* Display selected files */}
        {pictures.length > 0 && (
          <div>
            <h3>Selected Pictures:</h3>
            <ul>
              {pictures.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}

        <button type="button" onClick={handleAddListing}>
          Add Listing
        </button>
      </form>
    </div>
  );
};

export default AddListing;
