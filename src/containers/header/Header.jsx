import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className='gpt3_header section__padding' id='home' style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
      <div className='gpt3_header-content' >
        <h1 className='gradient__text'>Let's build something amazing with GPT-3 Open AI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <div className='gpt3_header-content_input'>
        <input type='email' placeholder='Enter email' />
        <button >Get Started</button>
      </div>
      <div className='gpt3_header-content_people'>
        <img src={people}/>
        <p style={{color:'white'}}>1600 people requested access for this site </p>
      </div>

      </div>
      <div className='gpt3_header-content_ai'>
        <img src={ai}/>
      </div>
    </div>
  );
}

export default Header;
