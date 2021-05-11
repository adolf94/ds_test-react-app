import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { TaskCreateList } from './components/TaskCreateList';
import { AddTaskCreateList } from './components/AddNewTaskCreate';

export default class App extends Component {

    render() {
    return    <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/taskcreateList' component={TaskCreateList} />
            <Route path='/addTaskCreate' component={AddTaskCreateList} />
            <Route path='/taskcreate/edit/:userid' component={AddTaskCreateList} />

        </Layout>
    }
};