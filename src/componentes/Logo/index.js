import styled from "styled-components";
import SvgLogo from "../../imagens/SvgLogo";

const LogoCantainer = styled.div`
   display: flex;
   align-items: center;
   svg {
    width: 145px;
    height:34.05px;
   }
  
`

function Logo() {

    return (
        <LogoCantainer>
            <SvgLogo/>
           
        </LogoCantainer>
    )

}
export default Logo;