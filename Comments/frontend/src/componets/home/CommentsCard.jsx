import React from 'react'
import { Link } from "react-router-dom";
import { CommentSingleCard } from './COmmentSingleCard';

const CommentsCard = ({comments}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
        {comments.map((item)=>(
    <CommentSingleCard key={item._id} comment={item}/>
    ))}
    </div>
  )
}

export default CommentsCard