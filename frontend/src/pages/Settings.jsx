import { useAuth } from '../context/AuthContext';

export default function Settings() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 p-8 text-slate-100">
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h1 className="text-4xl font-bold text-white">Settings</h1>
        <div className="mt-6 space-y-4 text-slate-300">
          <p><span className="text-slate-500">Name:</span> {user?.full_name || 'Guest'}</p>
          <p><span className="text-slate-500">Email:</span> {user?.email || 'N/A'}</p>
          <p><span className="text-slate-500">Role:</span> {user?.role || 'user'}</p>
        </div>

        <button onClick={logout} className="mt-8 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-2 font-semibold text-red-200">
          Log Out
        </button>
      </div>
    </div>
  );
}
