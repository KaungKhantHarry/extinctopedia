"use client";

import { auth, googleProvider } from "@/firebase/config";
import { signInWithPopup } from "firebase/auth";
import { useSearchParams, useRouter } from "next/navigation";
import bgPic from "../../../../../public/home/signin.webp"

const LoginPage = () => {

    const params = useSearchParams();
    const router = useRouter();

    const redirectTo = params.get("redirect") || "/";

    const loginWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            router.push(redirectTo);
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <div className="fixed inset-0 flex h-screen pt-[150px]">
            <div className="hidden md:flex md:flex-col md:w-[60%] md:relative md:h-auto md:bg-cover md:bg-center md:bg-no-repeat md:z-10"
                style={{ backgroundImage: `url(${bgPic.src})` }}>
            </div>
            <div className="w-full md:w-[40%] bg-[#EBE8D4] flex flex-col gap-10 justify-center items-center px-5">
                <div className="py-10 flex flex-col text-center text-[#005A25] gap-5 border-b-2 border-b-[#005A25]">
                    <h1 className="text-4xl font-bold tracking-wide">
                        Welcome to 
                    </h1>
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Extinctopedia
                    </h2>
                    <h3 className="text-xl font-bold tracking-tighter font-mono">
                        Explore what we have lost and what we must protect.
                    </h3>
                </div>
                <button
                    type="button"
                    onClick={loginWithGoogle}
                    className="text-white rounded-xl bg-[#005A25] hover:bg-[#005A25]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 box-border border border-transparent font-medium leading-5 rounded-base text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55"
                    >
                    <svg
                        className="w-4 h-4 me-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        fillRule="evenodd"
                        d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                        clipRule="evenodd"
                        />
                    </svg>
                    Sign in with Google
                </button>
            </div>
        </div>
    )
}

export default LoginPage
