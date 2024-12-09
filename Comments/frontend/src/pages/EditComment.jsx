import React, { useState, useEffect } from "react"
import BackButton from "../componets/home/BackButton"
import Spinner from "../componets/Spinner"
import { useNavigate, useParams } from 'react-router-dom'

const EditComment = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('')
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams()

  const getComments= async () => {
    try {
      setLoading(true)
      console.log('here');
      const req = await fetch(`http://localhost:5555/comments/${id}`)
      const res = await req.json()
      if (res) {

        setName(res.data.name);
        setSubject(res.data.subject) 
        setText(res.data.text)
        setPublishYear(res.data.publishYear)
      }

      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error.message);

    }
  }
  useEffect(() => {
    getComments()
  }, [])


  const handleEditComment = async () => {
    try {
      setLoading(true)
      const req = await fetch(` http://localhost:5555/comments/${id}`, {
        method: "PUT",
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
    <div className="p-4 edit">
      <BackButton />
      <h1 className="text-3xl my-4 h e">Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto cm">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 h e">Name</label>
          <input
            type="text"
            value={name}
            className="border-2 border-sky-500 px-4 py-2 w-full"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div my-4>
          <label className="text-xl mr-4 text-gray-500 h e">Subject</label>
          <input
            type="text"
            value={subject}
            className="border-2 border-sky-500 px-4 py-2 w-full"
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div my-4>
          <label className="text-xl mr-4 text-gray-500 h e">Text</label>
          <input
            type="text"
            value={text}
            className="border-2 border-sky-500 px-4 py-2 w-full"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 h e">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            className="border-2 border-sky-500 px-4 py-2 w-full"
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </div>
        <button
          className="p-2 bg-sky-300 m-8 h e eb"
          onClick={() => handleEditComment()}>Save</button>
      </div>
    </div>
  )
}

export default EditComment