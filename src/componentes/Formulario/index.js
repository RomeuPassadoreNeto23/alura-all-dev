import styled from "styled-components";
import { Input } from "../Input";
  const Formularios = styled.form``

function Formulario() {

    return (
        <Formularios>
            <Input largura="244px" 
                   placeholder="Descrição do seu projeto"
                   altura="80px"
                   topo="234px"
                   esquerda="1136px" />

        </Formularios>
       
    )


}
export default Formulario;