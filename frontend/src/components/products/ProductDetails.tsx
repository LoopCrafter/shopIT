import React, { useEffect, useState } from "react";
import ProductGrid from "./ProductGrid";
import { similarProducts } from "../../data";
const selectedProduct = {
  name: "Classic Oxford Button-Down Shirt",
  description:
    "This classic Oxford shirt is tailored for a polished yet casual look. Crafted from high-quality cotton, it features a button-down collar and a comfortable, slightly relaxed fit. Perfect for both formal and casual occasions, it comes with long sleeves, a button placket, and a yoke at the back. The shirt is finished with a gently rounded hem and adjustable button cuffs.",
  price: 39.99,
  discountPrice: 34.99,
  countInStock: 20,
  sku: "OX-SH-001",
  category: "Top Wear",
  brand: "Urban Threads",
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: ["Red", "Blue", "Yellow"],
  collections: "Business Casual",
  material: "Cotton",
  gender: "Men",
  images: [
    {
      url: "https://picsum.photos/500/500?random=39",
      altText: "Classic Oxford Button-Down Shirt Front View",
    },
    {
      url: "https://picsum.photos/500/500?random=40",
      altText: "Classic Oxford Button-Down Shirt Back View",
    },
  ],
  rating: 4.5,
  numReviews: 12,
};
const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (selectedProduct.images.length) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select a size and color before adding to cart.");
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText || `Thumbnail ${index}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                    image.url === mainImage ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(image.url)}
                />
              );
            })}
          </div>
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main Products"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Mobile Thumbnail */}
          <div className="md:hidden flex overscroll-x-auto space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText || `Thumbnail ${index}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                    image.url === mainImage ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(image.url)}
                />
              );
            })}
          </div>
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1">
              {selectedProduct.price}
            </p>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedProduct.discountPrice}
            </p>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color
                        ? "border-black border-4"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                    onClick={() => setSelectedColor(color)}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-lg border ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">Quantity: </p>
              <div className="flex items-center gap-4 my-2">
                <button
                  className="px-2 py-1 bg-gray-200 rounded-lg text-lg"
                  onClick={() => setQuantity((prev) => Math.max(0, prev - 1))}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded-lg text-lg"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="bg-black text-white py-2 px-6 rounded-lg w-full mb-4"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristic: </h3>
              <table className="w-full text-left tex-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            You May Also Like
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
