import React from "react";
import { Link } from "react-router-dom";

type Props = {
  products: Array<{
    _id: number;
    name: string;
    price: number;
    image: { url: string }[];
  }>;
};

const ProductGrid: React.FC<Props> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => {
        return (
          <Link
            to={`/product/${product._id}`}
            className="block"
            key={product._id}
          >
            <div className="bg-white  rounded-lg">
              <div className="w-full h-96 mb-4">
                <img
                  src={product.image[0].url}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-sm mb-2">{product.name}</h3>
              <p className="text-gray-500 font-medium text-sm tracking-tighter">
                ${product.price}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductGrid;
