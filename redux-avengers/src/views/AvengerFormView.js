import React from 'react';
import { connect } from 'react-redux';

import { addNewAvenger, updateAvenger } from '../store/actions';

import AvengerForm from '../components/AvengerForm/AvengerForm';

const blankFormValues = {
    name: '',
    nickname: '',
    description: '',
    thumbnail: '',
    img: '',
    movies: [],
  };

class AvengerFormView extends React.Component {
    state = {
        avenger: {
            name: '',
            nickname: '',
            description: '',
            thumbnail: '',
            img: '',
            movies: [],
        },
        isUpdating: false,
    };

    componentDidMount() {
      console.log(this.props);
      if (this.props.avengerToUpdate) {
        this.setState({ isUpdating: true, avenger: this.props.avengerToUpdate });
      }
    }

    handleChange = event => {
        if (event.target.name === 'movies') {
          const movies = event.target.value.split(', ');
          this.setState({
            avenger: {
              ...this.state.avenger,
              movies, // same as movies: movies
            }
          });
        } else {
          this.setState({
            avenger: {
              ...this.state.avenger,
              [event.target.name]: event.target.value,
            }
          });
        }
    }

    handleAddNewAvenger = event => {
        event.preventDefault();
        console.log('firing')
        this.props.addNewAvenger(this.state.avenger);
        this.props.history.push('/avengers');
    }

    handleUpdateAvenger = () => {
      this.props.updateAvenger(this.state.avenger);
      this.props.history.push('/avengers');
    }

    render() {
        return (
            <AvengerForm 
              {...this.props} 
              avenger={this.state.avenger} 
              handleAddNewAvenger={this.handleAddNewAvenger}
              handleChange={this.handleChange}
              handleUpdateAvenger={this.handleUpdateAvenger}
              isUpdating={this.state.isUpdating} 
            /> // spread in props --> same as "match={props.match} location={props.location} history={props.history}"
        );
    }
}

const mapStateToProps = state => ({
  avengerToUpdate: state.avengerToUpdate,
});

export default connect(mapStateToProps, { addNewAvenger, updateAvenger })(AvengerFormView);