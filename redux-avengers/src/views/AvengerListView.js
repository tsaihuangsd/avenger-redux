import React from 'react';
import { connect } from 'react-redux';

import { getAvengers } from '../store/actions';

import AvengersList from '../components/AvengersList/AvengersList';

class AvengerListView extends React.Component {
    componentDidMount() {
        this.props.getAvengers();
    }


    render() {
        return (
            <AvengersList {...this.props} />
        );
    }
}

const mapStateToProps = state => ({
    avengersList: state.avengers
});

export default connect(mapStateToProps, { getAvengers })(AvengerListView);