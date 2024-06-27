import styled from "styled-components";
import { Input } from "../Input";
import { Img } from "../Img";
import vectorimg from "../../imagens/Vector.png"
const Formularios = styled.form`
        
       
    
    `
const Select = styled.select`
      width:${props => props.largura || '100%'};
      height:${props => props.altura || '56px'};
      top:${props => props.topo || '388px'};
      left:${props => props.esquerda || '1136px'};
      background:rgba(255, 255, 255, 0.16);
      padding: 0 14px 0 14px;
      border-radius: 8px;
      color:rgba(255, 255, 255, 1);
      opacity: 64%;
      appearance: none;
      option {
        width:80px;
        height:24px;
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
      }
  `
const SelectContainer = styled.div`
      width:272px;
      max-width:272px;
      min-width:272px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height:${props => props.altura || '56px'};
      top:${props => props.topo || '388px'};
      left:${props => props.esquerda || '1136px'};
      position: fixed;
      border-radius: 8px;
  
  `

function Formulario() {

  return (
    <Formularios>
      <Input largura="244px"
        placeholder="Descrição do seu projeto"
        altura="80px"
        topo="234px"
        esquerda="1136px" />
      <Input largura="244px"
        placeholder="Nome do seu projeto"
        altura="54px"
        topo="162px"
        esquerda="1136px" />
      <SelectContainer>
        <Select>
          <option>JavaScript</option>
        </Select>
        <Img src={vectorimg} />
      </SelectContainer>
    </Formularios>

  )


}
export default Formulario;