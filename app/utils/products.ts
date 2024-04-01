import { Product } from './types';

export async function getProducts(): Promise<Product[]> {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return data.products;
}