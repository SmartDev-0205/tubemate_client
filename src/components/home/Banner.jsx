import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Canvas from "./Canvas";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const Banner = () => {
  const getOrientation = () => window?.screen?.orientation?.type;

  const [isMobile, setIsMobile] = useState(false);
  const { height, width } = useWindowDimensions();
  const [orientation, setOrientation] = useState("potrait");

  const updateOrientation = (event) => {
    const _orientation = getOrientation();
    if (_orientation) {
      if (_orientation.includes("landscape")) {
        setOrientation("landscape");
      } else {
        setOrientation("potrait");
      }
    } else {
      setOrientation("potrait"); //safari
    }
  };

  useEffect(() => {
    window.addEventListener("orientationchange", updateOrientation);
    return () => {
      window.removeEventListener("orientationchange", updateOrientation);
    };
  }, []);

  useEffect(() => {
    // console.log('orientation ' + orientation + width + '_' + height)
    if (width > height && orientation == "landscape") {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [orientation]);

  return (
    <>
      <div
        style={{
          position: "relative",
          padding: "200px 0 160px 0",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Canvas />
        <div className="w-full max-w-6xl mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mb-4">
            <div className="max-w-[555px]">
              <h3 className="text-white text-5xl leading-[60px] font-bold mb-10">
                Earn Money Watching New Videos Online
              </h3>

              <Link
                to="/auth/register"
                className="bg-[#007bff] inline-block border-[#007bff] border-[2px] hover:opacity-70 text-white font-semibold mr-10 text-sm py-[10px] px-8 rounded-full hover:border-white hover:text-white hover:bg-transparent"         >
                Get Started
              </Link>
              <Link
                to="/auth/about-us"
                className="border-[2px] inline-block border-white text-white font-semibold text-sm py-[10px] px-8 rounded-full hover:opacity-70 hover:bg-[#007bff] hover:border-[#007bff] hover:text-white"
              >
                More About
              </Link>
              <div className="right-side w-full gap-8 mb-4">
				<img src={require('../../icons/img_bg.png')} alt="img" />
				<div className="offerText text-white">Referral Bonus $5 
				<h2 className="offerMin">For Every Referral account
				<br />
				Activation $5 Bonus & <br /> Instant Withdraw
				</h2></div>
              </div>
            </div>

            <div className="pr-9 w-full">
              {!isMobile ? (
                <div
                  className="smartphone"
                  style={{
                    color: "whitesmoke",
                    backgroundImage: `url("https://i.ibb.co/8Pfphz9/git52hslj6p.jpg")`,
                    backgroundPositionX: "center",
                    borderRadius: "36px",
                    width: "166%",
                    height: "70%",
                  }}
                >
                  <div className="content">
                    <iframe
                      title="abc"
                      className="w-full aspect-[0.5]"
                      src="https://www.youtube.com/embed/IGM3xO-FE-E?autoplay=1&loop=1&playlist=IGM3xO-FE-E&mute=1"
                      style={{
                        border: "none",
                        position: "relative",
                        width: "33%",
                        // height: '540px',
                        margin: "auto",
                        border: "16px  solid",
                        margin: "1px",
                        borderTopWidth: "60px",
                        borderBottomWidth: "60px",
                        borderRadius: "36px",
                        // 'rotate': '90deg'
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className="smartphone"
                  style={{
                    color: "whitesmoke",
                    backgroundImage: `url("https://i.ibb.co/8Pfphz9/git52hslj6p.jpg")`,
                    backgroundPositionX: "center",
                    borderRadius: "36px",
                    width: "166%",
                    height: "70%",
                  }}
                >
                  <div className="content">
                    <div
                      style={{
                        border: "none",
                        position: "relative",
                        width: "33%",
                        height: "540px",
                        margin: "auto",
                        // border: '16px  solid',
                        // margin: '1px',
                        // borderTopWidth: '60px',
                        // 'border-bottom-width': '60px',
                        // 'border-radius': '36px'
                        // 'rotate': '90deg'
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isMobile && (
        <div className="hidden sm:block">
          <div className="w-full max-w-6xl mx-auto  px-4 sm:px-6 lg:px-8">
            <div
              className="smartphone"
              style={{
                color: "whitesmoke",
                backgroundPositionX: "center",
                borderRadius: "36px",
              }}
            >
              <div className="content">
                <iframe
                  title="abc"
                  // scrolling="auto"
                  src="https://www.youtube.com/embed/IGM3xO-FE-E?autoplay=1&loop=1&playlist=IGM3xO-FE-E&mute=1"
                  style={{
                    border: "none",
                    position: "relative",
                    width: "100%",
                    height: "440px",
                    margin: "auto",
                    border: "16px  solid",
                    margin: "1px",

                    borderTopWidth: "60px",
                    "border-bottom-width": "60px",
                    "border-radius": "36px",
                    // rotate: '90deg'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
