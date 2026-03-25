// // const express = require("express");
// // const app = express();

// // //mockup DB
// // let students = [
// //   {
// //     id: 1,
// //     name: "Obed",
// //     gender: "male",
// //     courses: ["Devops"],
// //   },
// //   {
// //     id: 1,
// //     name: "chris",
// //     gender: "male",
// //     courses: ["Devops"],
// //   },
// //   {
// //     id: 1,
// //     name: "jude",
// //     gender: "male",
// //     courses: ["Devops"],
// //   },
// // ];

// // // configure server to use json
// // app.use(express.json());

// // //get request
// // app.get("/students", (req, res) => {
// //   res.send(students);
// // });

// // //// post request
// // app.post("/students", (req, res) => {
// //   // destructuring icoming data
// //   const { name, gender, courses } = req.body;
// //   if (!name || !gender || !courses) {
// //     res
// //       .status(400)
// //       .send("All fields are required, like name, gender and courses");
// //   }

// //   //create new student obeject
// //   const newStudent = {
// //     id: students.length + 1,
// //     name,
// //     gender,
// //     courses,
// //   };

// //   //add new student to the database
// //   students.push(newStudent);
// //   //JSON.stringify() converts a Javascript object or value to a JSON string
// //   //res.JSON converts json to object
// //   res
// //     .status(201)
// //     .send(`this is the new students data ${JSON.stringify(newStudent)}`);
// // });

// // // starting the server

// // app.listen(3000, () => {
// //   console.log("server is running");
// // });

// // // configure server to use json
// // app.use(express.json());

// // // starting the server

// // app.listen(3000, () => {
// //   console.log("server is running");
// // });

// // //

// // const express = require("express");
// // const app = express();

// // // configure server to use json
// // app.use(express.json());

// // // DATABASE PRODUCTS

// // let products = [
// //   {
// //     id: 1,
// //     name: "Nike Air Max 270",
// //     category: "Shoes",
// //     price: 85000,
// //     inStock: true,
// //     quantityAvailable: 15,
// //     description: "Comfortable running sneakers with air cushioning.",
// //     imageUrl:
// //       "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
// //   },

// //   {
// //     id: 2,
// //     name: "Men Slim Fit T-Shirt",
// //     category: "Clothing",
// //     price: 12000,
// //     inStock: true,
// //     quantityAvailable: 40,
// //     description: "Cotton slim-fit t-shirt available in multiple colors.",
// //     imageUrl:
// //       "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
// //   },

// //   {
// //     id: 3,
// //     name: "Women Leather Handbag",
// //     category: "Accessories",
// //     price: 45000,
// //     inStock: true,
// //     quantityAvailable: 8,
// //     description:
// //       "Premium leather handbag suitable for office and casual outings.",
// //     imageUrl:
// //       "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
// //   },

// //   {
// //     id: 4,
// //     name: "Adidas Slides",
// //     category: "Shoes",
// //     price: 18000,
// //     inStock: false,
// //     quantityAvailable: 0,
// //     description: "Comfortable everyday slides for indoor and outdoor use.",
// //     imageUrl: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
// //   },
// // ];

// // // MOCK DATABASE - ORDERS
// // let orders = [];

// // // GET PRODUCTS
// // app.get("/products", (req, res) => {
// //   res.send(products);
// // });

// // // ADD PRODUCT
// // app.post("/products", (req, res) => {
// //   const { name, category, price, quantityAvailable } = req.body;

// //   if (!name || !category || !price || !quantityAvailable) {
// //     return res.status(400).send("All fields required");
// //   }

// //   const newProduct = {
// //     id: products.length + 1,
// //     name,
// //     category,
// //     price,
// //     quantityAvailable,
// //     inStock: true,
// //   };

// //   products.push(newProduct);

// //   res.status(201).send(newProduct);
// // });

// // // PLACE ORDER
// // app.post("/orders", (req, res) => {
// //   const { productId, quantity } = req.body;

// //   if (!productId || !quantity) {
// //     return res.status(400).send("ProductId and quantity required");
// //   }

// //   const newOrder = {
// //     id: orders.length + 1,
// //     productId,
// //     quantity,
// //   };

// //   orders.push(newOrder);

// //   res.status(201).send(newOrder);
// // });

// // // VIEW ORDERS
// // app.get("/orders", (req, res) => {
// //   res.send(orders);
// // });

// // // START SERVER
// // app.listen(3000, () => {
// //   console.log("Server is running");
// // });

// const express = require("express");
// const app = express();
// const port = 4000;

// let products = [
//   {
//     id: 1,
//     name: "Nike Air Max 270",
//     category: "Shoes",
//     price: 85000,
//     inStock: true,
//     quantityAvailable: 15,
//     description: "Comfortable running sneakers with air cushioning.",
//     imageUrl:
//       "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
//   },

//   {
//     id: 2,
//     name: "Men Slim Fit T-Shirt",
//     category: "Clothing",
//     price: 12000,
//     inStock: true,
//     quantityAvailable: 40,
//     description: "Cotton slim-fit t-shirt available in multiple colors.",
//     imageUrl:
//       "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
//   },

//   {
//     id: 3,
//     name: "Women Leather Handbag",
//     category: "Accessories",
//     price: 45000,
//     inStock: true,
//     quantityAvailable: 8,
//     description:
//       "Premium leather handbag suitable for office and casual outings.",
//     imageUrl:
//       "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
//   },

//   {
//     id: 4,
//     name: "Adidas Slides",
//     category: "Shoes",
//     price: 18000,
//     inStock: false,
//     quantityAvailable: 0,
//     description: "Comfortable everyday slides for indoor and outdoor use.",
//     imageUrl: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
//   },
// ];

// app.use(express.json());
// app.get("/products", (req, res) => {
//   res.status(200).json(products);
// });

// // app.post("/products", (req, res) => {
// //   //destructure request body to get product details
// //   const { name, category, price, quantityAvailable, description, imageUrl } =
// //     req.body;

// //   if (!name || !category || !price || !description || !imageUrl) {
// //     res.status(400).json({ msg: "Fill in all product data" });
// //   };

// //   app.patch('/product/:id', (req,res)=>{
// //     const id= parseInt(req.params.id)

// //     const {name, category, price,quantityAvailable, description, imageUrl}= req.body

// //     const product=products.find(p=>p.id==id)
// //     product={
// //       name:name || product.name,
// //       category: category || product.category
// //     }

// //   })

// //   const newProduct = {
// //     id: products.length + 1,
// //     name,
// //     category,
// //     price,
// //     quantityAvailable,
// //     inStock: quantityAvailable > 0 ? true : false,
// //     description,
// //     imageUrl,
// //   };

// //   products.push(newProduct);
// //   res.status(200).json(newProduct);
// // });

// app.patch("/products/:id", (req, res) => {
//   const id = parseInt(req.params.id);

//   // 1. Find the index (position) of the product in the array
//   const index = products.findIndex((p) => p.id === id);

//   // 2. Safety check: if product doesn't exist, stop here
//   if (index === -1) {
//     return res.status(404).json({ message: "Product not found" });
//   }

//   // 3. Update the product
//   // We use the spread operator (...) to keep old values and overwrite with new ones
//   const updatedProduct = {
//     ...products[index], // Original data
//     ...req.body, // New data from the request
//   };

//   // 4. Update the "inStock" logic based on new quantity
//   if (req.body.quantityAvailable !== undefined) {
//     updatedProduct.inStock = updatedProduct.quantityAvailable > 0;
//   }

//   // 5. Put the updated product back into the array
//   products[index] = updatedProduct;

//   // 6. FINISH the request by sending back the updated product
//   res.status(200).json(updatedProduct);
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require("express");
const app = express();

app.use(express.json());

//MOCK DB

let carts = [
  {
    id: 2,
    name: "Men Slim Fit T-Shirt",
    category: "Clothing",
    price: 12000,
    inStock: true,
    quantityAvailable: 40,
    description: "Cotton slim-fit t-shirt available in multiple colors.",
    imageUrl:
      "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
  },
  {
    id: 3,
    name: "Women Leather Handbag",
    category: "Accessories",
    price: 45000,
    inStock: true,
    quantityAvailable: 8,
    description:
      "Premium leather handbag suitable for office and casual outings.",
    imageUrl:
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
  },
  {
    id: 4,
    name: "Adidas Slides",
    category: "Shoes",
    price: 18000,
    inStock: false,
    quantityAvailable: 0,
    description: "Comfortable everyday slides for indoor and outdoor use.",
    imageUrl: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
  },
];

// test route
app.get("/", (req, res) => {
  res.send("API is running");
});

//Main API route
app.get("/carts", (req, res) => {
  res.send(carts);
});

//get single product
app.get("/carts/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = carts.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).send("Product not found in Cart");
  }

  res.send(product);
});

// add new product

app.post("/carts", (req, res) => {
  const { name, category, price, quantityAvailable, description, imageUrl } =
    req.body;

  // validation
  if (!name || !category || !price || !quantityAvailable) {
    return res.status(400).send("All required fields must be provided");
  }

  const newProduct = {
    id: carts.length + 1,
    name,
    category,
    price,
    quantityAvailable,
    inStock: true,
    description,
    imageUrl,
  };

  carts.push(newProduct);

  res.status(201).send(newProduct);
});

app.put("/carts/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  const product = carts.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).send("Product not found");
  }

  const { name, category, price, quantityAvailable, description, imageUrl } =
    req.body;

  // update fields
  product.name = name || product.name;
  product.category = category || product.category;
  product.price = price || product.price;
  product.quantityAvailable = quantityAvailable || product.quantityAvailable;
  product.description = description || product.description;
  product.imageUrl = imageUrl || product.imageUrl;

  res.send(product);
});

app.delete("/carts/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  const product = carts.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).send("Product not found");
  }

  // remove product using filter
  products = carts.filter((p) => p.id !== productId);

  res.send("Product deleted successfully");
});

//starts server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
