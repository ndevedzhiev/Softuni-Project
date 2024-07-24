export default function Footer () {
    return (
        <footer className="footer">
  <div className="footer-top">
    <div className="container">
      <div className="footer-brand">
        <a href="#" className="logo">
          Gamics
        </a>
        <p className="footer-text">
          Gamics marketplace the relase etras thats sheets continig passag.
        </p>
        <ul className="contact-list">
          <li className="contact-item">
            <div className="contact-icon">
              <ion-icon name="location" />
            </div>
            <address className="item-text">
              Address : PO Box W75 Street lan West new queens
            </address>
          </li>
          <li className="contact-item">
            <div className="contact-icon">
              <ion-icon name="headset" />
            </div>
            <a href="tel:+241245654235" className="item-text">
              Phone : +24 1245 654 235
            </a>
          </li>
          <li className="contact-item">
            <div className="contact-icon">
              <ion-icon name="mail-open" />
            </div>
            <a href="mailto:info@exemple.com" className="item-text">
              Email : info@exemple.com
            </a>
          </li>
        </ul>
      </div>
      <ul className="footer-list">
        <li>
          <p className="footer-list-title">Products</p>
        </li>
        <li>
          <a href="#" className="footer-link">
            Graphics (26)
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            Backgrounds (11)
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            Fonts (9)
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            Music (3)
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            Photography (3)
          </a>
        </li>
      </ul>
      <ul className="footer-list">
        <li>
          <p className="footer-list-title">Need Help?</p>
        </li>
        <li>
          <a href="#" className="footer-link">
            Terms &amp; Conditions
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            Refund Policy
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            Affiliate
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            Use Cases
          </a>
        </li>
      </ul>
      <div className="footer-wrapper">
        <div className="social-wrapper">
          <p className="footer-list-title">Follow Us</p>
          <ul className="social-list">
            <li>
              <a
                href="#"
                className="social-link"
                style={{ backgroundColor: "#3b5998" }}
              >
                <ion-icon name="logo-facebook" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="social-link"
                style={{ backgroundColor: "#55acee" }}
              >
                <ion-icon name="logo-twitter" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="social-link"
                style={{ backgroundColor: "#d71e18" }}
              >
                <ion-icon name="logo-pinterest" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="social-link"
                style={{ backgroundColor: "#1565c0" }}
              >
                <ion-icon name="logo-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <p className="footer-list-title">Newsletter Sign Up</p>
          <form action="" className="footer-newsletter">
            <input
              type="email"
              name="email_address"
              aria-label="email"
              placeholder="Enter your email"
              required=""
              className="email-field"
            />
            <button type="submit" className="footer-btn" aria-label="submit">
              <ion-icon name="rocket" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container">
      <p className="copyright">
        © 2022 Gamics. All Right Reserved by{" "}
        <a href="#" className="copyright-link">
          codewithsadee
        </a>
      </p>
      <img
        src="./assets/images/footer-bottom-img.png"
        width={340}
        height={21}
        loading="lazy"
        alt=""
        className="footer-bottom-img"
      />
    </div>
  </div>
</footer>

    )
}
