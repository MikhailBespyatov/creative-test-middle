import React from 'react';
import ApartamentList from '../apartament-list';
import { FilterType } from '../../utils';

const AllApartament = () => {
    return (
        <ApartamentList filterType={FilterType.ALL}/>
    );
}

export default AllApartament;