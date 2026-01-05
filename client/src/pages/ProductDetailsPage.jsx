import {
    CheckCircleIcon,
    HomeIcon,
    MinusIcon,
    PlusIcon,
    ShoppingCartIcon
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import api from "../api/axios";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { useCart } from "../context/CartContext";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const { addToCart } = useCart();

  useEffect(() => {
    let mounted = true;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/api/products/${id}`);
        if (!mounted) return;
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError(
          err.response?.data?.message || err.message || "Failed to load product"
        );
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchProduct();

    return () => {
      mounted = false;
    };
  }, [id]);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      // Add to cart with quantity
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      setIsAdding(false);
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 2000);
    }, 500);
  };

  const incrementQuantity = () => {
    if (quantity < product.countInStock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (loading) return <Loader fullPage />;
  if (error) return (
    <div className="p-6 max-w-4xl mx-auto">
      <Message type="error">{error}</Message>
    </div>
  );
  if (!product) return (
    <div className="p-6 max-w-4xl mx-auto">
      <Message>Product not found</Message>
    </div>
  );

  const isOutOfStock = product.countInStock <= 0;
  const isLowStock = product.countInStock > 0 && product.countInStock <= 5;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-purple-600 transition-colors flex items-center gap-1">
            <HomeIcon className="w-4 h-4" />
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-purple-600 transition-colors">
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate">{product.name}</span>
        </nav>

        {/* Product Details */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="animate-fade-in">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg aspect-square">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {isOutOfStock && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <Badge variant="error" size="lg" className="text-lg px-6 py-3">
                    Out of Stock
                  </Badge>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              {isLowStock && !isOutOfStock && (
                <Badge variant="warning" dot className="mb-4">
                  Only {product.countInStock} left in stock!
                </Badge>
              )}
              {!isOutOfStock && !isLowStock && (
                <Badge variant="success" className="mb-4">
                  In Stock
                </Badge>
              )}
            </div>

            {/* Price */}
            <div className="py-4 border-y border-gray-200">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-gray-900">
                  ৳{Number(product.price).toFixed(2)}
                </span>
                <span className="text-gray-500 text-lg">
                  {product.countInStock > 0 && `${product.countInStock} available`}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quantity Selector */}
            {!isOutOfStock && (
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-gray-300 rounded-lg">
                    <button
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                      className="p-3 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <MinusIcon className="w-5 h-5" />
                    </button>
                    <span className="px-6 py-3 font-semibold text-lg min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={incrementQuantity}
                      disabled={quantity >= product.countInStock}
                      className="p-3 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <PlusIcon className="w-5 h-5" />
                    </button>
                  </div>
                  <span className="text-gray-600">
                    Total: <span className="font-bold text-gray-900">৳{(product.price * quantity).toFixed(2)}</span>
                  </span>
                </div>
              </div>
            )}

            {/* Add to Cart Button */}
            <div className="space-y-3 pt-4">
              {justAdded ? (
                <Button
                  variant="success"
                  size="lg"
                  className="w-full bg-gradient-success"
                  disabled
                  leftIcon={<CheckCircleIcon className="w-6 h-6" />}
                >
                  Added to Cart!
                </Button>
              ) : (
                <Button
                  onClick={handleAddToCart}
                  disabled={isOutOfStock}
                  loading={isAdding}
                  variant="primary"
                  size="lg"
                  className="w-full"
                  leftIcon={!isAdding && <ShoppingCartIcon className="w-6 h-6" />}
                >
                  {isOutOfStock ? "Out of Stock" : "Add to Cart"}
                </Button>
              )}

              <Link to="/products">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  Continue Shopping
                </Button>
              </Link>
            </div>

            {/* Product Features */}
            <div className="bg-purple-50 rounded-xl p-6 space-y-3">
              <h3 className="font-semibold text-gray-900">Product Benefits</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span>Fast & Free Shipping</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span>30-Day Easy Returns</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span>Secure Payment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span>24/7 Customer Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
