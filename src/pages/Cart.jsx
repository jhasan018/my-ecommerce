import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div``
const Wrapper = styled.div`
padding: 20px;
`
const Title = styled.h1`
text-align: center;
font-weight: 300;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "aqua"};
    color: ${(props) => props.type === "filled" && "white"};
`
const TopTexts = styled.div``
const TopText = styled.span`
    text-decoration: underline;
    margin: 0px 10px;
    cursor: pointer;
`
const Bottom = styled.div`
display: flex;
justify-content: space-between;

`
const Info = styled.div`
flex: 3;
background-color: #ddeeeefb;
border-radius: 10px;
margin-right: 2px;
`

const Product = styled.div`
display: flex;
justify-content: space-between;
`
const ProductDetails = styled.div`
flex: 2;
display: flex;
`
const Image = styled.img`
width: 200px;
height: 200px;
border-radius: 50%;
margin: 5px 5px;
`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props) => props.color};
`
const ProductSize = styled.span``
const PriceDetails = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ProductAmountContainer= styled.div`
display: flex;
align-items: center;
`
const ProductAmount = styled.div`
font-size: 25px;
margin: 5px;
border: 2px solid aquamarine;
border-radius: 20%;
height: 20px;
width: 20px;
align-items: center;
display: flex;
justify-content: center;
padding: 2px;
`
const ProductPrice = styled.span``

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
margin: 5px 0px;
`
const HrSummary = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`
const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 10px;
height: 50vh;
background-color: #ddeeeefb;
`
const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
margin: 15px 0px;
display: flex;
justify-content: space-between;
font-size: ${(props) => props.type === "total" && "24px"};
font-weight: ${(props) => props.type === "total" && "500"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
margin: 5px 0px 2px 2px;
`

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>Your Items</Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <TopTexts>
                    <TopText>Selected Items (2)</TopText>
                    <TopText> Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">Checkout Now</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetails>
                            <Image src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1c27708e-eebc-4f42-b653-ff7e7c600c43/air-jordan-1-low-flyease-easy-on-off-shoes-28LT69.png"/>
                            <Details>
                                <ProductName><b>Product:</b> Air Jordan 1 Low FlyEase</ProductName>
                                <ProductId><b>ID:</b> 987456321</ProductId>
                                <ProductColor color="yellow"/>
                                <ProductSize><b>Size:</b> 38 </ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 130</ProductPrice>
                        </PriceDetails>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetails>
                            <Image src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/92183b67-3e8b-4f5e-b17a-068d8af9a306/air-jordan-dub-zero-shoes-hwwSx4.png"/>
                            <Details>
                                <ProductName><b>Product:</b> Air Jordan Dub Zero</ProductName>
                                <ProductId><b>ID:</b> 987456321</ProductId>
                                <ProductColor color="white"/>
                                <ProductSize><b>Size:</b> 38 </ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>1</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 170</ProductPrice>
                        </PriceDetails>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 430</SummaryItemPrice>
                    </SummaryItem>
                    <HrSummary/>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 60</SummaryItemPrice>
                    </SummaryItem>
                    <HrSummary/>
                    <SummaryItem>
                        <SummaryItemText>Discount</SummaryItemText>
                        <SummaryItemPrice>$ 215</SummaryItemPrice>
                    </SummaryItem>
                    <HrSummary/>
                    <SummaryItem type = "total">
                        <SummaryItemText> Total</SummaryItemText>
                        <SummaryItemPrice>$ 275</SummaryItemPrice>
                    </SummaryItem>
                    <HrSummary/>
                    <Button>Check Out</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart