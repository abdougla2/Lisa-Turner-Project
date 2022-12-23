import React from 'react';
import 'tailwindcss/tailwind.css';
import './Index.css'
import Blog from './Blog'
import Aboutus from './Aboutus'
import Navbar from './Navbar'
import Footer from './Footer'
import Trainings from './Trainings'
import Services from './Services'
import Homepage from './Homepage'


function App() {
  

  return (
    
    <div className="App">
      
<Navbar />
<div className='bgContainer'>
    
<Homepage />
<br></br>
<br></br>
<br></br>
<Aboutus />
<Services />
<Trainings />
<Blog />
<Footer />
</div>

    </div>
  )
}

export default App

