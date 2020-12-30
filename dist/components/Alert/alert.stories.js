var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import Alert from './alert';
// import Button , { ButtonProps } from './Button';
export default {
    title: 'Alert',
    component: Alert,
};
var Template = function (args) { return React.createElement(Alert, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = {
    type: 'success',
    title: "确定",
    description: 'ryyyy'
};
// 定义故事名
Primary.storyName = 'success alert';
Primary.parameters = {
    backgrounds: {
        values: [
            { name: 'red', value: '#f00' },
            { name: 'green', value: '#0f0' },
        ],
    },
};
// 一个Button组件可以有多个故事：
export var Danger = Template.bind({});
Danger.storyName = 'danger alert';
Danger.args = {
    type: 'danger',
    title: "删除"
};
