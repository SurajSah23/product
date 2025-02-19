import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Minus, Plus, Star } from "lucide-react";

const productData = {
  1: { id: 1, name: "Unicorn Sprinkles", description: "A fluffy fresh cooked donut covered by a creamy strawberry flavor with rainbow sprinkles.", price: 7.8, rating: 4.0, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RG9udXRzfGVufDB8fDB8fHww" },
  2: { id: 2, name: "Dark Sprinkles", description: "Chocolate with sprinkles", price: 6.8, rating: 4.0, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RG9udXRzfGVufDB8fDB8fHww" },
  3: { id: 3, name: "Choco Avocado", description: "Avocado creamy with chocolate", price: 8.8, rating: 4.0, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RG9udXRzfGVufDB8fDB8fHww" },
  4: { id: 4, name: "Vanilla Splash", description: "Vanilla creamy with sprinkles", price: 8.8, rating: 4.0, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RG9udXRzfGVufDB8fDB8fHww" },
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = productData[id];
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => setQuantity(quantity + 1);

  const addToCart = () => {
    alert(`${quantity} x ${product.name} added to cart`);
  };

  return (
    <main className="min-h-screen bg-black text-white p-4 max-w-md mx-auto">
      <button className="mb-4 p-2 bg-gray-700 rounded" onClick={() => navigate(-1)}>
        <ArrowLeft className="w-6 h-6" />
      </button>

      <div className="aspect-square w-full mb-6 rounded-lg overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span>{product.rating}</span>
          </div>
        </div>

        <p className="text-gray-400">{product.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={decreaseQuantity} disabled={quantity <= 1} className="p-2 bg-gray-700 rounded">
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-lg">{quantity}</span>
            <button onClick={increaseQuantity} className="p-2 bg-gray-700 rounded">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <p className="text-2xl font-bold">${product.price}</p>
        </div>

        <button className="w-full p-3 bg-yellow-400 text-black font-bold rounded" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </main>
  );
}
