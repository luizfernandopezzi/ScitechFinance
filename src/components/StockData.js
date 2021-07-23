import React, { useContext } from "react";

import star from '../assests/images/star.svg'
import up from '../assests/images/up.svg'
import down from '../assests/images/down.svg'

import adbe from '../assests/images/adbe.svg'
import aapl from '../assests/images/aapl.svg'
import amzn from '../assests/images/amzn.svg'
import fb from '../assests/images/fb.svg'
import msft from '../assests/images/msft.svg'
import sbux from '../assests/images/sbux.svg'
import twtr from '../assests/images/twtr.svg'

import { FetchContext } from "../contexts/FetchContext";

export const StockData = () => {
    const { currentStock, setFavorites, favorites } = useContext(FetchContext)

    const handleNewFavorite = () => {
        const newFavorite = currentStock.companySymbol
        if(favorites.length === 0){
            setFavorites(prev => [...prev, newFavorite])
        }else if(favorites.length < 3){
            if(!favorites.includes(newFavorite)){
                setFavorites(prev => [...prev, newFavorite])
            }else{
                alert('Este ativo já encontra-se na lista de favoritos.')
            }
        }else{
            alert('Número limite de ativos favoritos atingido.')
        }
    }

    return (
        <div className="graph-infos">
            { !currentStock ? (
                <div className='infos-alert'>
                    <p className="info-alert-text">Para visualizar informações sobre o mercado financeiro, digite o código do ativo no campo de pesquisa acima e clique no botão de pesquisa.</p>
                    <p className="info-alert-text">Dados em tempo real disponíveis entre 09:30 e 16:00.</p>
                </div>
            ) : (
            <div className='infos'>
                <div className='ticket-company'>
                    <img className='add-favorite' src={star} alt="Favoritar" onClick={handleNewFavorite}></img>
                    <div>
                        <p className="company-symbol">{currentStock.companySymbol}</p>
                        <p className="company-name">{currentStock.companyName}</p>
                    </div>                        
                </div>
                <div className="stock-numbers">
                    <div className="stock-price">
                        { currentStock.stockChange > 0 && <img src={up} alt="Variação"></img>}
                        { currentStock.stockChange < 0 && <img src={down} alt="Variação"></img>}
                        <p>${currentStock.latestPrice}</p>
                    </div>
                    { currentStock.stockChange < 0 && 
                    <div style={{color: "red"}}>
                        <span>${currentStock.stockChange}</span>
                        <span>({(currentStock.stockChangePercent*100).toFixed(2)}%)</span>
                    </div>
                    }
                    { currentStock.stockChange > 0 && 
                    <div style={{color: "green"}}>
                        <span>${currentStock.stockChange}</span>
                        <span>({(currentStock.stockChangePercent*100).toFixed(2)}%)</span>
                    </div>
                    }
                </div>
            </div>
            )}
        </div> 
    )
}    
