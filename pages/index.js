import Head from 'next/head';
import Layout from '../components/Layout';
import data from '../utils/data';
import { Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Online Shop of Great Ideas</title>
        <meta name="description" content="Great ideas sold online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h3>Shop Online</h3>
        <Typography variant="h3">Products</Typography>
        <Grid container spacing={2}>
          {data.products.map((product) => {
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
