import React from 'react'
import './blog.css'
import { Article } from '../../components'
import {blog01,blog02,blog03,blog04,blog05} from './index.js'

const Blog = () => {
  return (
    <div className='gpt3_blog section__padding' id='blog'>
      <div className='gpt3_blog-heading'>
        <h1 className='gradient__text'>A lot is happening,we are blogging about it.</h1>
      </div>
      <div className='gpt3_blog-container'>
        <div className='gpt3_blog-container-groupA'>
         <Article imgUrl={blog01} date='june 29th 2024' title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className='gpt3_blog-container-groupB'>
        <Article imgUrl={blog02} date='june 29th 2024' title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={blog03} date='june 29th 2024' title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={blog04} date='june 29th 2024' title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={blog05} date='june 29th 2024' title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>

      </div>
    </div>
  )
}

export default Blog