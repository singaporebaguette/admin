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
} from 'react-admin';

const StoreFilter = (props: any) => {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="title" alwaysOn />
    </Filter>
  );
};

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
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" />
      <NumberInput source="mark" />

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
      <FileInput source="file" label="File" accept="application/png">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);

export const StoreEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      {/* <DisabledInput source="id" /> */}
      <TextInput source="title" />
      <TextInput source="description" />
      <NumberInput source="mark" />
      <NumberInput source="coordinates.lat" />
      <NumberInput source="coordinates.lng" />

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
    </SimpleForm>
  </Edit>
);
