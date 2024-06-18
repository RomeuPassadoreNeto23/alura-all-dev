import styled from "styled-components";
import Menu from "../componentes/Menu";
import Formulario from "../componentes/Formulario";


const ComunidadeContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background: rgba(5, 29, 59, 1);
`
function Comunidade() {

    return (

        <ComunidadeContainer>
            <Menu />
            <Formulario />
            

        </ComunidadeContainer>
    )

}
export default Comunidade;