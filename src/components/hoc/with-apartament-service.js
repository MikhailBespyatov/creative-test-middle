import React from 'react';
import { ApartamentServiceConsumer } from '../apartament-service-context';

const withApartamentService = () => (Wrapped) => {

    return  (props) => {
        return (
            <ApartamentServiceConsumer>
                {
                    (apartamentService) => {
                        return (<Wrapped {...props} 
                            apartamentService={apartamentService}/>)
                    }
                }
            </ApartamentServiceConsumer>
        );
    }
};

export default withApartamentService;