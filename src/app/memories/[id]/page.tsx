import { api } from "@/lib/api"
import { cookies } from "next/headers"
import Image from "next/image"
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'

dayjs.locale(ptBr)


export default async function Memory({ params }: { params: { id: string } }) {
  const token = cookies().get('token')?.value
  const response = await api.get(`/memories/${params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memory = response.data

  return (
    <div className="flex flex-col gap-10 p-8">
      <Image
        src={memory.coverUrl}
        width={592}
        height={280}
        alt="Imagem"
        className="aspect-video w-full rounded-lg object-cover"
      />

      {dayjs(memory.createdAt).format('DD[ de ]MMM[, ]YYYY')}

      <p className="text-lg leading-relaxed text-gray-100">
        {memory.content}
      </p>
    </div>
  )
}