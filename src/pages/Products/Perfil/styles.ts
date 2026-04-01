import styled from "styled-components"
import { Button, Card, Container, ContainerItens, Title } from "../../../components/Foods/styles"

export const ContainerInfos = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 64px;
  position: absolute;
`

export const Info = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #E66767;
`

export const Presentation = styled.div`
  position: absolute;
  width: 100%;
  height: 300px;
  margin-top: 160px;

  img {
    display: block;
    width: 100%;
    height: 300px;
  }
`

export const Flavor = styled.h2`
  position: absolute;
  top: 20px;
  left: 220px;
  color: #fff;
  font-size: 32px;  
  font-weight: 100;
`

export const TitleHeader = styled.h2`
  font-size: 32px;
  font-weight: 900;
  position: absolute;
  bottom: 20px;
  left: 220px;
  color: #fff;
`

export type BackgroundProps = {
  $primary: boolean
}

export const ContainerItensFlavors = styled(ContainerItens)`
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`

export const CardFlavors = styled(Card)<BackgroundProps>`
  background-color: ${({ $primary }) => ($primary ? "#fff" : "#E66767")};
  padding: 6px;
`

export const ContainerFlavors = styled(Container)`
  margin-top: 180px;
`

export const TitleFlavors = styled(Title)<BackgroundProps>`
  color: ${({ $primary }) => ($primary ? "#E66767" : "#FFEBD9")};
  font-size: 16px;
  font-weight: bold;
`

export const ParagraphFlavors = styled(Title)<BackgroundProps>`
  color: ${({ $primary }) => ($primary ? "#E66767" : "#FFEBD9")};
  font-size: 14px;
  font-weight: 100;
`

export const ButtonFlavors = styled(Button)<BackgroundProps>`
  display: flex;
  justify-content: center;
  background-color: ${({ $primary }) => ($primary ? "#E66767" : "#FFEBD9")};
  color: ${({ $primary }) => ($primary ? "#FFEBD9" : "#E66767")};
  font-size: 12px;
  margin: 0;
`