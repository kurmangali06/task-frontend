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
      axios.get(`https://servers-node.herokuapp.com/posts/${id}`).then(res => {
        setValue(res?.data.text)
      })
    }
  }, [])
  const updatePost =  async(id) => {
    if(value.length < 5) {
      alert("пост должен содеражать минимум 5 символов")
     }else {
      const fields = {
        text: value,
      }
      await axios.patch(`https://servers-node.herokuapp.com/posts/${id}`, fields )
      navigate('/edit')
     }

  }
  return (
    <div>
      <h2>Ваш пост</h2>
      <div className='post'>
      <input  className='input' type="text" value={value} onChange={ e => setValue(e.target.value)} />
      <br />
      <div className='btns'>
      <button  className='button'  onClick={()=> updatePost(id)}>отправить</button>
      <br />
      <Link to='/edit'   className='button' >Вернуться </Link>
      </div>

      </div>

    </div>
  )
}

export default Post