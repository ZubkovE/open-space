import { useEffect, useState } from 'react'
import LoadPage from './pages/LoadPage'
import MainPage from './pages/MainPage'
import { User } from './api/models/userInterface';
import { getUser } from './api/user/user.service';
import QrPage from './pages/QrPage';
import { getPlanetImage } from './api/planetPhoto/planetPhoto.service';
import { MainPageInterface } from './api/models/mainPageInterface';
import Footer from './components/Footer';

const tg = Telegram.WebApp;

const sleep = async () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => { resolve() }, 3000);
  })
}

function App() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [block, setBlock] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const [urlPlanet, setUrlPlanet] = useState<string>();

  const getAll = async () => {
    await Promise.all([(async () => {
      const tgUser = await getUser(tg.initDataUnsafe.user?.id);
      const url = await getPlanetImage(tgUser?.planetURL);
      setUser(tgUser);
      setUrlPlanet(url);
    })(), sleep()])
    setIsLoaded(true);
  }

  useEffect(() => {
    tg.ready();
    tg.setHeaderColor('#000');
    tg.setBackgroundColor('#000');
    tg.expand();
    tg.disableVerticalSwipes();
    console.log(tg.platform)
    if (tg.platform === 'tdesktop' || tg.platform === 'macos' || tg.platform === 'weba' || tg.platform === 'web' || tg.platform === 'webk' || tg.platform === 'unknown') {
      setBlock(true);
    } else {
      getAll();
    }
  }, [])

  return (
    <div>
      {block ? (<QrPage />)
        : (<>
          {isLoaded ?
            (
              <MainPage {... { user, urlPlanet } as MainPageInterface} />
            )
            : (
              <LoadPage />
            )}
          <Footer />
        </>
        )}
    </div>
  )
}

export default App
