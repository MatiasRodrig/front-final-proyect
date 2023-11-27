import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { addProductToCart, getProductById } from "../api/apis";

import Breadcrumb from "../components/BreadcrumbProduct";
import Navbar from "../components/Navbar";

import { Box, Button, CardContent, CardMedia, Grid, InputBase, InputLabel, Rating, Typography } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Product = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState('');

    const [value, setValue] = useState(2.5);
    const [quantity, setQuantity] = useState(1);

    const [cartId, setCartId] = useState();

    const [shouldNavigate, setShouldNavigate] = useState(false);
    const navigate = useNavigate();

    const GetProduct = () => {
        getProductById(productId)
            .then((res) => {
                setProduct(res.data);
                setValue(res.data.rating || 2.5);
            })
    }

    //TODO: TOAST CUANDO REQUIERE LOGUEARSE. SIN TOKEN NO SE PUEDE AÑADIR PRODS AL CARRITO

    const AddProductOnly = () => {
        addProductToCart(productId, quantity)
            .then((res) => {
                setQuantity(0)
                //console.log('PRODUCTO AGREGADO AL CARRITO')
                setCartId(res.data.cart._id)
                //console.log(res.data.cart._id)
            })
    }

    const AddProductAndGoToCart = () => {
        addProductToCart(productId, quantity)
            .then((res) => {
                setCartId(res.data.cart._id)
                setShouldNavigate(true);
            })
    }

    console.log(cartId)

    useEffect(() => {
        GetProduct();
    }, []);

    useEffect(() => {
        if (shouldNavigate) {
            navigate(`/cart/${cartId}`);
        }
    }, [shouldNavigate, cartId, navigate]);

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 0 && newQuantity <= product.stockQuantity) {
            setQuantity(newQuantity);
        }
    };

    const handleIncrement = () => {
        handleQuantityChange(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            handleQuantityChange(quantity - 1);
        } else {
            handleQuantityChange(0);
        }
    };

    const handleQuantity = (e) => {
        if (e.key === 'Plus') {
            handleIncrement();
        } else if (e.key === 'Less') {
            handleDecrement();
        }
    };

    return (
        <Grid container
            sx={{
                background: 'linear-gradient(45deg, rgba(237,241,250,1) 70%, rgba(226,174,234,1) 96%)'
            }}
        >
            <Grid item container
                xs={12}
                sx={{
                    px: '2em',
                    background: 'none',
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Grid item
                    xs={12}
                >
                    <Navbar />
                </Grid>
            </Grid>
            <Grid item container
                xs={12}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    px: '4em',
                    pt: '3em',
                    pb: '1em'
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
                            px: "1em",
                            pt: "1em",
                            pb: "5em",
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
                            <Box
                                sx={{
                                    '& > legend': { mt: 2 },
                                    pb: '2em'
                                }}
                            >
                                <Rating name="half-rating-read" value={value} precision={0.5} readOnly />
                            </Box>
                            <Grid
                                sx={{
                                    pb: '2em',
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <Button
                                    variant="contained"
                                    onClick={handleDecrement}
                                    sx={{
                                        background: 'none',
                                        color: '#616161',
                                        mr: '2.5em',
                                        '&:hover': {
                                            background: 'none',
                                            color: 'black'
                                        }
                                    }}
                                >
                                    -
                                </Button>
                                <InputBase
                                    placeholder="Cantidad"
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => handleQuantityChange(Number(e.target.value))}
                                    inputProps={{
                                        step: 1,
                                        min: 0,
                                        max: product.stockQuantity,
                                        onKeyDown: handleQuantity,
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    onClick={handleIncrement}
                                    sx={{
                                        background: 'none',
                                        color: '#616161',
                                        '&:hover': {
                                            background: 'none',
                                            color: 'black'
                                        }
                                    }}
                                >
                                    +
                                </Button>
                            </Grid>
                            <Grid
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignContent: 'center',
                                    //gap: '1em'
                                }}
                            >
                                {/* Solo añade el producto. TODO */}
                                <Button
                                    sx={{
                                        px: '3em',
                                        py: '1em',
                                        color: 'white',
                                        background: 'black',
                                        '&:hover': {
                                            background: '#212132'
                                        }
                                    }}
                                    onClick={() => AddProductOnly()}
                                >
                                    Añadir al carrito
                                </Button>
                                {/* Añade el producto y retorna la page cart. TODO */}
                                <Button
                                    sx={{
                                        px: '3em',
                                        py: '1em',
                                        color: 'black',
                                        background: 'none',
                                        border: '1px solid black'
                                    }}
                                    onClick={() => AddProductAndGoToCart()}
                                >
                                    Comprar ya
                                </Button>
                            </Grid>
                        </CardContent>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    );
}

export default Product;
