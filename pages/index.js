import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import styled from "styled-components";
import ServiceBox from "../components/ServiceBox";
import ImgBox from "../components/ImgBox";

const Banner = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../1.jpg);
  background-size: cover;
`;

const Container = styled.div`
  position: relative;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 700px) {
    padding: 0 1rem;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 0;
  font-size: 2rem;
  @media screen and (max-width: 700px) {
    font-size: 1.3rem;
  }
`;

const SubTitle = styled.p`
  font-weight: 300;
  margin-top: 0.4rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
    text-align: center;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Kabira | Home</title>
      </Head>
      <Header />
      <Banner />
      <Container>
        <ServiceBox />
        <Title>Our Furniture Works</Title>
        <SubTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </SubTitle>
        <ImgBox />
        <Title>Our Interior Works</Title>
        <SubTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </SubTitle>
      </Container>
    </>
  );
}
