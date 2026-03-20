import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-top: 64px;
  padding-bottom: 64px;
  background-color: #FFF8F2;
`

export const ContainerItens = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  max-width: 900px;
  width: 100%;
`

export const Card = styled.div`
  position: relative;
  display: block;
  justify-content: space-between;
  margin: 0 auto;
  padding-bottom: 10px;
  max-width: 417px;
  width: 100%;
  height: 400px;
  height: 100%;
  border: 1px solid #E66767;
`

export const Image = styled.img`
  position: relative;
  max-width: 417px;
  width: 100%;
  height: 200px;
`

export const Infos = styled.div`
  position: relative;
`

export const Title = styled.h3`
  position: relative;
  display: block;
  margin: 8px 0 16px 8px;
  color: #E66767;
`

export const Star = styled.img`
  position: absolute;
  max-width: 30px;
  width: 20px;
  height: 20px;
  top: 0;
  right: 10px;
`

export const Notice = styled.p`
  position: absolute;
  max-width: 30px;
  width: 20px;
  height: 20px;
  top: 0;
  right: 45px;
  color: #E66767;
  font-weight: bold;
  font-size: 18px;
`

export const Paragraph = styled.p`
  font-size: 14px;
  padding: 10px;
  color: #E66767;
`

export const Labels = styled.div`
  position: absolute;
  display: flex;
  gap: 5px;
  top: 0;
  right: 20px;
`

export const Tag = styled.a`
  margin: 14px auto auto 8px;
  padding: 4px 10px;
  background-color: #E66767;
  border: none;
  color: #fff;
  font-weight: bold;
  font-family: sans-serif;
`