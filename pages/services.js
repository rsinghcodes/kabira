import styled from "styled-components";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export default function Services() {
  return (
    <>
      <Container>
        <h1>This is service Page.</h1>
      </Container>
    </>
  );
}
