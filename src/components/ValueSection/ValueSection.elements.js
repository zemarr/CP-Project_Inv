import styled from "styled-components";

// font-family: 'PT Sans', sans-serif;
// font-family: 'Roboto', sans-serif;

export const Heading = styled.h1`
  font-size: ${({ sectionHeading }) => (sectionHeading ? "40px" : "50px")};
  font-weight: 700;
  font-style: normal;
  line-height: 56px;
  color: ${({ lightText }) => (lightText ? "#fff" : "rgba(8, 121, 201, 0.96)")};
  text-align: ${({ centerText }) => (centerText ? "center" : "")};
  max-width: ${({ sectionHeading }) => (sectionHeading ? "80%" : "")};
  margin: ${({ sectionHeading }) => (sectionHeading ? "0 auto 24px auto" : "")};

  span {
    color: #0e4b77;
  }

  @media screen and (max-width: 425px) {
    max-width: ${({ sectionHeading }) => (sectionHeading ? "100%" : "")};
  }
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
export const FeaturesWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-self: center;
  justify-content: space-between;
  position: absolute;
  height: 550px;

  @media screen and (max-width: 1235px) {
    padding: 0 1.0875rem;
  }
`;
export const Features = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  align-self: ${({ start }) => (start ? "flex-start" : "flex-end")};
  width: 200px;
  padding-top: ${({ morePaddingTop }) =>
    morePaddingTop ? "3.2rem" : "3.5rem"};
`;
export const Feature = styled.div`
  padding: 12px 0;
  /* border: solid 1px #f7f7f7; */
`;
export const SmallHeading = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: rgba(39, 132, 198, 1);
`;
export const FeatureDescription = styled.p`
  color: rgba(126, 126, 126, 1);
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
`;
export const CardWrapper = styled.div`
  padding: 2rem 0;
`;
export const Card = styled.div`
  width: 320px;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  padding: 22px 32px;
  margin: 0.5rem 16px;
  transition: ease-in 0.1s all;

  &:hover {
    transform: scale(1.04, 1.04);
    transition: ease-in 0.1s all;
  }

  @media screen and (max-width: 1024px) {
    width: 270px;
  }

  @media screen and (min-width: 1091px) and (max-width: 1024px) {
    width: 300px;
  }
  @media screen and (max-width: 877px) {
    width: 250px;
  }
  @media screen and (min-width: 768px) and (max-width: 810px) {
    width: 230px;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
    justify-self: center;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;
export const CardIcon = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;
