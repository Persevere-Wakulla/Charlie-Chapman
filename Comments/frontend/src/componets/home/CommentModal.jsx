import React from 'react'

export const CommentModal = ({comment, onClose}) => {
  return (
    <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justif-center items-center' onClick={onClose}>
        <div onClick={(event) => event.stopPropagation()}
            className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'>
                <div className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer' onClick={onClose}>❎</div>
                <h2 className=' w-fit px4 py-1 bg-red-300 rounded-lg'>{comment.publishYear}</h2>
        <h4 className='my-2 text-gray-500'>{comment._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
            <p className='text-red-300 text-2xl'>📖</p>
            <h2 className='my-1'>{comment.name}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
            <p className='text-red-300 text-2xl'> &#128100;</p>
            <h2 className='my-1'>{comment.subject}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
            <p className='text-red-300 text-2xl'> &#128100;</p>
            <h2 className='my-1'>{comment.text}</h2>
        </div>   
            </div>
            </div>
  )
}
