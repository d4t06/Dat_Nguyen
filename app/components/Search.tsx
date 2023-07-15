"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";


function Search() {
   const [value, setValue] = useState("");
   const router = useRouter();

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setValue('')
      router.push(`/${value}`)
   };

   return (
      <form action="" className="flex gap-2" onSubmit={handleSubmit}>
         <input
            type="text"
            className="bg-white text-gray-600 rounded-md"

            value={value}
            onChange={(e) => setValue(e.target.value)}
         />
         <button className="bg-white rounded-md p-2">&#127822;</button>
      </form>
   );
}

export default Search;
