import React, {
  FC,
  useContext,
  useState,
  FunctionComponentElement,
} from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";
import Icon from '../Icon/icon'

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
}
export const SubMenu: FC<SubMenuProps> = ({
  index,
  title,
  children,
  className,
}) => {
  const context = useContext(MenuContext);
  const openSubMenus = context.defaultOpenSubMenus as Array<string>;
  const isOpend =
    index && context.mode === "vertical" ? openSubMenus.includes(index) : false;
  const [menuOpen, setOpen] = useState(isOpend);
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
    "is-opened": menuOpen,
    "is-vertical": context.mode === "vertical",
  });
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  };
  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 300);
  };
  const clickEvents = context.mode === "vertical" ? 
    { onClick: handleClick,}: {}; // 垂直菜单点击展开
  const hoverEvents = context.mode !== "vertical" ? 
    {
      onMouseEnter: (e: React.MouseEvent) => {
        handleMouse(e, true);
      },
      onMouseLeave: (e: React.MouseEvent) => {
        handleMouse(e, false);
      },
    }: {}; // 水平菜单鼠标移入展开
  const renderChildren = () => {
    const subMenuClasses = classNames("viking-submenu", {
      "menu-opened": menuOpen,
    });
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childELement = child as FunctionComponentElement<MenuItemProps>; // 类型断言
      if (childELement.type.displayName === "MenuItem") {
        return React.cloneElement(childELement, { index: `${index}-${i}` });
      } else {
        console.error(
          "warning: Submenu has a child which is not a MenuItem component"
        );
      }
    });
    return (
      <CSSTransition
        in={menuOpen}
        timeout={300}
        classNames="zoom-in-top"
        appear
      >
        <ul className={subMenuClasses}>{childrenComponent}</ul>
      </CSSTransition>
    );
  };
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon="angle-down" className="arrow-icon"></Icon>
      </div>
      {renderChildren()}
    </li>
  );
};
SubMenu.displayName = "SubMenu";
export default SubMenu;
