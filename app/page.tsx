import { getProducts } from "./utils/products";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <div>
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={200}
                height={200}
              />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}