
import logo from "../Static/Img/Logo.svg"
import square from "../Static/Img/Rectangle 144690.png"
import subtract from "../Static/Img/Subtract.png"
import '../Static/Style/Index.scss'

export default function Index() {
  return (
    <>
      <div className="container-general">
        <div className="container-principal">
          <div className="container-interno">
            <img src={square} alt="square" className="square" />
            <div className="container-logo">
              <img src={logo} alt="LOGO EMPRESA"className="logo" />
            </div>
            <div className="message">
              <p className="tmessage">
                A new way to play the consecrated game of chess. A decentralized platform for everyone who wants to earn money playing the most beloved game in the history of mankind. Scholarships, tournaments, chip system, ratings, integrated rapido or blitz chess mode and much more in the future.A new way to play the consecrated game of chess. A decentralized platform for everyone who wants to earn money playing the most beloved game in the history of mankind. Scholarships, tournaments, chip system, ratings, integrated rapido or blitz chess mode and much more in the future.more in the future. aca
              </p>
            </div>
            <div className="container-interaction">
                <button className="login"> <a href="/signin">LOGIN</a>  </button>
                <button className="register"><a href="/signup">REGISTER</a></button>
              <div className="aux">
                <button className="b-TC">TÉRMINOS Y CONDIC</button>
                <button className="b-MU">MANUAL DE USUARIO</button>
                <button className="b-FAQ">F.A.Qs</button>
              </div>
              <img src={subtract} alt="subtract" className="subtract" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
