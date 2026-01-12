import { CheckCircleIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = async (e) => {
    e.preventDefault();
    setIsAdding(true);
    
    setTimeout(() => {
      addToCart(product);
      setIsAdding(false);
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 2000);
    }, 500);
  };

  const isOutOfStock = product.countInStock <= 0;
  const isLowStock = product.countInStock > 0 && product.countInStock <= 5;

  return (
    <div className="group w-full h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      <Link to={`/products/${product._id}`} className="relative flex flex-col grow">
        {/* Stock Status & Sale Badge */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {product.discountPrice > 0 && (
            <Badge variant="success" size="sm" className="bg-red-500 text-white border-none shadow-sm">
              {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
            </Badge>
          )}
          {isOutOfStock && (
            <Badge variant="error" size="sm">Out of Stock</Badge>
          )}
          {isLowStock && (
            <Badge variant="warning" size="sm" dot>Low Stock</Badge>
          )}
        </div>

        {/* Product Image */}
        <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden relative">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col grow">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1 mb-2 group-hover:text-cyan-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 h-10">
            {product.description}
          </p>

          {/* Price and Stock */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex flex-col">
              {product.discountPrice > 0 ? (
                <>
                  <span className="text-2xl font-bold text-gray-900 leading-none">
                    ৳{Number(product.discountPrice).toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-400 line-through mt-1">
                    ৳{Number(product.price).toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-bold text-gray-900">
                  ৳{Number(product.price).toFixed(2)}
                </span>
              )}
            </div>
            {isOutOfStock ? (
              <Badge variant="error" size="sm">Out of Stock</Badge>
            ) : isLowStock ? (
              <Badge variant="warning" size="sm" dot>Low Stock</Badge>
            ) : (
              <Badge variant="success" size="sm">In Stock</Badge>
            )}
          </div>
        </div>
      </Link>

      {/* Action Buttons */}
      <div className="px-5 pb-5 flex gap-2 mt-auto">
        {/* View Details Link */}
        <Link to={`/products/${product._id}`} className="flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            className="w-auto whitespace-nowrap"
          >
            View Details
          </Button>
        </Link>

        {/* Add to Cart Button */}
        {justAdded ? (
          <Button
            variant="success"
            size="sm"
            disabled
            className="flex-1 whitespace-nowrap"
            leftIcon={<CheckCircleIcon className="w-4 h-4 flex-shrink-0" />}
          >
            Added!
          </Button>
        ) : (
          <Button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            loading={isAdding}
            variant="primary"
            size="sm"
            className="flex-1 whitespace-nowrap"
            leftIcon={!isAdding && <ShoppingCartIcon className="w-4 h-4 flex-shrink-0" />}
          >
            {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
