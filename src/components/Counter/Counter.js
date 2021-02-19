import React, { useState } from "react";
import { Button, Container } from "../../GlobslStyles";
import { Paragraph, StyledCounter } from "./StyledCounter";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <Container>
        <StyledCounter>
          <Paragraph>{count}</Paragraph>
          <Button primary onClick={increment}>
            Increase ++
          </Button>
          <Button primary onClick={decrement}>Decrease --</Button>
        </StyledCounter>
      </Container>
    </>
  );
};

export default Counter;
