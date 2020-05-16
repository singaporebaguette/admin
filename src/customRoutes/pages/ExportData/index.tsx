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

  React.useEffect(() => {
    const retrieveUser = async () => {
      const user = firebase.auth().currentUser;
      setUser(user);
    };
    retrieveUser();
  }, [setUser]);

  const exportData = async () => {
    setLoading(true);
    const result = await axios.get(`https://asia-east2-singapore-baguette.cloudfunctions.net/exportData`, {
      headers: {
        Authorization: `Bearer ${await user.getIdToken(false)}`,
      },
    });
    setLoading(false);

    const blob = new Blob([result.data], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'singapore-baguette.json');
  };

  return (
    <Card>
      <Title title="Export data" />
      <CardContent>
        <Button disabled={loading} onClick={exportData}>
          Export
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExportData;
