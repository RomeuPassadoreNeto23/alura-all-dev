import styled from "styled-components";
import ImgCumunidade from "../../imagens/ComunidadeIcon.png"
import ImgEditor from "../../imagens/EditorIcon.png"
import { Titulo } from "../Titulo";
import { Link } from "../Link";

const MenuCantainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width:189px;
    height:146px;
    left:32px;
    position:absolute;
    top:128px;
   
   img {
    width:48px;
    margin:5px;
    height:48px;

   }
    
   

`

function Menu() {
    return (
        <MenuCantainer>

            <Titulo>MENU</Titulo>


            <Link><img src={ImgEditor} />Editor de código</Link>


            <Link topo="226px"><img src={ImgCumunidade} />Comunidade</Link>


        </MenuCantainer>
    )

}
export default Menu;