import { useEffect, useState } from 'react'
import LoadPage from './pages/LoadPage'
import MainPage from './pages/MainPage'

const tg = Telegram.WebApp;
function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  // const [block, setBlock] = useState(false);

  useEffect(() => {
    tg.ready();
    tg.expand();
    if (tg.platform === 'tdesktop' || tg.platform === 'macos' || tg.platform === 'weba' || tg.platform === 'webk') {
      // const desktop = document.querySelector('.desktop');
      // desktop?.classList.add('desktopImageActive');
      //setBlock(true);
    }
    setTimeout(() => setIsLoaded(true), 5000)
  }, [])

  return (
    <div className='h-full min-h-[750px]'>
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
