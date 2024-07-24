import brandLogo from '../assets/images/brand-1.png';

export default function Brand () {
    return(
        <section className="section brand" aria-label="brand">
  <div className="container">
    <ul className="has-scrollbar">
      <li className="brand-item">
        <img
          src={brandLogo}
          width={90}
          height={90}
          loading="lazy"
          alt="brand logo"
        />
      </li>
      <li className="brand-item">
        <img
          src="./assets/images/brand-2.png"
          width={90}
          height={90}
          loading="lazy"
          alt="brand logo"
        />
      </li>
      <li className="brand-item">
        <img
          src="./assets/images/brand-3.png"
          width={90}
          height={90}
          loading="lazy"
          alt="brand logo"
        />
      </li>
      <li className="brand-item">
        <img
          src="./assets/images/brand-4.png"
          width={90}
          height={90}
          loading="lazy"
          alt="brand logo"
        />
      </li>
      <li className="brand-item">
        <img
          src="./assets/images/brand-5.png"
          width={90}
          height={90}
          loading="lazy"
          alt="brand logo"
        />
      </li>
      <li className="brand-item">
        <img
          src="./assets/images/brand-6.png"
          width={90}
          height={90}
          loading="lazy"
          alt="brand logo"
        />
      </li>
    </ul>
  </div>
</section>

    )

}