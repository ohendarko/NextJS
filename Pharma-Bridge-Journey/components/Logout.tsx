'use client';

import { useRouter } from 'next/navigation';

const handleLogout = async () => {
  const router = useRouter();
  const res = await fetch('/api/logout', {
    method: 'POST',
  });

  if (res.ok) {
    // Optionally show a toast
    // toast({ title: "Logged out", description: "You have been signed out." });

    // Redirect to login or home
    router.push('/login');
  }
};

<button onClick={handleLogout} className="text-sm text-red-600 hover:underline">
  Logout
</button>

