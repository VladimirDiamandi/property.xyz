import React from "react";
import Link from "next/link";

import FacebookSVG from "./FacebookSVG";
import LinkedInSVG from "./LinkedInSVG";
import YouTubeSVG from "./YouTubeSVG";
import MobileLogoSVG from "./MobileLogoSVG";
import TwitterSVG from "./TwitterSVG";
import FacebookMobileSVG from "./FacebookMobileSVG";
import YouTubeMobileSVG from "./YouTubeMobileSVG";

import {
  FooterBottom,
  FooterTop,
  SocialMediaGroup,
  StyledFooter,
  StyledMobileFooter,
} from "../../styles/Footer.styles";
import { LargeContainer, Background } from "../../styles/Global.styles";


interface ISocialMediaLink {
  id: string,
  path: string,
  icon: JSX.Element
}
interface IsocialMediaLinksParams {
  mobile: Array<ISocialMediaLink>
  desktop: Array<ISocialMediaLink>
}


interface ICommonLinkParams {
  id: string,
  path: string,
  label: string,
  showMobile: boolean,
  showDesktop: boolean

}

interface ICommonsLinskParams {
  aboutLinks: Array<ICommonLinkParams>
  policyLinks: Array<ICommonLinkParams>
}

const socialMediaLinks: IsocialMediaLinksParams = {
  mobile: [
    {
      id: "1",
      path: "/",
      icon: <TwitterSVG />,
    },
    {
      id: "2",
      path: "/",
      icon: <FacebookMobileSVG />,
    },
    {
      id: "3",
      path: "/",
      icon: <YouTubeMobileSVG />,
    },
  ],
  desktop: [
    {
      id: "1",
      path: "/",
      icon: <FacebookSVG />,
    },
    {
      id: "2",
      path: "/",
      icon: <LinkedInSVG />,
    },
    {
      id: "3",
      path: "/",
      icon: <YouTubeSVG />,
    },
  ],
};


const commonLinks: ICommonsLinskParams = {
  aboutLinks: [
    {
      id: "1",
      path: "/",
      label: "Property investors sign up",
      showMobile: false,
      showDesktop: true,
    },
    {
      id: "2",
      path: "/",
      label: "Sell your property",
      showMobile: false,
      showDesktop: true,
    },
    {
      id: "3",
      path: "/",
      label: "About",
      showMobile: true,
      showDesktop: true,
    },
    {
      id: "4",
      path: "/",
      label: "Contact us",
      showMobile: true,
      showDesktop: true,
    },
    {
      id: "5",
      path: "/",
      label: "Feedback",
      showMobile: true,
      showDesktop: true,
    },
  ],
  policyLinks: [
    {
      id: "1",
      path: "/",
      label: "Sitemap",
      showMobile: true,
      showDesktop: true,
    },
    {
      id: "2",
      path: "/",
      label: "Privacy policy",
      showMobile: true,
      showDesktop: true,
    },
    {
      id: "3",
      path: "/",
      label: "Terms of use",
      showMobile: false,
      showDesktop: true,
    },
    {
      id: "4",
      path: "/",
      label: "Terms of use & Copyright Policies",
      showMobile: true,
      showDesktop: false,
    },
    {
      id: "5",
      path: "/",
      label: "Cookie policy",
      showMobile: true,
      showDesktop: true,
    },
    {
      id: "6",
      path: "/",
      label: "Data source",
      showMobile: false,
      showDesktop: true,
    },
  ],
};


const Footer: React.FC = () => {
  return (
    <>
      <StyledMobileFooter>
        <Background color="#363d52">
          <LargeContainer>
            <FooterTop>
              <MobileLogoSVG />
              <div>© 2020 Property.XYZ</div>
              <nav>
                {commonLinks.aboutLinks.map(
                  ({ id, path, label, showMobile }) =>
                    showMobile && (
                      <li key={id}>
                        <Link href={path}>{label}</Link>
                      </li>
                    )
                )}
              </nav>
              <SocialMediaGroup>
                {socialMediaLinks.mobile.map(({ id, path, icon }) => (
                  <Link key={id} href={path}>
                    <a>{icon}</a>
                  </Link>
                ))}
              </SocialMediaGroup>
            </FooterTop>
          </LargeContainer>
        </Background>
        <Background color="#2c3142">
          <LargeContainer>
            <FooterBottom>
              <nav>
                {commonLinks.policyLinks.map(
                  ({ id, path, label, showMobile }) =>
                    showMobile && (
                      <li key={id}>
                        <Link href={path}>{label}</Link>
                      </li>
                    )
                )}
              </nav>
            </FooterBottom>
          </LargeContainer>
        </Background>
      </StyledMobileFooter>
      <StyledFooter>
        <Background color="#363d52">
          <LargeContainer>
            <FooterTop>
              <span>property xyz</span>
              <nav>
                {commonLinks.aboutLinks.map(
                  ({ id, path, label, showDesktop }) =>
                    showDesktop && (
                      <li key={id}>
                        <Link href={path}>{label}</Link>
                      </li>
                    )
                )}
              </nav>
            </FooterTop>
          </LargeContainer>
        </Background>
        <Background color="#2c3142">
          <LargeContainer>
            <FooterBottom>
              <nav>
                {commonLinks.policyLinks.map(
                  ({ id, path, label, showDesktop }) =>
                    showDesktop && (
                      <li key={id}>
                        <Link href={path}>{label}</Link>
                      </li>
                    )
                )}
              </nav>
              <SocialMediaGroup>
                <span>Follow us on social media</span>
                {socialMediaLinks.desktop.map(({ id, path, icon }) => (
                  <Link key={id} href={path}>
                    <a>{icon}</a>
                  </Link>
                ))}
              </SocialMediaGroup>
            </FooterBottom>
          </LargeContainer>
        </Background>
      </StyledFooter>
    </>
  );
};

export default Footer;
