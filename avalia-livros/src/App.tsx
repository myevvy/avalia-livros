import './App.css'
import Home from './view/Home'
import { Header } from './view/Header'
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState('')

  return (
    <> 
    <Header query={query} onQueryChange={setQuery} />
    <div className="flex p-10 gap-4 justify-between">

      <Home query={query} />
      
      </div>
    
   
    </>
  )
}

export default App
