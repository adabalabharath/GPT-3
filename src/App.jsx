import {Blog,Footer,Header,Possibility,Features} from './containers'
import WhatGPT3 from './containers/whatGPT3/WhatGPT3'
import {Article,Brand,CTA,Feature,Navbar} from './components'
import './App.css'

function App() {


  return (
    <div>
     <div className='gradient__bg'>
     <Navbar/>
     <Header/>
     </div>

     <Brand/>

     <WhatGPT3/>
     <Features/>
     <Possibility/>
     <CTA/>
     <Blog/>
     <Footer/>
    </div>
  )
}

export default App
