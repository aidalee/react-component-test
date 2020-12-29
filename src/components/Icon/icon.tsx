import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

/**
 * 提供了一套常用的图标集合 基于 react-fontawesome。
 *
 * 支持 react-fontawesome的所有属性 可以在这里查询 https://github.com/FortAwesome/react-fontawesome#basic
 *
 * 支持 fontawesome 所有 free-solid-icons，可以在这里查看所有图标 https://fontawesome.com/icons?d=gallery&s=solid&m=free
 */
export type ThemeProps =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "info"
  | "warning"
  | "light"
  | "dark";
// 定义icon组件的属性，icon属性继承了react-fontawesome中定义的所有属性，同时加上主题属性
export interface IconProps extends FontAwesomeIconProps { // 使用继承
  theme?: ThemeProps;
}

const Icon: React.FC<IconProps> = (props) => {
  // icon-primary
  const { className, theme, ...restProps } = props;
  const classes = classNames("viking-icon", className, {
    [`icon-${theme}`]: theme,
  });
  return <FontAwesomeIcon className={classes} {...restProps} />;
};
export default Icon;
