import React from 'react';
import { ContainerEstimitePrice } from '../../styles/Estimate.styles';





interface IEstimatePrice {
    price: string
    percentage: string,
    isStyles?: boolean,
}

export default function EstimatePrice({ price, percentage, isStyles }: IEstimatePrice) {
    return (
        isStyles ? <ContainerEstimitePrice remPadding>
            <h1>Estimated Price</h1>
            <h3>{price}</h3>
            <span>{percentage}% confidance level</span>
        </ContainerEstimitePrice>
            :
            <ContainerEstimitePrice border>
                <h1>Estimated Price</h1>
                <h3>{price}</h3>
                <span>{percentage}% confidance level</span>
            </ContainerEstimitePrice>
    )
}
