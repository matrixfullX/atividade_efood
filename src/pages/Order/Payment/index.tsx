import { useState } from "react"
import { ButtonContinue, Container } from "../Carrinho/styles"
import { ButtonBack, ContainerFields, Field, Fields, Infos, Label, LabelInfos } from "../Delivery/styles"
import { Info1, Info1A, Info2, Info2B, InfosPay, TitlePay } from "./styles"
import type { PropsCar } from "../Carrinho"
import Confirmation from "../Confirmation"

const Payment = ({onClose} : PropsCar) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Container>
      <TitlePay>Pagamento - Valor a Pagar R$ 190,90</TitlePay>
      <Label>Nome do Cartão</Label>
      <Field type="text" />
      <InfosPay>
        <Info1>
          <LabelInfos>Número do Cartão</LabelInfos>
          <Info1A />
        </Info1>
        <Info2>
          <LabelInfos>CVV</LabelInfos>
          <Info2B type="number" />
        </Info2>
      </InfosPay>
      <ContainerFields>
        <Infos>
          <LabelInfos>Mês de Vencimento</LabelInfos>
          <Fields />
        </Infos>
        <Infos>
          <LabelInfos>Ano de Vencimento</LabelInfos>
          <Fields type="number" />
        </Infos>
      </ContainerFields>
      <ButtonContinue onClick={() => setIsOpen(true)}>Finalizar Pagamento</ButtonContinue>
      <ButtonBack onClick={onClose}>Voltar para a Edição de Endereço</ButtonBack>
      {isOpen ? <Confirmation /> : undefined}
    </Container>
  )
}

export default Payment