import styled from "styled-components";

const Box = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  overflow: hidden;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 220px;
  margin: 0 0.5rem;
  @media screen and (max-width: 700px) {
    margin: 0.5rem 0;
  }
`;

export default function ImgBox() {
  return (
    <Box>
      <Image src="../1.jpg" alt="" />
      <Image src="../1.jpg" alt="" />
      <Image src="../1.jpg" alt="" />
    </Box>
  );
}
