import { MediaPicker } from './MediaPicker'

export default function NewMemoryForm() {
  return (
    <form action="" className="flex flex-1 flex-col gap-2">
      <div className="flex items-center gap-4">
        <label
          htmlFor="media"
          className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 2H5C4.73478 2 4.48043 2.10536 4.29289 2.29289C4.10536 2.48043 4 2.73478 4 3V4H3C2.73478 4 2.48043 4.10536 2.29289 4.29289C2.10536 4.48043 2 4.73478 2 5V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H11C11.2652 14 11.5196 13.8946 11.7071 13.7071C11.8946 13.5196 12 13.2652 12 13V12H13C13.2652 12 13.5196 11.8946 13.7071 11.7071C13.8946 11.5196 14 11.2652 14 11V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2ZM5 3H13V7.33625L11.9563 6.2925C11.7687 6.10511 11.5145 5.99984 11.2494 5.99984C10.9843 5.99984 10.73 6.10511 10.5425 6.2925L5.83563 11H5V3ZM11 13H3V5H4V11C4 11.2652 4.10536 11.5196 4.29289 11.7071C4.48043 11.8946 4.73478 12 5 12H11V13ZM13 11H7.25L11.25 7L13 8.75V11ZM7.5 7C7.79667 7 8.08668 6.91203 8.33335 6.7472C8.58003 6.58238 8.77229 6.34811 8.88582 6.07403C8.99935 5.79994 9.02906 5.49834 8.97118 5.20736C8.9133 4.91639 8.77044 4.64912 8.56066 4.43934C8.35088 4.22956 8.08361 4.0867 7.79264 4.02882C7.50166 3.97094 7.20006 4.00065 6.92597 4.11418C6.65189 4.22771 6.41762 4.41997 6.2528 4.66664C6.08797 4.91332 6 5.20333 6 5.5C6 5.89782 6.15804 6.27936 6.43934 6.56066C6.72064 6.84196 7.10218 7 7.5 7ZM7.5 5C7.59889 5 7.69556 5.02932 7.77779 5.08427C7.86001 5.13921 7.9241 5.2173 7.96194 5.30866C7.99978 5.40002 8.00969 5.50055 7.99039 5.59755C7.9711 5.69454 7.92348 5.78363 7.85355 5.85355C7.78363 5.92348 7.69454 5.9711 7.59755 5.99039C7.50055 6.00969 7.40002 5.99978 7.30866 5.96194C7.2173 5.9241 7.13921 5.86001 7.08427 5.77779C7.02932 5.69556 7 5.59889 7 5.5C7 5.36739 7.05268 5.24021 7.14645 5.14645C7.24021 5.05268 7.36739 5 7.5 5Z"
              fill="currentColor"
            />
          </svg>
          Adicionar foto de capa
        </label>

        <label
          htmlFor="isPublic"
          className="custom-checkbox flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <input type="checkbox" name="isPublic" id="isPublic" value="true" />
          <div className="checkmark"></div>
          Tornar memória pública
        </label>
      </div>

      <MediaPicker />

      <textarea
        name="content"
        spellCheck="false"
        className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 outline-0 placeholder:text-gray-400"
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
      />
    </form>
  )
}
