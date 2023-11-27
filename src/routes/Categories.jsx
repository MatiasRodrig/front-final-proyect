import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { getProducts } from '../api/apis.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const drawerWidth = 240;

const categoryButtons = [
    { category: '', label: 'Todos' },
    { category: 'wardrobe', label: 'Wardrobes' },
    { category: 'beds', label: 'Beds' },
    { category: 'mattresses', label: 'Mattresses' },
    { category: 'dressers', label: 'Dressers' },
    { category: 'drawers', label: 'Drawers' },
    { category: 'chairs', label: 'Chairs' },
    { category: 'armchairs', label: 'Armchairs' },
];

export default function Categories() {
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
        console.log(categoria)
        setFilterList(productos.filter(producto => producto.category.includes(categoria)));
    }, [categoria, productos]);

    const disponibilidad = (producto) => {
        if (producto.stockQuantity > 0) {
            return <div>Hay productos disponibles</div>;
        } else {
            return <div>No hay productos disponibles</div>;
        }
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>

                    <Navbar />

                </AppBar>

                <Box component="nav" sx={{ width: drawerWidth, flexShrink: 0 }}>
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                                position: 'absolute',
                                height: '1000px',
                                marginTop: '50px', 
                            },
                        }}
                        variant="permanent"
                        anchor="left"
                    >
                        <Toolbar />
                        <List>
                            {categoryButtons.map((button) => (
                                <ListItem key={button.category} disablePadding>
                                    <ListItemButton onClick={() => setCategoria(button.category)}>
                                        <Button>{button.label}</Button>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                >
                    <Toolbar />
                    <Grid container
                        xs={10}
                        sx={{
                            width: '100%',
                            py: '2em',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 4,
                            marginTop: '50px'
                        }}
                    >
                        {filterList.slice((page - 1) * 8, page * 8).map((producto) => (
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
                </Box>
            </Box>
            <Footer />
        </>
    );
}
