import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

const products = [
  { id: 1, name: "Unicorn Sprinkles", description: "Strawberry creamy with rainbow sprinkles", price: 7.8, rating: 4.0, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RG9udXRzfGVufDB8fDB8fHww" },
  { id: 2, name: "Dark Sprinkles", description: "Chocolate with sprinkles", price: 6.8, rating: 4.0, image: "https://images.unsplash.com/photo-1523754116966-300250e98597?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGFyayUyMFNwcmlua2xlc3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 3, name: "Choco Avocado", description: "Avocado creamy with chocolate", price: 8.8, rating: 4.0, image: "https://images.unsplash.com/photo-1720305284322-07b6f099395c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Vanilla Splash", description: "Vanilla creamy with sprinkles", price: 8.8, rating: 4.0, image: "https://images.unsplash.com/photo-1492683962492-deef0ec456c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmFuaWxsYSUyMFNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D" },
];

export default function ProductList() {
  const navigate = useNavigate();

  return (
    <main className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>

      <div className="grid gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-800 p-4 rounded-lg flex items-center gap-4 cursor-pointer" onClick={() => navigate(`/products/${product.id}`)}>
            <div className="w-20 h-20 rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1 mb-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">{product.rating}</span>
              </div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-400">{product.description}</p>
              <p className="mt-1">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
