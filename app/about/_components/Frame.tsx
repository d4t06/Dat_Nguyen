import { ReactNode } from "react";

export default function Frame({ children }: { children: ReactNode }) {
    return (
        <div className="shadow-xl">
            <div className="flex px-4 py-3 space-x-2 bg-gray-400 rounded-t-lg bg-opacity-60">
                <span className="block w-4 h-4 bg-red-400 rounded-full"></span>
                <span className="block w-4 h-4 bg-yellow-500 rounded-full"></span>
                <span className="block w-4 h-4 bg-green-500 rounded-full"></span>
            </div>

            <div
                style={{ fontFamily: `"Courier New", Courier, monospace` }}
                className="px-4 py-6 text-lg md:text-2xl bg-slate-900 md:px-10 md:py-12"
            >
                {children}
            </div>
        </div>
    );
}
