import React, { useState } from "react"
import BackButton from "../componets/home/BackButton"
import Spinner from "../componets/Spinner"
import { useNavigate } from 'react-router-dom'

const CreateComment = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('')
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();




  const createComments = async () => {
    try {
      setLoading(true)
      const req = await fetch('http://localhost:5555/comments', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          subject,
          text,
          publishYear
        })
      })
      setLoading(false)
      navigate('/')
    } catch (error) {
      setLoading(false)
      console.log(error.message);
    }
  }



  return (
    <div className="p-4 cc">
      <BackButton />
      <h1 className="text-3xl my-4 h hc">Create Comment</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 black-sky-400 rounded-xl w-[600px] p-4 mx-auto cb">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 h">Name</label>
          <input
            type="text"
            value={name}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div my-4>
          <label className="text-xl mr-4 text-gray-500 h">Subject</label>
          <input
            type="text"
            value={subject}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div my-4>
          <label className="text-xl mr-4 text-gray-500 h">Text</label>
          <input
            type="text"
            value={text}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 h">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </div>
        <button
          className="p-2 bg-300 m-8 h bc"
          onClick={() => createComments()}>Save</button>
      </div>
    </div>
  )
}

export default CreateComment