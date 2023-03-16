import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';



class Home extends Component {



    render() {
        document.title = "ChezzyBite Restaurant"
        return (
            <div>
                <Loading />
            </div>
        );
    }
}

export default Home;