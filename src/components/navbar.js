import React from "react";





class NavbarSection extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { 
      href: "",
      active: "!active" ,
    };
  }
render() {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <a href="/">
          <img src={"../img/logo_white.png"}/>
        </a>
      </div>

     
 <div className="nav" >
        <div id="bars" style={{
          display: "none",
        }}
        onClick={() => {

            if(this.state.active != "active") {

              this.setState({active: "active"});

              document.getElementById("ulNav").classList.add("active");
  

            }else if(this.state.active != "!active"){

              this.setState({active: "!active"});

              document.getElementById("ulNav").classList.remove("active");
              document.getElementById("ulNav").classList.add("!active");


            }
          // document.getElementById("navActive_back").classList.remove("NavbarClicked-background");
          document.getElementById("bars").classList.toggle("clicked");
        }}        
        >
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />    

        </div>
        <ul id="ulNav">
          {this.props.items.map(item => (
            <li
            >
              <a
              href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div id="navbar_login_btn">
        <a href="#contact">
          <span>Kontakt</span>
        </a>
      </div>
      <div className="clear-fix" />

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
          height: 130px;     
          padding: 0px 110px;
          position: absolute;
          z-index: 1000;
        }

        .nav{
          width: 60%;
          text-align:center;
          display: inline;
          float: left;
          line-height: 100px;
          position: relative;
        }
        .nav ul {
        margin: 0;
        color: #FFFFFF;	
        font-size: 14px;	
        font-weight: 600;	
        letter-spacing: 1.15px;	
        text-align: center;
        }
      
        .nav ul li{
          list-style:none;
          display:inline-block;
          margin: 0 20px;
          line-height: 130px;
          font-family: Montserrat;
        }
        
        .nav ul li a {
          text-decoration:none;
          color: #fff;
          padding: 20px 0;
          border-top: 2px solid rgba(255,255,255, 0);
            border-bottom: 2px solid rgba(255,255,255, 0);
          transition: all 0.3s ease-out;
        }
        .nav ul li a:hover {
            border-top: 2px solid rgba(255,255,255, .9);
            border-bottom: 2px solid rgba(255,255,255, .9);
            padding: 8px 0;
            // border-radius: 20px;
            
          }

          .navbar .navbar_logo {
            display: inline;
            width: 20%;
            color: #ffffff;
            font-size: 25px;
            font-weight: 600;
            letter-spacing: -0.62px;
            float: left;
            line-height:130px;
          }
          .navbar .navbar_logo a img{
            width: 170px;
            margin-bottom: 0;
            line-height: 75px;
          }

          /**
           * 
           * Button Style
           */
          #navbar_login_btn{
          width: 20% ;
          display: block;
          float:left;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 1.15px;
          text-align: center;
          margin-top: 43px;
          position: relative;
          margin-right: 0px ;
          }
          #navbar_login_btn a {
            text-decoration: none;
            color: #ffffff;
            font-size: 15px;
            font-weight: 600;
            letter-spacing: 1.15px;
            display: inline-block;
            text-align: center;
            float: right;

            padding:18px;
            height: 44px;
            width:  130px;
            border: 2px solid #1dc9ca;
            border-radius: 26px;
            // background: linear-gradient(to right,rgba(40, 216, 167, 0),rgba(29, 201, 202, 0));
            font-family: Montserrat;
            transition: all 0.3s;


          }
            #navbar_login_btn a:hover {
              background: linear-gradient( to right,rgba(40, 216, 167, 1),rgba(29, 201, 202, 1));
              border-color: transparent;
              color: #fff;
            }
        
            #navbar_login_btn a span {
              font-family: Montserrat;
              text-decoration: none;
              line-height:  3px !important;
              display:block;
              margin-top: 0;
            }


          @media (max-width: 1200px) {
            .nav ul {
            font-size: 12px;
            }
          }

          @media (max-width: 1080px) {
            div.navbar {
              background-color: #326DE9;;
              position: absolute;
              top: 0;  
              z-index: 100;
              height: 80px !important;
              padding: 0px;
            }

            .navbar .navbar_logo{
            float: left;
            width: 130px ;
            margin-left: 40px;
            line-height: 80px;
            }

            
          .nav {
            float: right;
            width: 114px;
            position: absolute;
            right: 30px;
          }
        
            

        
          .nav ul{
          height: 60px;
          text-align: left;
          margin-top: 80px;
          display: block;
          transform: translateX(0px);
          transition: transform .3s;
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
          color: #333F52;
          border:none;
          padding: 0 20px;
          display:block;
          width: 100%;
          height: 100%;
          }
          .nav ul li a:hover {
            border:none;
            padding: 0;

          }
          .nav ul.active li {
            transition: all .3s;
            padding: 0 0px;
            border-bottom: 1px solid rgba(238,238,238, .5);
            transform: rotate(0deg);
            margin: 0 30px;
              opacity: 1;
          }
            .nav ul.active li:hover {
              background-color: rgba(238,238,238, .5);
              transition-delay: 0s;
            }
              .nav ul.active li:hover a {
                padding-left: 28px;
                padding-right: 12px;
              }
            

            .nav ul.active li.active {
              transition: all .0s;
              transform: rotate(0deg);
              background: #efefef;
            }
              .nav ul.active li::after  a {
                margin-left: 8px;
              }

    /* Bars */

          #bars{
          display: block !important;
            width: 40px;
            float: right;
            margin-right: 35px;
            height: 40px;
            padding: 5px 7px;
            border-radius: 25px;
            position: relative;
            margin-top: 21px;
            z-index: 1000;
          }

          #bars:hover {
          cursor: pointer;
          opacity: 0.85;
        }

        #bars div {
          width: 22px;
          height: 2.1px;
          background: #fff;
          margin: 5px 0;
          border-radius: 2px;
          // transition: background .3s;

          transition: all 0.1s;
        }
        
        #bars.clicked div.bar2 {
          display: none;
        }

        #bars.clicked div.bar1 {
          transform: rotate(45deg);
          position: absolute;
          top: 12.5px;
        }

        #bars.clicked div.bar3 {
          transform: rotate(-45deg);
          position: absolute;
          bottom: 15px;
        }

        /**
         * Button
         */

        #navbar_login_btn{
          margin-top: 0px;
          width: 100px;
        
          right: 110px;
          float: right; 
          position: relative;
          top: 30px;
        }
        #navbar_login_btn a {
          border: none;
          color: #fff;
          margin-top: 0px;
          height: 30px;
          width: auto;
          margin-right: 0px;
          border-radius: 0;
          display: inline;
          position: absolute;
          top: 0;
          left: 0;

          
         
        }

        #navbar_login_btn a:hover {
          background: none;
        }
        #navbar_login_btn a span {
          position: absolute;
          top: 0px;
          display:block;
          float: right;
          text-align: right;
          margin-top: 9px ;
          text-align: right ;
        }
              
      }
          

        @media (max-width: 1100px) {
          div.NavbarClicked-background {
            display: block;
          }
      
        .navbar div.clear-fix {
          clear:both !important;
        }
      }


      @media (max-width: 600px) {
        #bars{
        margin-right: 10px !important;
        }
        #navbar_login_btn {
          width: 50px;
          right: 120px;
      
        }
        #navbar_login_btn  a  span{
            line-height: 30px;
            padding-right: 18px;
            font-size: 13px;
            margin-top: 7px;
          }
        
          // .navbar .navbar_logo{
          //   width: 90px;
          //   margin-left: 0px ;
          // }
      }

          
          
            @media (max-width: 350px) {
              .nabar {
                padding: 0 25px;
              }
              .navbar_logo{
                width: 90px  !important;
                // margin-left: 0px !important;
              }
              .navbar .navbar_logo{
                line-height: 70px  !important;
                margin-left: 30px;
              }
              .navbar .navbar_logo a img {
                  width: 90px;
                  margin-top: 10px;
                }

                #bars {
                  margin-right: -10px !important;
                }

                #navbar_login_btn{
                  right: 95px !important;
                  }

                  #navbar_login_btn a span{
                    font-size: 12px !important;
                    }
                  
            }

            
      
      `}</style>
    </div>
  );
}
};

export default NavbarSection;

/*


    @media (max-width: 1080px) {
      

     
*/
