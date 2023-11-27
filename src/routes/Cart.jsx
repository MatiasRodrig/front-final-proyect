import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//import NavBarLoggedIn from "../components/NavBarLoggedIn";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/BreadcrumbCart";

import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { getCart, getProductById } from "../api/apis";

const Cart = () => {
    const { cartId } = useParams();
    const [cart, setCart] = useState();
    const [products, setProducts] = useState([]);

    const getCartById = () => {
        getCart(cartId)
            .then((res) => {
                setCart(res.data)
                console.log(res.data)
            })
            .catch((error) => {
                console.error("Error fetching cart:", error);
            });
    }

    const getProduct = async (productId) => {
        try {
            const res = await getProductById(productId);
            return res.data;
        } catch (error) {
            console.error("Error fetching product:", error);
            return null;
        }
    }

    useEffect(() => {
        getCartById()
    }, [])

    useEffect(() => {
        if (cart?.items && Array.isArray(cart.items) && cart.items.length > 0) {
            const productPromises = cart.items.map((item) => getProduct(item.product));

            Promise.all(productPromises)
                .then((productData) => {
                    setProducts(productData.filter((product) => product !== null));
                })
                .catch((error) => {
                    console.error("Error fetching product details:", error);
                });
        }
    }, [cart]);

    return (
        <>
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
                            cart={cartId}
                        />
                    </Grid>
                </Grid>
                <Grid item container
                    xs={12}
                    sx={{
                        px: "1em",
                        py: "1em",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Grid
                        item
                        xs={8}
                        sx={{
                            width: '100vw',
                            display: "flex",
                            flexDirection: 'row',
                        }}
                    >
                        {/* Card para productos */}
                        <Grid
                            sx={{
                                width: '70%',
                                p: "1em",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: 'start',
                                alignContent: 'space-between',
                                color: 'black',
                            }}
                        >
                            <Table
                                sx={{
                                    minWidth: 650,
                                    textAlign: 'center'
                                }}
                                aria-label="simple table"
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Items</TableCell>
                                        <TableCell align="center">Descripción</TableCell>
                                        <TableCell align="center">Cantidad</TableCell>
                                        <TableCell align="center">Precio</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cart?.items && Array.isArray(cart.items) && cart.items.length > 0 ? (
                                        cart.items.map((item, index) => (
                                            <TableRow
                                                key={item.product}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="center">
                                                    {products[index]?.image && (  
                                                        <img
                                                            src={products[index].image}
                                                            alt={products[index].name}
                                                            style={{ width: '230px', maxHeight: '230px' }}
                                                        />
                                                    )}
                                                </TableCell>
                                                {products[index]?.name && (
                                                    <TableCell component="th" scope="row" align="center">
                                                        {products[index].name}
                                                    </TableCell>
                                                )}
                                                <TableCell align="center">{item?.quantity}</TableCell>
                                                <TableCell align="center">${item?.subtotal}</TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={3} align="center">
                                                No hay items en el carrito.
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </Grid>
                        {/* Card para order */}
                        <Grid
                            sx={{
                                width: '30%',
                                p: "1em",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: 'start',
                                color: 'black'
                            }}
                        >
                            <Typography>Resúmen de la orden</Typography>
                            <Typography>Resúmen</Typography>
                            <Typography>Descuento</Typography>
                            <Typography>Cargo del envío</Typography>
                            <Typography>Ir al check-out</Typography>
                            <Typography>Seguir comprando</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Cart;
