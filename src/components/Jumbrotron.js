import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: blue;
  width: 100%;
  padding: 7rem;
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  font-size: 6rem;
  color: white;
`;

const Jumbrotron = () => {
  return (
    <Wrapper>
      <Text>Browse</Text>
    </Wrapper>
  );
};

export default Jumbrotron;
