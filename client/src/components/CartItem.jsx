import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";
import Button from "./ui/Button";

export default function CartItem({ item }) {
  const { updateQty, removeFromCart } = useCart();

  const decrementQty = () => {
    if (item.qty > 1) {
      updateQty(item.productId, item.qty - 1);
    }
  };

  const incrementQty = () => {
    if (item.qty < (item.countInStock ?? 9999)) {
      updateQty(item.productId, item.qty + 1);
    }
  };

  return (
    <div className="flex items-center gap-4 p-5">
      {/* Product Image */}
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-lg shadow-sm"
      />

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 truncate mb-1">{item.name}</h3>
        <div className="text-lg font-bold text-cyan-600">
          ৳{Number(item.price).toFixed(2)}
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3">
        <div className="flex items-center border-2 border-gray-300 rounded-lg">
          <button
            onClick={decrementQty}
            disabled={item.qty <= 1}
            className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Decrease quantity"
          >
            <MinusIcon className="w-4 h-4" />
          </button>
          <span className="px-4 py-2 font-semibold text-gray-900 min-w-[50px] text-center">
            {item.qty}
          </span>
          <button
            onClick={incrementQty}
            disabled={item.qty >= (item.countInStock ?? 9999)}
            className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Increase quantity"
          >
            <PlusIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Total Price */}
        <div className="w-28 text-right">
          <div className="text-sm text-gray-500">Total</div>
          <div className="font-bold text-gray-900">
            ৳{(item.price * item.qty).toFixed(2)}
          </div>
        </div>

        {/* Remove Button */}
        <Button
          onClick={() => removeFromCart(item.productId)}
          variant="ghost"
          size="sm"
          className="text-red-600 hover:text-red-700 hover:bg-red-50"
          leftIcon={<TrashIcon className="w-4 h-4" />}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}
