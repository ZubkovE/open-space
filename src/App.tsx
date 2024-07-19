import { useEffect, useState } from 'react'
import './App.css'
import LoadPage from './pages/LoadPage'
import MainPage from './pages/MainPage'
import { useSearchParams } from 'react-router-dom'
function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 5000)
  }, [])

  return (
    <div className='h-full max-h-[798px] min-h-[798px]'>
      {isLoaded ?
        (
          <MainPage />
        )
        : (
          <LoadPage />
        )
      }
    </div>
  )
}

export default App
