import React, { ReactElement, InputHTMLAttributes, ChangeEvent, forwardRef } from 'react'
import classNames from 'classnames'
import {IconProp} from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon/icon'

type InputSize = 'lg' | 'sm'
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean; //是否禁用input
  size?: InputSize; // 设置input大小 支持 lg或者 sm
  icon?: IconProp; //添加图标 在右侧悬浮添加一个图标 用于提示
  prepend?: string | ReactElement; // 添加前缀 用于配置一些固定组合
  append?: string | ReactElement; // 添加后缀 用于配置一些固定组合
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
// forwardRef的作用： 
export const Input = forwardRef<HTMLInputElement, InputProps> ((props, ref) => {
  const { disabled, size, icon, prepend, append, style, ...restProps } = props
  const cnames = classNames('viking-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend
  })
  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }
  if('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }

  return (
    <div className={cnames} style={style}>
      {prepend && <div className="viking-input-group-prepend">{prepend}</div>}
      {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`}/></div>}
      <input
        ref={ref}
        className="viking-input-inner"
        disabled={disabled}
        {...restProps}
      />
      {append && <div className="viking-input-group-append">{append}</div>}
    </div>
  )
})
export default Input;