import { useEffect, useState } from 'react'
import LoadPage from './pages/LoadPage'
import MainPage from './pages/MainPage'
import { User } from './api/models/userInterface';
import { getUser } from './api/user/user.service';
import QrPage from './pages/QrPage';
import { getPlanetImage } from './api/planetPhoto/planetPhoto.service';
import { MainPageInterface } from './api/models/mainPageInterface';

const tg = Telegram.WebApp;
function App() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [block, setBlock] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const [urlPlanet, setUrlPlanet] = useState<string>();

  const getAll = async () => {
    const tgUser = await getUser(tg.initDataUnsafe.user?.id);
    const url = await getPlanetImage(tgUser.planetURL);
    setUser(tgUser);
    setUrlPlanet(url);
  }

  useEffect(() => {
    tg.ready();
    tg.setHeaderColor('#000');
    tg.setBackgroundColor('#000')
    tg.expand();
    tg.disableVerticalSwipes();
    // if (tg.platform === 'tdesktop' || tg.platform === 'macos' || tg.platform === 'weba' || tg.platform === 'webk' || tg.platform === 'unknown') {
      setBlock(false);
    // } else {
      getAll();
      console.log(urlPlanet)
      setTimeout(() => setIsLoaded(true), 3000);
    // }
  }, [])

  return (
    <div className='h-full min-h-screen overflow-hidden'>
      {block ? (<QrPage />)
        : (
          isLoaded ?
            (
              <MainPage {... {user, urlPlanet} as MainPageInterface} />
            )
            : (
              <LoadPage />
            )
        )}
    </div>
  )
}

export default App
