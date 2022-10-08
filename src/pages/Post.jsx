import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import './Details.css'

const Post = () => {
  const navigate = useNavigate()
  const { id} = useParams()
  const [value, setValue] = useState('')
  useEffect(() => {
    if(id) {
      axios.get(`http://localhost:5000/posts/${id}`).then(res => {
        setValue(res?.data.text)
      })
    }
  }, [])
  const updatePost =  async(id) => {
    const fields = {
      text: value,
    }
    await axios.patch(`http://localhost:5000/posts/${id}`, fields )
    navigate('/edit')
  }
  return (
    <div>
      <h2>{id && `Ваш пост` }</h2>
      <input  className='input' type="text" value={value} onChange={ e => setValue(e.target.value)} />
      <button  className='button'  onClick={()=> updatePost(id)}>отправить</button>
      <Link to='/edit'   className='button' >Вернуться </Link>
    </div>
  )
}

export default Post