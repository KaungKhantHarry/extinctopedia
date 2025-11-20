'use client'

import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation"
import { useState } from "react";

const LogoutButton = () => {

    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();

    const handleLogout = async () => {
        await signOut(auth);
        router.push("/");
    }

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="relative text-white rounded-md inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-heading rounded-base group bg-linear-to-br from-red-600 to-red-500 group-hover:from-red-600 group-hover:to-red-500 hover:text-white/90"
            >
                <span className="relative px-4 py-2.5 bg-neutral-primary-soft rounded-base group-hover:bg-transparent leading-5">
                Sign Out
                </span>
            </button>

            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-xl dark:text-black border border-default rounded-base p-6 w-full max-w-md">

                        <div className="text-center">
                        <svg
                            className="mx-auto mb-4 text-fg-disabled w-12 h-12"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>

                        <h3 className="mb-6 text-body">
                            Are you sure you want to sign out?
                        </h3>

                        <div className="flex items-center justify-center space-x-4">
                            <button
                            onClick={handleLogout}
                            className="text-white rounded-xl bg-red-600 hover:bg-red-700 px-4 py-2.5 rounded-base"
                            >
                            Yes, I'm sure
                            </button>

                            <button
                            onClick={() => setOpen(false)}
                            className="text-body bg-neutral-secondary-medium px-4 py-2.5 rounded-base hover:bg-neutral-tertiary-medium"
                            >
                            No, cancel
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default LogoutButton
