import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

const ListingItem = ({
  title,
  description,
  price,
  size,
  gender,
  category,
  pictures,
  isHomePage,
}) => {
  return (
    <Card>
      {isHomePage ? (
        <Card.Img
          variant="top"
          src={`http://localhost:3001/uploads/${pictures[0]}`}
          alt={title}
        />
      ) : (
        <div className="image-gallery">
          {pictures.map((picture, index) => (
            <img
              key={index}
              src={`http://localhost:3001/uploads/${picture}`}
              alt={`Picture ${index}`}
            />
          ))}
        </div>
      )}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Price: ${price}</Card.Text>
        <Card.Text>Size: {size}</Card.Text>
        <Card.Text>Gender: {gender}</Card.Text>
        <Card.Text>Category: {category}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

ListingItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  size: PropTypes.string,
  gender: PropTypes.string,
  category: PropTypes.string,
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  isHomePage: PropTypes.bool,
};

export default ListingItem;
