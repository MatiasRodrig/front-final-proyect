import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductById } from "../api/apis";

import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';

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
            }}
        >
            <Grid item
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
                    <Card
                        sx={{
                            boxShadow: 3,
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
                                //backgroundColor: "rgb(0, 255, 255)",
                                maxWidth: "45%",
                                px: "3em",
                                textAlign: "start",
                            }}
                        >
                            <Typography gutterBottom variant="h5" component="div" 
                                sx={{
                                    mb: '1em',
                                    //textAlign: 'justify',
                                    fontWeight: 'bold'
                                }}
                            >
                                <b>{product.name}</b>
                            </Typography>
                            <Typography variant="body1" 
                                sx={{
                                    mb: '1em',
                                    textAlign: 'justify',
                                    fontWeight: 'light'
                                }}
                            >
                                {product.description}
                            </Typography>
                            <Typography variant="h4" 
                                sx={{
                                    my: '1em',
                                    textAlign: 'start',
                                    fontWeight: 'bold'
                                }}
                            >
                                ${product.price}
                            </Typography>
                            <Typography variant="body1" mb={'1em'}>
                                Rating: {product.rating}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid >
    );
}

export default Product;
