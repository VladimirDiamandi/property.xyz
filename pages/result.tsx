
import React, { useState } from 'react';
import EstimateMenu from '../components/EstimateMenu';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeaderForm from '../components/HeaderForm';
import Main from '../components/Main';
import ServiceFeedback from '../components/ServiceFeedback';
import { EstimateMainContainer, ViewportHeightWrapper } from '../styles/Global.styles';
import PropertyEstimate from '../components/PropertyEstimate';
import RentalEstimate from '../components/EstimateRental';
import ImageBlock from '../components/ImageBlock';





const Result: React.FC = () => {
    const [index, setIndex] = useState<number>(1)
    return (
        <>
            <ViewportHeightWrapper>
                <Header />
                <ServiceFeedback />
                <HeaderForm />
                <EstimateMainContainer>
                    <Main>
                        <EstimateMenu index={index} setIndex={setIndex} />
                        {
                            (() => {
                                switch (index) {
                                    case 1:
                                        return <PropertyEstimate />
                                    case 2:
                                        return (
                                            <RentalEstimate />
                                        )
                                    default:
                                        return null;
                                }
                            })()
                        }
                    </Main>
                </EstimateMainContainer>
            </ViewportHeightWrapper>
            <ImageBlock />
            <Footer />
        </ >
    );
}
export default Result