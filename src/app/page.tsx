import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className='space-y-5'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <HomeIcon/>
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search/>
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Library/>
              Your library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Mercury tour</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Best songs</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>10s Rock Anthens</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Rock your body</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Mais ouvidas</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Curtidas na radio</a>
          </nav>

        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href="#" className='bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20'>
              <Image width={94} height={94} src="/album.jpg" alt="Banda RadioHead"/>
              <strong>RadioHead</strong>     
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10'>
              <Image width={94} height={94} src="/album.jpg" alt="Banda RadioHead"/>
              <strong>RadioHead</strong>     
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10'>
              <Image width={94} height={94} src="/album.jpg" alt="Banda RadioHead"/>
              <strong>RadioHead</strong>     
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10'>
              <Image width={94} height={94} src="/album.jpg" alt="Banda RadioHead"/>
              <strong>RadioHead</strong>     
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10'>
              <Image width={94} height={94} src="/album.jpg" alt="Banda RadioHead"/>
              <strong>RadioHead</strong>     
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10'>
              <Image width={94} height={94} src="/album.jpg" alt="Banda RadioHead"/>
              <strong>RadioHead</strong>     
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>
          
          <h2 className='font-semibold text-2xl mt-10'>Made for Bryan Verneck</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href="" className='bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className="w-full rounded" width={104} height={104} alt='Capa banda RadioHead'/>
              <strong className='font-semibold'>00s Rock anthems</strong>
              <span className='text-sm text-zinc-400'>These songs rocked the 00s.</span>
            </a>
            <a href="" className='bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className="w-full rounded" width={104} height={104} alt='Capa banda RadioHead'/>
              <strong className='font-semibold'>00s Rock anthems</strong>
              <span className='text-sm text-zinc-400'>These songs rocked the 00s.</span>
            </a>
            <a href="" className='bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className="w-full rounded" width={104} height={104} alt='Capa banda RadioHead'/>
              <strong className='font-semibold'>00s Rock anthems</strong>
              <span className='text-sm text-zinc-400'>These songs rocked the 00s.</span>
            </a>
            <a href="" className='bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className="w-full rounded" width={104} height={104} alt='Capa banda RadioHead'/>
              <strong className='font-semibold'>00s Rock anthems</strong>
              <span className='text-sm text-zinc-400'>These songs rocked the 00s.</span>
            </a>
            <a href="" className='bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className="w-full rounded" width={104} height={104} alt='Capa banda RadioHead'/>
              <strong className='font-semibold'>00s Rock anthems</strong>
              <span className='text-sm text-zinc-400'>These songs rocked the 00s.</span>
            </a>
            <a href="" className='bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className="w-full rounded" width={104} height={104} alt='Capa banda RadioHead'/>
              <strong className='font-semibold'>00s Rock anthems</strong>
              <span className='text-sm text-zinc-400'>These songs rocked the 00s.</span>
            </a>
            <a href="" className='bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className="w-full rounded" width={104} height={104} alt='Capa banda RadioHead'/>
              <strong className='font-semibold'>00s Rock anthems</strong>
              <span className='text-sm text-zinc-400'>These songs rocked the 00s.</span>
            </a>
            <a href="" className='bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className="w-full rounded" width={104} height={104} alt='Capa banda RadioHead'/>
              <strong className='font-semibold'>00s Rock anthems</strong>
              <span className='text-sm text-zinc-400'>These songs rocked the 00s.</span>
            </a>
          </div>

        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  )
}
