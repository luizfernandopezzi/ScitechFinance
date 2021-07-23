import React, { useContext, useEffect, useState } from "react";

import filledstar from '../assests/images/filledstar.svg'
import up from '../assests/images/up.svg'
import down from '../assests/images/down.svg'

import { FetchContext } from "../contexts/FetchContext";
import { Logo } from "./Logo";

export function FavoriteOne () {
  const { favoriteOne, favorites, setFavorites, setFavoriteOne } = useContext(FetchContext)

  console.log(favorites)
  console.log(favoriteOne)

  if(favorites.length === 0){setFavoriteOne(null)}
    
  const handleDeleteFavorite = () =>{
    setFavorites(favorites.filter((favorite)=>(favorite!==favoriteOne.companySymbol)))
  }

  return(
    <>
      { !favoriteOne ? null : (
          <div className="favorite">
              <div className="favoritestock-info">
                  <img className="add-favorite" src={filledstar} alt="Desfavoritar" onClick={handleDeleteFavorite}></img>
                  <Logo logo={favoriteOne.companySymbol}/>
                  <div>
                    <p className="company-symbol">{favoriteOne.companySymbol}</p>
                    <p className="company-name">{favoriteOne.companyName}</p>
                  </div>
              </div>
           
              <div className="favoritestock-numbers">
                { favoriteOne.stockChangePercent > 0 && (
                <>
                  <p style={{color: "green"}}>{(favoriteOne.stockChangePercent*100).toFixed(2)}%</p>
                  <img src={up} alt="Variação"></img>
                </>
                )}

                { favoriteOne.stockChangePercent < 0 && (
                <>
                  <p style={{color: "red"}}>{(favoriteOne.stockChangePercent*100).toFixed(2)}%</p>
                  <img src={down} alt="Variação"></img>
                </>
                )}
              </div>
          </div>
      )}
    </>
  )
}


