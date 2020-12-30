import React from 'react';
export declare type AlertType = 'success' | 'default' | 'danger' | 'warning';
export interface AlertProps {
    type?: AlertType;
    title: string;
    description?: string;
    className?: string;
    closable?: Boolean;
    onClose?: () => void;
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
