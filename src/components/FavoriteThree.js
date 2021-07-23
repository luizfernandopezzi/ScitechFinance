import React, { useContext } from "react";

import filledstar from '../assests/images/filledstar.svg'
import up from '../assests/images/up.svg'
import down from '../assests/images/down.svg'

import { FetchContext } from "../contexts/FetchContext";
import { Logo } from "./Logo";

export function FavoriteThree () {
  const { favoriteThree, favorites, setFavorites, setFavoriteThree } = useContext(FetchContext)

  const handleDeleteFavorite = () =>{
    setFavorites(favorites.filter((favorite)=>(favorite!==favoriteThree.companySymbol)));
  }

  if(favorites.length === 2){setFavoriteThree(null)}

  return(
    <>
      { !favoriteThree ? null : (
          <div className="favorite">
              <div className="favoritestock-info">
                  <img className="add-favorite" src={filledstar} alt="Desfavoritar" onClick={handleDeleteFavorite}></img>
                  <Logo logo={favoriteThree.companySymbol}/>
                  <div>
                    <p className="company-symbol">{favoriteThree.companySymbol}</p>
                    <p className="company-name">{favoriteThree.companyName}</p>
                  </div>
              </div>
           
              <div className="favoritestock-numbers">
                { favoriteThree.stockChangePercent > 0 && (
                <>
                  <p style={{color: "green"}}>{(favoriteThree.stockChangePercent*100).toFixed(2)}%</p>
                  <img src={up} alt="Variação"></img>
                </>
                )}

                { favoriteThree.stockChangePercent < 0 && (
                <>
                  <p style={{color: "red"}}>{(favoriteThree.stockChangePercent*100).toFixed(2)}%</p>
                  <img src={down} alt="Variação"></img>
                </>
                )}
              </div>
          </div>
      )}
    </>
  )
}


