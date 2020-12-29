import React ,{ FC, useContext } from 'react';
import classNames from 'classnames'
import { MenuContext, MenuProps } from './menu'

// 定义menuItem上的属性
export interface MenuItemProps {
  index?: string;
  // 菜单项是否被禁用
  disabled?: boolean;
  // 菜单项扩展的className
  className?: string;
  // 菜单项的自定义style
  style?: React.CSSProperties;
}

export const MenuItem: FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;
  const context = useContext(MenuContext)
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })

  const handleClick = () => {
    if(context.onSelect && !disabled && (typeof index === 'string')) {
      context.onSelect(index)
    }
  }
  
  return (
    <li className={classes} style={style} onClick={handleClick}>
      { children }
    </li>
  )
}

MenuItem.displayName = 'MenuItem'
export default MenuItem