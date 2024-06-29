import React from 'react'
import './feature.css'
import { Feature } from '../../components';
const Features = () => {

  const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt-3__features-heading'>
      <h1 className='gradient__text'>The Future is now and you just need to realise it.step into future today & make it happen.</h1>
      <p className='gradient__text'>Request early access to get started</p>
      </div>
      <div className='gpt-3__features-feature'>
      {featuresData.map((x,index)=>{
         return <Feature title={x.title} text={x.text}/>
      })}
      </div>
    </div>
  )
}

export default Features