import React from 'react';
import { Background, Container, InfoContainer } from '../../styles/Global.styles';
import { StyledMain } from '../../styles/Main.styles';
import EstimateMenu from '../EstimateMenu';

export default function SubMain() {
    return (
        <div>
            <Background color="#f3f4fa">
                <InfoContainer>
                    <StyledMain>
                        <EstimateMenu />
                    </StyledMain>
                </InfoContainer>
            </Background>
        </div>
    );
}




