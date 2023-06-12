import { cookies } from 'next/headers'
import { api } from '@/lib/api'
import { EmptyMemories } from '@/components/EmptyMemories'
import { MemoryItem } from '@/components/MemoryItem'

export default async function Home() {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value
  const response = await api.get('memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memories = response.data

  if (!memories.length) {
    return <EmptyMemories />
  }

  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory: any) => (
        <MemoryItem key={memory.id} memory={memory} />
      ))}
    </div>
  )
}
