import styled from "styled-components";

export const Input = styled.input`
    
      width:${props => props.largura || '128px'};
      height:${props => props.altura || '128px'};
      top:${props => props.topo || '128px'};
      left:${props => props.esquerda || '32px'};
      border-radius: 8px;
      position: fixed;
      border-style: none;
      background:rgba(255, 255, 255, 0.16);
      box-shadow : none;
      color:rgba(255, 255, 255, 1);
      font-size: 16px;
      font-weight:400;
      padding: 0 14px 0 14px;
      opacity: 64%;
      &::placeholder {
        width:189px;
        height:48px;
        color:rgba(255, 255, 255, 1);
        font-size: 16px;
        font-weight:400;
        opacity:64%;

        }

`