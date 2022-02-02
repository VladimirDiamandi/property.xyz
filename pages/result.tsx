
import React from 'react';
import Header from '../components/Header';
import HeaderForm from '../components/HeaderForm';
import ServiceFeedback from '../components/ServiceFeedback';
import SubMain from '../components/SubMain';


export default function Result() {
    return (
        <div>
            <Header />
            <ServiceFeedback />
            <HeaderForm />
            <SubMain />
        </div>
    );
}
