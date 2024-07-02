import styled from "styled-components";

 export const Img = styled.img`
      width:${props => props.largura || '9px'};
      height:${props => props.altura || '4.5px'};
      position: relative;
      right: 20px;
`