import React from 'react';
import { render } from 'react-dom';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

//import { PostList, PostEdit, PostCreate, PostIcon } from './posts';
import users from './users';
//import sctructures from './structures';
import Dashboard from './Dashboard.js';

const App = () => (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        // ...
    </Admin>

render(
    <Admin dataProvider={simpleRestProvider('http://localhost:3000')}>
        <Resource name=users" list={UserList} edit={USerEdit} create={UserCreate} icon={USerIcon}/>
    </Admin>,
    document.getElementById('root')
);
