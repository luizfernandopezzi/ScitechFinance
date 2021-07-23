import React, { useContext } from "react";

import star from '../assests/images/star.svg'
import up from '../assests/images/up.svg'
import down from '../assests/images/down.svg'

import { FetchContext } from "../contexts/FetchContext";
import { Logo } from "./Logo";

export function OldestRecent ({ item }) {
  const { oldestRecent, setFavorites, favorites } = useContext(FetchContext)

  const handleNewFavorite = () => {
    const newFavorite = oldestRecent.companySymbol
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
      { !oldestRecent ? null : (
        <div className="recents-list">
            <div className="recentstock-info">
              <img className="add-favorite" src={star} alt="Favoritar" onClick={handleNewFavorite}></img>
              <Logo logo={oldestRecent.companySymbol}/>
              <div>
                  <p className="company-symbol">{oldestRecent.companySymbol}</p>
                  <p className="company-name">{oldestRecent.companyName}</p>
              </div>
            </div>

            { oldestRecent.stockChange < 0 && 
            <div className='recentstock-numbers' style={{
              color: "red",
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}>
                 <p style={{marginRight: `2px`}}>{(oldestRecent.stockChangePercent*100).toFixed(2)}%</p>
                 <img src={down} alt="Variação"></img>
            </div>
            }
            { oldestRecent.stockChange > 0 && 
            <div style={{
              color: "green",
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}>
                 <p style={{marginRight: `2px`}}>{(oldestRecent.stockChangePercent*100).toFixed(2)}%</p>
                 <img src={up} alt="Variação"></img>
            </div>
            }
        </div>
      )}
    </>
  )
}


