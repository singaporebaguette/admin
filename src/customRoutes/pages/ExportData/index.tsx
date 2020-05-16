import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Title } from 'react-admin';
import firebase from 'firebase';
import { saveAs } from 'file-saver';

import axios from 'axios';

const ExportData = (props: any) => {
  const [user, setUser] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false);
  const [userLoading, setUserLoading] = React.useState(true);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setUser(user);
        setUserLoading(false);
      } else {
        // No user is signed in.
      }
    });
  }, [setUser]);

  const exportData = async () => {
    setLoading(true);
    const result = await axios.get(`https://asia-east2-singapore-baguette.cloudfunctions.net/exportData`, {
      headers: {
        Authorization: `Bearer ${await user.getIdToken(false)}`,
      },
    });
    setLoading(false);

    const blob = new Blob([JSON.stringify(result.data, null, 2)], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'singapore-baguette.json');
  };

  return (
    <Card>
      <Title title="Export data" />
      <CardContent>
        {userLoading && <p>retrieving current user</p>}
        <Button disabled={loading || userLoading} onClick={exportData}>
          Export
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExportData;
