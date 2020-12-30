import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
/**
 * 提供了一套常用的图标集合 基于 react-fontawesome。
 *
 * 支持 react-fontawesome的所有属性 可以在这里查询 https://github.com/FortAwesome/react-fontawesome#basic
 *
 * 支持 fontawesome 所有 free-solid-icons，可以在这里查看所有图标 https://fontawesome.com/icons?d=gallery&s=solid&m=free
 */
export declare type ThemeProps = "primary" | "secondary" | "success" | "danger" | "info" | "warning" | "light" | "dark";
export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
