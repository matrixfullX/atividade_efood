import { useState } from "react"
import iconLixo from "../../../assets/images/icons/iconLixeira.png"
import sabor1 from "../../../assets/images/presentation/sabor1carrinho.png"
import Delivery from "../Delivery"
import { ButtonClose, Overlay } from "../../Order/Modal/styles"
import { Container, Image, Infos, Item, Items, Lixeira, Value, Title, Values, ButtonContinue } from "./styles"

export type PropsCar = {
  onClose: () => void
}

const Carrinho = ({onClose} : PropsCar) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Overlay>
        <Container>
          <ButtonClose onClick={onClose} $primary={false}>Fechar</ButtonClose>
          <Item>
            <Image src={sabor1} />
            <Infos>
              <Title>Pizza Marguerita</Title>
              <Value $primary>R$ 60,90</Value>
            </Infos>
            <Lixeira src={iconLixo} />
          </Item>
          <Items>
            <Image src={sabor1} />
            <Infos>
              <Title>Pizza Marguerita</Title>
              <Value $primary>R$ 60,90</Value>
            </Infos>
            <Lixeira src={iconLixo} />
          </Items>
          <Items>
            <Image src={sabor1} />
            <Infos>
              <Title>Pizza Marguerita</Title>
              <Value $primary>R$ 60,90</Value>
            </Infos>
            <Lixeira src={iconLixo} />
          </Items>
          <Values>
            <Value $primary={false}>Valor Total</Value>
            <Value $primary={false}>R$ 182,70</Value>
          </Values>
          <ButtonContinue onClick={() => setIsOpen(true)}>Continuar para a Entrega</ButtonContinue>
        </Container>
        {isOpen ? <Delivery onClose={() => setIsOpen(false)} /> : undefined}
      </Overlay>
    </>
  )
}

export default Carrinho