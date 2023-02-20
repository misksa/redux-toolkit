import React from 'react';
import {
	useCreatePostMutation,
	useDeletePostMutation,
	useGetAllPostsQuery,
	useUpdatePostMutation
} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
	const { data: posts } = useGetAllPostsQuery(100)
	const [createPost, {}] = useCreatePostMutation()
	const [ updatePost, {} ] = useUpdatePostMutation()
	const [ deletePost, {} ] = useDeletePostMutation()

	const handleCreate = async () => {
		const title = prompt()
		await createPost({title, body: title} as IPost)
	}

	const handleRemove = (post: IPost) => {
		deletePost(post)
	}

	const handleUpdate = (post: IPost) => {
		updatePost(post)
	}

	return (
		<div>
			<button onClick={() => handleCreate()}>create post</button>
			{posts && posts.map(post =>
				<PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />
			)}
		</div>
	);
};

export default PostContainer;