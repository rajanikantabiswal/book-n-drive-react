import { useRef } from "react";
import React from "react";
import "./fancyButton.css"
function FancyButton(props) {
    const maskId = useRef('mask_1');
  
    const maskStyle = `#fancy-masked-element_${maskId.current} { mask: url(#${maskId.current}); -webkit-mask: url(#${maskId.current})}`;
  
    const buttonStyle = {
      width: props.width,
      height: props.height,
    };
  
    const fancyFrontStyle = {
      transform: `rotateX(0deg) translateZ(${props.height / 2}px )`,
    };
  
    const fancyBackStyle = {
      transform: `rotateX(90deg) translateZ( ${props.height / 2}px )`,
    };
  
    const textTransform = `matrix(1 0 0 1 ${props.width / 2} ${props.height / 1.6})`;
    const viewBox = `0 0 ${props.width} ${props.height}`;
  
    return (
      <div className="fancy-button" style={buttonStyle} ref={React.createRef()}>
        <div className="fancy-flipper">
          <div className="fancy-front" style={fancyFrontStyle}>
            <svg height={props.height} width={props.width} viewBox={viewBox}>
              <defs>
                <mask id={maskId.current}>
                  <rect width="100%" height="100%" fill="#FFFFFF" />
                  <text
                    className="mask-text button-text"
                    fill="#000000"
                    transform={textTransform}
                    fontFamily="'intro_regular'"
                    fontSize={props.fontSize}
                    width="100%"
                    textAnchor="middle"
                    letterSpacing="1"
                  >
                    {props.buttonText}
                  </text>
                </mask>
              </defs>
              <style>{maskStyle}</style>
              <rect id={`fancy-masked-element_${maskId.current}`} fill={props.color} width="100%" height="100%" />
            </svg>
          </div>
          <div className="fancy-back" style={fancyBackStyle}>
            <svg height={props.height} width={props.width} viewBox={viewBox}>
              <rect
                stroke={props.color}
                strokeWidth={props.borderWidth}
                fill="transparent"
                width="100%"
                height="100%"
              />
              <text
                className="button-text"
                transform={textTransform}
                fill={props.color}
                fontFamily="'intro_regular'"
                fontSize={props.fontSize}
                textAnchor="middle"
                letterSpacing="1"
              >
                {props.buttonText}
              </text>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  
  FancyButton.defaultProps = {
    color: '#dc2626',
    width: 180,
    height: 50,
    fontSize: 20,
    borderWidth: 3,
    // buttonText: 'BOOK CAR',
  };
  
  export default FancyButton;