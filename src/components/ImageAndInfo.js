import React from 'react';
import styled from 'styled-components';
import { Image, Grid} from 'semantic-ui-react';

import '../css/imageandinfo.css';

const Wrapper = styled.div`
  padding: 6rem;
  height: 100%;
  display: flex;
  background-color: #FFFCF2;

  `;

const Title = styled.h1`
  font-size: 1.25rem;
  font-family: 'Secular One', sans-serif;
`;
const Description = styled.p`
  font-size: 1rem;
  letter-spacing: 1px;
  font-family: 'Dosis', sans-serif;
  font-weight: 200;
`;

const ImageAndInfo = ({ image, title, description }) => {
  return (
    <Wrapper>
      <Grid columns={2} relaxed='very' stackable>
        <Grid.Column className='headerColumn'>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Grid.Column>
        <Grid.Column>

        </Grid.Column>
      </Grid>
    </Wrapper>
  );
};

export default ImageAndInfo;
