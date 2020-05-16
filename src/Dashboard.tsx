import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { Title } from 'react-admin';

export default () => (
  <Card>
    <Title title="Singapore Baguette | Admin" />
    <CardContent>
      <Link to="/export-data">
        <Button>Export data</Button>
      </Link>
    </CardContent>
  </Card>
);
