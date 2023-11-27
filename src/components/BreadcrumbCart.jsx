import * as React from 'react';
import { Breadcrumbs, Grid, Link } from '@mui/material';

const BreadcrumbCart = ({name, id}) => {
  const handleClick = (event) => {
    if (event.currentTarget.getAttribute('href')) {
      event.preventDefault();
      console.info('You clicked a breadcrumb.');
    }
  }

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href={`/cart`}
          aria-current="page"
        >
          My Cart
        </Link>
      </Breadcrumbs>
    </div>
  );
}

export default BreadcrumbCart;