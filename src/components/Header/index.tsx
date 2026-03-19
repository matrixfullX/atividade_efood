import logo from "../../../assets/images/logo.png"
import { Container, Info, Logo } from "./styles"

const Header = () => (
  <>
    <Container>
          <Logo src={logo} alt="logo da marca" />
          <Info>Viva experiências gastronômicas no conforto da sua casa</Info>
    </Container>
  </>
)

export default Header