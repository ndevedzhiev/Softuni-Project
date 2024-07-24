import HeroImg from '../assets/images/hero-banner.png'
import BackgroundImg from '../assets/images/hero-bg.jpg'
export default function Hero () {
    return(
        
<section
  className="section hero"
  id="home"
  aria-label="home"
  style={{ backgroundImage: `url(${BackgroundImg})` }}
>
<div className="container">
<div className="hero-content">
<p className="hero-subtitle">
Worldwide Gaming</p>
<h1 className="h1 hero-title">Create & <span className="span">Manage</span>
Matches</h1>
<p className="hero-text">
Welcome to our gaming hub where you can watch, create games, and participate in exciting events!</p>
<button className="btn skewBg">
Register</button>
</div>
<figure className="hero-banner img-holder" style={{"--width":"700","--height":"700"}}>
<img src={HeroImg} width="700" height="700" alt="hero banner" className="w-100" />
</figure>
</div>
</section>

    )

}