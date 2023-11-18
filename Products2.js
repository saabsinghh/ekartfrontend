import styled from "styled-components";
import { popularProducts2, popularProducts3 } from "../data";
//import Product from "./Product";
import Product2 from "./Product2";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products2 = () => {
  return (
    <Container>
      {popularProducts2.map((item) => (
        <Product2 item={item} key={item.id} />
        
      ))}
      
    </Container>
  );
};

export default Products2;


