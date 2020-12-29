import React, { useState } from 'react'
import classNames from 'classnames'

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface AlertProps {
  // 类型 四种可选
  type?: AlertType;
  // 标题
  title: string;
  // 描述内容
  description?: string;
  // 类名
  className?: string;
  // 是否显示关闭图标
  closable?: Boolean;
  // 关闭alert时触发的事件
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = (props) => {
  // 显示隐藏alert
  const [hide, setHide] = useState(false);
  const {type, title, description, className, closable, onClose} = props;
  const classes = classNames('viking-alert',className, {
    [`viking-alert-${type}`]: type,
  })
  const titleClass = classNames('viking-alert-title', {
    'bold-title': description
  })
  const handleClose = (e: React.MouseEvent) => {
    if(onClose) {
      onClose()
    }
    setHide(true)
  }
  if(hide) {
    return null
  }
  return (
    <div className={classes}>
      <span className={titleClass}>{title}</span>
      {description && <p className="viking-alert-desc">{description}</p>}
      {closable && <span className="viking-alert-close" onClick={handleClose}>关闭</span>}
    </div>
  )
}

Alert.defaultProps = {
  type: 'default',
  closable: true
}

export default Alert;