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
      <FileInput source="file" label="File" accept="application/pdf">
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
      <SelectInput
        source="rating"
        choices={[
          { id: 1, name: 'Good' },
          { id: 2, name: 'Okay' },
          { id: 3, name: 'Bad' },
        ]}
      />
      <FileInput source="file" label="File" accept="application/pdf">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Edit>
);
