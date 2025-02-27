import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  
let user = 'kavi'
  return (
    <div className='App'>
      <Header user={user}/>
      <Content/>
      <Footer user={user}/>
      
    </div>
  )
}

export default App
