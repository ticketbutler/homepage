// @flow
import React from "react";
import { Link } from "gatsby";
import { Button } from "./elements/elements";
import { makeTranslations } from "mini-trans";
import { withWindow } from "../components/helpers";

type Locale = {
  id: string,
  label: string,
  link: string,
  currentPageUrl: string
};
const translations = {
  da: {
    Contact: "Kontakt"
  }
};
class Navbar extends React.Component<
  {
    items: Array<{
      path: string,
      label: string
    }>,
    currentLocale: Locale,
    otherLocale: Locale,
    window: {
      width: number
    }
  },
  { isToggleOn: boolean }
> {
  state = { isToggleOn: false };
  navbarhandleClick = this.navbarhandleClick.bind(this);

  t = makeTranslations(translations, this.props.currentLocale.id);

  navbarhandleClick() {
    this.setState({ isToggleOn: !this.state.isToggleOn });
  }

  render() {
    return (
      <div
        className="navbar"
        id="navbar"
        style={{
          ...(this.props.window.width < 600
            ? {
                background: "#326de9"
              }
            : { background: "transperent" })
        }}
      >
        <div
          className="navbar_logo"
          style={{
            ...(this.props.window.width < 600
              ? {
                  marginLeft: 10,
                  marginTop: 30,

                  width: 100
                }
              : {})
          }}
        >
          <Link to="/da">
            <img src="/img/logo_white.png" />
          </Link>
        </div>

        <div className="nav">
          <div
            id="bars"
            className={this.state.isToggleOn ? "clicked" : "!clicked"}
            onClick={this.navbarhandleClick}
          >
            <span className="bar1" />
            <span className="bar2" />
            <span className="bar3" />
          </div>
          <ul
            id="ulNav"
            className={this.state.isToggleOn ? "active" : "!active"}
          >
            {this.props.items.map((item, i) => (
              <li key={i}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="languageContact"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            ...(this.props.window.width < 600
              ? {
                  margin: 0
                }
              : {})
          }}
        >
          <a
            className="language"
            href={this.props.otherLocale.currentPageUrl}
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: 20,
              lineHeight: 2,
              fontWeight: 500,
              margin: 30,
              ...(this.props.window.width < 600
                ? {
                    fontSize: 15
                  }
                : {})
            }}
          >
            {this.props.otherLocale.label}
          </a>

          <Button
            small
            outline
            style={{
              ...(this.props.window.width < 600
                ? {
                    fontSize: 10
                  }
                : {}),
              ...(this.props.window.width < 360
                ? {
                    display: "none"
                  }
                : {})
            }}
            arrow={false}
            buttonProps={{
              onClick: () => {
                var contactEl = document.querySelector("#contact");
                if (contactEl) {
                  contactEl.scrollIntoView({
                    behavior: "smooth"
                  });
                }
              }
            }}
          >
            {this.t("Contact")}
          </Button>
        </div>

        <style jsx>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          div.NavbarClicked-background {
            display: none;

            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            position: fixed;
            background-color: rgba(0, 0, 0, 0.75);
            z-index: 10;
          }
          .navbar {
            width: 100%;
            height: 80px;
            padding: 0px 110px;
            position: absolute;
            z-index: 1000;
            display: flex;
          }

          .nav {
            width: 60%;
            text-align: center;
            display: inline;
            float: left;
            line-height: 100px;
            position: relative;
          }
          .nav ul {
            margin: 0;
            color: #ffffff;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 1.15px;
            text-align: center;
          }

          .nav ul li {
            list-style: none;
            display: inline-block;
            margin: 0 20px;
            line-height: 130px;
            font-family: Montserrat;
          }

          .nav ul li a {
            text-decoration: none;
            color: #fff;
            padding: 20px 0;
            border-top: 2px solid rgba(255, 255, 255, 0);
            border-bottom: 2px solid rgba(255, 255, 255, 0);
            transition: all 0.3s ease-out;
          }
          .nav ul li a:hover {
            border-top: 2px solid rgba(255, 255, 255, 0.9);
            border-bottom: 2px solid rgba(255, 255, 255, 0.9);
            padding: 8px 0;
          }

          .navbar .navbar_logo {
            display: inline;
            width: 20%;
            color: #ffffff;
            font-size: 25px;
            font-weight: 600;
            letter-spacing: -0.62px;
            float: left;
            line-height: 130px;
          }
          .navbar .navbar_logo a img {
            width: 170px;
            margin-bottom: 0;
            line-height: 75px;
          }

          @media (max-width: 1080px) {
            div.navbar {
              position: absolute;
              top: 0;
              z-index: 100;
              padding: 0px;
            }
            .languageContact {
              margin: 0 auto;
            }
            .navbar .navbar_logo {
              float: left;
              width: 130px;
              margin-left: 40px;
              margin-top: 40px;
              line-height: 80px;
            }

            .nav {
              float: right;
              width: 114px;
              position: absolute;
              right: 30px;
            }

            .nav ul {
              height: 60px;
              text-align: left;
              margin-top: 80px;
              display: block;
              transform: translateX(0px);
              transition: transform 0.3s;
            }
            .nav ul.active {
              width: 280px;
              height: 500px;

              background: #fff;
              transform: translateX(-135px);
              height: 450px;
              border-radius: 0 0 0 4px;
            }
            .nav ul.active li {
              visibility: visible;
            }

            .nav ul li {
              margin: 0px 0px !important;
              display: block;
              line-height: 60px;
              transform: rotate(10deg);
              transform-origin: 0% 0%;
              padding: 0;
              opacity: 0;
              visibility: hidden;
              line-heigh: 80px;
            }
            .nav ul li:nth-child(1) {
              margin-top: 30px;
            }

            .nav ul li a {
              color: #333f52;
              border: none;
              padding: 0 20px;
              display: block;
              width: 100%;
              height: 100%;
            }
            .nav ul li a:hover {
              border: none;
              padding: 0;
            }
            .nav ul.active li {
              transition: all 0.3s;
              padding: 0 0px;
              border-bottom: 1px solid rgba(238, 238, 238, 0.5);
              transform: rotate(0deg);
              margin: 0 30px;
              opacity: 1;
            }
            .nav ul.active li:hover {
              background-color: rgba(238, 238, 238, 0.5);
              transition-delay: 0s;
            }
            .nav ul.active li:hover a {
              padding-left: 28px;
              padding-right: 12px;
            }

            .nav ul.active li.active {
              transition: all 0s;
              transform: rotate(0deg);
              background: #efefef;
            }
            .nav ul.active li::after a {
              margin-left: 8px;
            }
            a.language {
              font-size: 10px;
            }

            /* Bars */

            #bars {
              display: block !important;
              width: 40px;
              float: right;
              height: 40px;
              padding: 5px 7px;
              border-radius: 25px;
              position: relative;
              margin-top: 20px;
              z-index: 1000;
            }

            #bars:hover {
              cursor: pointer;
              opacity: 0.85;
            }

            #bars span {
              position: absolute;
              right: 10px;
              width: 22px;
              height: 2.1px;
              background: #fff;
              margin: 5px 0;
              border-radius: 2px;
              // transition: background .3s;
              display: inline-block;
              transition: all 0.1s;
              line-height: 0 !important;
            }
            #bars span.bar2 {
              top: 12px;
            }
            #bars span.bar1 {
              top: 5px;
            }

            #bars span.bar3 {
              top: 20px;
            }

            #bars.clicked span.bar2 {
              display: none;
            }

            #bars.clicked span.bar1 {
              transform: rotate(45deg);
              position: absolute;
              top: 12px;
            }

            #bars.clicked span.bar3 {
              transform: rotate(-45deg);
              position: absolute;
              top: 13px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default withWindow(Navbar);
