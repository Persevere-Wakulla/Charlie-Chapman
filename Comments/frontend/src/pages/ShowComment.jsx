import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import BackButton from "../componets/home/BackButton";
import Spinner from "../componets/Spinner";


const ShowComment = () => {
  const [comment, setComment] = useState({})
  const {id} = useParams();
  
  let loading
  
  useEffect(() => {
    const getComments = async () => {
      loading = true
      try {
        const req = await fetch('http://localhost:5555/comments/')
        const res = await req.json()
        if (res) setComment(res.data.find(comment=> comment._id === id))
        loading = false
      } catch (error) {
        loading = false
        console.log(error.message);
      }
    }
      getComments()
    }, [])

  return (
    <div className="p-4 show">
      <BackButton/>
       <h1 className="text-3xl my-4 h s">Show Comments 	</h1>
        {loading ? (
          <Spinner/>
        ):(
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p4 d sd">
            <div className="my-4 divShow">
              <span className="text-xl mr-4 text-gray-500 l">Id:</span>
              <span className="st">{comment._id}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500 l">
                Title:
              </span>
              <span className="st">{comment.name}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500 l">Subject:</span>
              <span className="st" >{comment.subject}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500 l">Text:</span>
              <span className="st" >{comment.text}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500 l">Publish Year:</span>
              <span className="st">{comment.publishYear}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500 l">Create Time:</span>
              <span className="st" >{Date(comment.createdAt)}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500 l">Last Update Time:</span>
              <span className="st">{comment.updated}</span>
            </div>
            </div>
        )}
    </div>
    
  )
}

export default ShowComment