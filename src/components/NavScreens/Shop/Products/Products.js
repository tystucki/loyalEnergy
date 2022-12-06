import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import NavBar from "../NavBar/NavBar";
import useStyles from "./styles";
import Banner from "../NavBar/Banner";

const products = [
  {
    id: 1,
    name: "Wave",
    description: "Only 99 Made",
    price: "$45.00",
    image: "../../../../images/shirt3.jpeg",
  },
  {
    id: 2,
    name: "Classic",
    description: "Classic LOYAL Tee",
    price: "$25.00",
    image: "../../../../images/shirt2.jpeg",
  },
  {
    id: 3,
    name: "Ride or Die ",
    description: "Ride or Die Loyal T-Shirt",
    price: "$35.00",
    image: "../../../../images/shirt1.jpeg",
  },
  {
    id: 4,
    name: "Jacket",
    description: "Black windbreaker",
    price: "$65.00",
    image: "../../../../images/jacket1.jpeg",
  },
  {
    id: 5,
    name: "Dad Hat",
    description: "LOYAL Dad Hat",
    price: "$25.00",
    image: "../../../../images/hat1.jpeg",
  },
  
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <NavBar />
      <Banner />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
