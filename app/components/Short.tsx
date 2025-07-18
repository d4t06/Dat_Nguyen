export default function Short({ id, params }: { id: string; params?: string }) {
  return (
    <div className="aspect-[9/16] max-w-[300px] mx-auto">
      <iframe
        loading="lazy"
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${id}?controls=0&loop=1&playlist=${id}&rel=0&iv_load_policy=3${params}`}
      />
    </div>
  );
}
