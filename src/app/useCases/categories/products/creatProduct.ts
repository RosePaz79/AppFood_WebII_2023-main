import { Request, Response } from 'express';
import { Product } from '../../../models/Product';
import { Category } from '../../models/Category';

export async function createProduct(req: Request, res: Response) {
	//res.send('Ok post Product');
	
    const imagePath = req.file? .filename;
    const {name, description, price, category, ingredients} = req.body;
	
    const product = await Product.create({
    name,
    description,
    imagePath,
    price: Number(price),
    category,
    ingredients
    
    });
	res.json(category);
}