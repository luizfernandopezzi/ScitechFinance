import React, { useContext, useState } from "react";

import lupa from '../assests/images/search.svg'

import { FetchContext } from "../contexts/FetchContext";

export const Search = () => {
  const {stock, setStock} = useContext(FetchContext)

  const[input, setInput] = useState('')
  const handleSubmit = (event) =>{
      event.preventDefault();
      if(input !== stock[stock.length-1]){
        setStock(prev => [...prev, input])
      }
  }

    return (
        <form 
          className="search"
          onSubmit={handleSubmit}>
          <input
            required
            type="text"
            name="stock"
            value={input}
            onChange={(event)=>{setInput(event.target.value.toUpperCase())}}
          ></input>
          <button className="btn-search"
            type="submit">
            <img src={lupa} alt="Buscar cotação"></img>
          </button>
        </form>
    )
}