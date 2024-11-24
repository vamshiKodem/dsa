const products = [
  {
    id: 1,
    name: "Laptop",
    price: 900,
    category: "Electronics",
    discount: 10,
  },
  {
    id: 2,
    name: "Headphones",
    price: 50,
    category: "Accessories",
    discount: 15,
  },
  {
    id: 3,
    name: "Smartphone",
    price: 700,
    category: "Electronics",
    discount: 5,
  },
  {
    id: 4,
    name: "Desk Chair",
    price: 120,
    category: "Furniture",
    discount: 20,
  },
  {
    id: 5,
    name: "Tablet",
    price: 300,
    category: "Electronics",
    discount: 8,
  },
  {
    id: 6,
    name: "Keyboard",
    price: 40,
    category: "Accessories",
    discount: 12,
  },
  {
    id: 7,
    name: "Water Bottle",
    price: 15,
    category: "Home",
    discount: 25,
  },
  {
    id: 8,
    name: "Smartwatch",
    price: 250,
    category: "Electronics",
    discount: 10,
  },
  {
    id: 9,
    name: "Shoes",
    price: 80,
    category: "Fashion",
    discount: 18,
  },
  {
    id: 10,
    name: "Book",
    price: 20,
    category: "Books",
    discount: 5,
  },
  {
    id: 11,
    name: "Gaming Mouse",
    price: 60,
    category: "Accessories",
    discount: 12,
  },
  {
    id: 12,
    name: "Sofa",
    price: 800,
    category: "Furniture",
    discount: 15,
  },
  {
    id: 13,
    name: "Bluetooth Speaker",
    price: 120,
    category: "Electronics",
    discount: 7,
  },
  {
    id: 14,
    name: "T-Shirt",
    price: 25,
    category: "Fashion",
    discount: 10,
  },
  {
    id: 15,
    name: "Refrigerator",
    price: 600,
    category: "Appliances",
    discount: 5,
  },
  {
    id: 16,
    name: "Blender",
    price: 45,
    category: "Home Appliances",
    discount: 20,
  },
  {
    id: 17,
    name: "Desk Lamp",
    price: 35,
    category: "Furniture",
    discount: 12,
  },
  {
    id: 18,
    name: "Running Shoes",
    price: 90,
    category: "Fashion",
    discount: 18,
  },
  {
    id: 19,
    name: "Camera",
    price: 750,
    category: "Electronics",
    discount: 8,
  },
  {
    id: 20,
    name: "Microwave",
    price: 200,
    category: "Appliances",
    discount: 10,
  },
];

// sort is based on price or name
// category is optional
const getFilteredProducts = (
  products,
  minPrice,
  maxPrice,
  category,
  sortBy
) => {
  let output = products.filter((product) => {
    const discountPrice = product.discount
      ? product.price - (product.price * product.discount) / 100
      : product.price;
    if (discountPrice > minPrice && discountPrice < maxPrice) {
      return {
        id: product.id,
        name: product.name,
        price: discountPrice,
        category: product.category,
      };
    }
  });

  output = output.map((product) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price - (product.price * product.discount) / 100,
      category: product.category,
    };
  });

  if (category) {
    output = output.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (sortBy === "price") {
    output = output.sort((a, b) => a.price - b.price);
  } else if (sortBy === "name") {
    output = output.sort((a, b) => a.name.localeCompare(b.name));
  }
  return output;
};

// sort is based on price or name
// category is optional
const getFilteredProductsOptimized = (
  products,
  minPrice,
  maxPrice,
  category,
  sortBy
) => {
  let output = products.reduce((acc, product) => {
    const discountedPrice = product.discount
      ? product.price - (product.price * product.discount) / 100
      : product.price;
    if (discountedPrice >= minPrice && discountedPrice <= maxPrice) {
      if (
        category &&
        category.toLowerCase() === product.category.toLowerCase()
      ) {
        acc.push({
          id: product.id,
          name: product.name,
          price: discountedPrice,
          category: product.category,
        });
      }
    }

    return acc;
  }, []);

  if (sortBy === "price") {
    output = output.sort((a, b) => a.price - b.price);
  } else if (sortBy === "name") {
    output = output.sort((a, b) => a.name.localeCompare(b.name));
  }
  return output;
};

// console.log(getFilteredProducts(products, 20, 100, "fashion", "name"));
