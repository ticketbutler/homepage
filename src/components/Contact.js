import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { withWindow } from "../components/helpers";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    sent: true
  };
  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="contact_left_box ">
            <h1 style={{}}>{this.props.heading}</h1>
            {this.state.sent ? (
              <div
                style={{
                  display: "inline-table",
                  color: "#6c7582",
                  ...(this.props.window.width > 768
                    ? {
                        textAlign: "left"
                      }
                    : {
                        textAlign: "center"
                      })
                }}
              >
                <h2 style={{ color: "#356be9" }}>{this.props.thanks}</h2>
                <h3>{this.props.thanks_message}</h3>
                <h3>{this.props.call_us} </h3>
                <h3>{this.props.number} </h3>
              </div>
            ) : (
              <form
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={async e => {
                  e.preventDefault();
                  await fetch("/", {
                    method: "post",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: encode({
                      "form-name": "contact-form",
                      name: this.state.name,
                      email: this.state.email,
                      message: this.state.message
                    })
                  });

                  this.setState({
                    sent: true
                  });
                }}
                className="contact-form"
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="contact-form"
                  required
                />
                <ul>
                  <li>
                    <label>
                      <input
                        type="text"
                        name="name"
                        id="align-left"
                        placeholder={this.props.placeholder_name}
                        onChange={e => {
                          this.setState({ name: e.target.value });
                        }}
                      />
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="email"
                        name="email"
                        id="align-right"
                        placeholder={this.props.placeholder_email}
                        required
                        onChange={e => {
                          this.setState({ email: e.target.value });
                        }}
                      />
                    </label>
                  </li>
                  <li id="message-field">
                    <label>
                      <textarea
                        name="message"
                        placeholder={this.props.placeholder_text}
                        required
                        onChange={e => {
                          this.setState({ message: e.target.value });
                        }}
                      />
                    </label>
                  </li>
                </ul>
                <button id="contact_btn">
                  <span>
                    {this.props.button_text} <em>&#187;</em>
                  </span>
                </button>
                <div className="clear-fix" />
              </form>
            )}
          </div>
          <div className="contact_right_box">
            <div className="content">
              <ul>
                <li>
                  <i className="fa fa-map-marker" />
                  <span>{this.props.address_text}</span>
                  <span className="address">{this.props.address}</span>
                  <span className="address">{this.props.city}</span>
                </li>
                <li>
                  <i className="fa fa-phone" />
                  <span>{this.props.phone_text}</span>
                  <span id="phone">{this.props.phone}</span>
                </li>
                <li>
                  <i className="fa fa-envelope" />
                  <span>{this.props.support_text}</span>
                  <span id="support">{this.props.support}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="clear-fix" />

        <style jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .clear-fix {
        clear: both;
      }

      section#contact{
        padding: 0;
        width: 100%;
        text-align: center;
        margin-bottom: 0px;
      }

      /* Button */
        button#contact_btn{
            margin-top: 25px;
            float: left;
            margin-left: 25px;

            height: 55px ;
            width: 200px;
            display: block;
            float:left;
            border-radius: 29px;
    
            border: 0;
            background: linear-gradient(90deg, #326DE9 0%, #7E52E8 100%);
            text-decoration:none;
            text-align: center;
            position: relative;
            transition: all .3s;
        }
        button#contact_btn:hover {
            box-shadow: 0px 3px 20px -6px rgba(0,0,0,0.30);
            
        }
        button#contact_btn span em{
            font-size: 18px;
            margin-left: -10px;
            opacity: 0;
            transition: all .3s;
          }
    
        button#contact_btn:hover span em {
            margin-left: 10px;
            opacity: 1;
        }
        
        button#contact_btn span {
        color: #FFFFFF;	
        font-family: Montserrat;	
        font-size: 16px;
        font-weight: bold;	
        text-align: center;
        transition: all .3s;
        }



        /* From styling */
        .contact_left_box {
            width: 50%;
          height: 100%;
          display: inline;
          float: left;
          padding: 110px; 
          padding-left: 90px;
        }

        .contact_left_box h1 {
            float: left;
            margin-bottom: 50px;
            font-size: 50px;
        }
        .contact_left_box form {
            max-width: 100%;
            padding: 30px;
            margin: 50px auto;
            font-family: Montserrat;
            margin-bottom: 0;
            padding: 0;
        }
        .contact_left_box form  {
            padding:0;
            margin:0;
            list-style:none;
        
        }
        .contact_left_box form ul li {
            min-height: 35px;
            display: block;
            width: 100%;
            float:left;
            margin-left: 50%;
            transform: translateX(-50%);
            position: relative;
        }
            
        .contact_left_box form ul li label{
            padding-top: 15px;
                
        }
        .contact_left_box form ul li label input {
            width: 400px;
            display: block;
            padding: 0 15px;
            height: 40px;
            border: 1px solid #CCC;
            border-radius: 4px;
            position: relative;
                
        }
        .contact_left_box form ul li label input::placeholder{
            font-size: 15px;
        }

        .contact_left_box form ul li label input:focus ~ span.floating-label{
            font-size: 10px;
            
        }
           
        .contact_left_box form ul li#message-field {
            display: block;
            float: left;
            width: 100%;
            margin-left: 50%;
            transform: translateX(-50%);
        }
        .contact_left_box form ul li#message-field label textarea{
            width: 400px;
            display:inline;
            float: left;
            height: 120px;
            padding: 4px 15px;
            border: 1px solid #CCC;
            border-radius: 4px;
                    
        }
        .contact_left_box form ul li#message-field label textarea &::placeholder{
            font-size: 15px;
        }
                            
        

        .contact_right_box {
            width: 50%;
            height: 660px;
            padding: 110px;
            float:right;
            display:inline-block;
            background: linear-gradient(to right, rgba(50, 109, 233, .85) , rgba(126, 82, 232, .85)), url(/img/kontaktmin.png) no-repeat center center;
            color: #FFF;
            background-size: cover;
        }
        
        .contact_right_box div.content ul li {
                    display: block;
                    list-style: none;
                    margin: 50px auto;
                    width: 340px;
        }
        .contact_right_box div.content ul li:first-child{
            margin-top: 0;
        }
        .contact_right_box div.content ul li:last-child{
            margin-bottom: 0;
        }
    
            
        .contact_right_box div.content ul li i {
            display: inline;
            float:left;
            font-size: 20px;
        }
        .contact_right_box div.content ul li span {
            display:block;
            text-align: center;
            width: 250px;
            text-align:left;
            margin-left: 50%;
            transform: translateX(-50%);
            color: #fff;
            font-family: Montserrat;
            font-size: 20px;
            font-weight: 500;
            text-decoration: none;
        }
        .contact_right_box div.content ul li span :nth-child(2){
            margin-bottom: 10px;
        }
        .contact_right_box div.content ul li span.address , .contact_right_box div.content ul li span#phone , .contact_right_box div.content ul li span#support{
            opacity: .5;
            font-size: 16px;
        }
       
    

        @media (max-width: 1200px) {
    
            .contact_left_box form ul li label input {
                width: 100%;
            }
            .contact_left_box form ul li#message-field label textarea {
                width: 100%;
            }
        }


        @media (max-width: 1080px) {
            .contact_left_box{
            padding: 110px 40px;
            padding-left: 20px;

            }
            .contact_left_box h1 {
                font-size: 40px;
            }

            .contact_right_box{
                padding: 110px 40px;

            }
        }



        @media (max-width: 920px) { 
            button#contact_btn{
            margin-left: 50%;
            transform:translateX(-50%);
            }
            
        }
        
        @media (max-width: 768px) { 
            button#contact_btn{
            width: 190px;
            display:block; 
            float: right;
            transform: translateX(50%);
            margin-right: 50%;
            margin-left: 0;
            }
            button#contact_btn span {
                font-size: 15px;
                line-height: 40px;
            }
            button#contact_btn span ::after {
                    font-size: 18px;
                    line-height: 39px;
            }

        .contact_left_box{
            display: block;
            width: 100%;

        }
        .contact_left_box h1 {
            float: none;
            font-size: 40px;
        }
        .contact_left_box form ul li{ 
                    width: 400px;
        }
        .contact_left_box form ul li label input {
            width: 400px;
        }
                
        .contact_left_box form ul li#message-field {
            width: 400px;
        }
        .contact_left_box form ul li#message-field label textarea{
            width: 400px;
        }

        .contact_right_box{
            height: auto;
            display: block;
            width: 100%;   
            height: 550px;

        }
             
        }
        @media (max-width: 600px) { 
            button#contact_btn span {
                font-size: 14px;
                line-height: 40px;
            }
                button#contact_btn span::after {
                    font-size: 18px;
                    line-height: 39px;
            }
            
        }
        
        @media (max-width: 500px) { 
            .contact_left_box{
            padding: 70px 20px;
            padding-left: 0px;

            }
            .contact_left_box h1 {
                float: none;
                font-size: 30px;
            }
            .contact_left_box form ul li  {
                width: 100%;

            }
            .contact_left_box form ul li label input {
                width: 100%;

            }
            .contact_left_box form ul li#message-field {
                width: 100%;                
            }
            .contact_left_box form ul li#message-field label textarea {
                width: 100%;

            }
     }
        @media (max-width: 376px) { 
            button#contact_btn {
            width: 180px;
            height: 50px;
            }
            button#contact_btn span {
            font-size: 13px;
            line-height: 40px;
            }
            button#contact_btn span ::after {
                font-size: 16px;
                line-height: 39px;
            }
            
        }

    
        @media (max-width: 350px) { 
            .contact_right_box{
            padding: 110px 30px;
            height: 500px;
            
            }
            .contact_right_box div.content ul li{
                display: block;
                list-style: none;
                margin: 50px auto;
                width: 100%;
            }
            .contact_right_box div.content ul li i {
                float:left;
                font-size: 15px;
                width: 40px;
                height: 30px;
                width: 20%;
                text-align: left;
                margin-left: -10px;
            }
            .contact_right_box div.content ul li span {
                width: 80%
                font-size: 14px;
            }
            .contact_right_box div.content ul li span.address , .contact_right_box div.content ul li span#phone , .contact_right_box div.content ul li span#support{
                font-size: 12px;
            }
            
        }
    `}</style>
      </section>
    );
  }
}
export default withWindow(Contact);
