import styled from "styled-components";

const Box = styled.div`
  position: relative;
  top: -28px;
  padding: 1rem 2rem;
  width: 100%;
  background: #f1f3f6;
  border-radius: 5px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25);
`;

export default function ServiceBox() {
  return (
    <Box>
      <p>This is our service box.</p>
    </Box>
  );
}
