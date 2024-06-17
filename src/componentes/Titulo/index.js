import styled from "styled-components";

export const Titulo = styled.h2`
    width:51px;
    position: fixed;
    top:${props => props.topo || '128px'};
    height:${props => props.altura || '18px'};
    left:${props => props.esquerda || '32px'};
    color:rgba(255, 255, 255, 1);
    font-size: 12px;
    font-weight:400;
    letter-spacing:5px;
`