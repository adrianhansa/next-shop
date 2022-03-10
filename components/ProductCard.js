import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Button,
} from '@mui/material';
import NextLink from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <NextLink href={`/products/${product.slug}`} passHref>
        <CardActionArea>
          <CardMedia
            component="img"
            title={product.name}
            image={product.image}
          ></CardMedia>
          <CardContent>
            <Typography variant="h4">{product.name}</Typography>
            <Typography variant="body">{product.description}</Typography>
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions>
        <Typography>${product.price}</Typography>
        <Button size="small" color="primary">
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
