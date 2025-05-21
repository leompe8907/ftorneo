
import logo from "../Static/Img/Logo.svg"
import '../Static/Style/Index.scss'

export default function Index() {
  return (
    <>
      <div className="container-general">
        <div className="container-principal">
          <div className="empty"></div>
          <div className="logo">
            <img src={logo} alt="LOGO EMPRESA"className="logo" />
          </div>
          <div className="message">
            <p className="tmessage">
              A new way to play the consecrated game of chess. A decentralized platform for everyone who wants to earn money playing the most beloved game in the history of mankind. Scholarships, tournaments, chip system, ratings, integrated rapido or blitz chess mode and much more in the future.A new way to play the consecrated game of chess. A decentralized platform for everyone who wants to earn money playing the most beloved game in the history of mankind. Scholarships, tournaments, chip system, ratings, integrated rapido or blitz chess mode and much more in the future.more in the future. aca
            </p>
          </div>
          <div className="container-interaction">
            <div className="login">
              <button className="b-login"> Login </button>
            </div>
            <div className="register">
              <button className="b-register">register</button>
            </div>
            <div className="aux">
              <div className='t&c'></div>
              <div className="manual"></div>
              <div className="faqs"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
