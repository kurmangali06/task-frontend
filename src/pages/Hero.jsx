import React from 'react'
import './Hero.css'

export const Hero = () => {
  return (
    <div className='container'>
      <h1>добро пожаловать</h1>
      <p>это блок покажу навыки верстки</p>
      <div>
        <h2>умею работать с flex</h2>
        <div className='wrapper'>
          <div className='fuji'>
            <img src="https://images.unsplash.com/photo-1664994097974-3c63e91c4c0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="фото"/>
              <p>Available for hire</p>
          </div>
          <div className='Kyoto'>
            <img src="https://images.unsplash.com/photo-1664912048825-4596359d411b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="фото"/>
              <p>gaspar zaldo</p>
          </div>
          <div className='Tokyo'>
            <img src="https://images.unsplash.com/photo-1657299141998-2aba7e9bdebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="фото"/>
              <p>In collaboration with Getty Image</p>
          </div>
          <div className='Niigata'>
            <img src="https://plus.unsplash.com/premium_photo-1661697955364-bfc617b0f3c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="фото"/>
              <p>Available for hire</p>
          </div>
          <div className='Sapporo'>
            <img src="https://images.unsplash.com/photo-1662581871665-f299ba8ace07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="фото"/>
              <p>Available for hire</p>
          </div>
        </div>
        <h2>умею работать с grid</h2>
        <div className="grid">
        <div className='grid-item fuji'>
            <img src="https://images.unsplash.com/photo-1664994097974-3c63e91c4c0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="фото"/>
              <p>Available for hire</p>
          </div>
          <div className='grid-item Kyoto'>
            <img src="https://images.unsplash.com/photo-1664912048825-4596359d411b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="фото"/>
              <p>gaspar zaldo</p>
          </div>
          <div className='grid-item Tokyo'>
            <img src="https://images.unsplash.com/photo-1657299141998-2aba7e9bdebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="фото"/>
              <p>In collaboration with Getty Image</p>
          </div>
          <div className='grid-item Niigata'>
            <img src="https://plus.unsplash.com/premium_photo-1661697955364-bfc617b0f3c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="фото"/>
              <p>Available for hire</p>
          </div>
          <div className='grid-item Sapporo'>
            <img src="https://images.unsplash.com/photo-1662581871665-f299ba8ace07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="фото"/>
              <p>Available for hire</p>
          </div>
        </div>
        <h2>Работа с анимаций</h2>
        <div className='animate'>        
          <button className='button'>нажми</button>
        <div class="box"></div>
        <div>
        <div class="wrap">
      <div class="sticker"></div>
      <div class="msg">wow!</div>
        </div>
</div>

</div>

      </div>
    </div>
  )
}
