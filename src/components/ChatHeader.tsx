import { X } from 'phosphor-react'

interface ChatHeaderProps {
  name: string
  urlImage: string
  hourMinutesFirstMessage: string
}

export function ChatHeader({
  name,
  urlImage,
  hourMinutesFirstMessage
}: ChatHeaderProps) {
  return (
    <div className="flex flex-col mb-[1.875rem]">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-4">
          <img
            className="w-12 h-12 rounded-full"
            src={urlImage}
            alt="Foto de Vagner Nerves"
          />
          <div>
            <span className="block font-bold text-base">{name}</span>
            <span className="flex items-center gap-1 text-xs text-green-600  before:w-2 before:h-2 before:rounded-full before:bg-green-600">
              Online
            </span>
          </div>
        </div>
        <X size={20} weight="bold" className="text-white" />
      </div>
      <span className="flex justify-center mt-[0.875rem] text-xs">
        Hoje {hourMinutesFirstMessage}
      </span>
    </div>
  )
}
