import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';


interface TaskCreateRecordState {
    taskcreateListData: TaskCreateListData[];
    loading: boolean;
}

//here declaring the TaskCreateList class. And this TaskCraetetList class inherits the abstract class React.Component
export class TaskCreateList extends React.Component<RouteComponentProps<{}>, TaskCreateRecordState> {
    state: { taskcreateListData: any[]; loading: boolean; };
    setState: any;
    props: any;



    //Declaring the constructor 
    constructor() {

        //here we are calling base class constructor using super()
        super();

        //here we are intializing the interface's fields using default values.
        this.state = { taskcreateListData: [], loading: true };

        //this fetch method is responsible to get all the student record using web api.
        fetch('api/TaskCreate/Index')
            .then(response => response.json() as Promise<TaskCreateListData[]>)
            .then(data => {
                debugger
                this.setState({ taskcreateListData: data, loading: false });
            });

        this.FuncDelete = this.FuncDelete.bind(this);
        this.FuncEdit = this.FuncEdit.bind(this);
    }


    //this method will render html onto the DOM.
    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderTaskCreateTable(this.state.taskcreateListData);//this renderTaskCreateTable method will return the HTML table. This table will display all the record.
        return <div>
            <h1>User Record</h1>
            <p>
                <Link to="/addTaskCreate">Create New</Link>
            </p>
            {contents}
        </div>;
    }
    // this method will be responsible for deleting the taskcreate record.
    private FuncDelete(id: number) {
        if (!confirm("Do you want to delete user with this Id: " + id))
            return;
        else {
            //this fetch method will get the specific taskcreate record using TaskCreate id.
            fetch('api/TaskCreate/Delete/' + id, {
                method: 'delete'
            }).then(data => {
                this.setState(
                    {
                        taskcreateListData: this.state.taskcreateListData.filter((rec) => {
                            return (rec.UserId != id);
                        })
                    });
            });
        }
    }

    //this method will responsible for editing the specific user record.
    private FuncEdit(id: number) {
        this.props.history.push("/taskcreate/edit/" + id);
    }

    //this method will return the html table to display all the CreateTask record with edit and delete methods.
    private renderTaskCreateTable(taskcreateListData: TaskCreateListData[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Market</th>
                    <th>Flow</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {taskcreateListData.map(item =>
                    <tr key={item.userId}>
                        <td >{item.name}</td>
                        <td >{item.market}</td>
                        <td >{item.flow}</td>
                        <td >{item.location}</td>
                        <td >
                            <a className="action" onClick={(id) => this.FuncEdit(item.userId)}>Edit</a>|
                            <a className="action" onClick={(id) => this.FuncDelete(item.userId)}>Delete</a>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}

//here we are declaring a class which have the same properties as we have in model class.
export class TaskCreateListData {

    userId: number = 0;
    name: string = "";
    market: string = "";
    flow: string = "";
    location: string = "";
}