import * as React from 'react';
import { Breadcrumbs, Grid, Link } from '@mui/material';

const Breadcrumb = ({name, id}) => {
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
          color="inherit"
          href="/"
        >
          List of Products
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href={`/product/${id}`}
          aria-current="page"
        >
          {(name && name.substring(0, 20)) ? name.substring(0, 20).concat('...') : ''}
        </Link>
      </Breadcrumbs>
    </div>
  );
}

export default Breadcrumb;