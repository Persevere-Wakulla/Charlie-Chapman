import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { CommentModal } from './CommentModal';

export const CommentSingleCard = ({ comment}) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div
            key={comment._id}
            className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl w'>
            <h2 className='absolute top-1 right-2 px4 py-1 bg-red-300 rounded-lg'>{comment.publishYear}</h2>
            <h4 className='my-2 text-gray-500'>{comment._id}</h4>
            <div className='flex justify-start items-center gap-x-2'>
                <p className='text-red-300 text-2xl'>📖</p>
                <h2 className='my-1'>{comment.className}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <p className='text-red-300 text-2xl'>🧑🏽‍🦱</p>
                <h2 className='my-1'>{comment.subject}</h2>
            </div>
            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                <div className='text-3l text-blue-800 hover:text-black' onClick={() => setShowModal(true)}>🪟</div>
                <Link to={`/comments/details/${comment.id}`}>ℹ️<div className='text-2xl text-green-800 hover:textblack'></div></Link>
                <Link to={`/comments/edit/${comment.id}`}>📝<div className='text-2xl text-yellow-800 hover:textblack'></div></Link>
                <Link to={`/comments/delete/${comment.id}`}>🗑️<div className='text-2xl text-red-800 hover:textblack'></div></Link>
            </div>
            {
                showModal && (
                    <CommentModal comment={comment} onClose={() => setShowModal(false)} />
                )
            }
        </div>
    )
}
