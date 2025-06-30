import getLocalPosts from "@/libs/getLocalPosts";
import NoteItem from "./_components/NoteItem";

async function Posts() {
	const postsMeta = await getLocalPosts();

	if (!postsMeta)
		return <p className="mt-10  text-center">No posts available</p>;

	return (
		<div className="md:flex-grow mt-10">
			<div className="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 lg:grid-cols-3">
				{postsMeta.map((p, i) => (
					<NoteItem key={i} postMeta={p} />
				))}
			</div>
		</div>
	);
}

export default Posts;
