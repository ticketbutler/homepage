import React from "react";
import Slider from "react-slick";
// import { Button, SectionText, leftImage } from "./elements/elements";

// import { CircleShape, SquareShape } from "./elements/shapes";
const settings  = {
  dots: true,
  className: "feature_slider",
  infinite: true,
  centerPadding: "100px",
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
const FutureImageIeft = ({heading, items, paragraph}) => (
 
  
  <section className="container Feature_page" id="feature_section" style={{
    padding: "0",
    minHeight: "100vh",
    width: "100%",

    position: "relative",
  }}>
  <div id="cliped_box" style={{
    minHeight: "100vh",
    width: "100%",
    clipPath: "polygon(0 0, 100% 0, 100% 95%, 0% 100%)",
    color: "#fff",
    position: "relative",
    background:
      "linear-gradient( to right, rgba(50, 109, 233, .9),rgba(126, 82, 232, .9)),url('../img/splash-new.png'),no-repeat center center",
    backgroundSize: "cover"
  }}>
      <div className="content">
        <h1 style={{
            margin: "auto",
            display: "block",
            height: "auto",
            color: "#ffffff",
            fontFamily: "Hind",
            fontWeight: "bold",
            textAlign: "center",
            zIndex: "-1",
            transition: "all 0.3s", 
            marginBottom: "0",

          }}>{heading}</h1>
        <p style={{
            margin: "auto",
            marginBottom: "37px",
            marginTop: "30px",
            display: "block",
            color: "#ffffff",
            fontFamily: "Montserrat",
            textAlign: "center",
            transition: "all 0.3s"
          }}>{paragraph}</p>
    </div>

  </div>

<Slider {...settings}>
{items.map(item => (
  <div key={item} className="slider_item">
      <a href="#feature_section" className="feature_item">
            <img src={item.image}/> 
            <span>{item.text}</span>
        </a>
  </div>
))}
      <div className="slider_item">
              <a href="#feature_section" className="feature_item">
                    <img src="../img/feature_sub_logo.png"/> 
                    <span>0</span>
                </a>
          </div>
          <div className="slider_item">
              <a href="#feature_section" className="feature_item">
                    <img src="../img/feature_sub_logo.png"/> 
                    <span>1</span>
                </a>
          </div>
          <div className="slider_item">
              <a href="#feature_section" className="feature_item">
                    <img src="../img/feature_sub_logo.png"/> 
                    <span>2</span>
                </a>
          </div>
          <div className="slider_item">
              <a href="#feature_section" className="feature_item">
                    <img src="../img/feature_sub_logo.png"/> 
                    <span>3</span>
                </a>
          </div>
          {/* <div className="slider_item">
              <a href="#feature_section" className="feature_item">
                    <img src="../img/feature_sub_logo.png"/> 
                    <span>4</span>
                </a>
          </div><div className="slider_item">
              <a href="#feature_section" className="feature_item">
                    <img src="../img/feature_sub_logo.png"/> 
                    <span>5</span>
                </a>
          </div>
          <div className="slider_item">
              <a href="#feature_section" className="feature_item">
                    <img src="../img/feature_sub_logo.png"/> 
                    <span>6</span>
                </a>
          </div>
          <div className="slider_item">
              <a href="#feature_section" className="feature_item">
                    <img src="../img/feature_sub_logo.png"/> 
                    <span>7</span>
                </a>
          </div> */}

          <div className="clear_fix"></div>
     
</Slider>
  <style jsx>{`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  
  }
  .clear_fix {
    clear: all;
  }
  section.Feature_page #cliped_box {
      padding: 250px 120px 0 120px ;
      
  }

  section.Feature_page #cliped_box .content h1 {
    width: 700px;
    font-size: 75px;
    line-hight: 70px;
    margin-bottom: 37px ;
  }
  section.Feature_page #cliped_box .content p {
    width: 604px;
    line-height: 35px;
    font-size: 25px;
  }

  section.Feature_page .feature_buttons{
      width: 100%;
      height:auto;
      position: absolute;
      z-index:10;

      bottom: -30px;

  }
  .slick-cloned{
    // display: none ;
  }
  .slick-list {
    transform: translate3d(0px, 0px, 0px) !important;
    // display: inline !important; 
    justify-content: center !important;

  
  }
  .slick-initialized{
    position: relative;
    bottom: 100px;
  }

  .slick-slide{
    width: 250px;
    float: left;
    padding: 0 25px;
    
  }
  .feature_slider  {
    height: 180px;
  }

  .slick-arrow.slick-next, .slick-arrow.slick-prev{
    display: none !important;
  }

  ul.slick-dots {
    margin-top: 15px !important;
    position: absolute !important;
    bottom: 0;
    right: 50%;
    display: block;
    margin-bottom: 0;
    transform: translateX(50%) !important;
  }
  ul.slick-dots li{
      list-style:none ;
      display:inline ;
      float:left ;
      height: 20px;
      width: 20px;
      margin:5px;
    }
    ul.slick-dots li.slick-active button{
      background: rgba(50, 109, 233, .9);
      color: #fff;      
    }
    ul.slick-dots li button {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 0;
      background: #efefef;
      font-size: 10px;
      line-height: 20px;
      font-family: Montserrat;
      font-weight: bold;
     
    }
  


   div.slider_item {
    background: #fff;
    height: 130px !important;
    padding: 15px;
    border-radius: 4px;
    -webkit-box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.20);
    -moz-box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.20);
    box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.20);
    transition: all .3s;
    
   }
   
   div.slider_item a.feature_item {

      text-decoration: none;
  }


  div.slider_item:hover {
    transform: scale(1.05);
    -webkit-box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.35);
      -moz-box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.35);
      box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.35);
      position: relative;
      z-index: 100;

  }

  a.feature_item img {
      height: 40px;
      width: 40px !important;
      display: block;
      margin: 0 auto;
  }

  .feature_item span {
      display: block; 
      color: rgba(50, 109, 233, 1);
      text-align: center;
      font-family: Montserrat;
      font-weight: 600;
      font-size: 16px;
      margin-top:15px;
      text-decoration: none;

  }

      
  @media (max-width: 1300px) {
    section.Feature_page #cliped_box .content h1 {
        display: inlin-block !important;
      }
      section.Feature_page #cliped_box .content p {
        width: 100%;
      }
      div.slider_item {
        height: 120px !important;
      }
    }

  @media (max-width: 1080px) {
    section.Feature_page #cliped_box {
      padding: 220px 100px 0 100px ;
    
    }
    section.Feature_page #cliped_box .content  h1 {
      width: 100% ;
      font-size: 55px ;
      line-height: 60px ;
    }
    section.Feature_page #cliped_box .content p {
      font-size: 22px ;
    }
  }

  @media (max-width: 768px) {
    section.Feature_page #cliped_box {
        padding: 240px 80px 0 80px ;
      
      }
    section.Feature_page #cliped_box .content h1{
      font-size: 45px ;
      line-height: 50px ;
     
    }
    section.Feature_page #cliped_box .content  p{
      font-size: 20px ;
    }

  }

  @media (max-width: 600px) {
    section.Feature_page #cliped_box {
        padding: 220px 40px 0 40px;
      
      }

    section.Feature_page #cliped_box .content  h1{
      font-size: 35px ;
      line-height: 40px ;
      margin-bottom: 20px ;
    }
    section.Feature_page #cliped_box .content  p{
      font-size: 16px !important;
      margin-bottom: 20px ;
    }
}

  @media (max-width: 376px) {
    section.Feature_page #cliped_box {
        padding: 200px 20px 0 20px ;
      
      }
    section.Feature_page #cliped_box .content h1{
      font-size: 25px ;
      line-height: 28px ;
    }
    section.Feature_page #cliped_box .content p{
      font-size: 14px !important;
      line-height: 20px ;

    }
}
  `}</style>
  </section>
    
);

export default FutureImageIeft;
