import React from 'react'
import {Link} from 'react-router-dom'

const CommentsTable= ({comments}) => {
  return (
    <table className="w-full border-separate border-spacing-2">
    <thead>
      <tr>
        <th className="border border-slate-600 rounded-md w d">NO</th>
        <th className="border border-slate-600 rounded-md w d">Name</th>
        <th className="border border-slate-600 rounded-md w d max-md:hidden">Subject</th>
        <th className="border border-slate-600 rounded-md max-md:hidden w d ">Comment</th>
        <th className="border border-slate-600 rounded-md max-md:hidden w d">Publish Year</th>
        <th className="border border-slate-600 rounded-md w d comment">Operations</th>
      </tr>
    </thead>
    <tbody>
      {comments.map((comment, index) => (
        <tr key={comment._id} className="h-8">
          <td className="border border-slate-700 rounded-md text-center w ">{index + 1}</td>
          <td className="border border-slate-700 rounded-md text-center w">{comment.name}</td>
          <td className="border border-slate-700 rounded-md text-center max-md:hidden w">{comment.subject}</td>
          <td className="border border-slate-700 rounded-md text-center max-md:hidden w">{comment.text}</td>
          <td className="border border-slate-700 rounded-md text-center max-md:hidden w">{comment.publishYear}</td>
          <td className="border border-700 rounded-md text-center">
            <div className="flex justify-center gap-x-4 hl">
            <Link to={`comments/details/${comment._id}`}>
              <div className="bg-100 rounded-md hover:bg-yellow-500 w">🗂️</div>
            </Link>

            <Link to={`comments/edit/${comment._id}`}>
              <div className="bg-100 rounded-md hover:bg-green-500 duration-400 transition-all w">✏️</div>
            </Link>
            <Link to={`comments/delete/${comment._id}`}>
              <div className="bg-100 rounded-md hover:bg-purple-500  hover:bg-red-300 duration-900 transition-all w">🗑️</div>
            </Link>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}
 export default CommentsTable