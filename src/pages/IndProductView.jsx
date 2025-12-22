// import React from "react";
// import { useParams } from "react-router-dom";
// import { products } from "./ProductCard";

// export default function ProductView() {
//   const { id } = useParams();

//   const product = products.find(item => item.id === id);
  
//   if (!product) {
//     return (
//       <p className="text-center mt-20 text-gray-500 text-lg">
//         Product not found
//       </p>
//     );
//   }

//   return (
//     <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      
//       {/* Image */}
//       <div className="bg-white rounded-2xl shadow-md overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-[350px] object-cover"
//         />
//       </div>

//       {/* Info */}
//       <div className="flex flex-col">
//         <h2 className="text-3xl font-bold text-gray-800 mb-2">
//           {product.name}
//         </h2>

//         <p className="text-gray-500 mb-4">
//           {product.category}
//         </p>

//         <p className="text-2xl font-semibold text-blue-600 mb-4">
//           R {product.price}
//         </p>

//         <p className="text-gray-700 leading-relaxed mb-6">
//           {product.description}
//         </p>

//         <button className="w-full md:w-1/2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// }
