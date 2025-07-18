export default function Video({id}: {id: string}) {
   return (
      <div className="aspect-video">
         <iframe loading="lazy" className="w-full h-full" src={`https://www.youtube.com/embed/${id}?&rel=0&iv_load_policy=3`} />
      </div>
   )
}