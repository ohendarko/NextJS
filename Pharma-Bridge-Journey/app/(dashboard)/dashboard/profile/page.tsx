'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

export default function Profile() {
  const { data: session, status } = useSession()
  const [user, setUser] = useState<any>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (session?.user?.email) {
      fetch(`/api/user?email=${session.user.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setError(data.error)
          } else {
            setUser(data)
          }
        })
        .catch(() => setError('Failed to fetch user'))
    }
  }, [session])

  if (status === 'loading') return <p>Loading session...</p>
  if (!session) return <p>You must be signed in to view this page.</p>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Profile</h1>
      {error && <p className="text-red-500">{error}</p>}
      {user && (
        <div className="mt-4 border p-4 rounded">
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  )
}
