import styled from "styled-components";
import { popularProducts3 } from "../data";
//import Product from "./Product";
import Product3 from "./Product3";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products3 = () => {
  return (
    <Container>
      {popularProducts3.map((item) => (
        <Product3 item={item} key={item.id} />
        
      ))}
      
    </Container>
  );
};

export default Products3;


