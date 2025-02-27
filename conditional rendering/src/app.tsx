import Footer from './components/Footer'
import CounterApp from './components/CounterApp'
import TextField from './components/TextField'


function App() {
  
let user = 'kavi'
  return (
    <div className='App'>
      <Header user={user}/>
      <Content/>
      <Footer user={user}/>
      <TextField/>
      
    </div>
  )
}