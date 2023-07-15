export default function Video({id}: {id: string}) {
   return (
      <div className="aspect-video">
         <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${id}`} />
      </div>
   )
}