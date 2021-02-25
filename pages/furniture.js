import styled from "styled-components";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export default function Furniture() {
  return (
    <>
      <Container>
        <h1>This is Furniture Page.</h1>
      </Container>
    </>
  );
}
