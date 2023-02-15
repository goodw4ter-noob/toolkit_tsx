import React from 'react'
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

type PostContainerProps2 = {};

const PostContainer2 = () => {
    const { data: posts } = postAPI.useFetchAllPostsQuery(100);

    return (
        <div>
            <div>
                {/* {posts && posts.map(post => {
                    return <PostItem key={post.id} post={post}/>
                })} */}
            </div>
        </div>
    )
}

export default PostContainer2;