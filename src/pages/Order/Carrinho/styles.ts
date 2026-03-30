import styled from "styled-components"

export const Container = styled.div`
  max-width: 350px;
  width: 100%;
  height: 100%;

  position: absolute;
  right: 0;

  background-color: #E66767;
`

export const Item = styled.div`
  display: flex;
  max-width: 330px;
  width: 100%;
  height: 100px;
  margin: 55px 10px 1px 10px;
  background-color: #FFEBD9;
`

export const Items = styled.div`
  display: flex;
  max-width: 330px;
  width: 100%;
  height: 100px;
  margin: 10px;
  background-color: #FFEBD9;
`

export const Image = styled.img`
  width: 80px;
  height: 80px;
  margin: 10px;
`

export const Infos = styled.div`
  margin: 12px 0 12px 0;
  position: relative;
`

export const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 16px;
  font-weight: bold;
  color: #E66767;
`

type ColorType = {
  $primary: boolean
}

export const Value = styled.p<ColorType>`
  color: ${({ $primary }) => ($primary ? "#E66767" : "#FFEBD9")};
  font-size: 12px;
  font-weight: bold;
`

export const Values = styled.div`
  display: flex;
  margin: 50px 20px 0 20px;
  justify-content: space-between;
  color: #FFEBD9;
  `

  export const Lixeira = styled.img`
    width: 16px;
    height: 16px;
    position: relative;
    top: 70px;
    left: 70px;
  `

export const ButtonContinue = styled.a`
  background-color: #FFEBD9;
  color: #E66767;
  display: flex;
  justify-content: center;
  margin: 20px 10px 0 10px;
  padding: 6px;
  max-width: 330px;
  width: 100%;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`