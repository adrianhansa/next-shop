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

const ProductCard = ({ product }) => {
  return (
    <Card>
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
        <CardActions>
          <Typography>${product.price}</Typography>
          <Button size="small" color="primary">
            Add To Cart
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
