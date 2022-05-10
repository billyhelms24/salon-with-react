const FootBar = () => {
  return (
    <footer className="footer pb-0">
      <div className="content">
        <div className="columns">
          <div className="column is-offset-1">
            <h3 className="mb-6">HOURS</h3>
            <div className="level is-mobile mb-1">
              <div className="level-left">
                <p>
                  <strong>Mon</strong>
                </p>
              </div>
              <div className="level-right">
                <p>
                  <em>8:30a-7:30p</em>
                </p>
              </div>
            </div>
            <div className="level is-mobile mb-1">
              <div className="level-left">
                <p>
                  <strong>Tues</strong>
                </p>
              </div>
              <div className="level-right">
                <p>
                  <em>8:30a-7:30p</em>
                </p>
              </div>
            </div>
            <div className="level is-mobile mb-1">
              <div className="level-left">
                <p>
                  <strong>Wed</strong>
                </p>
              </div>
              <div className="level-right">
                <p>
                  <em>8:30a-5:00p</em>
                </p>
              </div>
            </div>
            <div className="level is-mobile mb-1">
              <div className="level-left">
                <p>
                  <strong>Thurs</strong>
                </p>
              </div>
              <div className="level-right">
                <p>
                  <em>8:30a-7:30p</em>
                </p>
              </div>
            </div>
            <div className="level is-mobile mb-1">
              <div className="level-left">
                <p>
                  <strong>Fri</strong>
                </p>
              </div>
              <div className="level-right">
                <p>
                  <em>9:00a-7:00p</em>
                </p>
              </div>
            </div>
            <div className="level is-mobile mb-1">
              <div className="level-left">
                <p>
                  <strong>Sat</strong>
                </p>
              </div>
              <div className="level-right">
                <p>
                  <em>8:00a-4:00p</em>
                </p>
              </div>
            </div>
            <div className="level is-mobile mb-1">
              <div className="level-left">
                <p>
                  <strong>Sun</strong>
                </p>
              </div>
              <div className="level-right">
                <p>
                  <em>Closed</em>
                </p>
              </div>
            </div>
          </div>
          <div className="column is-1"></div>
          <div className="column">
            <h3 className="mb-6 block">CONTACT</h3>
            <p className="">
              <strong>Phone:</strong>
              <br></br>
              <a href="tel:614-529-8650">
                <em>614.529.8650</em>
              </a>
            </p>
            <p className="">
              <strong>Email:</strong>
              <br></br>
              <a href="mailto:booking@freetobemesalon.com">
                <em>booking@freetobemesalon.com</em>
              </a>
            </p>
            <p className="">
              <strong>Location:</strong>
              <br></br>
              <a
                href="https://goo.gl/maps/6P6Xmxqb5Njcxtgc9"
                target="_blank"
                rel="noreferrer"
              >
                <em>4994 Cosgray Rd. Hilliard OH, 43026</em>
              </a>
            </p>
          </div>
          <div className="column is-1"></div>
          <div className="column">
            <h3 className="mb-6">CAREERS</h3>
            <p>
              If you are interested in joining the Free To Be Me family, we
              would love to hear from you! Please send us a copy of your resume{" "}
              <a href="mailto:admin@freetobemesalon.com">here</a>.
            </p>
          </div>
          <div className="column is-1"></div>
        </div>

        <div className="columns mt-6" id="footerBottomTag">
          <div className="column is-1"></div>
          <div className="column">
            <div className="level">
              <div className="level-item">
                <p className="is-size-7">
                  created by
                  <a href="https://github.com/billyhelms24"> Billy Helms</a>
                </p>
              </div>
              <div className="level-item is-size-7">
                &copy; copyright 2021 - Free To Be Me Salon LLC, All Rights
                Reserved
              </div>
              <div className="level-item">
                <a className="" href="https://bulma.io">
                  <img
                    src={require("../../img/made-with-bulma-black.png")}
                    alt="Made with Bulma"
                    style={{ height: "24px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="column is-1"></div>
        </div>
      </div>
      `
    </footer>
  );
};

export default FootBar;
