import Image from 'next/image';
import React from 'react';
import { ContainerImgWithText, ContentImgWithText, InnerWrapper } from '../../styles/ImgWithText.styles';

interface IImgWithText {
    path: string | StaticImageData | any
    text: string,
    btnText: string,
    title: string
}

export default function ImgWithText({ path, text, btnText, title }: IImgWithText) {

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


