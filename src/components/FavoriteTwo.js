import React, { useContext, useEffect } from "react";

import filledstar from '../assests/images/filledstar.svg'
import up from '../assests/images/up.svg'
import down from '../assests/images/down.svg'

import { FetchContext } from "../contexts/FetchContext";
import { Logo } from "./Logo";

export function FavoriteTwo () {
  const { favoriteTwo, favorites, setFavorites, setFavoriteTwo } = useContext(FetchContext)

  const handleDeleteFavorite = () =>{
    setFavorites(favorites.filter((favorite)=>(favorite!==favoriteTwo.companySymbol)));
  }

  if(favorites.length === 1){setFavoriteTwo(null)}

  return(
    <>
      { !favoriteTwo ? null : (
          <div className="favorite">
              <div className="favoritestock-info">
                  <img className="add-favorite" src={filledstar} alt="Desfavoritar" onClick={handleDeleteFavorite}></img>
                  <Logo logo={favoriteTwo.companySymbol}/>
                  <div>
                    <p className="company-symbol">{favoriteTwo.companySymbol}</p>
                    <p className="company-name">{favoriteTwo.companyName}</p>
                  </div>
              </div>
           
              <div className="favoritestock-numbers">
                { favoriteTwo.stockChangePercent > 0 && (
                <>
                  <p style={{color: "green"}}>{(favoriteTwo.stockChangePercent*100).toFixed(2)}%</p>
                  <img src={up} alt="Variação"></img>
                </>
                )}

                { favoriteTwo.stockChangePercent < 0 && (
                <>
                  <p style={{color: "red"}}>{(favoriteTwo.stockChangePercent*100).toFixed(2)}%</p>
                  <img src={down} alt="Variação"></img>
                </>
                )}
              </div>
          </div>
      )}
    </>
  )
}


