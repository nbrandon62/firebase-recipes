import React from "react";
import styled from "styled-components";
import { Image, Grid } from "semantic-ui-react";

import "../css/imageandinfo.css";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  padding: 6rem;
  height: 100%;
  display: flex;
  background-color: #fffcf2;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-family: "Secular One", sans-serif;
`;
const Description = styled.p`
  margin: 1rem;
  font-size: 1.56rem;
  letter-spacing: 1px;
  font-family: "Dosis", sans-serif;
  font-weight: 200;
`;

const ImageAndInfoReverse = ({ image, title, description }) => {
  return (
    <Wrapper>
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column className="headerColumn">
          <Image fluid src={image} alt="" />
        </Grid.Column>
        <Grid.Column>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Link to="/recipes">
            <button className="ui button">Browse Recipes</button>
          </Link>
        </Grid.Column>
      </Grid>
    </Wrapper>
  );
};

export default ImageAndInfoReverse;
