import React, { useState, useEffect } from 'react';


const ProductPage = () => {
  
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `
        query {
          listing() {
            name
            price
            description
            category
            gender
            

        
          }
        }
      `;

      try {
        const response = await fetch('http://localhost:3001/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });

        const result = await response.json();
        setProduct(result.data.listing);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, );

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>{product.category}</p>
      <p>{product.gender}</p>
    </div>
  );
};

export default ProductPage;
