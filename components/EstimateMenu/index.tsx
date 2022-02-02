import React, { useState } from 'react';
import { EstimateContaierItem, EstimateContainer, EstimateItem } from '../../styles/EstimateMenu.module';

const activeItemStyle = {
    borderBottom: `2px solid red`,
    fontWeight: 'bold'
}


export default function EstimateMenu() {

    const [index, setIndex] = useState<number>(0)

    const estimateOptions = [
        {
            id: 1,
            name: 'Property Estimate',
        },
        {
            id: 2,
            name: 'Rental Estimate'
        },
    ]

    return (
        <EstimateContainer>
            <EstimateContaierItem>
                {estimateOptions.map(({ id, name }) => <EstimateItem
                    style={index === id ? activeItemStyle : {}}
                    onClick={() => setIndex(id)} key={id}>{name}</EstimateItem>)}
            </EstimateContaierItem>
        </EstimateContainer>
    );
}

