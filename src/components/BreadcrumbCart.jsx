import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs, Grid } from '@mui/material';

const BreadcrumbCart = ({cartId}) => {
  const handleClick = (event) => {
    if (event.currentTarget.getAttribute('href')) {
      event.preventDefault();
      console.info('You clicked a breadcrumb.');
    }
  }

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="text.primary"
         /*  to={`/cart/${cartId}`} */
          to={'/cart'}
          aria-current="page"
        >
          My Cart
        </Link>
      </Breadcrumbs>
    </div>
  );
}

export default BreadcrumbCart;