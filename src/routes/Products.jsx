import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {Card, CardActions, CardContent, CardMedia, Button, Typography, Grid} from '@mui/material';

import { getProducts } from '../api/apis.js';

//import { productos } from '../data/data.js';

function Products() {
    const [productos, setProductos] = useState([]);

    const getProductList = async () => {
        await getProducts()
            .then((res) => {
                setProductos(res.data);
            });
    }

    useEffect(() => {
        getProductList();
    }, []);

    console.log(productos);

    const disponibilidad = (producto) => {
        if (producto.stockQuantity > 0) {
            return <div>Hay productos disponibles</div>;
        } else {
            return <div>No hay productos disponibles</div>;
        }
    };

    return (
        <>
           {/*  {productos.map((producto) => (
                <div key={producto.id}>
                    <Link to={`/product/${producto.id}`}>
                        <div>{producto.name}</div>
                        <img src={producto.image} alt={producto.name} />
                        <div>{producto.price}</div>
                        <div>{producto.rating}</div>
                        <div>{producto.category}</div>
                        <div>{producto.description}</div>
                        {disponibilidad(producto)}
                    </Link>
                </div>
            ))} */}
           <Grid container
                xs={12}
                sx={{
                    width: '100%',
                    py: '2em',
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4
                }}
           >
           {productos.map((producto) => (
                <Grid item 
                    key={producto._id}
                >
                    <Card sx={{ maxWidth: 345, maxHeight: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://target.scene7.com/is/image/Target/GUEST_8d80b7b0-7a6b-40f6-8fc7-edeb7656d79f?wid=488&hei=488&fmt=pjpeg"
                            title={producto.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {producto.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {producto.description}
                            </Typography>
                        </CardContent>
                        <CardActions
                            sx={{
                                px: 2,
                                display:'flex',
                                justifyContent:'space-between',
                                alignItems:'center'
                            }}
                        >
                            <Typography variant="body2" color="text.secondary">
                                {disponibilidad(producto)}
                            </Typography>
                            <Button size="small">Add to cart</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
           </Grid>
        </>
    );
}

export default Products;
