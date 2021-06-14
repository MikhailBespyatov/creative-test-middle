const FilterType = {
    ALL: 'ALL',
    LIKED: 'LIKED',
};

const getFilteredApartaments = (filterType, apartaments) => {
    switch (filterType) {
        case FilterType.ALL:
            return apartaments;
        case FilterType.LIKED:
            return apartaments.filter((it) => it.liked);
        default:
            return apartaments;
    }
};

export { FilterType, getFilteredApartaments };