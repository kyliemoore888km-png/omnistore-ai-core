import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Orders() {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      if (!token) return;
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'}/api/orders?token=${token}`);
      if (res.ok) {
        setOrders(await res.json());
      }
    };
    loadOrders();
  }, [token]);

  return (
    <div className="min-h-screen bg-slate-950 p-8 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-white">Orders</h1>
        <div className="mt-6 space-y-4">
          {orders.length ? orders.map((order) => (
            <div key={order.id} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">{order.order_number}</p>
                  <p className="text-sm text-slate-400">{order.customer_name}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-cyan-400">${order.total_amount}</p>
                  <p className="text-xs text-slate-400">{order.status}</p>
                </div>
              </div>
            </div>
          )) : <p className="text-slate-400">No orders yet.</p>}
        </div>
      </div>
    </div>
  );
}
