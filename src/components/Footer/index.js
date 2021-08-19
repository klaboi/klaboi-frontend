import React from 'react';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { FooterContainer, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterLink, FooterWrap, SocialMediaWrap, SocialMedia, SocialLogo, SocialIcons, SocialIconLink, WebsiteRights } from './FooterElements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/Login'>How it Works</FooterLink>
                            <FooterLink to='/Login'>Testimonials</FooterLink>
                            <FooterLink to='/Login'>Our Vision</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/Login'>How it Works</FooterLink>
                            <FooterLink to='/Login'>Testimonials</FooterLink>
                            <FooterLink to='/Login'>How it Works</FooterLink>
                            <FooterLink to='/Login'>Testimonials</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Connect with us</FooterLinkTitle>
                            <FooterLink to='/'>LinkedIn</FooterLink>
                            <FooterLink to='/'>connect@klaboi.com</FooterLink>
                            <FooterLink to='/'>How it Works</FooterLink>
                            <FooterLink to='/'>Testimonials</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Klaboi
                        </SocialLogo>
                        <WebsiteRights>Klaboi © {new Date().getFullYear()} 
                        All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"
                            area-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            area-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            area-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
