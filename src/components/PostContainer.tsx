import React, { useState, useEffect } from 'react'
import { IPost } from '../models/IPost';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

type PostContainerProps = {};

const PostContainer = () => {
    const [limit, setLimit] = useState(100);
    const { data: posts, refetch } = postAPI.useFetchAllPostsQuery(limit, {// pollingInterval: 1000,
    });
    const [createPost, { error: createError, isLoading: isCreateLoading }] = postAPI.useCreatePostMutation();
    const [ updatePost, {} ] = postAPI.useUpdatePostMutation();
    const [ deletePost, {} ] = postAPI.useDeletePostMutation();
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLimit(3);
    //     }, 2000)
    // }, []);

    const hadnleCreate = async function () {
        const title = prompt('Введите заголовок');

        await createPost({
            title,
            body: title
        } as IPost)
    };

    const handleRemove = function (post: IPost) {
        deletePost(post);
    };

    const handleUpdate = function (post: IPost) {
        updatePost(post);
    };

    return (
        <div>
            <div>
                <button onClick={() => refetch()} >REFETCH</button>
                <button onClick={hadnleCreate} >Add new post</button>
                {posts && posts.map(post => {
                    return <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />
                })}
            </div>
        </div>
    )
}

export default PostContainer