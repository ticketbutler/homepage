import React from "react";

export const Logo = ({ children }) => {
  return (
    <div className="logo"
      style={{
        width: "20%",
        color: "#ffffff",
        fontSize: "25px",
        fontWeight: "600",
        letterSpacing: "-0.62px",
        display: "inline",
        float: "left",
        lineHeight: "100px",
      }}
    >

      {children}

  
      
      <style jsx>{`

        @media (max-width: 1080px) {
            div.logo{
                float: left !important;
                width: 120px !important;
                margin-left: 40px !important;
                line-height: 80px !important;
            }
        }

        @media (max-width: 350px) {
            div.logo{
            width: 90px  !important;
            margin-left: 0px  !important;
            }

            div.logo a > img {
                width: 85px  !important;
                margin-bottom: 4px !important;
            }
            
        }
      `}</style>
    </div>
  );
};




export const Nav = ({ children, onClick }) => {
    return (
        <nav style={{
            width: "60%",
            textAlign:"center",
            display: "inline",
            float: "left",
            lineHeight: "100px",
            position: "relative",
        
        }}>
            {children}

        <ul id="ulNav" 
        style={{
            margin: "0",
            color: "#FFFFFF",
            fontSize: "14px",	
            fontWeight: "600",	
            letterSpacing:" 1.15px",	
            textAlign: "center",
        }}>
            
            
        </ul>

        <style jsx>{`
           li#remove {
               display: none;
           }
           
             ul#ulNav li a:hover {
                border-top: 2px solid rgba(255,255,255, .9) !important;
                border-bottom: 2px solid rgba(255,255,255, .9) !important;
                padding: 8px 0 !important;
                
            }

            
    @media (max-width: 1200px) {
          ul {
          font-size: 12px;
          }
        }
    
        @media (max-width: 1080px) {
            nav{
                float: right;
                width: 114px;
                position: absolute;
                right: 30px;
            }
          
    
          nav div.clear-fix {
            clear:both;
          }
          nav ul{
     
            height: 60px;
            text-align: left;
            margin-top: 80px;
            display: block;
            transform: translateX(0px);
            transition: transform .3s;
          }
            nav ul div#lang {
              position: absolute;
              right: 25px;
              bottom: -55px;
            }

            nav ul.active {
              width: 280px;
              height: 500px;
              
              background: #fff;
              transform: translateX(-135px);
              height: 450px;
              border-radius: 0 0 0 4px;
            }
              nav ul.active li {
                visibility: visible;
                
                 
                }
           
            nav ul li {
              margin: 0px 0px !important;
              display: block;
              line-height: 60px;
              transform: rotate(10deg);
              transform-origin: 0% 0%;
              padding: 0;
              opacity: 0;
              visibility: hidden;
            }
              nav ul li:nth-child(1) {
                  margin-top: 30px;
                }
            
    
                nav ul li a {
                color: #333F52;
                border:none;
                padding: 0 20px;
                display:block;
                width: 100%;
                height: 100%;
                }
                nav ul li a:hover {
                  border:none;
                  padding: 0;
      
                }
               
    
    
    
            nav ul.active li {
              transition: all .3s;
              padding 0 0px;
              border-bottom: 1px solid rgba(238,238,238, .5);
              transform: rotate(0deg);
              margin: 0 30px;
              opacity: 1;
              color: #000;
            }
              nav ul.active li:hover {
                background-color: rgba(238,238,238, .5);
                transition-delay: 0s;
              }
                nav ul.active li a {
                  padding-left: 28px;
                  padding-right: 12px;
                }
              
    
              nav ul.active li.active {
                transition: all .0s;
                transform: rotate(0deg);
                background: #efefef;
              }
                nav ul.active li.active::after {
                  content: "\00BB";
                  font-size: 20px;
                  float:right;
                  color:rgba(50, 109, 233, 0.85);
         
                }
                nav ul.active li.active::after a {
                  margin-left: 8px;
                }
            }
            

                @media (max-width: 1080px) {
                    nav div#bars {
                        display: inline-block !important;
                        width: 40px !important;
                        float: right !important;
                        margin-right: 35px !important;
                        height: 40px !important;
                        padding: 5px 7px !important;
                        border-radius: 25px !important;
                        position: relative !important;
                        margin-top: 21px !important;
                    }
                    
                    nav div#bars:hover {
                      cursor: pointer;
                      opacity: 0.85;
                    }
                
                    nav div#bars div {
                      width: 22px;
                      height: 2.1px;
                      background: #fff;
                      margin: 5px 0;
                      border-radius: 2px;
                      // transition: background .3s;
                
                      transition: all 0.1s;
                    }
                    nav div#bars.clicked div.bar2 {
                        display: none;
                      }
                
                      nav div#bars.clicked div.bar1 {
                        transform: rotate(45deg);
                        position: absolute;
                        top: 12.5px;
                      }
                
                      nav div#bars.clicked div.bar3 {
                        transform: rotate(-45deg);
                        position: absolute;
                        bottom: 15px;
                      }
                  }
                
                  @media (max-width: 600px) {
                    nav div#bars{
                        margin-right: 10px;

                    }
                  }
                
                  @media (max-width: 350px) {
                   nav div#bars{
                    margin-right: -10px;
                        
                    }
                  }
        
        `}</style>
      </nav>
    );
  };
  
  

