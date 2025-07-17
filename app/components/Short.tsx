export default function Short({ id }: { id: string }) {
  return (
    <div className="aspect-[9/16] max-w-[300px] mx-auto">
      <iframe
      
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${id}`}
      />
    </div>
  );
}
