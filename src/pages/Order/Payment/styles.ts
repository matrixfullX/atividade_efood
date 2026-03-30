import styled from "styled-components"
import { Fields } from "../Delivery/styles"

export const TitlePay = styled.h3`
  color: #FFEBD9;
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0 40px 10px;
`

export const InfosPay = styled.div`
  display: flex;
  max-width: 330px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  gap: 20px;
`

export const Info1 = styled.div`
  width: 190px;
`

export const Info2 = styled.div`
  width: 110px;
`

export const Info1A = styled(Fields)`
  padding: 6px 10px;
  width: 190px;
`

export const Info2B = styled(Fields)`
  width: 110px;
  padding: 6px 10px;
`