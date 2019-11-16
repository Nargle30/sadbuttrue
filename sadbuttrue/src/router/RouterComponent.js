import React, {PureComponent} from "react";
import {Scene, Router, Lightbox} from 'react-native-router-flux';
// import * as scenes from './_routerScenes';
// import Config from "../../Config";
import MainScreen from "../screens/MainScreen";

class RouterComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    launchApp = () => {
        console.log('launchApp');
        /*        const AWS = require('aws-sdk');

                AWS.config.region = Config.AWS_REGION;
                AWS.config.credentials = {
                    accessKeyId: Config.ACCESS_KEY_ID,
                    secretAccessKey: Config.SECRET_ACCESS_KEY
                };*/
    };


    renderScene = item => (
        <Scene
            key={item.key}
            component={item.component}
            title={item.title}
            renderLeftButton={() => item.leftBtn}
            renderRightButton={() => item.rightBtn}
            titleStyle={{textAlign: 'center', alignSelf: 'center', flex: 1,}}
        />
    );

//                         {scenes.scenes.map(item => this.renderScene(item))}
    render() {
        return (
            <Router>
                <Lightbox>
                    <Scene key="root">
                        <Scene
                            key="mainScreen"
                            on={this.launchApp}
                            component={MainScreen}
                            title="mainScreen"
                            titleStyle={{textAlign: 'center', alignSelf: 'center', flex: 1,}}
                            initial
                        />
                    </Scene>
                </Lightbox>
            </Router>
        )
    }
}

export default RouterComponent;