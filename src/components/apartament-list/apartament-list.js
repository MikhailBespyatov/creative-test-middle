import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchApartaments, updateApartament } from '../../actions';
import './apartament-list.css';
import ApartamentItem from '../apartament-item'
import withApartamentService from '../hoc';
import { compose, getFilteredApartaments } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

class ApartamentList extends Component {

    componentDidMount() {
        const { fetchApartaments } = this.props;

        const apartamentsLength = this.props.apartaments.length;

        if (apartamentsLength === 0) {
            fetchApartaments();
        }
    };

    render() {
        const { apartaments, loading, error, updateApartament, filterType } = this.props;
        
        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />
        }
        
        const filteredApartaments = getFilteredApartaments(filterType, apartaments);

        return (
            <div className="apartament-list__wrapper">
                <ul className="apartament-list">
                    {
                        filteredApartaments.map((apartament) => {
                            return (
                                <Fragment key={apartament.id}>
                                    <ApartamentItem 
                                    apartament={apartament}
                                    updateApartament={updateApartament} />
                                </Fragment>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
};

const mapStateToProps = ({ apartaments, loading, error }) => {
    return { apartaments, loading, error };
};

const mapDispatchToProps = ( dispatch, { apartamentService } ) => {
    return {
        fetchApartaments: fetchApartaments(dispatch, apartamentService),
        updateApartament: (id) => dispatch(updateApartament(id))
        };
};

export default compose(
    withApartamentService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ApartamentList);