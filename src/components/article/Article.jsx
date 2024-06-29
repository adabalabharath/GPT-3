import React from 'react'
import './Article.css'
const article = ({imgUrl,date,title}) => {
  return (
    <div className='gpt3_article'>
     <div className='gpt3_article-image'><img src={imgUrl}/></div> 
      <div className='gpt3_article-content'>
        <div>
        <p>{date}</p>
        <h3>{title}</h3>
        </div>
      <p>Read Full Article</p>
      </div> 
    </div>
  )
}

export default article