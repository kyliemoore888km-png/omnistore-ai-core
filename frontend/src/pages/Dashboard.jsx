import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user, token } = useAuth();
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      if (!token) return;
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'}/api/analytics/dashboard?token=${token}`);
        if (res.ok) {
          setAnalytics(await res.json());
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, [token]);

  if (loading) return <div className="p-8 text-white">Loading dashboard...</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Overview</p>
            <h1 className="mt-2 text-4xl font-bold text-white">Dashboard</h1>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950 hover:bg-cyan-400">
            <Plus size={18} />
            New Order
          </button>
        </div>

        {analytics && (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { label: 'Total Orders', value: analytics.overview.total_orders },
              { label: 'Revenue', value: `$${analytics.overview.total_revenue.toLocaleString()}` },
              { label: 'Active Products', value: analytics.overview.active_products },
              { label: 'Low Stock', value: analytics.overview.low_stock_alerts },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">{item.label}</p>
                <h2 className="mt-2 text-3xl font-bold text-white">{item.value}</h2>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold text-white">Recent activity</h3>
            <div className="mt-4 space-y-3">
              {analytics?.recent_orders?.length ? analytics.recent_orders.map((order) => (
                <div key={order.id} className="flex items-center justify-between rounded-xl bg-slate-800 p-4">
                  <div>
                    <p className="font-medium text-white">{order.order_number}</p>
                    <p className="text-sm text-slate-400">{order.customer_name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-cyan-400">${order.total_amount}</p>
                    <p className="text-xs text-slate-400">{order.status}</p>
                  </div>
                </div>
              )) : <p className="text-slate-400">No recent orders yet.</p>}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold text-white">Account</h3>
            <div className="mt-4 space-y-2 text-slate-300">
              <p><span className="text-slate-500">Name:</span> {user?.full_name || 'N/A'}</p>
              <p><span className="text-slate-500">Email:</span> {user?.email || 'N/A'}</p>
              <p><span className="text-slate-500">Role:</span> {user?.role || 'user'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
