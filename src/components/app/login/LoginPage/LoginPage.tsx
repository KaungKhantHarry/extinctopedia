"use client";

import { auth, googleProvider } from "@/firebase/config";
import { signInWithPopup } from "firebase/auth";
import bgPic from "../../../../../public/home/signin.webp"
import { useState } from "react";

const LoginPage = () => {

    const [open, setOpen] = useState<boolean>(false);

    const loginWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <>
            <button 
                onClick={() => setOpen(true)}
                className="relative text-white rounded-md inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-heading rounded-base group bg-linear-to-br from-[#005A25] to-[#005A25]/80 group-hover:from-[#005A25] group-hover:to-[#005A25]/80 hover:text-white/90 dark:text-white focus:ring-4 focus:outline-none focus:ring-[#005A25]/70 dark:focus:ring-[#005A25]/90">
                <span className=" relative px-4 py-2.5 transition-all ease-in duration-75 bg-neutral-primary-soft rounded-base group-hover:bg-transparent group-hover:dark:bg-transparent leading-5">
                    Sign In
                </span>
            </button>
            
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white dark:text-black w-[600px] max-w-[90%] rounded-xl">
                        <div className="flex">
                            <div className="w-[60%] rounded-l-xl relative h-[400px] bg-cover bg-center bg-no-repeat z-10"
                                style={{ backgroundImage: `url(${bgPic.src})` }}>
                            </div>
                            <div className="w-[40%] flex flex-col bg-[#EBE8D4] rounded-r-xl p-3">
                                <div className="h-[10%] flex justify-end">
                                        <button
                                        onClick={() => setOpen(false)}
                                        className="text-body hover:bg-neutral-tertiary rounded-base p-1"
                                    >
                                        ✖
                                    </button>
                                </div>
                                <div className="h-[60%] flex flex-col justify-center items-center text-center text-[#005A25] gap-5 border-b-2 border-b-[#005A25]">
                                    <h1 className="text-2xl font-bold tracking-wide">
                                        Welcome to 
                                    </h1>
                                    <h2 className="text-xl font-semibold tracking-tight">
                                        Extinctopedia
                                    </h2>
                                    <h3 className="text-md font-bold tracking-tighter font-mono">
                                        Explore what we have lost and what we must protect.
                                    </h3>
                                </div>
                                <div className="h-[30%] flex justify-center items-center">
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
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default LoginPage
