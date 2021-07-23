export function Subtitles ({src, text}){
    return(
        <div className="subtitles">
                <img src={src} alt="Empresas Recentes"></img>
                <p>{text}</p>
        </div>
    )
}