import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #383ED1;
  width: 100%;
  padding: 7rem;
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  font-size: 5rem;
  color: white;
  @media (max-width: 984px ){
    font-size:3rem;
  }
  @media (max-width: 665px ){
    font-size:2rem;
  }
`;

const Jumbrotron = ({header}) => {
  return (
    <Wrapper>
      <Text>{header}</Text>
    </Wrapper>
  );
};

export default Jumbrotron;
