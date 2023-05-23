import Image from 'next/image'
import { getUser } from '@/lib/auth'

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt={name}
        className="h-10 w-10 rounded"
      />

      <p className="max-w-[140px] text-sm leading-snug">
        {name}
        <a
          href="/api/auth/logout"
          className="block w-max text-red-300 transition-colors hover:text-red-400"
        >
          Quero sair
        </a>
      </p>
    </div>
  )
}
