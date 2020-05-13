import * as React from 'react';
import * as stores from './stores';

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
        <Resource
          name="stores"
          list={stores.StoreList}
          show={stores.StoreShow}
          create={stores.StoreCreate}
          edit={stores.StoreEdit}
        />
      </Admin>
    );
  }
}

export default App;
