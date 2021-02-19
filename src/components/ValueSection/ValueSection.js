import React from "react";
import { Container, StyledSection } from "../../GlobslStyles";
import { Img, ImgWrapper, InfoRow } from "../InfoSection/InfoSection.elements";
import {
  Card,
  CardIcon,
  CardWrapper,
  Feature,
  FeatureDescription,
  Features,
  FeaturesWrapper,
  Heading,
  SmallHeading,
} from "./ValueSection.elements";

const ValueSection = ({
  autoPilotImg,
  centerText,
  lightText,
  alt,
  start,
  featureHeading1,
  featureDescription1,
  featureHeading2,
  featureDescription2,
  featureHeading3,
  featureDescription3,
  featureHeading4,
  featureDescription4,
  featureHeading5,
  featureDescription5,
  featureHeading6,
  featureDescription6,
  aggressiveImg,
  cardHeading1,
  cardDescription1,
  cardHeading2,
  cardDescription2,
  cardHeading3,
  cardDescription3,
  cardIcon1,
  cardIcon2,
  cardIcon3,
}) => {
  return (
    <>
      <StyledSection lightBg mediumPaddingTop>
        <Container>
          <Heading sectionHeading centerText={centerText} lightText={lightText}>
            Build your wealth on <span>autopilot.</span>
          </Heading>
          <div style={{ marginBottom: "60px" }}>
            <ImgWrapper center large imgDesktopOnly>
              <Img src={autoPilotImg} alt={alt} marginBottom noDisplay />
              <Img
                src={aggressiveImg}
                alt={alt}
                small
                mobile
                floater
                noDisplay
              />
              <FeaturesWrapper>
                <Features start={start} morePaddingTop>
                  <Feature>
                    <SmallHeading>{featureHeading1}</SmallHeading>
                    <FeatureDescription>
                      {featureDescription1}
                    </FeatureDescription>
                  </Feature>
                  <Feature>
                    <SmallHeading>{featureHeading2}</SmallHeading>
                    <FeatureDescription>
                      {featureDescription2}
                    </FeatureDescription>
                  </Feature>
                  <Feature>
                    <SmallHeading>{featureHeading3}</SmallHeading>
                    <FeatureDescription>
                      {featureDescription3}
                    </FeatureDescription>
                  </Feature>
                </Features>
                <Features>
                  <Feature>
                    <SmallHeading>{featureHeading4}</SmallHeading>
                    <FeatureDescription>
                      {featureDescription4}
                    </FeatureDescription>
                  </Feature>
                  <Feature>
                    <SmallHeading>{featureHeading5}</SmallHeading>
                    <FeatureDescription>
                      {featureDescription5}
                    </FeatureDescription>
                  </Feature>
                  <Feature>
                    <SmallHeading>{featureHeading6}</SmallHeading>
                    <FeatureDescription>
                      {featureDescription6}
                    </FeatureDescription>
                  </Feature>
                </Features>
              </FeaturesWrapper>
            </ImgWrapper>
          </div>

          <CardWrapper>
            <InfoRow>
              <Card>
                <CardIcon>
                  <Img src={cardIcon1} />
                </CardIcon>
                <SmallHeading>{cardHeading1}</SmallHeading>
                <FeatureDescription>{cardDescription1}</FeatureDescription>
              </Card>
              <Card>
                <CardIcon>
                  <Img src={cardIcon2} />
                </CardIcon>
                <SmallHeading>{cardHeading2}</SmallHeading>
                <FeatureDescription>{cardDescription2}</FeatureDescription>
              </Card>
              <Card>
                <CardIcon>
                  <Img src={cardIcon3} />
                </CardIcon>
                <SmallHeading>{cardHeading3}</SmallHeading>
                <FeatureDescription>{cardDescription3}</FeatureDescription>
              </Card>
            </InfoRow>
          </CardWrapper>
        </Container>
      </StyledSection>
    </>
  );
};

export default ValueSection;
