import React from 'react'
import Profile from './components/profile';
import About from './components/about'
import Interest from './components/interests'
import Footer from './components/footer'

function App() {
  return (
    <div className='outer-box'>
    <div className='inner-box'>
      <Profile/>
      <About/>
      <Interest/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
