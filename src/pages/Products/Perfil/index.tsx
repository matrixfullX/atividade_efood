import apresentacao from "../../../assets/images/presentation/apresentacao.png"
import sabor1 from "../../../assets/images/presentation/sabor1.png"
import logo from "../../../assets/images/elements/logo.png"
import fundo from "../../../assets/images/elements/fundo.png"
import Footer from "../../../components/Footer"
import Modal from "../../Order/Modal"
import { Container, Fundo, Logo } from "../../../components/Header/styles"
import { ContainerFlavors, ContainerInfos, ContainerItensFlavors, Info, Presentation, CardFlavors, ParagraphFlavors, TitleFlavors, ButtonFlavors, Flavor, TitleHeader } from "./styles"
import { Image, Infos } from "../../../components/Foods/styles"
import { useState } from "react"

const Perfil = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Container>
        <Fundo src={fundo} />
        <Logo src={logo} alt="logo marca" />
        <ContainerInfos>
          <Info>Restaurantes</Info>
          <Info>0 produto(s) no carrinho</Info>
        </ContainerInfos>
          <Presentation>
            <img src={apresentacao} alt="imagem de fundo macarrao" />
            <Flavor>Italiana</Flavor>
            <TitleHeader>La Dolce Vita Trattoria</TitleHeader>
          </Presentation>
      </Container>
      <ContainerFlavors>
        <ContainerItensFlavors>
          <CardFlavors $primary={false}>
            <Image src={sabor1} alt="sabor 1 da pizza" />
            <Infos>
              <TitleFlavors $primary={false}>Pizza Marguerita</TitleFlavors>
              <ParagraphFlavors $primary={false}>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</ParagraphFlavors>
            </Infos>
              <ButtonFlavors onClick={() => setIsOpen(true)} $primary={false}>Adicionar ao carrinho</ButtonFlavors>
          </CardFlavors>
          <CardFlavors $primary={false}>
            <Image src={sabor1} alt="sabor 1 da pizza" />
            <Infos>
              <TitleFlavors $primary={false}>Pizza Marguerita</TitleFlavors>
              <ParagraphFlavors $primary={false}>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</ParagraphFlavors>
            </Infos>
              <ButtonFlavors onClick={() => setIsOpen(true)} $primary={false}>Adicionar ao carrinho</ButtonFlavors>
          </CardFlavors>
          <CardFlavors $primary={false}>
            <Image src={sabor1} alt="sabor 1 da pizza" />
            <Infos>
              <TitleFlavors $primary={false}>Pizza Marguerita</TitleFlavors>
              <ParagraphFlavors $primary={false}>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</ParagraphFlavors>
            </Infos>
              <ButtonFlavors onClick={() => setIsOpen(true)} $primary={false}>Adicionar ao carrinho</ButtonFlavors>
          </CardFlavors>
          <CardFlavors $primary={false}>
            <Image src={sabor1} alt="sabor 1 da pizza" />
            <Infos>
              <TitleFlavors $primary={false}>Pizza Marguerita</TitleFlavors>
              <ParagraphFlavors $primary={false}>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</ParagraphFlavors>
            </Infos>
              <ButtonFlavors onClick={() => setIsOpen(true)} $primary={false}>Adicionar ao carrinho</ButtonFlavors>
          </CardFlavors>
          <CardFlavors $primary={false}>
            <Image src={sabor1} alt="sabor 1 da pizza" />
            <Infos>
              <TitleFlavors $primary={false}>Pizza Marguerita</TitleFlavors>
              <ParagraphFlavors $primary={false}>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</ParagraphFlavors>
            </Infos>
              <ButtonFlavors onClick={() => setIsOpen(true)} $primary={false}>Adicionar ao carrinho</ButtonFlavors>
          </CardFlavors>
          <CardFlavors $primary={false}>
            <Image src={sabor1} alt="sabor 1 da pizza" />
            <Infos>
              <TitleFlavors $primary={false}>Pizza Marguerita</TitleFlavors>
              <ParagraphFlavors $primary={false}>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</ParagraphFlavors>
            </Infos>
              <ButtonFlavors onClick={() => setIsOpen(true)} $primary={false}>Adicionar ao carrinho</ButtonFlavors>
          </CardFlavors>
        </ContainerItensFlavors>
      </ContainerFlavors>
      <Footer />
      {isOpen ? <Modal onClose={() => setIsOpen(false)} /> : undefined}
    </>
  )
}

export default Perfil