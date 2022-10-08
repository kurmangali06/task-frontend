import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <div>
      <ul className='Header'>
        <Link to='/'><li>Главная</li></Link>
        <Link to='/edit'><li>Посты</li></Link>
      </ul>
    </div>
  )
}
