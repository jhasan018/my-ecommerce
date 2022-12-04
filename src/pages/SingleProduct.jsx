import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

const Container = styled.div``
const Wrapper = styled.div`
padding: 50px;
display: flex;
`
const ImageContainer = styled.div`
flex: 1;
`
const Image= styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`
const Title = styled.h1`
font-weight: 200;
`
const Desc = styled.p`
margin: 20px 0px;
`
const Price = styled.span`
font-size: 40px;
font-weight: 100;
`
const FilterContainer = styled.div`
display: flex;
width: 50%;
margin: 30px 0px;
justify-content: space-between;
`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50px;
background-color: ${(props) => props.color};
margin: 0px 5px;
cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
display: flex;
width: 50%;
margin: 30px 0px;
align-items: center;
justify-content: space-between;
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Amount = styled.span`
display: flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid aqua;
margin: 0px 5px;
`
const Button = styled.button`
padding: 15px;
border: 2px solid aqua;
background-color: white;
cursor: pointer;
font-weight: 500;
transition: all 0.5s ease;

&:hover{
    background-color: aquamarine;
}
`

const SingleProduct = () => {
  return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImageContainer>
                    <Image src="https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Winter Jacket</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam et, reprehenderit perspiciatis natus eos culpa. Placeat quam amet mollitia soluta!</Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="darkblue" />
                        <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                                <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default SingleProduct