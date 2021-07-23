import React, { useContext, useState } from "react";

import star from '../assests/images/star.svg'
import up from '../assests/images/up.svg'
import down from '../assests/images/down.svg'

import { FetchContext } from "../contexts/FetchContext";
import { Logo } from "./Logo";

export function MostRecent ({ item }) {
  const { currentStock, setFavorites, favorites } = useContext(FetchContext)

  const handleNewFavorite = () => {
    const newFavorite = currentStock.companySymbol
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
      { !currentStock ? null : (
        <div className="recents-list">
            <div className="recentstock-info">
              <img className="add-favorite" src={star} alt="Favoritar" onClick={handleNewFavorite}></img>
              <Logo logo={currentStock.companySymbol}/>
              <div>
                  <p className="company-symbol">{currentStock.companySymbol}</p>
                  <p className="company-name">{currentStock.companyName}</p>
              </div>
            </div>

            { currentStock.stockChange < 0 && 
            <div className='recentstock-numbers' style={{
              color: "red",
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}>
                 <p style={{marginRight: `2px`}}>{(currentStock.stockChangePercent*100).toFixed(2)}%</p>
                 <img src={down} alt="Variação"></img>
            </div>
            }
            { currentStock.stockChange > 0 && 
            <div style={{
              color: "green",
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}>
                 <p style={{marginRight: `2px`}}>{(currentStock.stockChangePercent*100).toFixed(2)}%</p>
                 <img src={up} alt="Variação"></img>
            </div>
            }
        </div>
      )}
    </>
  )
}


