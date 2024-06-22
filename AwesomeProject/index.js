/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Provider from './Infrastructure/Providers';
AppRegistry.registerComponent(appName, () => Provider);
