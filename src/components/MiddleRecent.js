import React, { useContext } from "react";

import star from '../assests/images/star.svg'
import up from '../assests/images/up.svg'
import down from '../assests/images/down.svg'

import { FetchContext } from "../contexts/FetchContext";
import { Logo } from "./Logo";

export function MiddleRecent ({ item }) {
  const { middleRecent, setFavorites, favorites } = useContext(FetchContext)

  const handleNewFavorite = () => {
    const newFavorite = middleRecent.companySymbol
    if(favorites.length === 0){
        setFavorites(prev => [...prev, newFavorite])
    }else{
        const isFavorite = favorites.includes(newFavorite)   
        if(!isFavorite){
            setFavorites(prev => [...prev, newFavorite])
        }else{
            alert('Este ativo já encontra-se na lista de favoritos.')
        }
    }
  }
  
  return(
    <>
      { !middleRecent ? null : (
        <div className="recents-list">
            <div className="recentstock-info">
              <img className="add-favorite" src={star} alt="Favoritar" onClick={handleNewFavorite}></img>
              <Logo logo={middleRecent.companySymbol}/>
              <div>
                  <p className="company-symbol">{middleRecent.companySymbol}</p>
                  <p className="company-name">{middleRecent.companyName}</p>
              </div>
            </div>

            { middleRecent.stockChange < 0 && 
            <div className='recentstock-numbers' style={{
              color: "red",
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}>
                 <p style={{marginRight: `2px`}}>{(middleRecent.stockChangePercent*100).toFixed(2)}%</p>
                 <img src={down} alt="Variação"></img>
            </div>
            }
            { middleRecent.stockChange > 0 && 
            <div style={{
              color: "green",
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}>
                 <p style={{marginRight: `2px`}}>{(middleRecent.stockChangePercent*100).toFixed(2)}%</p>
                 <img src={up} alt="Variação"></img>
            </div>
            }
        </div>
      )}
    </>
  )
}


