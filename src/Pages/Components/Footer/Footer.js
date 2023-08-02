import React, { useState } from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 30px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    text-align: left;
  }
`;

const LogoSection = styled.div`
  @media (min-width: 768px) {
    grid-column: span 1;
  }
`;

const Logo = styled.img`
  width: 80px;
`;

const Description = styled.p`
  margin-top: 10px;
`;

const LinksSection = styled.div`
  @media (min-width: 768px) {
    grid-column: span 2;
  }
`;

const LinksTitle = styled.h3`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 8px;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const SubscribeWrapper = styled.div`
  @media (min-width: 768px) {
    grid-column: span 3;
    display: flex;
    justify-content: center;
  }
`;

const SubscribeInput = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #333;
  background-color: #fff;
`;

const SubscribeButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #f95d9b;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e24c89;
  }
`;

const FooterBox = styled.div`
  background-color: #444;
  padding: 20px;
  text-align: center;
`;

const CopyRightText = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #fff;
`;

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Handle the subscription logic here
    console.log(`Subscribed with email: ${email}`);
    setEmail("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <FooterWrapper>
      <FooterContent>
        <LogoSection>
          <Logo src="/path/to/logo.png" alt="Your Brand" />
          <Description>
            Your Brand's tagline or description goes here.
          </Description>
        </LogoSection>
        <LinksSection>
          <LinksTitle>Quick Links</LinksTitle>
          <LinksList>
            <LinkItem>
              <Link href="#">Home</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">About</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Services</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Contact</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Blog</Link>
            </LinkItem>
            {/* Adding demo links to showcase the column layout */}
            <LinkItem>
              <Link href="#">Link 1</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Link 2</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Link 3</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Link 4</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Link 5</Link>
            </LinkItem>
          </LinksList>
        </LinksSection>
        <SubscribeWrapper>
          <SubscribeInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <SubscribeButton onClick={handleSubscribe}>Subscribe</SubscribeButton>
        </SubscribeWrapper>
      </FooterContent>
      <FooterBox>
        {/* Adding some content below the subscribe section */}
        <p>Follow us on social media</p>
        <div>
          <Link href="#">Facebook</Link>
          <Link href="#">Twitter</Link>
          <Link href="#">Instagram</Link>
        </div>
      </FooterBox>
      <CopyRightText>
        &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
      </CopyRightText>
    </FooterWrapper>
  );
};

export default Footer;
