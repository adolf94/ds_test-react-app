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
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Layout_1 = require("./components/Layout");
var Home_1 = require("./components/Home");
var TaskCreateList_1 = require("./components/TaskCreateList");
var AddNewTaskCreate_1 = require("./components/AddNewTaskCreate");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return react_1.default.createElement(Layout_1.Layout, null,
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: Home_1.Home }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/taskcreateList', component: TaskCreateList_1.TaskCreateList }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/addTaskCreate', component: AddNewTaskCreate_1.AddTaskCreateList }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/taskcreate/edit/:userid', component: AddNewTaskCreate_1.AddTaskCreateList }));
    };
    return App;
}(react_1.Component));
exports.default = App;
;
//# sourceMappingURL=routes.js.map