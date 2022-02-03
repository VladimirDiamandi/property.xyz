import Image from 'next/image';
import React from 'react';
import { ContainerImgWithText, ContentImgWithText, InnerWrapper } from '../../styles/ImgWithText.styles';

interface IImgWithText {
    path: string | StaticImageData | any
    text: string,
    btnText: string,
    title: string
}

const ImgWithText: React.FC<IImgWithText> = ({ path, text, btnText, title }) => {

    return (
        <ContainerImgWithText>
            <InnerWrapper>
                <img src={path.src} />
            </InnerWrapper>
            <ContentImgWithText>
                <span>{title}</span>
                <p>{text}</p>
                <button>{btnText}</button>
            </ContentImgWithText>
        </ContainerImgWithText>
    );
}


export default ImgWithText