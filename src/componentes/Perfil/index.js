import styled from "styled-components";
import ImgPerfil from "../../imagens/Perfil.png"


const PerfilCantainer = styled.div`
    display: flex;
    align-items: center;
    img {
      width:32px;
      height:32px;
      border-radius:100%;
      margin: 5px;

    }
    h1 {
        font-size: 16px;
        font-weight:400;
        color:rgba(255, 255, 255, 1);


    }

    `
function Perfil() {
    return(
        <PerfilCantainer>
            <img src={ImgPerfil}/>
            <h1>Harry</h1>

        </PerfilCantainer>
    )
    
}
export default  Perfil;