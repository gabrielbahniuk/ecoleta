require('dotenv').config();
import knex from '../database/connection';
import { Request, Response } from 'express'

class ItemsController {
  async index (req: Request, res: Response) {
    const items = await knex('items').select('*');
    const serializedItems = items.map(({ id, title, image }) => {
      return {
        id,
        title,
        image_url: `${process.env.API_URL}/uploads/${image}`
      }
    })
    return res.json(serializedItems);
  }
}
export default ItemsController;
