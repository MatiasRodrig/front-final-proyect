import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Pagination, PaginationItem } from '@mui/material';

import { getProducts } from '../api/apis.js';

//import { productos } from '../data/data.js';

function Products() {
    const [productos, setProductos] = useState([]);
    const [filterList, setFilterList] = useState([]);
    const [categoria, setCategoria] = useState('');

    const [count, setCount] = useState(0);

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('pagina') || '1', 10);

    const getProductList = async () => {
        await getProducts()
            .then((res) => {
                setProductos(res.data);
                setFilterList(res.data);
                setCount(res.data.length);
            });
    }

    useEffect(() => {
        getProductList();
    }, [page]);

    useEffect(() => {
        setFilterList(productos.filter(producto => producto.category.includes(categoria)));
    }, [categoria, productos]);

    console.log(filterList)

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
                    alignItems: "center",
                    background: "linear-gradient(241deg, rgba(237,241,250,1) 81%, rgba(226,174,234,1) 96%)"
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
                        onClick={
                            () => setCategoria('')
                        }
                    >
                        Todos
                    </Button>
                    {/* TRAER SOLO PRODUCTOS CUYA CATEGORIA SEA WARDROBE */}
                    <Button
                        onClick={
                            () => {
                                setCategoria('wardrobe')
                            }
                        }
                    >
                        Wardrobes
                    </Button>
                    {/* TRAER SOLO PRODUCTOS CUYA CATEGORIA SEA BEDS */}
                    <Button
                        onClick={
                            () => {
                                setCategoria('beds')
                            }
                        }
                    >
                        Beds
                    </Button>
                    {/* TRAER SOLO PRODUCTOS CUYA CATEGORIA SEA MATTRESSES */}
                    <Button
                        onClick={
                            () => {
                                setCategoria('mattresses')
                            }
                        }
                    >
                        Mattresses
                    </Button>
                    {/* TRAER SOLO PRODUCTOS CUYA CATEGORIA SEA DRESSERS */}
                    <Button
                        onClick={
                            () => {
                                setCategoria('dressers')
                            }
                        }
                    >
                        Dressers
                    </Button>
                    {/* TRAER SOLO PRODUCTOS CUYA CATEGORIA SEA DRAWERS */}
                    <Button
                        onClick={
                            () => {
                                setCategoria('drawers')
                            }
                        }
                    >
                        Drawers
                    </Button>
                    {/* TRAER SOLO PRODUCTOS CUYA CATEGORIA SEA CHAIRS */}
                    <Button
                        onClick={
                            () => {
                                setCategoria('chairs')
                            }
                        }
                    >
                        Chairs
                    </Button>
                    {/* TRAER SOLO PRODUCTOS CUYA CATEGORIA SEA ARMCHAIRS */}
                    <Button
                        onClick={
                            () => {
                                setCategoria('armchairs')
                            }
                        }
                    >
                        Armchairs
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
                    {filterList.slice((page - 1) * 12, page * 12).map((producto) => (
                        <Grid item
                            key={producto._id}
                        >
                            <Card
                                sx={{
                                    maxWidth: 345,
                                    minWidth: 345,
                                    maxHeight: 345,
                                    background: 'none',
                                    boxShadow: 'none',
                                }}
                            >
                                <CardMedia
                                    sx={{ 
                                        height: 200,
                                        borderRadius: '1em',
                                        overflow: 'hidden'
                                    }}
                                    image={producto.image}
                                    title={producto.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="body1" fontWeight={"bold"}>
                                        {(producto.name).substring(0, 50).concat('...')}
                                    </Typography>
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
                <Pagination
                    sx={{
                        padding: ".7em",
                        borderTop: "1px solid rgb(225, 225, 225)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                    }}
                    page={page}
                    count={Math.ceil(count / 12)}
                    renderItem={(item) => (
                        <PaginationItem
                            component={Link}
                            to={`${item.page === 1 ? "" : `?pagina=${item.page}`}`}
                            {...item}
                        />
                    )}
                />
            </Grid>
        </>
    );
}

export default Products;
