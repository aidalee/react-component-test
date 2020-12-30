import React, { useState } from 'react';
import classNames from 'classnames';
var Alert = function (props) {
    var _a;
    // 显示隐藏alert
    var _b = useState(false), hide = _b[0], setHide = _b[1];
    var type = props.type, title = props.title, description = props.description, className = props.className, closable = props.closable, onClose = props.onClose;
    var classes = classNames('viking-alert', className, (_a = {},
        _a["viking-alert-" + type] = type,
        _a));
    var titleClass = classNames('viking-alert-title', {
        'bold-title': description
    });
    var handleClose = function (e) {
        if (onClose) {
            onClose();
        }
        setHide(true);
    };
    if (hide) {
        return null;
    }
    return (React.createElement("div", { className: classes },
        React.createElement("span", { className: titleClass }, title),
        description && React.createElement("p", { className: "viking-alert-desc" }, description),
        closable && React.createElement("span", { className: "viking-alert-close", onClick: handleClose }, "\u5173\u95ED")));
};
Alert.defaultProps = {
    type: 'default',
    closable: true
};
export default Alert;
