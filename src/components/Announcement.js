import styled from "styled-components"

const Container = styled.div`
height: 25px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>Get 50% off in every products</Container>
  )
}

export default Announcement