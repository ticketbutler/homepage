import React from "react";
import { css, jsx } from "@emotion/core";

export class Button extends React.Component {
  static defaultProps = {
    arrow: true,
    outline: false,
    buttonProps: {},
    style: {}
  };
  state = {
    hovered: false
  };
  renderButton() {
    return (
      <button
        onMouseOver={() => {
          this.setState({ hovered: true });
        }}
        onMouseLeave={() => {
          this.setState({ hovered: false });
        }}
        css={css`
          color: "white",
          fontWeight: "bold",
          borderRadius: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          cursor: "pointer",
          border: "2px solid transparent",
          transition: "2s all",
          "@media(max-width: 600px)": {
            fontSize: 16
          },
          ...(this.props.small
            ? {
                maxWidth: 150,
                padding: "10px 15px",
                fontSize: 15
              }
            : {
                maxWidth: 300,
                padding: "20px 30px",
                fontSize: 18
              }),
          ...(this.props.outline && !this.state.hovered
            ? {
                background:
                  "linear-gradient( to right, rgba(40, 216, 167, 0), rgba(29, 201, 202, 0) )",
                color: "white",
                border: "2px solid #1dc9ca"
              }
            : {
                background:
                  "linear-gradient( to right, rgba(40, 216, 167, 1), rgba(29, 201, 202, 1) )"
              }),
          ...this.props.style
        `}
        {...this.props.buttonProps}
      >
        {this.props.children}
        {this.props.arrow && (
          <span
            style={{
              transition: "300ms all",
              ...(this.state.hovered
                ? {
                    opacity: 1,
                    marginLeft: 10
                  }
                : {
                    opacity: 0,
                    marginLeft: 0
                  })
            }}
          >
            »
          </span>
        )}
      </button>
    );
  }
  render() {
    return this.props.to ? (
      <a href={this.props.to} style={{ textDecoration: "none" }}>
        {this.renderButton()}
      </a>
    ) : (
      this.renderButton()
    );
  }
}

export const SectionText = ({ children }) => {
  return (
    <div className="section_text">
      {children}
      <style jsx>{`
        .section_text h2 {
          font-size: 60px;
          line-height: 70px;
          width: 600px;
          color: #333f52;
          font-family: Hind;
          font-weight: bold;
          display: block;
          margin-top: 50px;
        }
        .section_text p {
          font-size: 27px;
          line-height: 38px;
          width: 90%;
          color: #6c7582;
          font-family: Montserrat;
          font-weight: 500;
          padding: 0 10px;
        }

        @media (max-width: 1400px) {
          .section_text h2 {
            font-size: 50px;
            line-height: 60px;
            width: 100%;
          }

          .section_text p {
            font-size: 22px;
            line-height: 33px;
          }
        }

        @media (max-width: 1160px) {
          .section_text h2 {
            font-size: 40px;
            line-height: 50px;
            width: 100%;
          }

          .section_text p {
            font-size: 20px;
            line-height: 30px;
          }
        }

        @media (max-width: 1080px) {
          .section_text {
            width: 100%;
            text-align: center !important;
            padding: 0 100px;
          }

          .section_text h2 {
            width: 100%;
            font-size: 55px;
            line-height: 60px;
            text-align: center !important;
            float: none !important;
            ext-align: center !important;
            margin-left: 50% !important;
            transform: translateX(-50%) !important;
          }

          .section_text p {
            width: 100%;
            margin-left: 50% !important;
            transform: translateX(-50%) !important;
            font-size: 22px;
            float: none !important;
            ext-align: center !important;
            line-height: 32px;
            text-align: center !important;
          }
        }

        @media (max-width: 768px) {
          .section_text {
            padding: 0 70px;
          }

          .section_text h2 {
            width: 90%;
            font-size: 45px;
            line-hight: 50px;
          }

          .section_text p {
            width: 80%;

            font-size: 20px;
          }
        }

        @media (max-width: 600px) {
          .section_text {
            padding: 0 40px;
          }

          .section_text h2 {
            width: 100%;

            margin-top: 0px !important;
            font-size: 35px;
            margin-bottom: 10px !important;
          }

          .section_text p {
            width: 100%;
            font-size: 16px;
            line-height: 25px;
          }
        }

        @media (max-width: 376px) {
          .section_text {
            padding: 0 20px;
          }

          .section_text h2 {
            margin-top: -10px !important;
            font-size: 25px;
            line-height: 32px;
          }

          .section_text p {
            font-size: 14px;
            line-height: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export const RightImage = ({ children }) => {
  return (
    <div className="section_right_image">
      {children}
      <style jsx>{`
        .section_right_image img {
          width: 510px;
          height: 420px;
          object-fit: cover;
          float: right;
          z-index: 2;
          margin-top: -30px;
        }

        .section_right_image div.blue_box_along {
          position: absolute;
          height: 380px;
          width: 560px;
          right: 0px;
          top: 80px;
          background-color: #326de9;
          z-index: -2;
        }
        .section_right_image div.clear-fix {
          clear: both;
        }

        /* Another Section style section future right */
        .section_right_image div.first-box.green {
          position: absolute;
          height: 427px;
          width: 627px;
          right: 25px;
          background-color: #1dc9cc;
          z-index: -2;
        }

        .section_right_image div.second-box.blue {
          position: absolute;
          top: 70px;
          right: 160px;
          height: 411px;
          width: 448px;
          z-index: -1;
          background-color: #326de9;
          -webkit-clip-path: polygon(0 0, 0% 100%, 100% 100%);
          clip-path: polygon(0 0, 0% 100%, 100% 100%);
        }

        /* Another Section style section future right second */

        .section_right_image div.second_shape.first-box.blue {
          position: absolute;
          z-index: -2 !important;

          height: 380px;
          width: 560px;
          right: 0px;
          top: 80px;
          background-color: #326de9;
        }

        .section_right_image div.second_shape.second-box.green {
          position: absolute;
          z-index: -1 !important;

          top: 135px;
          right: 160px;
          height: 340px;
          width: 448px;
          background-color: #1dc9cc;
          -webkit-clip-path: polygon(0 0, 0% 100%, 100% 100%);
          clip-path: polygon(0 0, 0% 100%, 100% 100%);
        }

        /*****************************       Media Queries       *********************************** */

        /* Another Section style section future right New */
        @media (max-width: 1400px) {
          .section_right_image div.blue_box_along {
            width: 530px;
            height: 350px;
          }
          .section_right_image img {
            width: 490px;
            height: 390px;
          }

          /* Another Section style section future right */
          .section_right_image div.first-box.green {
            top: 10px;
            right: 40px;
            height: 360px;
            width: 520px;
          }

          .section_right_image div.second-box.blue {
            right: 210px;
            height: 350px;
            width: 320px;
          }

          /* Another Section style section future right second */

          .section_right_image div.second_shape.first-box.blue {
            width: 530px;
            height: 350px;
          }

          .section_right_image div.second_shape.second-box.green {
            right: 180px;
            width: 400px;
            height: 300px;
            top: 150px;
          }
        }

        @media (max-width: 1160px) {
          .section_right_image div.blue_box_along {
            width: 490px;
            height: 320px;
          }

          .section_right_image img {
            width: 450px;
            height: 370px;
          }

          /* Another Section style section future right */
          .section_right_image div.first-box.green {
            top: 15px;
            right: 55px;
            height: 340px;
            width: 480px;
          }

          .section_right_image div.second-box.blue {
            top: 110px;
            right: 185px;
            height: 320px;
            width: 320px;
          }

          /* Another Section style section future right second */

          .section_right_image div.second_shape.first-box.blue {
            width: 490px;
            height: 320px;
          }

          .section_right_image div.second_shape.second-box.green {
            right: 150px;
            width: 390px;
            height: 300px;
            top: 120px;
          }
        }

        @media (max-width: 1080px) {
          .section_right_image div.blue_box_along {
            top: -50px;
            height: 400px;
            left: 50%;
            transform: translateX(-50%);
            width: 760px;
          }

          .section_right_image img {
            position: relative;
            width: 600px;
            border-radius: 3px;
            right: 0;
            margin-right: 50%;
            transform: translateX(50%);
          }

          /****************************************************
        Another Section style section future right 
      **************************************************/
          .section_right_image div.first-box.green {
            top: -50px;
            height: 400px;
            left: 50%;
            transform: translateX(-50%);
            width: 760px;
          }

          .section_right_image div.second-box.blue {
            top: -50px;
            height: 400px;
            left: 50%;
            transform: translateX(-50%);
            width: 760px;
          }

          /* Another Section style section future right second */

          .section_right_image div.second_shape.first-box.blue {
            top: -50px;
            height: 400px;
            left: 50%;
            transform: translateX(-50%);
            width: 760px;
          }

          .section_right_image div.second_shape.second-box.green {
            top: -50px;
            height: 400px;
            left: 50%;
            transform: translateX(-50%);
            width: 760px;
          }
        }

        @media (max-width: 600px) {
          .section_right_image div.blue_box_along {
            width: 100%;
            height: 100%;
            top: -15%;
          }
          .section_right_image img {
            width: 100%;
            height: auto;
            top: 0px;
            right: 0px;
            border-radius: 0px;
          }

          /****************************************************
        Another Section style section future right 
      **************************************************/
          .section_right_image div.first-box.green {
            width: 100%;
            height: 100%;
            top: -15%;
          }

          .section_right_image div.second-box.blue {
            top: -15%;
            width: 100%;
            height: 100%;
          }

          /* Another Section style section future right second */

          .section_right_image div.second_shape.first-box.blue {
            // display: none;
            width: 100%;
            height: 100%;
            // left: 0;
            top: -15%;
          }

          .section_right_image div.second_shape.second-box.green {
            // display: none;
            top: -15%;
            // left: 0;
            width: 100%;
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export const LeftImage = ({ children }) => {
  return (
    <div className="section_left_image">
      {children}
      <style jsx>{`

    .section_left_image{
      width: 100%;
      height: 450px;
      padding: 0;
      margin: 0;
      position:relative;
    }
    
    .section_left_image figure {
      width: 100%;
      height: 450px;
      z-index: -4;
      padding: 0; 
      margin: 0;
      position: relative;

    }
      .section_left_image figure img.device {	
          width: 773px !important;
          margin:0;
          z-index: -4;
          position: relative;
      }

      .section_left_image img.content {
          position: absolute;
          left: .5%;
          right: .5%;
          
          top: 4.7%; 
          width: 100%;
          // height: 100px;
         
          border: 1px solid: #ccc;
      }
  

      @media (max-width: 1080px) {
        display: block;
        width:100%;
        position: relative;
        .section_left_image   {
          height: 400px;
       
      }
    
        .section_left_image figure  {
        width: 60%;
        height: 400px !important;
        margin-left: 50%;
        transform: translateX(-50%);
    }
        

        .section_left_image figure img.device {	
          width: 100% !important;
          height: auto !important ;
          margin:0;
          position: absolute;
          bottom: 0;
        }
    }
    @media (max-width: 800px) {
    
      .section_left_image  {
      height: 300px !important;
   }
  .section_left_image figure  {
    height: 300px !important;
 }
}
    @media (max-width: 600px) { 
      .section_left_image {
         height: 400px;
        position: relative;
        margin-bottom: 30px;
       }
      .section_left_image figure {
            width: 80%;
            height: 370px !important;
            position: absolute;
            bottom: 0;
    
        }
        .section_left_image figure img.device {	
          width: 100% !important;
          height: auto !important ;
          position: absolute;
          bottom: 0;
        }
    }



    @media (max-width: 430px) {
      .section_left_image {
        margin: 0;
        padding: 0;
        height: 370px;
        position: relative;
        margin-bottom: 30px;
       }
      .section_left_image figure {
            width: 100%;
            padding: 0px;
            height: 370px !important;
            position: absolute;
            bottom: 0;
    
        }
        .section_left_image figure img.device {	
          width: 100% !important;
          height: auto !important ;
          position: absolute;
          bottom: 20px;
          bottom: 0;
        }
    }
    @media (max-width: 370px) { 
      .section_left_image {
        height: 300px;
       }}
     @media (max-width: 300px) { 
       
      .section_left_image {
        margin: 0;
        padding: 0;
        max-height: 280px;
        position: relative;
        margin-bottom: 40px;
       }
      .section_left_image figure {
        width: 100%;
        height: 300px !important;
        position: absolute;
        bottom: 0;
     }
    }
      `}</style>
    </div>
  );
};
