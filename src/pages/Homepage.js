import "./Homepage.css";
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="the-largest-airline">
          The largest airline in Malaysia by fleet size and destinations.
          AirAsia operates scheduled domestic and international flights to more
          than 165 destinations spanning 25 countries.
        </div>
        <b className="now-everyone-can">Now Everyone Can Fly</b>
        <div className="hero-section-child" />
      </div>
      <div className="cabin-cards">
        <b className="discover-our-services">Discover our services</b>
        <div className="travel-delivery-and">
          Travel, delivery, and food, we have it all.
        </div>
        <div className="view-all-services">View all services</div>
        <div className="cabin-cards-child" />
      </div>
      <div className="search-bar">
        <div className="search-bar1">
          <div className="input-fields">
            <div className="location">
              <div className="frame-parent">
                <img className="frame-icon" alt="" src="/frame.svg" />
                <div className="i-want-to">I want to go</div>
              </div>
            </div>
            <div className="check-in">
              <img className="frame-icon" alt="" src="/frame1.svg" />
              <div className="i-want-to">Check in</div>
            </div>
            <div className="check-in">
              <img className="frame-icon" alt="" src="/frame1.svg" />
              <div className="i-want-to">Check out</div>
            </div>
            <div className="check-in">
              <img className="frame-icon" alt="" src="/frame2.svg" />
              <div className="i-want-to">Travellers</div>
            </div>
            <div className="cta">
              <div className="search">Search</div>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation">
        <div className="image-1-parent">
          <img className="image-1-icon" alt="" src="/image-1@2x.png" />
          <div className="flights-parent">
            <div className="flights">Flights</div>
            <div className="hotels">Hotels</div>
            <div className="shop">Shop</div>
            <div className="ride">Ride</div>
            <div className="food">Food</div>
            <div className="frame-child" />
            <img className="frame-icon4" alt="" src="/frame3.svg" />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer1">
          <div className="footerb-bg" />
          <div className="footerb-bg1" />
          <div className="text-field">
            <img className="trailing-icon" alt="" src="/trailing-icon.svg" />
            <div className="icon-text">
              <img className="leading-icon" alt="" src="/leading-icon.svg" />
              <div className="text">airasia@airasia.com</div>
            </div>
            <div className="label">Full name</div>
          </div>
          <div className="for-a-weekly">
            For a weekly update on our latest promotions and events.
          </div>
          <div className="airasia-wrapper">
            <div className="airasia">© 2023 AirAsia</div>
          </div>
          <div className="sign-up-to">Sign up to our Newsletter</div>
          <div className="join-the-mailing-list-wrapper">
            <div className="join-the-mailing">Subscribe</div>
          </div>
          <div className="footer-child" />
          <img className="social-icon" alt="" src="/social.svg" />
        </div>
        <img className="image-1-icon1" alt="" src="/image-11@2x.png" />
      </div>
    </div>
  );
};

export default Homepage;
