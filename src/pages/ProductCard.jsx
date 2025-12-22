import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ products }) {
  if (!products || products.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-500 text-lg">
        No items found
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          {/* Image */}
          <img
            src={`http://localhost:4000/${item.image}`}
            alt={item.name}
            className="w-25 h-30 object-cover"
          />

          {/* Content */}
          <div className="p-4 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800">
              {item.name}
            </h3>

            <p className="text-sm text-gray-500 mb-1">
              {item.category}
            </p>

            <p className="text-lg font-bold text-blue-600 mb-2">
              R {item.price}
            </p>

            <p className="text-sm text-gray-600 line-clamp-3 mb-4">
              {item.description}
            </p>

            {/* Buttons */}
            <div className="mt-auto flex gap-3">
              <Link
                to="/cartview"
                className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Add to cart
              </Link>

              <Link
                to={`/product/${item.id}`}
                className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
