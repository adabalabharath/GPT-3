import React from 'react'
import './Brand.css'
import { shopify,slack,dropbox,atlassian,google } from './imports'
const Brand = () => {
  return (
    <div className='brands'>
     <div>
      <img src={google}/>
     </div>
     <div>
      <img src={atlassian}/>
     </div>
     <div>
      <img src={slack}/>
     </div>
     <div>
      <img src={shopify}/>
     </div>
     <div>
      <img src={dropbox}/>
     </div>
    </div>
  )
}

export default Brand