import styled from "styled-components";
import Menu from "../componentes/Menu";
import Formulario from "../componentes/Formulario";


const EditorContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background: rgba(5, 29, 59, 1);
      
`
function Editor() {

    return (
        <EditorContainer>
            <Menu/>
            

        </EditorContainer>
    )

}
export default Editor;