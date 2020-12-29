import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import Button,{ButtonType, ButtonSize, ButtonProps} from './button'
import { Story, Meta } from '@storybook/react/types-6-0';
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
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  btnType: ButtonType.Primary,
  children: "确定"
};
// 定义故事名
Primary.storyName='I am the primary';
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
Danger.args = {
  btnType: ButtonType.Danger,
  // ...Danger.args,
  children: "删除"
}

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