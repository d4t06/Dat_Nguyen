import Link from "next/link";
import dateFormatter from "@/libs/dateFormater";

function ListItem({postMeta}: { postMeta: Meta}){

   const {id, title, date} = postMeta

   // console.log("check postMeta", postMeta)
   const formattedDate = dateFormatter(date);


   return (
      <li className="mb-3 ml-2 text-white">
         <Link className="text-xl hover:underline font-medium" href={`/posts/${id}`}>{title}</Link>
         <br />
         <p className="text-sm">{formattedDate}</p>
      </li>
   )
}

export default ListItem