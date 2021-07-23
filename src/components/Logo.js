import ADBE from '../assests/images/adbe.svg'
import AAPL from '../assests/images/aapl.svg'
import AMZN from '../assests/images/amzn.svg'
import FB from '../assests/images/fb.svg'
import MSFT from '../assests/images/msft.svg'
import SBUX from '../assests/images/sbux.svg'
import TWTR from '../assests/images/twtr.svg'

export function Logo ({logo}){
    if(logo === 'ADBE'){return(<img className="stock-logo" src={ADBE} alt="Logotipo"></img>)}
    if(logo === 'AAPL'){return(<img className="stock-logo" src={AAPL} alt="Logotipo"></img>)}
    if(logo === 'AMZN'){return(<img className="stock-logo" src={AMZN} alt="Logotipo"></img>)}
    if(logo === 'FB'){return(<img className="stock-logo" src={FB} alt="Logotipo"></img>)}
    if(logo === 'MSFT'){return(<img className="stock-logo" src={MSFT} alt="Logotipo"></img>)}
    if(logo === 'SBUX'){return(<img className="stock-logo" src={SBUX} alt="Logotipo"></img>)}
    if(logo === 'TWTR'){return(<img className="stock-logo" src={TWTR} alt="Logotipo"></img>)}
}