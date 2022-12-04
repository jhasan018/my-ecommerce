import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { sliderItems } from "../data"
import { useState } from "react";


const Container = styled.div`
height: 80vh;
width: 100%;
display: flex;
position: relative;
overflow: hidden;
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #faf4f4;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
position: absolute;
top:0;
bottom: 0;
margin: auto;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
cursor: pointer;
opacity: 0.8;
z-index: 2;
transition: all 0.5s ease;
&:hover{
    background-color: aqua;
}
`

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 0.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color: #${props=> props.bg};
`
const ImgContainer = styled.div`
flex: 1;
height: 100%;
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`
const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`
const Title = styled.h1`
font-size: 70px;
`
const Desc = styled.p`
margin: 50px 0;
font-size: 20px;
letter-spacing: 3px;
font-weight: 500;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
transition: all 0.5s ease;
&:hover{
    background-color: aqua;
}
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>{
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
          } else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
          }
    };
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
            {sliderItems.map((item) => (
            <Slide bg = {item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc> {item.desc} </Desc>
                    <Button>Shop Now</Button>
                </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider