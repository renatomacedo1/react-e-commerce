import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import { Link } from "react-router-dom";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Hello! This store is part of my portfolio, made to develop and show
            my React.js skills.
          </p>
          <p>
            <a
              href="https://renatomacedo1.github.io/"
              className="btn btn-about"
              target="_blank"
              rel="noopener noreferrer"
            >
              My portfolio
            </a>
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .about-btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
