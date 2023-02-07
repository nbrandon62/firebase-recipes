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
`;

const Jumbrotron = ({header}) => {
  return (
    <Wrapper>
      <Text>{header}</Text>
    </Wrapper>
  );
};

export default Jumbrotron;
