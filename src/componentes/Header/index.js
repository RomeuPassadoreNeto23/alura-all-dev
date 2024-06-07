import styled from "styled-components";
import Logo from "../Logo";
import Prefill from "../Perfil";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
    width:1376px;
    height:56px;
    position: fixed;
    top: 0;
    input {
      width:752px;
      height:56px;
      border-radius: 8px;
      border-style: none;
      background:rgba(255, 255, 255, 0.16);
      box-shadow : none;
      color:rgba(255, 255, 255, 1);
      font-size: 16px;
      font-weight:400;
      opacity: 64%;
      &::placeholder {
        color:rgba(255, 255, 255, 1);
        font-size: 16px;
        font-weight:400;
        opacity: 64%;

        }

    }
   

`

function Header() {

    return (
        <HeaderContainer>
            <Logo />
            <input placeholder="Busque por algo"  />
            <Prefill />
        </HeaderContainer>
    )

}
export default Header;