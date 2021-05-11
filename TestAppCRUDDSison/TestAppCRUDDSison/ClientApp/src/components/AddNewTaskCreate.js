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
exports.AddTaskCreateList = void 0;
var React = require("react");
var TaskCreateList_1 = require("./TaskCreateList");
var AddTaskCreateList = /** @class */ (function (_super) {
    __extends(AddTaskCreateList, _super);
    function AddTaskCreateList(props) {
        var _this = _super.call(this, props) || this;
        //here we are intializing the interface's fields with default values.
        _this.state = { title: "", loading: true, taskcreateList: new TaskCreateList_1.TaskCreateListData };
        //the userid variable will get the user id from URL.
        var userid = _this.props.match.params["userid"];
        //if studentid is greater than 0 then fetch method will get the specific taskcreate record and display it as in edit mode.
        if (userid > 0) {
            fetch('api/TaskCreate/Details/' + userid)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                _this.setState({ title: "Edit", loading: false, taskcreatetList: data });
            });
        }
        else {
            _this.state = { title: "Create", loading: false, taskcreateList: new TaskCreateList_1.TaskCreateListData };
        }
        _this.FuncSave = _this.FuncSave.bind(_this);
        _this.FuncCancel = function () { };
        return _this;
    }
    AddTaskCreateList.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderCreateForm();
        return React.createElement("div", null,
            React.createElement("h1", null, this.state.title),
            React.createElement("h3", null, "User"),
            React.createElement("hr", null),
            contents);
    };
    //this method will save the record into database. If the URL has an UserId, 
    //then it will update the record and if the URL has not user Id parameter than it will save the record.
    AddTaskCreateList.prototype.FuncSave = function (event) {
        var _this = this;
        event.preventDefault();
        var data = new FormData(event.target);
        // PUT request for Edit employee.  
        if (this.state.taskcreateList.userId) {
            fetch('api/TaskCreate/Edit', {
                method: 'PUT',
                body: data,
            }).then(function (response) { return response.json(); })
                .then(function (responseJson) {
                _this.props.history.push("/taskcreateList");
            });
        }
        else {
            fetch('api/TaskCreate/Create', {
                method: 'POST',
                body: data,
            }).then(function (response) { return response.json(); })
                .then(function (responseJson) {
                _this.props.history.push("/taskcreateList");
            });
        }
    };
    AddTaskCreateList.prototype.oncancel = function (e) {
        e.preventDefault();
        this.props.history.push("/taskcreateList");
    };
    //this method will return the html table to display all the create task record with edit and delete methods.
    AddTaskCreateList.prototype.renderCreateForm = function () {
        return (React.createElement("form", { onSubmit: this.FuncSave },
            React.createElement("div", { className: "form-group row" },
                React.createElement("input", { type: "hidden", name: "UserId", value: this.state.taskcreateList.userId })),
            React.createElement("div", { className: "form-group row" },
                React.createElement("label", { className: " control-label col-md-12", htmlFor: "name" }, "Name"),
                React.createElement("div", { className: "col-md-4" },
                    React.createElement("input", { className: "form-control", type: "text", name: "Name", defaultValue: this.state.taskcreateList.name, required: true }))),
            React.createElement("div", { className: "form-group row" },
                React.createElement("label", { className: "control-label col-md-12", htmlFor: "Market" }, "Market"),
                React.createElement("div", { className: "col-md-4" },
                    React.createElement("input", { className: "form-control", type: "text", name: "Market", defaultValue: this.state.taskcreateList.market, required: true }))),
            React.createElement("div", { className: "form-group row" },
                React.createElement("label", { className: "control-label col-md-12", htmlFor: "Flow" }, "Country"),
                React.createElement("div", { className: "col-md-4" },
                    React.createElement("input", { className: "form-control", type: "text", name: "Flow", defaultValue: this.state.taskcreateList.flow, required: true }))),
            React.createElement("div", { className: "form-group row" },
                React.createElement("label", { className: "control-label col-md-12", htmlFor: "Location" }, "Phone No"),
                React.createElement("div", { className: "col-md-4" },
                    React.createElement("input", { className: "form-control", type: "text", name: "Location", defaultValue: this.state.taskcreateList.location, required: true }))),
            React.createElement("div", { className: "form-group" },
                React.createElement("button", { type: "submit", className: "btn btn-default" }, "Save"),
                React.createElement("button", { className: "btn", onClick: this.FuncCancel }, "Cancel"))));
    };
    return AddTaskCreateList;
}(React.Component));
exports.AddTaskCreateList = AddTaskCreateList;
//this method will render html onto the DOM.
//# sourceMappingURL=AddNewTaskCreate.js.map