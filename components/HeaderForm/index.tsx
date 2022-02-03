import React from 'react';
import { Background, Container } from '../../styles/Global.styles';
import { StyledMain } from '../../styles/Main.styles';
import Form from '../Form';


const HeaderForm: React.FC = () => {
    return (
        <>
            <Background color='#ffffff'>
                <Container>
                    <StyledMain>
                        <Form btnName='Update' />
                    </StyledMain>
                </Container>
            </Background>
        </>
    );
}
export default HeaderForm