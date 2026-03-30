import styled from "styled-components"
import { ButtonFlavors, CardFlavors, type BackgroundProps } from "../../Products/Perfil/styles"
import { Image, Paragraph, Title } from "../../../components/Foods/styles"

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;
`

export const CardModal = styled(CardFlavors)`
  position: relative;
  display: flex;
  margin-top: 20px;
  border-radius: 12px;
  width: 1000px;
  max-width: 100%;
  height: 400px;
  max-height: 100%;

  box-shadow: 0 10px 30px rgba(0,0,0,0.2);

  animation: fadeIn 0.3s ease;
`

export const ImageModal = styled(Image)`
  border-radius: 12px;
  padding: 10px;
  width: 450px;
  height: 380px;
`

export const TitleModal = styled(Title)`
  padding-top: 5px;
  font-size: 24px;
  color: #fff;
`

export const ParagraphModal = styled(Paragraph)`
  color: #fff;
  padding-top: 10px;
`

export const ButtonModalBuy = styled(ButtonFlavors)<BackgroundProps>`
  background-color: ${({ $primary }) => ($primary ? "#E66767" : "#FFEBD9")};
  color: ${({ $primary }) => ($primary ? "#FFEBD9" : "#E66767")};
  border-radius: 5px;
  padding: 6px 16px;
  max-width: 300px;
  margin: 8px 0 0 10px;
`

export const ButtonClose = styled(ButtonModalBuy)`
  position: absolute;
  top: 8px;
  right: 16px;
`