import styled from "styled-components";

// font-family: 'PT Sans', sans-serif;
// font-family: 'Roboto', sans-serif;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 0 1rem 0;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 1rem;
  padding-right: 0;
  padding-left: 0;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-top: 0;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4b59f7")};
  font-size: 18px;
  line-height: 1rem;
  letter-spacing: 1.4px;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: ${({ sectionHeading }) => (sectionHeading ? "48px" : "")};
  font-weight: 700;
  font-style: normal;
  line-height: 56px;
  color: ${({ lightText }) => (lightText ? "#fff" : "#127ECB")};
  max-width: ${({ sectionHeading }) => (sectionHeading ? "65%" : "")};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: 30px;
  letter-spacing: -1.5%;
  color: ${({ lightText }) => (lightText ? "#fff" : "#1c2237")};
`;

export const ImgWrapper = styled.div`
  max-width: ${({ medium }) => (medium ? "600px" : "555px")};
  max-width: ${({ large }) => (large ? "1200px" : "555px")};
  margin: ${({ center }) => (center ? "0 auto" : "")};
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
  justify-content: ${({ center }) => (center ? "center" : "")};
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 768px) {
    display: ${({ imgDesktopOnly }) => (imgDesktopOnly ? "none" : "initial")};
  }
`;
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  position: ${({ floater }) => (floater ? "absolute" : "relative")};
  top: ${({ mobile }) => (mobile ? "45px" : "")};
  vertical-align: middle;
  display: inline-block;
  max-height: ${({ mobile }) => (mobile ? "400px" : "500px")};
  image-rendering: -webkit-optimize-contrast;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? "30px" : "")};

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    max-width: ${({ mobile }) => (mobile ? "50%" : "100%")};
  }

  @media screen and (max-width: 1024px) {
    display: ${({ noDisplay }) => (noDisplay ? "none" : "")};
  }

  @media screen and (max-width: 768px) {
    height: ${({ imgResponsive }) => (imgResponsive ? "500px" : "")};
    /* display: ${({ imgDesktopOnly }) =>
      imgDesktopOnly ? "none" : "initial"}; */
  }
  @media screen and (max-width: 425px) {
    height: ${({ imgResponsive }) => (imgResponsive ? "450px" : "")};
  }
  @media screen and (max-width: 375px) {
    height: ${({ imgResponsive }) => (imgResponsive ? "350px" : "")};
  }
  @media screen and (max-width: 320px) {
    height: ${({ imgResponsive }) => (imgResponsive ? "300px" : "")};
  }
`;
