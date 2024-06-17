import styled from "styled-components";

const FormularioContainer = styled.div`
    width:272px;
    height:600px;
    top: 128px;
    left: 1136px;

    form {

    }
`
const TituloFormulario = styled.h2`
       width:130px;
       height:18px;
       font-family: Inter;
       font-size: 12px;
       font-weight: 400;
       line-height: 18px;
       letter-spacing: 0.4em;
       color:rgba(255, 255, 255, 1);
       
      



`
function Formulario() {

    return (
        <FormularioContainer>
            <TituloFormulario>SEUPROJETO</TituloFormulario>
            <form>

            </form>

        </FormularioContainer>
    )


}
export default Formulario;