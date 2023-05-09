function filterByCategory(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    };
  }
  
  // Example usage:
  const products = [
    { name: 'Shirt', category: 'Clothing' },
    { name: 'Trousers', category: 'Clothing' },
    { name: 'Hat', category: 'Accessories' },
    { name: 'Shoes', category: 'Footwear' }
  ];
  const filterByClothing = filterByCategory(products);
  
  console.log(filterByClothing('Clothing')); 
  console.log(filterByClothing('Accessories')); 
  