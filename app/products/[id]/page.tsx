import { Product } from "../../utils/types";
import Image from "next/image";

async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();
  return product;
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return (
    <div>
      <h1>{product.title}</h1>
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={400}
        height={400}
      />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}