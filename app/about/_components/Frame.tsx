import { ReactNode } from "react";

export default function Frame({ children, className = '' }: { children: ReactNode, className?: string }) {
    return (
        <div className="shadow-[0_1rem_2rem_rgba(0,0,0,0.4)]">
            <div className="flex px-4 py-3 space-x-2 bg-gray-600 rounded-t-lg bg-opacity-60">
                <span className="block w-4 h-4 bg-red-400 rounded-full"></span>
                <span className="block w-4 h-4 bg-yellow-500 rounded-full"></span>
                <span className="block w-4 h-4 bg-green-500 rounded-full"></span>
            </div>

            <div
                // style={{ fontFamily: `"abc", "Courier New", Courier, monospace`, fontWeight: 400 }}
                className={`px-4 py-3 text-base bg-gray-900 md:px-6 md:py-6 font-[monospace] ${className}`}
            >
                {children}
            </div>
        </div>
    );
}
