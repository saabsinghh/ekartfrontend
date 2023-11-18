import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "./responsive";
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
    width: 90%;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
//   const Center = styled.div`
//     flex: 1;
//     padding: 20px;
//     ${mobile({ display: "none" })}
//   `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
//   const List = styled.ul`
//     margin: 0;
//     padding: 0;
//     list-style: none;
//     display: flex;
//     flex-wrap: wrap;
//   `;
  
//   const ListItem = styled.li`
//     width: 50%;
//     margin-bottom: 10px;
//   `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
//   const Payment = styled.img`
//       width: 50%;
//   `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>E-Store.</Logo>
          <Desc>
            WE HOPE U LIKED OUR RANGE OF PRODUCTS .QUALITY IS TOP NOTCH AND PRICES ARE UNBELIEVEABLE.SO SHOP AND GO!!
          </Desc>
          <div style={{paddingBottom:20}}>Follow us on:</div>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> 622 Tilak Nagar , New Delhi,Delhi 110018
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +123456789
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> contact@E-Store
          </ContactItem>
         
        </Right>
        <div style={{marginRight:150,marginTop:30}}>
            <img src="https://tse2.mm.bing.net/th?id=OIP.kkyYpY9BP15WVXnEjOu6LQHaF3&pid=Api&P=0&h=180" alt="logo"/>
        </div>
      </Container>
    );
  };
  
  export default Footer;