import React from 'react';

const {
    Provider: ApartamentServiceProvider,
    Consumer: ApartamentServiceConsumer
} = React.createContext();

export { 
    ApartamentServiceProvider,
    ApartamentServiceConsumer
}