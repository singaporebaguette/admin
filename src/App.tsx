import * as React from 'react';
import stores from './entities/stores';

import { Admin, Resource } from 'react-admin';
import { FirebaseDataProvider, FirebaseAuthProvider, RAFirebaseOptions } from 'react-admin-firebase';
import Login from './Login';

const config = require('./fconfig.js').firebaseConfig;

const options: RAFirebaseOptions = {
  logging: true,
  rootRef: '/',
  watch: ['stores'],
};
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

class App extends React.Component {
  render() {
    return (
      <Admin dataProvider={dataProvider} authProvider={authProvider} loginPage={Login}>
        <Resource name="stores" list={stores.List} create={stores.Create} edit={stores.Edit} show={stores.Show} />
      </Admin>
    );
  }
}

export default App;
