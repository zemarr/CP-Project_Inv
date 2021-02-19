import React from "react";
// import { Link } from "react-router-dom";
import { Button, Container, StyledSection } from "../../GlobalStyles";
import {
  Heading,
  Img,
  ImgWrapper,
  InfoColumn,
  InfoRow,
  Subtitle,
  TextWrapper,
} from "./InfoSection.elements";

const InfoSection = ({
  imgStart,
  lightText,
  description,
  headline,
  img,
  alt,
  start,
  playImg,
  AppstoreImg,
  centerText,
  sectionHeading
}) => {
  return (
    <>
      <StyledSection >
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                {/* TopLine is a short section description */}
                <Heading lightText={lightText} centerText={centerText} sectionHeading={sectionHeading}>
                  {headline}
                </Heading>
                {/* headingImg is a temporary replacement for the Heading text. The font used is unavailable for free */}
                {/* <Img src={headingImg} alt={alt} marginBottom /> */}
                <Subtitle lightText={lightText}>{description}</Subtitle>
                <Button noPad spaceMargin noOutline>
                  <Img src={playImg} alt={alt} />
                </Button>
                <Button noPad spaceMargin noOutline>
                  <Img src={AppstoreImg} alt={alt} />
                </Button>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} imgResponsive />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </StyledSection>
    </>
  );
};

export default InfoSection;
