import { useEffect, useState } from 'react'
import LoadPage from './pages/LoadPage'
import MainPage from './pages/MainPage'
import { User } from './api/models/userInterface';
import { getUser } from './api/user/user.service';
import QrPage from './pages/QrPage';

const tg = Telegram.WebApp;
function App() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [block, setBlock] = useState<boolean>(false);
  const [user, setUser] = useState<User>();

  const getTgUser = async () => {
    const tgUser = await getUser(tg.initDataUnsafe.user?.id);
    setUser(tgUser);
  }
  useEffect(() => {
    tg.expand();
    tg.disableVerticalSwipes()
    tg.ready();
    if (tg.platform === 'tdesktop' || tg.platform === 'macos' || tg.platform === 'weba' || tg.platform === 'webk'|| tg.platform === 'unknown') {
      setBlock(true);
    } else {
      getTgUser();
      setTimeout(() => setIsLoaded(true), 3000);
    }
  }, [])

  return (
    <div className='h-full min-h-screen'>
      {block ? (<QrPage />)
        : (
          isLoaded ?
            (
              <MainPage {...user as User} />
            )
            : (
              <LoadPage />
            )
        )}
    </div>
  )
}

export default App
