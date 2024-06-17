import styled from "styled-components";

export const  Link = styled.a`
     
            display: flex;
            position:fixed;
            min-width: 189px;
            top:${props => props.topo || '162px'};
            height:${props => props.altura || '48px'};
            left:${props => props.esquerda || '32px'};
            align-items: center;
            justify-content: flex-start;
            color:rgba(255, 255, 255, 1);
            font-size: 16px;
            opacity: 56%;
            font-weight:400;
            &:hover {
                color: white;
                opacity: 90%;
                
            }
            &:visited {
            color:  white;
            }
            
    `