import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';

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

    //console.log(productos);

    const disponibilidad = (producto) => {
        if (producto.stockQuantity > 0) {
            return <div>Hay productos disponibles</div>;
        } else {
            return <div>No hay productos disponibles</div>;
        }
    };

    return (
        <>
            <Grid container
                sx={{
                    width: '100%',
                    py: '2em',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Grid item
                    xs={12}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'start'
                    }}
                >
                    {/* TRAER TODOS LOS PRODUCTOS. LIMPIAR FILTRO */}
                    <Button
                        onClick={getProductList}
                    >
                        Todos
                    </Button>
                    {/* TRAER SOLO PRODUCTOS CUYA CATEGORIA SEA DRESSERS */}
                    <Button
                        onClick={
                            () => setProductos(productos.filter(producto => producto.category.includes('dressers')))
                        }
                    >
                        Dressers
                    </Button>
                </Grid>
                <Grid container
                    xs={10}
                    sx={{
                        width: '100%',
                        py: '2em',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 4
                    }}
                >
                    {productos.map((producto) => (
                        <Grid item
                            key={producto._id}
                        >
                            <Card 
                                sx={{ 
                                    maxWidth: 345,
                                    minWidth: 345,
                                    maxHeight: 345 
                                }}
                            >
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={producto.image}
                                    title={producto.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {(producto.name).substring(0, 50).concat('...')}
                                    </Typography>
                                    {/*  <Typography variant="body2" color="text.secondary">
                                    {(producto.description).substring(0, 100).concat('...')}
                                </Typography> */}
                                </CardContent>
                                <CardActions
                                    sx={{
                                        px: 2,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Typography variant="body2" color="text.secondary">
                                        {disponibilidad(producto)}
                                    </Typography>
                                    <Button size="small" href={`/product/${producto._id}`}>Ver producto</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </>
    );
}

export default Products;
