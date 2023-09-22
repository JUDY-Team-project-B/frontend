import styled from 'styled-components';
import './Footer.scss';


export const Footer = () => {

  return (
    <FooterLayout>
        Copyright Hangout Inc.All Rights Resvered
    </FooterLayout>
  );
};

export default Footer;

const FooterLayout = styled.div`
  width: 100%;
  height: 100px;
  font-family: NanumSquareNeo-Variable;
  font-size: small;
  margin-left: 10%;
  padding-top: 50px;
`
