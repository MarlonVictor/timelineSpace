import Image from 'next/image'
import logo from '../assets/logo.svg'

export function Hero() {
  return (
    <div className="space-y-5 pb-20">
      <Image src={logo} alt="TimelineSpace" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>

        <p className="pb-8 text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>

        <button className="group relative flex h-[2.8em] items-center overflow-hidden rounded-[0.9em] bg-red-400 p-[0.35em] pl-[1.2em] pr-[3.3em] font-semibold leading-[0.05em] text-gray-900 shadow-[inset_0_0_1.6em_-0.6em_#714da6]">
          {' '}
          Cadastrar lembrança
          <div className="absolute right-[0.3em] ml-[1em] flex h-[2.2em] w-[2.2em] items-center justify-center rounded-[0.7em] bg-gray-50 transition-all duration-300 group-hover:w-[calc(100%-0.6em)] group-active:scale-95">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="w-[1.1em] text-gray-900 transition duration-300 group-hover:translate-x-[0.1em] group-hover:text-red-400"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}
