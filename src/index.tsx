import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// 在入口文件将所有的组件都导入然后再导出 参看antd组件库源码
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export { default as Button} from './components/Button'
export {default as Alert} from './components/Alert/alert'
export {default as Icon} from './components/Icon'
export {default as Menu} from './components/Menu'
export {default as MenuItem} from './components/Menu/menuItem'
export {default as SubMenu} from './components/Menu/subMenu'