import Pages from "./pages/Pages";
import Cathegory from "./components/Cathegory";
import { BrowserRouter } from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>delicious</Logo>
      </Nav>
        <Search />
        <Cathegory />
        <Pages />
      </BrowserRouter >
    </div >
  );
}
const Logo = styled(Link)`
 text-decoration: none;
 font-size: 1.5rem;
 font-weight: 400;
 font-familt: 'lobster Two', cursive;
`
const Nav = styled.div`
 padding: 4rem 0rem:
 display: flex;
 justify-content: flex-strat;
 align-items: center;
 svg{
   font-size: 2rem;
 }
`

export default App;
