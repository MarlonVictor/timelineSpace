export function SignIn() {
  return (
    <div className="flex items-center gap-3 text-left">
      <div className="relative flex h-10 w-10 shrink-0 select-none items-center justify-center rounded bg-gray-100 text-sm font-bold uppercase text-gray-800">
        <svg
          className="h-1/2 w-1/2 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h1 1 14H20z"></path>
        </svg>
      </div>

      <p className="max-w-[140px] text-sm leading-snug">
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
          className="underline transition-colors hover:text-gray-50"
        >
          Crie sua conta
        </a>{' '}
        e salve suas memórias!
      </p>
    </div>
  )
}
