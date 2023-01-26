import clsx from 'clsx'

interface ChatMessageProps {
  name: string
  message: string
  you: boolean
}

export function ChatMessage({ name, message, you }: ChatMessageProps) {
  return (
    <div
      className={clsx('flex flex-col ', {
        'items-start': you === true,
        'items-end': you === false
      })}
    >
      <span className="block text-xs mb-[0.625rem]">{name}</span>
      <p
        className={clsx('text-xs p-[0.875rem] rounded-bl-lg max-w-[50%]', {
          'bg-violet-500 rounded-r-lg': you === true,
          'bg-green-700 rounded-t-lg': you === false
        })}
      >
        {message}
      </p>
    </div>
  )
}
