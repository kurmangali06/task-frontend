import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Details.css'

export const Details = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    setLoading(true)
    fetch('https://servers-node.herokuapp.com/posts').then(res => res.json()).then(data => setPosts(data))
    setLoading(false)
  },[])

  const fetchPost = async () => {
  try {
    const fields = {
      text: value,
    }
    const { data} = await axios.post('https://servers-node.herokuapp.com/posts', fields)
    setLoading(true)
    window.location.reload();
  } catch (error) {
    console.log(error);
    alert("не удалость создать пост")
  }
  setValue('')
  setLoading(false)
  
  }
  const deletePost = async (id) => {
      if(window.confirm("Вы действительно ходите удалить пост?")) {
        posts?.filter(obj => obj._id !== id)
        setLoading(true)
        await axios.delete(`https://servers-node.herokuapp.com/posts/${id}`)
        window.location.reload();
      }
   
    }

  return (
    <>
    <h1>Посты</h1>
    <div>{loading || posts.length === 0 ? <h2> {posts.length === 0 ? "у вас нет постов" : "идет загрузка "} </h2> :  posts.map((post) => {
      return <div key={post._id}><p>{post.text}</p>
      <div className='btn'><button onClick={() =>deletePost(post._id)} className='button'  >удалить</button>
      <Link to={`/edit/${post._id}`}  className='button' >редактировать</Link></div></div>
  
    })}</div>
    <div className='inp'>
    <h3>Создать пост</h3>
    <input className='input' type="text"  value={value} onChange={(e)=> setValue(e.target.value)} placeholder='введите текст'/>
    <button className='button' onClick={fetchPost}>отправить пост</button>
    </div>
</>
  )
}
