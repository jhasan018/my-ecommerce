import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Info = styled.div`
opacity:0;
width: 100%;
height: 100%;
top: 0;
left: 0;
position: absolute;
justify-content: center;
align-items: center;
z-index: 3;
display: flex;
background-color: rgba(0,0,0,0.2);
transition: all 0.5s ease;
cursor: pointer;
`

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
justify-content: center;
align-items: center;
background-color: #f5fbfd;
position: relative;

&:hover ${Info}{
opacity : 1;
}

`
const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
position: absolute;
background-color: white;
`
const Image = styled.img`
height: 75%;
z-index: 2;
`

const Icon = styled.div`
height: 40px;
width: 40px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
margin: 7px;
cursor: pointer;
transition: background 0.5s ease;
transition: transform 0.5s ease;
&:hover{
    background-color: aqua;
    transform: scale(1.1);
}
`

const Product = ({item}) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product