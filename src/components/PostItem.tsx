
import React, { FC } from 'react'
import { IPost } from '../models/IPost'

type PostItemProps = {
    post: IPost,
    remove: (post: IPost) => void,
    update: (post: IPost) => void,
}

const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {

    const handleRemove = function (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.stopPropagation();
        remove(post)
    }

    const handleUpdate = function (e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const title = prompt('Введите новое название поста') || '';
        update({ ...post, title });
    }

    return (
        <div onClick={(e) => handleUpdate(e)} >
            {post.id}. {post.title}
            <button onClick={(e) => handleRemove(e)} >Delete</button>
        </div>
    )
}

export default PostItem