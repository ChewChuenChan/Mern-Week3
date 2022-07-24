import styled , { css }from 'styled-components';

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0.5em 1em;
padding: 0.25em 1em;

${props => props.select && css`
background: palevioletred;
color: white;
`}
`;

export default Button;