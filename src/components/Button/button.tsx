import React, { FC, ButtonHTMLAttributes,AnchorHTMLAttributes } from 'react'
import classNames from 'classnames'

// 定义枚举类型
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

// 用接口定义属性和属性的类型
interface BaseButtonProps {
  classNames?: string;
  disabled?: Boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  href?: string;
  children: React.ReactNode
}

// type 起类型别名
// |: 联合类型（或） &: 交叉类型(and-合并)
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
// partial把属性设成可选的
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

export const Button: FC<ButtonProps> = (props) => {

  const {btnType, disabled, size, children, href, className, ...restProps} = props;

  const classes = classNames("btn", className, {
    // 这里的className是用户在使用组件时自定义的类名
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });

  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
};

export default Button;