import { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/client";
import { EDIT_LISTING_MUTATION } from "../utils/mutations";

const EditListingForm = ({ listingId, initialData }) => {
  const [formData, setFormData] = useState(initialData);
  const [editListing] = useMutation(EDIT_LISTING_MUTATION);

  const handleEditListing = async () => {
    try {
      const { data } = await editListing({
        variables: {
          id: listingId,
          ...formData,
        },
      });

      console.log("Listing edited:", data.editListing);
    } catch (error) {
      console.error("Error editing listing:", error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      {/*put form here */}
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleInputChange}
      />
      <button onClick={handleEditListing}>Edit Listing</button>
    </div>
  );
};

EditListingForm.propTypes = {
  listingId: PropTypes.string.isRequired,
  initialData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    size: PropTypes.string,
    gender: PropTypes.string,
    category: PropTypes.string,
    pictures: PropTypes.arrayOf(PropTypes.string),
    active: PropTypes.bool,
  }).isRequired,
};

export default EditListingForm;
