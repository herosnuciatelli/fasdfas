import NFTHero from '@/assets/nft-hero.svg'
import { CardComment, CardCommentSkeleton } from '@/components/ui/comment'
import { createClient } from '@/utils/supabase/server'
import { ArrowUpRightIcon } from 'lucide-react'
import Image from 'next/image'
import { Suspense } from 'react'

export default async function Page() {
  const supabase = createClient()

  const { data: comments } = await supabase.from('comments').select().limit(6)

  return (
    <>
        <section className='flex flex-col gap-10 lg:flex-row items-center py-3'>
          <div className='flex flex-col gap-3'>
            <h2 className='uppercase text-2xl font-extrabold lg:text-4xl row-start-2 sm:row-start-1'>
              Create <br/>
              your own<br/>
              nft dream<br/>
              gallery
            </h2>
            <div className='flex items-center gap-3'>
              <div className='bg-purple-800 w-max rounded-full p-1.5 border border-purple-600'>
                <ArrowUpRightIcon className='size-6' />
              </div>
              <p className='text-xs opacity-90'>
                The largest NFT marketplace. Authentic and truly unique
                digital creation. Signed and issued by the creator,made
                possible by blockchain technology
              </p>
            </div>

            <div className='flex justify-between max-w-xs pt-3'>
                <div>
                  <h3 className='opacity-60 text-sm'>Artwork</h3>
                  <p>25.5 K</p>
                </div>
                <div>
                  <h3 className='opacity-60 text-sm'>Artist</h3>
                  <p>15.5+ M</p>
                </div>
                <div>
                  <h3 className='opacity-60 text-sm'>Auciton</h3>
                  <p>10.5+ K</p>
                </div>
            </div>
          </div>
          <div className='col-start-1 row-start-1 sm:col-start-2 sm:row-start-1 grid place-items-center'>
            <Image src={NFTHero} alt='statue image' className='max-w-xs w-full sm:min-w-80' />
          </div>
        </section>
        <section className='py-3'>
          <h2 className='text-lg font-semibold'>Latest comments</h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3 py-3'>
            <Suspense fallback={<CardCommentSkeleton />}>
              {comments?.map(({ name, comment, email}: { name: string, comment: string, email: string}, i) => (
                <CardComment comment={comment} email={email} name={name} key={i} />
              ))}
              {comments?.length === 0 && (
                <span className='text-xs'>We don&apos;t have comments</span>
              )}
            </Suspense>
          </div>
        </section>
    </>
  )
}