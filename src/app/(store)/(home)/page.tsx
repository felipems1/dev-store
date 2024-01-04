import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid max-h-[595px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 flex items-center justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-ai-side.png"
          className="transition-transform duration-500 group-hover:scale-105"
          width={600}
          height={600}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-28 right-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">Moletom AI Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-ia-p-devs.png"
          className="transition-transform duration-500 group-hover:scale-105"
          width={300}
          height={300}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">Moletom IA para devs</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-java.png"
          className="transition-transform duration-500 group-hover:scale-105"
          width={300}
          height={300}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">Moletom Java</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>
    </div>
  )
}
