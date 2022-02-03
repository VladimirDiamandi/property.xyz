import styled from "styled-components";

interface IContainerEstimitePriceProps {
  remPadding?: boolean,
  border?:boolean
}
const BORDER_BOTTOM = '1px solid #C6C8D3'



export const RentalEstimateContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 45px auto 70px;
text-align: center;
font-size: 14px;
line-height: 25px;
color: #8D8D8D;


`
export const RentalText = styled.p`
padding: 0 80px;
@media(max-width:720px){
  padding: 0;
}
`

export const ContainerEstimitePrice = styled.div<IContainerEstimitePriceProps>`
display: flex;
padding-top: 63px;
padding-bottom: ${(props) => props.remPadding ? '-63px' : '63px'};
border-bottom: ${(props) => props.border ? BORDER_BOTTOM  : ''};
margin-top:${(props) => props.remPadding  ? '-21px' : ''};
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;



h1 {
font-size: 20px;
color: #F95258;
line-height: 24px;
text-transform:uppercase;
}


h3 { 
font-size: 50px;
line-height: 55px;
color: #343434;
padding: 20px 0;
dispaly:inline-block
}
span{
border: 2px solid #F95258;
border-radius: 10px;
padding: 10px;
}
`




export const PropertyEstimateContainer = styled.div`
margin:0 auto;
text-align:center;

`
export const PropertyEstimateTitle = styled.div`
span{
font-size: 35px;
color: #343434;
font-weight: bold;
}
  p{
font-size: 25px;
color: #343434;
font-weight: bold;
margin: 30px;
}
`

export const PropertyEstimateText = styled.div`
div{
  max-width:780px;
  margin:0 auto;
  font-size:18px;
  line-height:35px;
  color:#343434;
  padding-bottom:50px;
}
`

export const CustomLine = styled.div`
     height: 92px;
     width: 1px;
     margin: 5px auto 30px;
     position: relative;
     background-color: black;
     &::after{
        position: absolute;
        content: '';
        background-color: black;
        top: -8px;
        left: -4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
     }
     &::before{
        position: absolute;
        content: '';
        border: 1px solid;
        bottom: -9px;
        left: -4px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
     }
`

