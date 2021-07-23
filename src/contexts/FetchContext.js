import React, { createContext, useEffect, useState } from 'react';

import ADBE from '../assests/images/adbe.svg'
import AAPL from '../assests/images/aapl.svg'
import AMZN from '../assests/images/amzn.svg'
import FB from '../assests/images/fb.svg'
import MSFT from '../assests/images/msft.svg'
import SBUX from '../assests/images/sbux.svg'
import TWTR from '../assests/images/twtr.svg'

export const FetchContext = createContext({})

export const FetchContextProvider = ({ children}) => {
    
    const [ stock, setStock ] = useState([]);
    const [ currentStock, setCurrentStock ] = useState()
    const [ middleRecent, setMiddleRecent ] = useState()
    const [ oldestRecent, setOldestRecent ] = useState()

    const [ intraday, setIntraday ] = useState(null)

    const [ favorites, setFavorites ] = useState([])
    const [ favoriteOne, setFavoriteOne ] = useState()
    const [ favoriteTwo, setFavoriteTwo ] = useState()
    const [ favoriteThree, setFavoriteThree ] = useState()

    const [ counter, setCounter ] = useState(0)

    const logos = [ADBE, AAPL, AMZN, FB, MSFT, SBUX, TWTR]

    console.log('Stock: ', stock)
    console.log('curStock', currentStock)
    console.log('Intraday: ', intraday)
    console.log('Favorites: ', favorites)
    console.log('FavoriteOne', favoriteOne)

    async function getCurrentData(){
      const response = await fetch(`https://cloud.iexapis.com/stable/stock/${stock[stock.length-1]}/quote/lquote?token=pk_ba3c51f0040e4247a52e198f98e203b7`);
      const data = await response.json();
      const current = {
          stock: stock,
          companySymbol: data.symbol,
          companyName: data.companyName,
          latestPrice: data.latestPrice,
          stockChange: data.change,
          stockChangePercent: data.changePercent,
      }
      setCurrentStock(current)
    }

    async function getMiddleRecentData(){
      if(stock.length > 1){
        const response = await fetch(`https://cloud.iexapis.com/stable/stock/${stock[stock.length-2]}/quote/lquote?token=pk_ba3c51f0040e4247a52e198f98e203b7`);
        const data = await response.json();
        const infoMiddleRecent = {
            stock: stock,
            companySymbol: data.symbol,
            companyName: data.companyName,
            latestPrice: data.latestPrice,
            stockChange: data.change,
            stockChangePercent: data.changePercent,
          }
        setMiddleRecent(infoMiddleRecent)
      }
    }

    async function getOldestRecentData(){
      if(stock.length > 2){
        const response = await fetch(`https://cloud.iexapis.com/stable/stock/${stock[stock.length-3]}/quote/lquote?token=pk_ba3c51f0040e4247a52e198f98e203b7`);
        const data = await response.json();
        const infoOldestRecent = {
            stock: stock,
            companySymbol: data.symbol,
            companyName: data.companyName,
            latestPrice: data.latestPrice,
            stockChange: data.change,
            stockChangePercent: data.changePercent,
          }
        setOldestRecent(infoOldestRecent)
      }
    }

    async function favoriteOneData(){
      if(favorites.length > 0){
        const response = await fetch(`https://cloud.iexapis.com/stable/stock/${favorites[0]}/quote/lquote?token=pk_ba3c51f0040e4247a52e198f98e203b7`);
        const data = await response.json();
        const infoFavoriteOne = {
            stock: stock,
            companySymbol: data.symbol,
            companyName: data.companyName,
            latestPrice: data.latestPrice,
            stockChange: data.change,
            stockChangePercent: data.changePercent,
          }
        setFavoriteOne(infoFavoriteOne)
      }
    }

    async function favoriteTwoData(){
      if(favorites.length > 0){
        const response = await fetch(`https://cloud.iexapis.com/stable/stock/${favorites[1]}/quote/lquote?token=pk_ba3c51f0040e4247a52e198f98e203b7`);
        const data = await response.json();
        const infoFavoriteTwo = {
            stock: stock,
            companySymbol: data.symbol,
            companyName: data.companyName,
            latestPrice: data.latestPrice,
            stockChange: data.change,
            stockChangePercent: data.changePercent,
          }
        setFavoriteTwo(infoFavoriteTwo)
      }
    }

    async function favoriteThreeData(){
      if(favorites.length > 0){
        const response = await fetch(`https://cloud.iexapis.com/stable/stock/${favorites[2]}/quote/lquote?token=pk_ba3c51f0040e4247a52e198f98e203b7`);
        const data = await response.json();
        const infoFavoriteThree = {
            stock: stock,
            companySymbol: data.symbol,
            companyName: data.companyName,
            latestPrice: data.latestPrice,
            stockChange: data.change,
            stockChangePercent: data.changePercent,
          }
        setFavoriteThree(infoFavoriteThree)
      }
    }

    async function getIntraday() {
      const response = await fetch(`https://cloud.iexapis.com/stable/stock/${stock[stock.length-1]}/intraday-prices?token=pk_ba3c51f0040e4247a52e198f98e203b7`);
      const data = await response.json();
      console.log('Intraday: ', data)
      setIntraday(data)
    }
    
    function timer(){
      setTimeout(()=>{
        console.log(counter) 
        setCounter(counter+1)}
        ,2000)
    }

    useEffect(() => {
      getCurrentData();
      getIntraday();
      getMiddleRecentData();
      getOldestRecentData();
      // timer();
    }, [stock, counter]);

    useEffect(() => {
      favoriteOneData();
      favoriteTwoData();
      favoriteThreeData()
    }, [favorites, counter]);

    return(
        <FetchContext.Provider value={{ stock, setStock, currentStock, intraday, favorites, setFavorites, middleRecent, oldestRecent, setOldestRecent, favoriteOne, setFavoriteOne, favoriteTwo, setFavoriteTwo, favoriteThree, setFavoriteThree, favoriteOneData, favoriteTwoData, favoriteThreeData, logos }}>
            {children}
        </FetchContext.Provider>
    )
}