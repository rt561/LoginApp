import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../store/actions';
import { bindActionCreators } from 'redux';
import Header from '../layouts/Header';
import Dashboard from '../components/dashboard/Dashboard';


class Main extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.addGalleryData()
    }
    render() {
        const { getGalleryData} = this.props

        return (
            <>
                <Header headerName="Dashboard"/>
                
                <Dashboard/>
            </>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            addGalleryData: Actions.addGalleryData,
        },
        dispatch
    );
};

const mapStateToProps = (state) => ({
    getGalleryData: state.galleryReducer.getGalleryData,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
