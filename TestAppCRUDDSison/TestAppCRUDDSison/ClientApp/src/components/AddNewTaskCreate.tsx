import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { TaskCreateListData } from './TaskCreateList';

interface AddTaskCreateRecordState {
    title: string;
    loading: boolean;
    taskcreateList: TaskCreateListData;


}


export class AddTaskCreateList extends React.Component<RouteComponentProps<{}>, AddTaskCreateRecordState> {
    state: { title: string; loading: boolean; taskcreateList: TaskCreateListData; };
    props: any;
    setState: any;
    FuncCancel: any;

    constructor(props) {
        super(props);

        //here we are intializing the interface's fields with default values.
        this.state = { title: "", loading: true, taskcreateList: new TaskCreateListData };

        //the userid variable will get the user id from URL.
        var userid = this.props.match.params["userid"];

        //if studentid is greater than 0 then fetch method will get the specific taskcreate record and display it as in edit mode.
        if (userid > 0) {
            fetch('api/TaskCreate/Details/' + userid)
                .then(response => response.json() as Promise<TaskCreateListData>)
                .then(data => {
                    this.setState({ title: "Edit", loading: false, taskcreatetList: data });
                });
        }
        else {
            this.state = { title: "Create", loading: false, taskcreateList: new TaskCreateListData };
        }

        this.FuncSave = this.FuncSave.bind(this);
        this.FuncCancel = () => { }
    }
    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();
        return <div>
            <h1>{this.state.title}</h1>
            <h3>User</h3>
            <hr />
            {contents}
        </div>;
    }



    //this method will save the record into database. If the URL has an UserId, 
    //then it will update the record and if the URL has not user Id parameter than it will save the record.
    private FuncSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        // PUT request for Edit employee.  
        if (this.state.taskcreateList.userId) {
            fetch('api/TaskCreate/Edit', {
                method: 'PUT',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/taskcreateList");
                })
        }
        else {
            fetch('api/TaskCreate/Create', {
                method: 'POST',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/taskcreateList");
                })
        }
    }


    private oncancel(e: any) {
        e.preventDefault();
        this.props.history.push("/taskcreateList");
    }

    //this method will return the html table to display all the create task record with edit and delete methods.
    private renderCreateForm() {
        return (
            <form onSubmit={this.FuncSave} >
                <div className="form-group row" >
                    <input type="hidden" name="UserId" value={this.state.taskcreateList.userId} />
                </div>
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="name">Name</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Name" defaultValue={this.state.taskcreateList.name} required />
                    </div>
                </div >

                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="Market" >Market</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Market" defaultValue={this.state.taskcreateList.market} required />
                    </div>
                </div>


                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="Flow" >Country</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Flow" defaultValue={this.state.taskcreateList.flow} required />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="Location" >Phone No</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Location" defaultValue={this.state.taskcreateList.location} required />
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-default">Save</button>
                    <button className="btn" onClick={this.FuncCancel}>Cancel</button>
                </div >
            </form >
        )
    }

}
    //this method will render html onto the DOM.
    
