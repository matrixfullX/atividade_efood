import instagram from "../../assets/images/icons/instagram.png"
import facebook from "../../assets/images/icons/facebook.png"
import twitter from "../../assets/images/icons/twitter.png"
import logo from "../../assets/images/elements/logo.png"
import { Container, ContainerIcons, ContainerImage, Icon, Image, Paragraph } from "./styles"

const Footer = () => (
  <Container>
    <ContainerImage>
      <Image src={logo} alt="logo da marca" />
    </ContainerImage>
    <ContainerIcons>
      <Icon src={instagram} alt="icone instagram" />
      <Icon src={facebook} alt="icone instagram" />
      <Icon src={twitter} alt="icone instagram" />
    </ContainerIcons>
    <Paragraph>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </Paragraph>
  </Container>
)

export default Footer