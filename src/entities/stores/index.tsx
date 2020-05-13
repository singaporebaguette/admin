// in src/stores.js
import * as React from 'react';
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  SelectInput,
  NumberInput,
  CheckboxGroupInput,
} from 'react-admin';

const StoreFilter = (props: any) => {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="title" alwaysOn />
    </Filter>
  );
};

export const Form = (props: any) => (
  <SimpleForm {...props}>
    <TextInput source="title" />
    <TextInput source="description" />

    <NumberInput source="mark" label="mark (out of 5)" />

    <NumberInput source="baguettePrice" label="Baguette price" />

    <NumberInput source="coordinates.lat" label="Latitude" />
    <NumberInput source="coordinates.lng" label="Longitude" />

    <TextInput source="link" />

    <SelectInput
      label="howApproved"
      source="approved"
      choices={[
        { id: 1, name: 'Approved' },
        { id: 2, name: 'Decent' },
        { id: 3, name: 'Emergency Only' },
        { id: 4, name: 'No' },
        { id: 5, name: 'Offense to France' },
      ]}
    />
    <SelectInput
      source="price"
      choices={[
        { id: 1, name: '$' },
        { id: 2, name: '$$' },
        { id: 3, name: '$$$' },
        { id: 4, name: '$$$$' },
      ]}
    />

    <CheckboxGroupInput
      source="features"
      choices={[
        { id: 'delivery', name: 'Delivery' },
        { id: 'eat-in', name: 'Eat-in' },
        { id: 'croissant', name: 'Croissant' },
      ]}
    />
  </SimpleForm>
);

export const StoreList = (props: any) => (
  <List {...props} filters={<StoreFilter />}>
    <Datagrid>
      <TextField source="title" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" />
    </Datagrid>
  </List>
);

export const StoreShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
    </SimpleShowLayout>
  </Show>
);

export const StoreCreate = (props: any) => (
  <Create {...props}>
    <Form />
  </Create>
);

export const StoreEdit = (props: any) => (
  <Edit {...props}>
    <Form />
  </Edit>
);

export default {
  Show: StoreShow,
  Edit: StoreEdit,
  Create: StoreCreate,
  List: StoreList,
};
