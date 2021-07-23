import { useContext } from 'react'
import Marquee from "react-fast-marquee";

import './styles/styles.css'
import recents from './assests/images/recents.svg'
import filledstar from './assests/images/filledstar.svg'

import { FetchContext, FetchContextProvider } from './contexts/FetchContext'
import { AuthContextProvider } from './contexts/AuthContext'

import Nav from "./components/Nav";
import Header from "./components/Header";
import { Search } from "./components/Search";
import { StockData } from './components/StockData';
import { Graph } from './components/Graph';
import { Subtitles } from './components/Subtitles';
import { MostRecent } from './components/MostRecent';
import { MiddleRecent } from './components/MiddleRecent';
import { OldestRecent } from './components/OldestRecent';
import { User } from './components/User'
import { FavoriteOne } from './components/FavoriteOne';
import { FavoriteTwo } from './components/FavoriteTwo';
import { FavoriteThree } from './components/FavoriteThree';
import { Footer } from './components/Footer'

function App() {
  return (
    <AuthContextProvider >
    <FetchContextProvider>
      <div>
        
      </div>
          <div id="page-auth">
            <Nav></Nav>
            <main>
              <Header />
              <Search />
              <div className="content">
                <StockData />
                <Graph />
              </div>
              <Subtitles src={recents} text={"Empresas recentes"} />
              <div className="recents-area">
              <Marquee pauseOnHover={true} gradient={false}>
                <MostRecent />
                <MiddleRecent />
                <OldestRecent />
              </Marquee>
              </div>
              <Footer />
            </main>
            <aside className="user-area">
              <User />
              <Subtitles src={filledstar} text={"Empresas favoritas"} />
              <div className="favorites-list">
                <FavoriteOne />
                <FavoriteTwo />
                <FavoriteThree />
              </div>
            </aside>
          </div>
    </FetchContextProvider>
    </AuthContextProvider>
  );
}

export default App
