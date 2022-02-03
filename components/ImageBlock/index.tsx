import React from 'react';
import { ImgRow } from '../../styles/ImgWithText.styles';
import tosell from '../../assets/tosell.jpg'
import tobuy from '../../assets/tobuy.jpg'
import mortgages from '../../assets/mortgages.jpg'
import ImgWithText from '../ImgWithText';

const image = [
    {
        id: 1,
        path: tosell,
        title: 'Looking to sell?',
        text: 'Sell any UK residantial property in just 7-28 days',
        btnText: 'Sell Property'
    },
    {
        id: 2,
        path: mortgages,
        title: 'How much can i borrow',
        text: 'Work out how much you can borrow for your next property',
        btnText: 'Sell Property'
    },
    {
        id: 3,
        path: tobuy,
        title: 'Buying property',
        text: ' Sign up to receive alerts about the UK’s best buy-to-let properties.',
        btnText: 'Sell Property'
    }
]



export default function ImageBlock() {
    return (
        <ImgRow>
            {image.map(elem =>
                <div style={{ flex: '1 1 auto' }} key={elem.id}>
                    <ImgWithText
                        path={elem.path}
                        text={elem.text}
                        btnText={elem.btnText}
                        title={elem.title} />
                </div>
            )}
        </ImgRow>
    )
}
