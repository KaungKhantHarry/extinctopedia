import Link from "next/link"

const LoginButton = () => {
    return (
        <Link href="/login">
            <button className="relative text-white rounded-md inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-heading rounded-base group bg-linear-to-br from-[#005A25] to-[#005A25]/80 group-hover:from-[#005A25] group-hover:to-[#005A25]/80 hover:text-white/90 dark:text-white focus:ring-4 focus:outline-none focus:ring-[#005A25]/70 dark:focus:ring-[#005A25]/90">
                <span className=" relative px-4 py-2.5 transition-all ease-in duration-75 bg-neutral-primary-soft rounded-base group-hover:bg-transparent group-hover:dark:bg-transparent leading-5">
                    Sign In
                </span>
            </button>
        </Link>
    )
}

export default LoginButton
