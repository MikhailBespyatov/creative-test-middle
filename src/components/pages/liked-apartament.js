import React from 'react';
import ApartamentList from '../apartament-list';
import { FilterType } from '../../utils';

const LikedApartament = () => {
    return (
        <ApartamentList filterType={FilterType.LIKED}/>
    );
}

export default LikedApartament;