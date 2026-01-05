import { CheckCircleIcon, HomeIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router";
import Button from "../components/ui/Button";

export default function OrderSuccess() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Success Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="w-24 h-24 bg-gradient-success rounded-full flex items-center justify-center mx-auto animate-scale-in">
              <CheckCircleIcon className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Order Placed Successfully!
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Thank you for your purchase!
          </p>
          {id && (
            <p className="text-sm text-gray-500 mb-8">
              Order ID: <span className="font-mono font-semibold text-gray-700">{id}</span>
            </p>
          )}

          {/* Divider */}
          <div className="border-t border-gray-200 my-8"></div>

          {/* What's Next */}
          <div className="bg-cyan-50 rounded-xl p-6 mb-8 text-left">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <ShoppingBagIcon className="w-5 h-5 text-cyan-600" />
              What Happens Next?
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                  1
                </div>
                <span>You'll receive a confirmation email with your order details shortly.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                  2
                </div>
                <span>We'll prepare your order and notify you when it's ready to ship.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                  3
                </div>
                <span>Track your shipment with the tracking number we'll send you.</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="flex-1 sm:flex-initial">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                leftIcon={<HomeIcon className="w-5 h-5" />}
              >
                Back to Home
              </Button>
            </Link>
            <Link to="/products" className="flex-1 sm:flex-initial">
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                leftIcon={<ShoppingBagIcon className="w-5 h-5" />}
              >
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Need help? Contact our{" "}
            <a href="#" className="text-cyan-600 hover:text-cyan-700 font-medium">
              customer support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
