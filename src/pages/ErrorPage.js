import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img404 from "../assets/confused-john-travolta.gif";
const ErrorPage = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <h1>404</h1>
        <img src={img404} alt="" />
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to="/" className="btn">
          back to home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
