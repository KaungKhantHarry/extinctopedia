import Link from "next/link"

const HelpThem = () => {
    return (
        <div className="flex flex-col gap-7 px-5 py-10 w-full h-auto bg-black text-white dark:bg-white dark:text-black">
            <p className="font-mono text-2xl tracking-tighter md:text=3xl xl:text-4xl">
                HELP THEM HELP NATURE 
            </p>
            <p className="text-md w-full md:text-xl xl:w-[65%]">
                As humans continue to shape the planet, the natural world is declining. But it doesn't have to be this way. With your help, forests can be replanted, oceans can be restored, nature can be preserved, and wildlife can be protected.<br/><br/>
                <strong>If you would like to support their work, adopt an animal today and help make a difference where it really matters.</strong>
            </p>
            <Link 
                href="https://support.wwf.org.uk/adopt-an-animal" 
                target="_blank"
                rel="noopener noreferrer"
                className='w-fit bg-white text-black px-5 py-2 font-mono font-semibold tracking-tighter dark:bg-black dark:text-white'>
                Adopt an animals
            </Link>
        </div>
    )
}

export default HelpThem
