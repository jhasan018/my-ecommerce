import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 60px;
`

const Wrapper = styled.div`
margin: 10px 20px;
display: flex;
justify-content: space-between;
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 20px;
padding: 5px;
`
const Input = styled.input`
border: none;
`
const Center = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.h1`
font-weight: bold;
`
const LogoColor = styled.span`
color: #00ffff;
`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`
const MenuItem = styled.div`
margin-left: 25px;
font-size: 18px;
cursor: pointer;
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color: "gray", fontSize: "16px"}} />
                </SearchContainer>
            </Left>
            <Center>
                <Logo><LogoColor>J</LogoColor>
                    HASAN.</Logo>
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem>
                    <Badge color="secondary" badgeContent={100}>
                    <ShoppingCartOutlined /> </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar