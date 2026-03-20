import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  display: block;
  justify-content: center;
  background-color: #FFEBD9;
  height: 300px;
`

export const ContainerImage = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin: o auto;
`

export const Image = styled.img`
  display: block;
  position: absolute;
  margin: 0 auto;
  top: 50px;
`

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap: 12px;
  margin-top: 150px;
`

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`

export const Paragraph = styled.p`
  max-width: 480px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 50px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: #E66767;
`