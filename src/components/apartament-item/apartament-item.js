import React, { Component } from 'react';

import apartamentImage from './img/apartament.png';
import './apartament-item.css';
import withApartamentService from '../hoc';

const TYPE_TRANSLATOR = {
    'flat': 'квартира',
}

class ApartamentItem extends Component {
    render() {
        const { id, liked } = this.props.apartament;
        const { area, unit, title, rooms, address: {
            city, street, house, room
        } } = this.props.apartament.attributes;
        const { firstName, middleName, lastName } = this.props.apartament.relationships.attributes;
        const { updateApartament } = this.props;
        const isActive = liked ? 'apartament-item__button apartament-item__button--active'
            : 'apartament-item__button';
            
        return (
            <li className="apartament-item">
                <img className="apartament-item__img" src={apartamentImage} alt={title} />
                <h3 className="apartament-item__title">{title}</h3>
                <ul className="apartament-item__info">
                    <li className="apartament-item__info-item">Тип жилья: {TYPE_TRANSLATOR.flat}</li>
                    <li className="apartament-item__info-item">Адрес: город {city}, улица {street}, дом {house}, квартира {room}</li>
                    <li className="apartament-item__info-item">Количество комнат : {rooms}</li>
                    <li className="apartament-item__info-item">Площадь: {area} {unit}</li>
                    <li className="apartament-item__info-item">Продавец: {lastName} {firstName} {middleName}</li> 
                </ul>
                <div className="apartament-item__type"></div>
                <button className={isActive} onClick={() => updateApartament(id)}>
                    <span className="visually-hidden">Добавить в понравившиеся</span>
                </button>
            </li>
        );
    }
}

export default withApartamentService()(ApartamentItem);
