import { ButtonContinue, Container } from "../Carrinho/styles"
import { Overlay } from "../../Order/Modal/styles"
import type { PropsCar } from "../Carrinho"
import { ButtonBack, ContainerFields, Field, Fields, Infos, Label, LabelInfos, Title } from "./styles"
import { useState } from "react"
import Payment from "../Payment"

const Delivery = ({onClose}: PropsCar) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Overlay>
      <Container>
        <Title>Entrega</Title>
        <Label>Quem irá Receber</Label>
        <Field type="text" />
        <Label>Endereço</Label>
        <Field type="text" />
        <Label>Cidade</Label>
        <Field type="text" />
        <ContainerFields>
          <Infos>
            <LabelInfos>CEP</LabelInfos>
            <Fields type="number" />
          </Infos>
          <Infos>
            <LabelInfos>Número</LabelInfos>
            <Fields type="number" />
          </Infos>
        </ContainerFields>
        <Label>Complemento (opcional)</Label>
        <Field type="text" />
        <ButtonContinue onClick={() => setIsOpen(true)}>Continuar com o Pagamento</ButtonContinue>
        <ButtonBack onClick={onClose}>Voltar para o Carrinho</ButtonBack>
      </Container>
      {isOpen ? <Payment onClose={() => setIsOpen(false)} /> : undefined}
    </Overlay>
  )
}

export default Delivery