import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import RoundedComponent from '../components/RoundedComponent';
import ChangeAccountPopup from '../components/ChangeAccountPopup';

export class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            showPopup: false,
        };
    }

    openPopup() {
        this.setState({showPopup: true})
    }

    closePopup() {
        this.setState({showPopup: false})
    }

    render() {
        return (
            <ScrollView>
                <RoundedComponent
                    description={'heeeeeeeee1234555678'}
                />
                <ChangeAccountPopup
                    onPress={this.openPopup.bind(this)}
                    visible={this.state.showPopup}
                    onTouchOutside={this.closePopup.bind(this)}
                />
            </ScrollView>
        );
    }
}

export default MainScreen;
