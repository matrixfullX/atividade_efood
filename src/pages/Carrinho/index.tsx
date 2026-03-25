import iconLixo from "../../../assets/images/icons/iconLixeira.png"
import sabor1 from "../../../assets/images/presentation/sabor1.png"
import { ButtonClose, Overlay } from "../Modal/styles"
import { Container, Image, Infos, Item, Items, Lixeira, Value, Title, Values, ButtonCarrinho } from "./styles"

type Props = {
  onClose: () => void
}

const Carrinho = ({onClose} : Props) => (
  <Overlay>
    <Container>
      <ButtonClose onClick={onClose} primary={false}>Fechar</ButtonClose>
      <Item>
        <Image src={sabor1} />
        <Infos>
          <Title>Pizza Marguerita</Title>
          <Value primary>R$ 60,90</Value>
        </Infos>
        <Lixeira src={iconLixo} />
      </Item>
      <Items>
        <Image src={sabor1} />
        <Infos>
          <Title>Pizza Marguerita</Title>
          <Value primary>R$ 60,90</Value>
        </Infos>
        <Lixeira src={iconLixo} />
      </Items>
      <Items>
        <Image src={sabor1} />
        <Infos>
          <Title>Pizza Marguerita</Title>
          <Value primary>R$ 60,90</Value>
        </Infos>
        <Lixeira src={iconLixo} />
      </Items>
      <Values>
        <Value primary={false}>Valor Total</Value>
        <Value primary={false}>R$ 182,70</Value>
      </Values>
      <ButtonCarrinho>Continuar para a Entrega</ButtonCarrinho>
    </Container>
  </Overlay>
)

export default Carrinho