import styled from 'styled-components';

const Display = styled.div`
    padding: 50px 80px;
    font-weight: 300;
    line-height: 30px;
    font-size: 16px;
    text-align: justify;
    border: 1px solid lightgray;
    background: ${props => props.bgColor};
    // width: ${props => props.width || '100px'};
    // height: ${props => props.height || '100px'};

`;

export default Display;

