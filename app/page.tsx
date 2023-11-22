import Searchbar from '@/components/Searchbar'
import Image from 'next/image'

export default function Home() {
  return (
    <section className='mx-auto px-16 py-16 flex items-center h-screen justify-center'>
      <div className='mb-16'>
        <div className='flex flex-col items-center'>
          <p className='text-red-500 text-[32px] font-semibold'>Smart Shopping Starts Here:arrow-right</p>
          <div className='text-black font-bold text-[64px] mb-4'>
            <p>Unleash the Power of <span className='text-red-500'>PriceWise</span></p>
          </div>
          <p className='text-slate-600 text-[38px]'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.</p>
        </div>
        <div className='mt-16'>
        <Searchbar/>
        </div>
      </div>
    </section>
  )
}
