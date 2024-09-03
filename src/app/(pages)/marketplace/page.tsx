import { GemIcon } from "lucide-react";
import { products } from '@/config/products.json'
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <>
      <section className="py-3">
        <h2 className="font-semibold">NFTS</h2>

        <div className="py-3 grid lg:grid-cols-4 gap-3">
          <div className="border-zinc-950 border bg-zinc-950 rounded-md flex flex-col gap-3">
            <div className={cn(`w-full h-32 bg-top bg-cover rounded-t-md bg-[url("/nft1.jpg")]`)}></div>
            <div className="p-3 flex flex-col justify-between">
              <h3 className="font-semibold text-sm">{products[0].title.slice(0, 15) + '...'}</h3>
              <p className="text-xs opacity-60">{products[0].description.slice(0, 25) + '...'}</p>
              <span className="flex py-2 items-center text-xs font-semibold gap-1 opacity-90">{products[0].price} <GemIcon className="size-3 text-purple-500" /></span>
              <div className="pt-4 flex justify-center">
                <button className="bg-teal-700 border border-teal-500 text-xs font-semibold rounded py-1.5 px-3">Buy now</button>
              </div>
            </div>
          </div>

          <div className="border-zinc-950 border bg-zinc-950 rounded-md flex flex-col gap-3">
            <div className={cn(`w-full h-32 bg-top bg-cover rounded-t-md bg-[url("/nft2.jpg")]`)}></div>
            <div className="p-3 flex flex-col justify-between">
              <h3 className="font-semibold text-sm">{products[1].title.slice(0, 15) + '...'}</h3>
              <p className="text-xs opacity-60">{products[1].description.slice(0, 25) + '...'}</p>
              <span className="flex py-2 items-center text-xs font-semibold gap-1 opacity-90">{products[1].price} <GemIcon className="size-3 text-purple-500" /></span>
              <div className="pt-4 flex justify-center">
                <button className="bg-teal-700 border border-teal-500 text-xs font-semibold rounded py-1.5 px-3">Buy now</button>
              </div>
            </div>
          </div>

          <div className="border-zinc-950 border bg-zinc-950 rounded-md flex flex-col gap-3">
            <div className={cn(`w-full h-32 bg-top bg-cover rounded-t-md bg-[url("/nft3.webp")]`)}></div>
            <div className="p-3 flex flex-col justify-between">
              <h3 className="font-semibold text-sm">{products[2].title.slice(0, 15) + '...'}</h3>
              <p className="text-xs opacity-60">{products[2].description.slice(0, 25) + '...'}</p>
              <span className="flex py-2 items-center text-xs font-semibold gap-1 opacity-90">{products[2].price} <GemIcon className="size-3 text-purple-500" /></span>
              <div className="pt-4 flex justify-center">
                <button className="bg-teal-700 border border-teal-500 text-xs font-semibold rounded py-1.5 px-3">Buy now</button>
              </div>
            </div>
          </div>

          <div className="border-zinc-950 border bg-zinc-950 rounded-md flex flex-col gap-3">
            <div className={cn(`w-full h-32 bg-top bg-cover rounded-t-md bg-[url("/nft4.webp")]`)}></div>
            <div className="p-3 flex flex-col justify-between">
              <h3 className="font-semibold text-sm">{products[3].title.slice(0, 15) + '...'}</h3>
              <p className="text-xs opacity-60">{products[3].description.slice(0, 25) + '...'}</p>
              <span className="flex py-2 items-center text-xs font-semibold gap-1 opacity-90">{products[3].price} <GemIcon className="size-3 text-purple-500" /></span>
              <div className="pt-4 flex justify-center">
                <button className="bg-teal-700 border border-teal-500 text-xs font-semibold rounded py-1.5 px-3">Buy now</button>
              </div>
            </div>
          </div>

          <div className="border-zinc-950 border bg-zinc-950 rounded-md flex flex-col gap-3">
            <div className={cn(`w-full h-32 bg-top bg-cover rounded-t-md bg-[url("/nft5.webp")]`)}></div>
            <div className="p-3 flex flex-col justify-between">
              <h3 className="font-semibold text-sm">{products[4].title.slice(0, 15) + '...'}</h3>
              <p className="text-xs opacity-60">{products[4].description.slice(0, 25) + '...'}</p>
              <span className="flex py-2 items-center text-xs font-semibold gap-1 opacity-90">{products[4].price} <GemIcon className="size-3 text-purple-500" /></span>
              <div className="pt-4 flex justify-center">
                <button className="bg-teal-700 border border-teal-500 text-xs font-semibold rounded py-1.5 px-3">Buy now</button>
              </div>
            </div>
          </div>

          <div className="border-zinc-950 border bg-zinc-950 rounded-md flex flex-col gap-3">
            <div className={cn(`w-full h-32 bg-top bg-cover rounded-t-md bg-[url("/nft6.webp")]`)}></div>
            <div className="p-3 flex flex-col justify-between">
              <h3 className="font-semibold text-sm">{products[5].title.slice(0, 15) + '...'}</h3>
              <p className="text-xs opacity-60">{products[5].description.slice(0, 25) + '...'}</p>
              <span className="flex py-2 items-center text-xs font-semibold gap-1 opacity-90">{products[5].price} <GemIcon className="size-3 text-purple-500" /></span>
              <div className="pt-4 flex justify-center">
                <button className="bg-teal-700 border border-teal-500 text-xs font-semibold rounded py-1.5 px-3">Buy now</button>
              </div>
            </div>
          </div>

          <div className="border-zinc-950 border bg-zinc-950 rounded-md flex flex-col gap-3">
            <div className={cn(`w-full h-32 bg-top bg-cover rounded-t-md bg-[url("/nft7.webp")]`)}></div>
            <div className="p-3 flex flex-col justify-between">
              <h3 className="font-semibold text-sm">{products[6].title.slice(0, 15) + '...'}</h3>
              <p className="text-xs opacity-60">{products[6].description.slice(0, 25) + '...'}</p>
              <span className="flex py-2 items-center text-xs font-semibold gap-1 opacity-90">{products[6].price} <GemIcon className="size-3 text-purple-500" /></span>
              <div className="pt-4 flex justify-center">
                <button className="bg-teal-700 border border-teal-500 text-xs font-semibold rounded py-1.5 px-3">Buy now</button>
              </div>
            </div>
          </div>

          <div className="border-zinc-950 border bg-zinc-950 rounded-md flex flex-col gap-3">
            <div className={cn(`w-full h-32 bg-top bg-cover rounded-t-md bg-[url("/nft8.webp")]`)}></div>
            <div className="p-3 flex flex-col justify-between">
              <h3 className="font-semibold text-sm">{products[7].title.slice(0, 15) + '...'}</h3>
              <p className="text-xs opacity-60">{products[7].description.slice(0, 25) + '...'}</p>
              <span className="flex py-2 items-center text-xs font-semibold gap-1 opacity-90">{products[7].price} <GemIcon className="size-3 text-purple-500" /></span>
              <div className="pt-4 flex justify-center">
                <button className="bg-teal-700 border border-teal-500 text-xs font-semibold rounded py-1.5 px-3">Buy now</button>
              </div>
            </div>
          </div>

          <div className="border-zinc-950 border bg-zinc-950 rounded-md flex flex-col gap-3">
            <div className={cn(`w-full h-32 bg-top bg-cover rounded-t-md bg-[url("/nft9.webp")]`)}></div>
            <div className="p-3 flex flex-col justify-between">
              <h3 className="font-semibold text-sm">{products[8].title.slice(0, 15) + '...'}</h3>
              <p className="text-xs opacity-60">{products[8].description.slice(0, 25) + '...'}</p>
              <span className="flex py-2 items-center text-xs font-semibold gap-1 opacity-90">{products[8].price} <GemIcon className="size-3 text-purple-500" /></span>
              <div className="pt-4 flex justify-center">
                <button className="bg-teal-700 border border-teal-500 text-xs font-semibold rounded py-1.5 px-3">Buy now</button>
              </div>
            </div>
          </div>

          <div className="border-zinc-950 border bg-zinc-950 rounded-md flex flex-col gap-3">
            <div className={cn(`w-full h-32 bg-top bg-cover rounded-t-md bg-[url("/nft10.webp")]`)}></div>
            <div className="p-3 flex flex-col justify-between">
              <h3 className="font-semibold text-sm">{products[9].title.slice(0, 15) + '...'}</h3>
              <p className="text-xs opacity-60">{products[9].description.slice(0, 25) + '...'}</p>
              <span className="flex py-2 items-center text-xs font-semibold gap-1 opacity-90">{products[9].price} <GemIcon className="size-3 text-purple-500" /></span>
              <div className="pt-4 flex justify-center">
                <button className="bg-teal-700 border border-teal-500 text-xs font-semibold rounded py-1.5 px-3">Buy now</button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}