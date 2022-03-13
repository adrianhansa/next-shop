import Product from '../../models/Product';
import nc from 'next-connect';
import db from '../../utils/db';
import data from '../../utils/data';

const handler = nc();

handler.get(async (req, res) => {
  try {
    await db.connect();
    await Product.deleteMany();
    const products = await Product.insertMany(data.products);
    await db.disconnect();
    res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default handler;
