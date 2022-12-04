import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
display: flex;
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1``
const LogoColor = styled.span`
color: #00ffff;
`
const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcons = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`

const Center = styled.div`
flex: 1;
padding: 20px;
`
const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItems = styled.li`
width: 50%;
margin-bottom: 10px;
`
const Right = styled.div`
flex: 1;
padding:20px;
`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment = styled.img`
width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo><LogoColor>J</LogoColor>
            HASAN.</Logo>
            <Desc> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempora in illum repudiandae atque velit ratione, sequi dolore minima quaerat!</Desc>
            <SocialContainer>
                <SocialIcons color="3B5999" >
                    <Facebook  />
                </SocialIcons>
                <SocialIcons color="E4405F">
                    <Instagram />
                </SocialIcons>
                <SocialIcons color="55ACEE">
                    <Twitter />
                </SocialIcons>
                <SocialIcons color="E60023">
                    <Pinterest />
                </SocialIcons>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItems>Home</ListItems>
                <ListItems>Cart</ListItems>
                <ListItems>Man Fashion</ListItems>
                <ListItems>Woman Fashion</ListItems>
                <ListItems>My Account</ListItems>
                <ListItems>Wishlist</ListItems>
                <ListItems>Order Tracking</ListItems>
                <ListItems>Terms</ListItems>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> <Room style = {{marginRight:"10px"}} /> 323/324 Mirpur-12 Dhaka-1216</ContactItem>
            <ContactItem> <Phone style = {{marginRight:"10px"}}/> +880 123 2244 6688</ContactItem>
            <ContactItem> <MailOutline style = {{marginRight:"10px"}}/> contact@email.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer