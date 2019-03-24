import styled, { keyframes } from 'styled-components'

const ldsMagnify = keyframes`
  0% {
    -webkit-transform: translate(2px, 2px);
    transform: translate(2px, 2px);
  }
  33.33% {
    -webkit-transform: translate(102px, 2px);
    transform: translate(102px, 2px);
  }
  66.66% {
    -webkit-transform: translate(42px, 102px);
    transform: translate(42px, 102px);
  }
  100% {
    -webkit-transform: translate(2px, 2px);
    transform: translate(2px, 2px);
  }
`;

const SpinnerContainer = styled.div`
    position: relative;
    width: 200px !important;
    height: 200px !important;
    transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
    
    > div {
      transform: scale(0.8);
      transform-origin: 100px 100px;
    }
    
    > div > div {
      animation: ${ldsMagnify} 2.5s linear infinite;
      position: absolute;
    }
    
    > div > div div:nth-child(1) {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      border: 12px solid #0b1d27;
      background: #72cbfd;
    }
    
     > div > div div:nth-child(2) {
      width: 17px;
      height: 51px;
      transform: rotate(-45deg);
      background: #0b1d27;
      border-radius: 0 0 8px 8px;
      position: absolute;
      top: 68px;
      left: 85px;
    }
`

export {
    SpinnerContainer
}
