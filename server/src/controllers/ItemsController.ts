require('dotenv').config();
import knex from '../database/connection';
import { Request, Response } from 'express'

const { API_HOSTNAME, API_PORT } = process.env;

class ItemsController {
  async index (req: Request, res: Response) {
    const items = await knex('items').select('*');    
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `${API_HOSTNAME}:${API_PORT}/uploads/${item.image}`
      }
    })
    
    return res.json(serializedItems);
  }
}

export default ItemsController;