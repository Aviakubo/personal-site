import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
max-width: ${props => props.width || '1400px'};
margin: 0 auto;
padding: 0 30px;
`