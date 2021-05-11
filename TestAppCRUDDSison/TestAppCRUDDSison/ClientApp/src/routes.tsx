import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { TaskCreateList } from './components/TaskCreateList';
import { AddTaskCreate } from './components/AddNewTaskCreate';

export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/taskcreateList' component={TaskCreateList} />
    <Route path='/addTaskCreate' component={AddTaskCreate} />
    <Route path='/taskcreate/edit/:userid' component={AddTaskCreate} />
</Layout>;