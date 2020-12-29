import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button'
import Alert from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

import './App.css'
function App() {
  return (
    <div className="App">
      <h1>122</h1>
      <h2>122</h2>
      <h3>122</h3>
      <Alert title="test" onClose={()=>{alert(1)}}></Alert>
      <Button>laal</Button>
      <Button btnType={ButtonType.Primary}>laal</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>laal</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">laal</Button>
      <Menu
          defaultIndex="0"
          defaultOpenSubMenus={["2"]}
          onSelect={(index) => {
            alert(index);
          }}
          // mode="vertical"
        >
          <MenuItem disabled>cool link</MenuItem>
          <MenuItem>cool link1</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown 1</MenuItem>
            <MenuItem>dropdown 2</MenuItem>
            <MenuItem>dropdown 3</MenuItem>
          </SubMenu>
          <MenuItem>cool link2</MenuItem>
        </Menu>
    </div>
  );
}

export default App;
