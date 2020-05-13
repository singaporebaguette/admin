// in src/posts.js
import * as React from 'react';
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  // DisabledInput,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  SelectInput,
  FileField,
  FileInput,
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

export const Form = () => (
  <SimpleForm>
    <TextInput source="title" />
    <TextInput source="description" />
    <NumberInput source="mark" />

    <NumberInput source="coordinates.lat" label="Latitude" />
    <NumberInput source="coordinates.lng" label="Longitude" />

    <TextInput source="url" />

    <SelectInput
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
        { id: 1, name: '1' },
        { id: 2, name: '2' },
        { id: 3, name: '3' },
        { id: 4, name: '4' },
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

    <FileInput source="file" label="File" accept="application/png">
      <FileField source="src" title="title" />
    </FileInput>
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
      <FileField source="file.src" title="file.title" />
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
