import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Online Shop of Great Ideas</title>
        <meta name="description" content="Great ideas sold online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <div>
            <h3>Shop Online</h3>
            <h4>Products</h4>
            <ul>
              <li>Product 1</li>
              <li>Product 2</li>
              <li>Product 3</li>
            </ul>
          </div>
        </main>
      </Layout>
    </div>
  );
}
