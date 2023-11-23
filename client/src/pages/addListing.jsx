import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_LISTING } from "../../utils/mutations";

const CreateListing = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [pictures, setPictures] = useState([]);

  // UseMutation hook to execute the mutation
  const [createListing] = useMutation(CREATE_LISTING);

  const handleDrop = (files) => {
    // Handle the dropped files (images) and update the state
    setPictures([...pictures, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Execute the addListing mutation with the form data
      const { data } = await createListing({
        variables: {
          title,
          description,
          price,
          size,
          gender,
          category,
          pictures,
        },
      });

      console.log("Listing added:", data.createListing);

      // Clear the form after successful submission
      setTitle("");
      setDescription("");
      setPrice(0);
      setSize("");
      setGender("");
      setCategory("");
      setPictures([]);
    } catch (error) {
      console.error("Error adding listing:", error.message);

    }
  };

  return (
    <div>
      <h2>Add Listing</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </label>
        <br />
        <label>
          Size:
          <input
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </label>
        <br />
        <label>
          Gender:
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <br />

        <div>
          <p>Drag and drop images here:</p>
          <div
            className="drop-zone"
            onDrop={(e) => {
              e.preventDefault();
              handleDrop(Array.from(e.dataTransfer.files));
            }}
            onDragOver={(e) => e.preventDefault()}
          >
            {/* Display uploaded images */}
            {pictures.map((file, index) => (
              <div key={index}>
                {file.name}
                <img
                  src={URL.createObjectURL(file)}
                  alt={`uploaded-${index}`}
                  style={{
                    width: "100px",
                    height: "100px",
                    marginRight: "10px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <br />
        <button type="submit">Add Listing</button>

      </form>
    </div>
  );
};

export default CreateListing;
