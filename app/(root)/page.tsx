import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className='bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10'>
        <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4'>
          <div className='flex flex-col justify-center gap-8'>
            <h1 className='h1-bold'>
              Make your events unforgettable. Host, connect, and celebrate on our platform.
            </h1>
            <p className='p-regular-20 md:p-regular-24'>
              Bring people together. Host and celebrate events easily with our platform.
            </p>
          </div>
          <div className='md:hidden'> {/* Only show on small screens */}
            <Image
              src="/assets/images/hero.png"
              alt='hero'
              width={1000}
              height={1000}
              className='max-h-[70vh] object-contain object-center 2xsl:max-h-[50vh]'
            />
          </div>
          <div className='hidden md:block'> {/* Only show on large screens */}
            <Image
              src="/assets/images/hero.png"
              alt='hero'
              width={1000}
              height={1000}
              className='max-h-[70vh] object-contain object-center 2xsl:max-h-[50vh]'
            />
          </div>
          <Button size="lg" asChild className='button w-full sm:w-fit'>
            <Link href="#events">Explore Now</Link>
          </Button>
        </div>
      </section>
      <section id='events' className='wrapper my-8 flex flex-col md:gap-12'>
        <div className='flex justify-between'>
          <h2 className='h2-bold '>trusted by <br /> Our university</h2>
          <Image src="/assets/images/uni-logo.png" alt='uni-logo' height={120} width={120}></Image>
        </div>
        <div className='flex  w-full flex-col gap-5 md:flex-row'>search filter</div>
      </section>
    </>
  )
}
