import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'

dayjs.locale(ptBr)

interface Memory {
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
}

interface MemoryItemProps {
  memory: Memory
}

export function MemoryItem({ memory }: MemoryItemProps) {
  return (
    <div key={memory.id} className="space-y-2">
      <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-6 before:bg-gray-100">
        {memory.createdAt}
        {dayjs('2023-10-07T19:45:24.121Z').format('DD[ de ]MMM[, ]YYYY')}
      </time>

      <div className="grid grid-cols-2 gap-4">
        <Image
          src={memory.coverUrl}
          width={592}
          height={280}
          alt="Imagem"
          className="aspect-video w-full rounded-lg object-cover"
        />

        <div className="flex flex-col justify-between">
          <p className="text-lg leading-relaxed text-gray-100">
            {memory.excerpt}
          </p>

          <Link
            href={`/memories/${memory.id}`}
            className="group flex w-max items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
          >
            Ler mais
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180 transition duration-300 group-hover:translate-x-1"
            >
              <path
                d="M10.3537 12.6463C10.4001 12.6927 10.437 12.7479 10.4621 12.8086C10.4872 12.8693 10.5002 12.9343 10.5002 13C10.5002 13.0657 10.4872 13.1308 10.4621 13.1915C10.437 13.2522 10.4001 13.3073 10.3537 13.3538C10.3072 13.4002 10.252 13.4371 10.1914 13.4622C10.1307 13.4874 10.0656 13.5003 9.99991 13.5003C9.93421 13.5003 9.86915 13.4874 9.80846 13.4622C9.74776 13.4371 9.69261 13.4002 9.64615 13.3538L4.64615 8.35377C4.59967 8.30733 4.56279 8.25218 4.53763 8.19148C4.51246 8.13079 4.49951 8.06572 4.49951 8.00001C4.49951 7.93431 4.51246 7.86924 4.53763 7.80854C4.56279 7.74785 4.59967 7.6927 4.64615 7.64626L9.64615 2.64626C9.73997 2.55244 9.86722 2.49974 9.99991 2.49974C10.1326 2.49974 10.2598 2.55244 10.3537 2.64626C10.4475 2.74009 10.5002 2.86733 10.5002 3.00001C10.5002 3.1327 10.4475 3.25994 10.3537 3.35376L5.70678 8.00001L10.3537 12.6463Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
