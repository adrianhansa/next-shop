import Layout from '../components/Layout';
import { Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import db from '../utils/db';
import Product from '../models/Product';

export default function Home({ products }) {
  return (
    <div>
      <Layout
        title="Online Shop of Great Ideas"
        description="Great Ideas Sold Online"
      >
        <h3>Shop Online</h3>
        <Typography variant="h3">Products</Typography>
        <Grid container spacing={2}>
          {products.map((product) => {
            return (
              <Grid item md={4} key={product.name}>
                <ProductCard product={product} />
              </Grid>
            );
          })}
        </Grid>
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
