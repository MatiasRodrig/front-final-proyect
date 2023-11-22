import BASEURL from "./baseUrl";

// REGISTRARSE
const signUp = (firstName, lastName, email, password) => BASEURL.post(`auth/signup`, {
    firstName,
    lastName,
    email,
    password,
});

// INICIAR SESION
const signIn = (email, password) => BASEURL.post(`/auth/signin`, {
    email,
    password,
});

// TRAER DATOS USUARIO LOGUEADO
const getUserLoggedIn = () => BASEURL.get("/user/me", {
  headers: {
    Authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
  },
});


// TRAER LISTA PRODUCTOS
const getProducts = () => BASEURL.get(`/product/`);

// TRAER PRODUCTO POR ID
const getProductById = (productId) => BASEURL.get(`/product/${productId}`);

// AÑADIR PRODUCTO AL CARRITO
const addProductToCart = (productId, quantity) => BASEURL.post(`/cart/add/${productId}`, {
    "quantity": quantity,
});

// VER CARRITO
const getCart = (cartId) => BASEURL.get(`/cart/${cartId}`);

// MODIFICAR CARRITO 
const updateCart = (cartId, productId, action, quantity) => BASEURL.put(`/cart/${cartId}`, {
    productId,
    action,
    quantity,
});

// ELIMINAR CARRITO
const deleteCart = (cartId) => BASEURL.delete(`/cart/remove/${cartId}`);

export {
    signUp,
    signIn,
    getUserLoggedIn,
    getProducts,
    getProductById,
    addProductToCart,
    getCart,
    updateCart,
    deleteCart,
}