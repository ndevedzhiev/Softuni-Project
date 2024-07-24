import FortniteImg from '../assets/images/FORTNITE.jpg'
import WOWImg from '../assets/images/WOW.jpg'
import GTAImg from '../assets/images/GTA.jpg'
import BioshockImg from '../assets/images/Bioshock.jpg'

export default function Latest () {
    return (
      <section className="section latest-game" aria-label="latest game">
  <div className="container">
    <p className="section-subtitle">Best Releases</p>
    <h2 className="h2 section-title">
      Create &amp; <span className="span">Manage</span>
    </h2>
    <ul className="has-scrollbar">
      <li className="scrollbar-item">
        <div className="latest-game-card">
          <figure className="card-banner img-holder" style={{ '--width': '400px', '--height': '470px' }}>
            <img src={FortniteImg} width="400" height="470" loading="lazy" alt="White Walker Daily" className="img-cover" />
          </figure>
          <div className="card-content">
            <a href="#" className="card-badge skewBg">Battle Royale</a>
            <h3 className="h3">
              <a href="#" className="card-title">Fortnite <span className="span">Daily</span></a>
            </h3>
            <p className="card-price">
            Price : <span className="span">Free to Play</span>
            </p>
          </div>
        </div>
      </li>
      <li className="scrollbar-item">
        <div className="latest-game-card">
          <figure className="card-banner img-holder" style={{ '--width': '400px', '--height': '470px' }}>
            <img src={WOWImg} width="400" height="470" loading="lazy" alt="Hunter Killer II" className="img-cover" />
          </figure>
          <div className="card-content">
            <a href="#" className="card-badge skewBg">MMORPG</a>
            <h3 className="h3">
              <a href="#" className="card-title">World of Warcraft <span className="span"></span></a>
            </h3>
            <p className="card-price">
              Price : <span className="span">BGN 40.00/month</span>
            </p>
          </div>
        </div>
      </li>
      <li className="scrollbar-item">
        <div className="latest-game-card">
          <figure className="card-banner img-holder" style={{ '--width': '400px', '--height': '470px' }}>
            <img src={GTAImg} width="400" height="470" loading="lazy" alt="Cyberpunk Daily" className="img-cover" />
          </figure>
          <div className="card-content">
            <a href="#" className="card-badge skewBg">Open World</a>
            <h3 className="h3">
              <a href="#" className="card-title">Grand Theft Auto V <span className="span"></span></a>
            </h3>
            <p className="card-price">
            Price : <span className="span">BGN 30.00</span>
            </p>
          </div>
        </div>
      </li>
      <li className="scrollbar-item">
        <div className="latest-game-card">
          <figure className="card-banner img-holder" style={{ '--width': '400px', '--height': '470px' }}>
            <img src={BioshockImg} width="400" height="470" loading="lazy" alt="Cyberpunk Daily" className="img-cover" />
          </figure>
          <div className="card-content">
            <a href="#" className="card-badge skewBg">First-person Shooter</a>
            <h3 className="h3">
              <a href="#" className="card-title">Bioshock Infinite <span className="span"></span></a>
            </h3>
            <p className="card-price">
            Price : <span className="span">BGN 70.00</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>

    )
}