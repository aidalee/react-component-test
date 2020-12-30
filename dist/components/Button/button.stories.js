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
import Button, { ButtonType } from './button';
// import Button , { ButtonProps } from './Button';
export default {
    title: '按钮Button',
    component: Button,
    parameters: {
        backgrounds: {
            values: [
                { name: 'red', value: '#f00' },
                { name: 'green', value: '#0f0' },
            ],
        },
    }
    // decorators:  [(Story) => <div style={{ margin: '3em' }}><Story/></div>] // 加展示样式
};
var Template = function (args) { return React.createElement(Button, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = {
    btnType: ButtonType.Primary,
    children: "确定"
};
// 定义故事名
Primary.storyName = 'I am the primary';
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
Danger.args = {
    btnType: ButtonType.Danger,
    // ...Danger.args,
    children: "删除"
};
// const buttonWithSize = () => (
//   <>
//     <Button size={ButtonSize.Large}>large button</Button>
//     <Button size={ButtonSize.Small}>small button</Button>
//   </>
// )
// const buttonWithType = () => (
//   <>
//     <Button btnType={ButtonType.Primary}>large button</Button>
//     <Button btnType={ButtonType.Danger}>large button</Button>
//   </>
// )
// storiesOf('Button Component',module)
// // .addDecorator(withInfo)
// .addParameters({
//   info: {
//     inline: true
//   }
// })
// .add('默认 Button', defaultButton)
// .add('不同尺寸的Button', buttonWithSize)
// .add('不同类型的 Button', buttonWithType)
