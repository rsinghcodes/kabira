import styled from "styled-components";
import Link from "next/link";

const AppBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f1f2f6;
  padding: 0 2rem;
  z-index: 1;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 700px) {
    padding: 0 1rem;
  }
`;

const NavBar = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const NavItems = styled.li`
  margin-right: 2rem;
`;

const Logo = styled.h2`
  @media screen and (max-width: 700px) {
    font-size: 1rem;
  }
`;

export default function Header() {
  return (
    <AppBar>
      <Logo>Kabira</Logo>
      <NavBar>
        <NavItems>
          <Link href="/">
            <a>Home</a>
          </Link>
        </NavItems>
        <NavItems>
          <Link href="/services">
            <a>Our Services</a>
          </Link>
        </NavItems>
        <NavItems>
          <Link href="/furniture">
            <a>About</a>
          </Link>
        </NavItems>
        <li>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
      </NavBar>
    </AppBar>
  );
}
