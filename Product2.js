// import {
   
//     ShoppingCartOutlined,
//   } from "@material-ui/icons";
import styled from "styled-components";
  
//   const Info = styled.div`
//   position: absolute;
  
  
//   display: flex;
//   flex-direction: row;
  
//   `;


  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    //  align-items: center;
    //   justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    
    
  `;
  
  const Title = styled.p`
  color: black;
  margin: 3px;
`;


const Space = styled.div`
   display:flex;
   flex-direction:column;
//    align-items: center;
//    justify-content: center;
   padding:0 0 0 80px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: BROWN;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    width:90px;
    margin-left:20px;
`;

//   const Circle = styled.div`
//     width: 200px;
//     height: 200px;
//     border-radius: 50%;
//     background-color: white;
//     position: absolute;
//   `;
  
  const Image = styled.img`
    height: 50%;
    z-index: 1;
    
  `;

  const Free = styled.p`
color: black;
margin: 0px;
color: violet;
`;
  
//   const Icon = styled.div`
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     background-color: white;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 10px;
//     transition: all 0.5s ease;
//     &:hover {
//       background-color: #e9f5f5;
//       transform: scale(1.1);
//     }
 // `;

 const Product2 = ({ item }) => {
    return (
        
      <Container>
        
        <Space>
                <Image src={item.img} />
                <Title>Name:{item.name}</Title>
                <Title>price:{item.price}Rs</Title>
                <Title>color:{item.color}</Title>
                <Title>size:{item.size}</Title>
                <Free>FREE DELIVERY!!</Free>
                <Button>add to cart</Button>
        </Space> 
      </Container>
      
    );
  };
  
  export default Product2;