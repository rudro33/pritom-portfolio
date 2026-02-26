import { UsersTable } from '../components/UsersTable'

export function Users() {
  return (
    <main className="mt-20 md:mt-16 p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-100">Users Management</h1>
        <p className="text-gray-400 mt-2">Manage and monitor all users</p>
      </div>

      <UsersTable />
    </main>
  )
}
