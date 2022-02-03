import styled from "styled-components";


export const ContainerImgWithText = styled.div`
position:relative;
`

export const ContentImgWithText = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: absolute;
color: white;
transform: translate(-50%, -50%);
top: 50%;
left: 50%;
text-align: center;

span{
font-size:28px;
}
p{
font-size:18px;
display:block;
padding:20px 0;
}
button{
  background-color: #F95258;
  border-radius: 5px;
  color:#ffffff;
    width: 167px;
  height: 48px;
  display:block;
  ont-size: 16px;
  line-height: 28px;
    border: none;
  cursor: pointer;
    :hover {
    background-color: #b92d32;
  }
}

  @media (max-width: 520px) {
    p{
      font-size:13px
    }
    span{
      font-size:20px
    }
  }

`
export const InnerWrapper = styled.div`
display:flex;
&::after{
        position: absolute;
         content: '';
        background-color: rgba(46, 49, 66, 0.75);
        top: 0;
        left: 0;
        bottom:0;
        right:0;
     }
& *{
  width:100%

}
`
export const ImgRow = styled.div`
padding-top:50px;
display:flex;


  @media (max-width: 1024px) {
    display:block
  }
`