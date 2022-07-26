import styled from 'styled-components';

const Navigation = styled.div`
    display: inline-block;
    vertical-align:top;
    border: 1px solid lightgray;
    background: ${props => props.bgColor};
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
    margin:${props => props.margin || '10px'};
    padding:${props => props.margin || '10px'};

`;

export default Navigation;