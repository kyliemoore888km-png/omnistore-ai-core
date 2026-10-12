import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Products() {
  const { token } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      if (!token) return;
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'}/api/products?token=${token}`);
      if (res.ok) {
        setProducts(await res.json());
      }
    };
    loadProducts();
  }, [token]);

  return (
    <div className="min-h-screen bg-slate-950 p-8 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-white">Products</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.length ? products.map((product) => (
            <div key={product.id} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="text-xl font-semibold text-white">{product.name}</h3>
              <p className="mt-2 text-sm text-slate-400">SKU: {product.sku}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-slate-400">Stock</span>
                <span className="font-semibold text-cyan-400">{product.stock_quantity}</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-slate-400">Price</span>
                <span className="font-semibold text-white">${product.price}</span>
              </div>
            </div>
          )) : <p className="text-slate-400">No products yet.</p>}
        </div>
      </div>
    </div>
  );
}
