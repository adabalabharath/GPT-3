import React from 'react'
import './possibility.css'
import possibility from './../../assets/possibility.png'
const Possibility = () => {
  return (
    <div className='gpt3_possibility section__padding' id='possibility'>
      <div className='gpt-3__possibility-image'>
        <img src={possibility}/>
      </div>
      <div className='gpt3_possibility-content'>
        <h4 >Request Early access to get started</h4>
        <h1 className='gradient__text'>The possibilities are <br/>beyond ur imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
       <h4 className='request'>Request Early access to get started</h4>
      </div>
    </div>
  )
}

export default Possibility