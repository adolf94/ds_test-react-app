"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateListData = exports.TaskCreateList = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
//here declaring the TaskCreateList class. And this TaskCraetetList class inherits the abstract class React.Component
var TaskCreateList = /** @class */ (function (_super) {
    __extends(TaskCreateList, _super);
    //Declaring the constructor 
    function TaskCreateList(props) {
        var _this = 
        //here we are calling base class constructor using super()
        _super.call(this, props) || this;
        //here we are intializing the interface's fields using default values.
        _this.state = { taskcreateListData: [], loading: true };
        //this fetch method is responsible to get all the student record using web api.
        fetch('api/TaskCreate/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            debugger;
            _this.setState({ taskcreateListData: data, loading: false });
        });
        _this.FuncDelete = _this.FuncDelete.bind(_this);
        _this.FuncEdit = _this.FuncEdit.bind(_this);
        return _this;
    }
    //this method will render html onto the DOM.
    TaskCreateList.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderTaskCreateTable(this.state.taskcreateListData); //this renderTaskCreateTable method will return the HTML table. This table will display all the record.
        return React.createElement("div", null,
            React.createElement("h1", null, "User Record"),
            React.createElement("p", null,
                React.createElement(react_router_dom_1.Link, { to: "/addTaskCreate" }, "Create New")),
            contents);
    };
    // this method will be responsible for deleting the taskcreate record.
    TaskCreateList.prototype.FuncDelete = function (id) {
        var _this = this;
        if (!window.confirm("Do you want to delete user with this Id: " + id))
            return;
        else {
            //this fetch method will get the specific taskcreate record using TaskCreate id.
            fetch('api/TaskCreate/Delete/' + id, {
                method: 'delete'
            }).then(function (data) {
                _this.setState({
                    taskcreateListData: _this.state.taskcreateListData.filter(function (rec) {
                        return (rec.UserId != id);
                    })
                });
            });
        }
    };
    //this method will responsible for editing the specific user record.
    TaskCreateList.prototype.FuncEdit = function (id) {
        this.props.history.push("/taskcreate/edit/" + id);
    };
    //this method will return the html table to display all the CreateTask record with edit and delete methods.
    TaskCreateList.prototype.renderTaskCreateTable = function (taskcreateListData) {
        var _this = this;
        return React.createElement("table", { className: 'table' },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Name"),
                    React.createElement("th", null, "Market"),
                    React.createElement("th", null, "Flow"),
                    React.createElement("th", null, "Location"))),
            React.createElement("tbody", null, taskcreateListData.map(function (item) {
                return React.createElement("tr", { key: item.userId },
                    React.createElement("td", null, item.name),
                    React.createElement("td", null, item.market),
                    React.createElement("td", null, item.flow),
                    React.createElement("td", null, item.location),
                    React.createElement("td", null,
                        React.createElement("a", { className: "action", onClick: function (id) { return _this.FuncEdit(item.userId); } }, "Edit"),
                        "|",
                        React.createElement("a", { className: "action", onClick: function (id) { return _this.FuncDelete(item.userId); } }, "Delete")));
            })));
    };
    return TaskCreateList;
}(React.Component));
exports.TaskCreateList = TaskCreateList;
//here we are declaring a class which have the same properties as we have in model class.
var TaskCreateListData = /** @class */ (function () {
    function TaskCreateListData() {
        this.userId = 0;
        this.name = "";
        this.market = "";
        this.flow = "";
        this.location = "";
    }
    return TaskCreateListData;
}());
exports.TaskCreateListData = TaskCreateListData;
//# sourceMappingURL=TaskCreateList.js.map