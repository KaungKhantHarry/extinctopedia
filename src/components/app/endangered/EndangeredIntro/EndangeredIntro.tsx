import Image from "next/image"
import gorilla from "../../../../../public/endangered/gorilla-in-undergrowth.jpg"
import Link from "next/link"

const EndangeredIntro = () => {
    return (
        <div className="flex flex-col gap-10 xl:flex-row-reverse xl:gap-0 xl:py-10">
            <div className="w-full xl:w-[65%]">
                <Image src={gorilla} alt="gorilla"/>
            </div>
            <div className="px-5 xl:w-[35%]">
                <div className="flex flex-col gap-5 py-7 border-t-4 border-black dark:border-white">
                    <h1 className="text-3xl font-bold font-mono tracking-tighter xl:text-6xl">
                        10 OF THE WORLD'S MOST ENDANGERED ANIMALS
                    </h1>
                    <p className="text-xl font-semibold tracking-tighter">
                        Currently, more than 47,000 species have been assessed to be under threat of extinction according to the IUCN.
                    </p>
                    <Link 
                        href="https://support.wwf.org.uk/adopt-an-animal" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className='w-fit bg-black text-white px-5 py-2 font-mono font-semibold tracking-tighter dark:bg-white dark:text-black'>
                        Adopt an animals
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EndangeredIntro
