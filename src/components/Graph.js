import React, { useContext, useState } from 'react';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import { FetchContext } from '../contexts/FetchContext';

const toCurrency = (input) => `$${input}`;

const renderTooltipContent = (input) => {
  const { payload, label } = input;
  return (
    <div 
      className="customized-tooltip-content" 
      style={{
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center",
        background: "#0047BB",
        padding: `5px`,
        color: "white",
        fontSize: `14px`,
        lineHeight: `140%`,
        }}>
      <p style={{margin: `0`}}>{`Horário: ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ listStyleType: "none", margin: `0`}}>
            {`Cotação: $${entry.value}`}
          </p>
        ))}
    </div>
  );
};

export const Graph = () =>{
    const [ filteredIntraday, setFilteredIntraday ] = useState([])
    const { intraday } = useContext(FetchContext)

    // const date = new Date()
    // const dateString = (date.getFullYear()) + "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" +
    // date.getDate();
           
    // if(intraday){
    //   const intradayData = intraday.map(item => ({ close: item.close, date: item.date, minute: item.minute }))
    //   function filterByDate(obj) {
    //     if (obj.date === dateString) {;
    //       return true;
    //     }
    //   }
    //   setFilteredIntraday(intradayData.filter(filterByDate))
    // }

    return (
      <>
      {!intraday ? null : (
        <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            width={500}
            height={400}
            data={intraday}
            margin={{
              top: 5,
              right: 25,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="average" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
          </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis name="Horário" dataKey="minute" domain={['09:00', '16:00']}/>
            <YAxis name="Cotação" datakey="close" type="number" domain={['auto', 'auto']} tickFormatter={toCurrency} />
            <Tooltip content={renderTooltipContent} cursor={{ stroke: 'blue', strokeWidth: 1 }} />
            <Area type="monotone" dataKey="close" stroke="#8884d8" fillOpacity={1} fill="url(#average)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      )}
      </>
    );
  }
