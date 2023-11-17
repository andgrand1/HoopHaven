import React, { useState } from 'react';

const AddListing = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddListing = () => {
    // add listing code
  };

  return (
    <div>
      <h1>Add Listing</h1>
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="button" onClick={handleAddListing}>Add Listing</button>
      </form>
    </div>
  );
};

export default AddListing;
