import * as React from 'react';
import stores from './entities/stores';

import { Admin, Resource } from 'react-admin';
import { FirebaseDataProvider, FirebaseAuthProvider, RAFirebaseOptions } from 'react-admin-firebase';
import Login from './Login';
import approvedUsers from './approvedUsers';
const config = require('./fconfig.js').firebaseConfig;

const options: RAFirebaseOptions = {
  logging: false,
  rootRef: '/',
  watch: ['stores'],
};
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

const ap = {
  ...authProvider,
  checkAuth: async (params: any) => {
    const user: any = await authProvider.checkAuth();

    if (!approvedUsers.includes(user.uid)) {
      throw new Error('not authorized sorry');
    }

    return user;
  },
};

class App extends React.Component {
  render() {
    return (
      <Admin dataProvider={dataProvider} authProvider={ap} loginPage={Login}>
        <Resource name="stores" list={stores.List} create={stores.Create} edit={stores.Edit} show={stores.Show} />
      </Admin>
    );
  }
}

export default App;
