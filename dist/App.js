import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Alert from './components/Alert/alert';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import './App.css';
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("h1", null, "122"),
        React.createElement("h2", null, "122"),
        React.createElement("h3", null, "122"),
        React.createElement(Alert, { title: "test", onClose: function () { alert(1); } }),
        React.createElement(Button, null, "laal"),
        React.createElement(Button, { btnType: ButtonType.Primary }, "laal"),
        React.createElement(Button, { btnType: ButtonType.Danger, size: ButtonSize.Large }, "laal"),
        React.createElement(Button, { btnType: ButtonType.Link, href: "http://www.baidu.com" }, "laal"),
        React.createElement(Menu, { defaultIndex: "0", defaultOpenSubMenus: ["2"], onSelect: function (index) {
                alert(index);
            } },
            React.createElement(MenuItem, { disabled: true }, "cool link"),
            React.createElement(MenuItem, null, "cool link1"),
            React.createElement(SubMenu, { title: "dropdown" },
                React.createElement(MenuItem, null, "dropdown 1"),
                React.createElement(MenuItem, null, "dropdown 2"),
                React.createElement(MenuItem, null, "dropdown 3")),
            React.createElement(MenuItem, null, "cool link2"))));
}
export default App;
