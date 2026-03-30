import fundo from "../../assets/images/elements/fundo.png"
import logo from "../../assets/images/elements/logo.png"
import { Container, Fundo, Info, Logo } from "./styles"

const Header = () => (
  <>
    <Container>
      <Fundo src={fundo} alt="fundo do cabecalho" />
          <Logo src={logo} alt="logo da marca" />
          <Info>Viva experiências gastronômicas no conforto da sua casa</Info>
    </Container>
  </>
)

export default Header