import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductById } from "../api/apis";
import Breadcrumb from "../components/Breadcrumb";

import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Product = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState('');

    const GetProduct = () => {
        getProductById(productId)
            .then((res) => {
                setProduct(res.data);
            })
    }

    useEffect(() => {
        GetProduct();
    }, []);

    return (
        <Grid container
            sx={{
                padding: "2em",
                background: 'linear-gradient(45deg, rgba(237,241,250,1) 70%, rgba(226,174,234,1) 96%)'
            }}
        >
            <Grid item container
                xs={12}
                sx={{
                    display: "flex",                    
                    justifyContent: "center",
                    px: '2em'
                }}
            >
                <Grid item
                    xs={8}
                >
                    <Breadcrumb
                        name={product.name}
                        id={product._id}
                    />
                </Grid>
            </Grid>
            <Grid item container
                xs={12}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Grid
                    item
                    xs={9}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Grid
                        sx={{
                            p: "2em",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: 'center'
                        }}
                    >
                        <CardMedia
                            component="img"
                            alt={product.name}
                            image={product.image}
                            sx={{
                                height: "fit-content",
                                mx: "2em",
                                my: "1em",
                                maxWidth: "60vh",
                                overflow: "hidden",
                                borderRadius: "2em",
                            }}
                        />
                        <CardContent
                            sx={{
                                maxWidth: "45%",
                                px: "3em",
                                textAlign: "start",
                                fontFamily: 'Roboto, sans-serif',
                            }}
                        >
                            <Typography gutterBottom variant="h5" 
                                sx={{
                                    mb: '1em',
                                    color: '#31312f'
                                }}
                            >
                                <b>{product.name}</b>
                            </Typography>
                            <Typography variant="body1" 
                                sx={{
                                    mb: '1em',
                                    textAlign: 'justify',
                                    color: '#979aa5'
                                }}
                            >
                                {product.description}
                            </Typography>
                            <Typography variant="h4" 
                                sx={{
                                    my: '1em',
                                    textAlign: 'start',
                                    fontWeight: 'bold',
                                    color: '#31312f'
                                }}
                            >
                                ${product.price}
                            </Typography>
                            <Typography variant="body1"
                                sx={{
                                    mb: '1em',
                                    color: '#979aa5'
                                }}
                            >
                                Rating: {product.rating}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    );
}

export default Product;
