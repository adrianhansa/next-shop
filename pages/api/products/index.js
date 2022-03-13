import nc from 'next-connect';
import Product from '../../../models/Product';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  try {
    await db.connect();
    const products = await Product.find();
    await db.disconnect();
    res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default handler;
