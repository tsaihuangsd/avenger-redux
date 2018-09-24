import React from 'react';
import { connect } from 'react-redux';

import { getAvengers, deleteAvenger, setUpdateAvenger } from '../store/actions';

import Avenger from '../components/Avenger/Avenger';

class AvengerView extends React.Component {
    componentDidMount() {
        if (this.props.avengersList.length === 0) {
            this.props.getAvengers();
        }
    }

    handleDeleteAvenger = avengerId => {
        this.props.deleteAvenger(avengerId);
    }

    goToUpdateAvengerForm = (event, id) => {
        event.preventDefault();
        this.props.setUpdateAvenger(id);
        this.props.history.push('/avenger-form');
    }

    render() {
        return (
            <Avenger 
              {...this.props} 
              avengersList={this.props.avengersList} 
              isLoading={this.props.isLoading}
              handleDeleteAvenger={this.handleDeleteAvenger}
              goToUpdateAvengerForm={this.goToUpdateAvengerForm}
            /> // spread in props --> same as "match={props.match} location={props.location} history={props.history}"
        );
    }
}

const mapStateToProps = state => ({
    avengersList: state.avengers,
    isLoading: state.isLoading,
});

// const mapDispatchToProps = dispatch => ({
//     deleteAvengerOnProps: () => deleteAvenger(id),
// })

export default connect(mapStateToProps, { getAvengers, deleteAvenger, setUpdateAvenger })(AvengerView);