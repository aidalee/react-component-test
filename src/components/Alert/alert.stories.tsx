import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import Alert,{AlertType, AlertProps} from './alert'
import { Story, Meta } from '@storybook/react/types-6-0';
// import Button , { ButtonProps } from './Button';

export default {
  title: 'Alert',
  component: Alert,
  // decorators:  [(Story) => <div style={{ margin: '3em' }}><Story/></div>] // 加展示样式
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'success',
  title: "确定",
  description: 'ryyyy'
};
// 定义故事名
Primary.storyName='success alert';
Primary.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
    ],
  },
};
// 一个Button组件可以有多个故事：
export const Danger = Template.bind({});
Danger.storyName='danger alert';
Danger.args = {
  type: 'danger',
  title: "删除"
}
