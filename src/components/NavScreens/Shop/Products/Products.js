import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import NavBar from '../NavBar/NavBar';
import useStyles from './styles';

const products = [
    { id: 1, name: 'Shirt', description: 'Classic LOYAL Tee', sizes: 'small | medium | large | x-large ', price: '$15.00', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqquMetclCxB18KJm1gmAmQWGiH8GaI-8Ml2ykQVPYXjfI5DuM674O4sHtQH-zmXrQYhQ&usqp=CAU' },
    { id: 2, name: 'Hoodie', description: 'Classic LOYAL Hoodie', price: '$40.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmVLTwDupGJuNN_l31PZf4HMFm2MOqCQ1c7zcvz5RZXYF9XR55usyZaqSBHl25kj5S70&usqp=CAU' },
    { id: 3, name: 'Polo', description: 'Classic LOYAL Polo', price: '$20.00', image: 'https://i.ebayimg.com/images/g/tr8AAOSw~rxicCyB/s-l500.jpg' },
];

const Products = () => {
    const classes = useStyles();

    return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <NavBar />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))} 
        </Grid>
    </main>
    )
}

export default Products