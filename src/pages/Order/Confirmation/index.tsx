import { Container } from "../Carrinho/styles"
import { ButtonBack } from "../Delivery/styles"
import { Overlay } from "../../Order/Modal/styles"
import { Paragraph, TitleConfirmation } from "./styles"

const Confirmation = () => (
  <Overlay>
    <Container>
      <TitleConfirmation>Pedido Realizado - {`ORDER_ID`}</TitleConfirmation>
      <Paragraph>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</Paragraph>
      <Paragraph>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. </Paragraph>
      <Paragraph>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</Paragraph>
      <Paragraph>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</Paragraph>
      <ButtonBack href="/flavors">Concluir</ButtonBack>
    </Container>
  </Overlay>
)

export default Confirmation