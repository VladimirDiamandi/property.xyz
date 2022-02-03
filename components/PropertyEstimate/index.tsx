import React from 'react';
import { CustomLine, PropertyEstimateContainer, PropertyEstimateText, PropertyEstimateTitle } from '../../styles/Estimate.styles';

import EstimatePrice from '../EstimatePrice';
import PoweredBy from '../PoweredBy';


const PropertyEstimate: React.FC = () => {
    return (
        <PropertyEstimateContainer>
            <EstimatePrice price='£200,000 - £230,000k' percentage='81' isStyles />
            <PoweredBy />
            <CustomLine />
            <PropertyEstimateTitle>
                <span>So, What Next?</span>
                <p>Get an even more accurate valuation. Speak with a human</p>
            </PropertyEstimateTitle>
            <PropertyEstimateText>
                <div>Our partners check many datasets, property sales and recent valuations to create an instant estimate. This is great as a quick guide but shouldn't be wholly relied upon if you are purchasing a property, selling a property or getting finance.  For any of these speaking with a human is always best. Please select from any of the below to help your next step</div>
            </PropertyEstimateText>
        </PropertyEstimateContainer>
    );
}
export default PropertyEstimate